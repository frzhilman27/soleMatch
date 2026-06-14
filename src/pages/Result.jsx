import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Share2, ArrowRight, Save, CheckCircle2, ChevronRight, Check } from 'lucide-react';
import { calculateBrandSizes } from '../utils/brandSizing';

export default function Result() {
    const location = useLocation();
    const navigate = useNavigate();
    const [gender, setGender] = useState('M');
    const [isSaved, setIsSaved] = useState(false);

    // Get data passed from Measure page
    const measurementData = location.state?.measurement?.data;

    // Protect route if no measurement data
    if (!measurementData) {
        return <Navigate to="/measure" replace />;
    }

    const { footLength, confidence } = measurementData;
    const sizesData = calculateBrandSizes(footLength, gender);

    // Save to history logic
    const handleSave = () => {
        const historyItem = {
            date: new Date().toISOString(),
            footLength,
            gender,
            sizesData
        };
        localStorage.setItem('solematch_history', JSON.stringify(historyItem));
        setIsSaved(true);
    };

    return (
        <div className="flex flex-col min-h-full p-4 sm:p-8 max-w-2xl mx-auto w-full bg-slate-50">
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, type: 'spring' }}
                className="flex justify-center mb-6 mt-4"
            >
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                    <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                </div>
            </motion.div>

            <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-3xl font-bold text-slate-900 text-center mb-2 tracking-tight"
            >
                Analysis Complete
            </motion.h1>

            <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="text-slate-500 text-center mb-8 font-medium"
            >
                Clinical Accuracy Confidence: <span className="text-emerald-600 font-bold">{confidence}%</span>
            </motion.p>

            {/* Primary Result Card */}
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-3xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] p-6 mb-6 border border-slate-100 relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-50 rounded-bl-full -mr-10 -mt-10 z-0"></div>
                
                <div className="mb-6 flex justify-between items-end border-b border-slate-100 pb-6 relative z-10">
                    <div>
                        <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">True Foot Length</p>
                        <div className="flex items-baseline gap-1">
                            <span className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-slate-900 to-slate-600 tracking-tighter">{footLength}</span>
                            <span className="text-xl font-bold text-slate-400">cm</span>
                        </div>
                    </div>
                    
                    <div className="flex bg-slate-100 p-1 rounded-xl">
                        <button 
                            onClick={() => setGender('M')}
                            className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${gender === 'M' ? 'bg-white shadow text-slate-900' : 'text-slate-500 hover:text-slate-700'}`}
                        >
                            Men
                        </button>
                        <button 
                            onClick={() => setGender('W')}
                            className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${gender === 'W' ? 'bg-white shadow text-slate-900' : 'text-slate-500 hover:text-slate-700'}`}
                        >
                            Women
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6 relative z-10">
                    <div className="text-center p-4 bg-slate-50 rounded-2xl border border-slate-100">
                        <p className="text-xs font-bold text-slate-400 mb-1 uppercase tracking-wider">EU</p>
                        <p className="text-3xl font-bold text-brand-600">{sizesData.Generic.eu || sizesData.Generic.EU}</p>
                    </div>
                    <div className="text-center p-4 bg-slate-50 rounded-2xl border border-slate-100">
                        <p className="text-xs font-bold text-slate-400 mb-1 uppercase tracking-wider">US</p>
                        <p className="text-3xl font-bold text-slate-900">{sizesData.Generic.us || sizesData.Generic.US}</p>
                    </div>
                    <div className="text-center p-4 bg-slate-50 rounded-2xl border border-slate-100">
                        <p className="text-xs font-bold text-slate-400 mb-1 uppercase tracking-wider">UK</p>
                        <p className="text-3xl font-bold text-slate-900">{sizesData.Generic.uk || sizesData.Generic.UK}</p>
                    </div>
                </div>

                {/* Brand Specific Sizing */}
                <div className="relative z-10">
                    <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-brand-500"></span>
                        Brand Recommendations
                    </h3>
                    <div className="space-y-2">
                        {sizesData.Brands.map((brand, idx) => (
                            <div key={brand.name} className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition-colors group border border-transparent hover:border-slate-100">
                                <div>
                                    <p className="font-bold text-slate-800">{brand.name}</p>
                                    <p className="text-xs text-slate-500 font-medium">{brand.fit}</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="text-right">
                                        <p className="text-xs text-slate-400 font-bold uppercase">US Size</p>
                                        <p className="font-extrabold text-lg text-brand-600">{brand.size}</p>
                                    </div>
                                    <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-brand-500 transition-colors" />
                                </div>
                            </div>
                        ))}
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
                <button 
                    onClick={handleSave}
                    disabled={isSaved}
                    className={`w-full font-semibold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md ${
                        isSaved ? 'bg-emerald-500 text-white shadow-emerald-500/20' : 'bg-brand-600 text-white hover:bg-brand-700 active:scale-95 shadow-brand-500/20'
                    }`}
                >
                    {isSaved ? <Check className="w-5 h-5" /> : <Save className="w-5 h-5" />}
                    {isSaved ? 'Saved to Device' : 'Save to Profile'}
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
