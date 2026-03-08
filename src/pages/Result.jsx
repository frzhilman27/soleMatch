import React, { useEffect } from 'react';
import { useLocation, useNavigate, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Share2, ArrowRight, Save, CheckCircle2 } from 'lucide-react';

export default function Result() {
    const location = useLocation();
    const navigate = useNavigate();

    // Get data passed from Measure page
    const measurementData = location.state?.measurement?.data;

    // Protect route if no measurement data
    if (!measurementData) {
        return <Navigate to="/measure" replace />;
    }

    const { footLength, sizes, confidence } = measurementData;

    return (
        <div className="flex flex-col min-h-full p-4 sm:p-8 max-w-lg mx-auto w-full">
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, type: 'spring' }}
                className="flex justify-center mb-6 mt-4"
            >
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                </div>
            </motion.div>

            <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-3xl font-bold text-slate-900 text-center mb-2"
            >
                Measurement Complete
            </motion.h1>

            <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="text-slate-500 text-center mb-8"
            >
                AI Confidence Level: {confidence}%
            </motion.p>

            {/* Primary Result Card */}
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-6 mb-6 border border-slate-100"
            >
                <div className="mb-6 flex justify-between items-end border-b border-slate-100 pb-6">
                    <div>
                        <p className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-1">Your Exact Length</p>
                        <div className="flex items-baseline gap-1">
                            <span className="text-5xl font-extrabold text-slate-900">{footLength}</span>
                            <span className="text-lg font-bold text-slate-400">cm</span>
                        </div>
                    </div>
                    <div className="text-right">
                        <div className="px-3 py-1 bg-brand-50 text-brand-600 font-bold rounded-lg text-sm">Right Foot</div>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-slate-50 rounded-2xl">
                        <p className="text-xs font-semibold text-slate-500 mb-1 uppercase tracking-wider">EU</p>
                        <p className="text-3xl font-bold text-brand-600">{sizes.eu}</p>
                    </div>
                    <div className="text-center p-4 bg-slate-50 rounded-2xl">
                        <p className="text-xs font-semibold text-slate-500 mb-1 uppercase tracking-wider">US</p>
                        <p className="text-3xl font-bold text-slate-900">{sizes.us}</p>
                    </div>
                    <div className="text-center p-4 bg-slate-50 rounded-2xl">
                        <p className="text-xs font-semibold text-slate-500 mb-1 uppercase tracking-wider">UK</p>
                        <p className="text-3xl font-bold text-slate-900">{sizes.uk}</p>
                    </div>
                </div>
            </motion.div>

            {/* B2B Actions Mock */}
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="space-y-3"
            >
                <button className="w-full bg-brand-600 text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-brand-700 active:scale-95 transition-all shadow-md shadow-brand-500/20">
                    <Save className="w-5 h-5" />
                    Save to Profile
                </button>
                <button className="w-full bg-white text-slate-700 font-semibold py-4 rounded-xl flex items-center justify-center gap-2 border border-slate-200 hover:bg-slate-50 active:scale-95 transition-all">
                    <Share2 className="w-5 h-5" />
                    Share with Partner Store
                </button>
            </motion.div>

            <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                onClick={() => navigate('/')}
                className="mt-8 text-brand-500 font-medium text-center hover:underline w-full"
            >
                Take another measurement
            </motion.button>
        </div>
    );
}
