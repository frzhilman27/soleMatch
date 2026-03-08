import React, { useRef, useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Camera, ArrowLeft, RefreshCw, Smartphone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { mockAnalyzeFootMeasurement } from '../services/api';

export default function Measure() {
    const navigate = useNavigate();
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [stream, setStream] = useState(null);
    const [error, setError] = useState(null);
    const [isProcessing, setIsProcessing] = useState(false);

    // Initialize camera
    const startCamera = useCallback(async () => {
        try {
            if (stream) {
                stream.getTracks().forEach(track => track.stop());
            }
            const newStream = await navigator.mediaDevices.getUserMedia({
                video: { facingMode: 'environment', width: { ideal: 1920 }, height: { ideal: 1080 } },
                audio: false
            });
            setStream(newStream);
            if (videoRef.current) {
                videoRef.current.srcObject = newStream;
            }
            setError(null);
        } catch (err) {
            console.error("Camera error:", err);
            setError("Unable to access camera. Please check permissions.");
        }
    }, [stream]);

    useEffect(() => {
        startCamera();
        return () => {
            // Cleanup on unmount
            if (stream) {
                stream.getTracks().forEach(track => track.stop());
            }
        };
    }, []); // Run once on mount

    const handleCapture = async () => {
        if (!videoRef.current || !canvasRef.current) return;

        // Capture the frame
        const video = videoRef.current;
        const canvas = canvasRef.current;
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

        // Get image data
        const imageData = canvas.toDataURL('image/jpeg', 0.8);

        // Show loading state
        setIsProcessing(true);

        try {
            // Stop the stream to save battery/resources
            if (stream) {
                stream.getTracks().forEach(track => track.stop());
                setStream(null);
            }
            // Send to API
            const result = await mockAnalyzeFootMeasurement(imageData);
            // Navigate to Result page with data
            navigate('/result', { state: { measurement: result } });
        } catch (err) {
            setError("Failed to process image. Please try again.");
            setIsProcessing(false);
            startCamera(); // restart camera internally if failed
        }
    };

    return (
        <div className="flex flex-col h-full bg-black relative overflow-hidden">
            {/* Top Bar overlay */}
            <div className="absolute top-0 w-full z-20 flex justify-between items-center p-4 bg-gradient-to-b from-black/60 to-transparent">
                <button onClick={() => navigate('/')} className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white">
                    <ArrowLeft className="w-6 h-6" />
                </button>
                <span className="text-white font-medium text-sm tracking-widest uppercase shadow-sm">SoleMatch Engine</span>
                <button onClick={startCamera} className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white">
                    <RefreshCw className="w-5 h-5" />
                </button>
            </div>

            {/* Main Video Viewport */}
            <div className="flex-1 relative bg-slate-900 flex items-center justify-center overflow-hidden">
                {error ? (
                    <div className="text-white text-center p-6 w-full max-w-sm">
                        <div className="bg-red-500/20 text-red-100 p-4 rounded-xl border border-red-500/50 mb-4">
                            {error}
                        </div>
                        <button
                            onClick={startCamera}
                            className="px-6 py-2 bg-white text-black font-semibold rounded-full"
                        >
                            Retry Camera
                        </button>
                    </div>
                ) : (
                    <video
                        ref={videoRef}
                        autoPlay
                        playsInline
                        muted
                        className={`w-full h-full object-cover ${isProcessing ? 'blur-sm grayscale' : ''} transition-all duration-300`}
                    />
                )}

                {/* AR Guide Overlay */}
                {!error && !isProcessing && (
                    <div className="absolute inset-0 pointer-events-none border-[3px] border-white/50 m-8 rounded-lg flex flex-col justify-center items-center">
                        {/* Corner guides */}
                        <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-brand-400 -m-1"></div>
                        <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-brand-400 -m-1"></div>
                        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-brand-400 -m-1"></div>
                        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-brand-400 -m-1"></div>

                        <Smartphone className="w-12 h-12 text-white/50 mb-4 drop-shadow-lg" />
                        <p className="text-white font-medium text-shadow bg-black/40 px-3 py-1 rounded-full text-sm">Align A4 Paper Inside Frame</p>
                    </div>
                )}

                {/* Processing State Overlay */}
                <AnimatePresence>
                    {isProcessing && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-brand-900/80 backdrop-blur-md"
                        >
                            <div className="relative w-32 h-32 flex items-center justify-center mb-6">
                                <div className="absolute w-full h-full border-4 border-brand-500/30 rounded-full"></div>
                                <div className="absolute w-full h-full border-4 border-brand-400 rounded-full border-t-transparent animate-spin"></div>
                                <span className="text-white text-lg font-bold">AI</span>
                            </div>
                            <p className="text-white font-medium text-lg animate-pulse">Running Computer Vision...</p>
                            <p className="text-brand-200 text-sm mt-2">Computing pixel-to-cm ratio</p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <canvas ref={canvasRef} className="hidden" />

            {/* Bottom Controls */}
            <div className="h-32 bg-black pb-safe flex items-center justify-center z-20">
                <button
                    onClick={handleCapture}
                    disabled={!!error || isProcessing || !stream}
                    className="w-20 h-20 rounded-full border-[6px] border-white/30 flex items-center justify-center active:scale-95 transition-transform disabled:opacity-50"
                >
                    <div className="w-16 h-16 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.8)]"></div>
                </button>
            </div>
        </div>
    );
}
