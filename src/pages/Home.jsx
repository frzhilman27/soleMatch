import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Camera, Ruler, ShieldCheck, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col min-h-full">
            {/* Hero Section */}
            <section className="px-4 pt-12 pb-16 flex flex-col items-center text-center bg-gradient-to-b from-brand-50 to-slate-50">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-600 text-xs font-semibold mb-6 uppercase tracking-wider"
                >
                    <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
                    B2B Ready Technology
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4 max-w-full px-2"
                >
                    Find Your Perfect <br className="sm:hidden" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-blue-700">Shoe Size</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-slate-600 text-lg sm:text-xl max-w-lg mb-8"
                >
                    Use your phone's camera to measure your foot with clinical precision. Zero returns, endless comfort.
                </motion.p>

                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    onClick={() => navigate('/measure')}
                    className="w-full max-w-[320px] flex items-center justify-center gap-2 bg-brand-600 text-white font-semibold text-lg py-4 px-6 rounded-2xl shadow-lg shadow-brand-500/30 hover:bg-brand-700 active:scale-95 transition-all mx-auto"
                >
                    <Camera className="w-6 h-6" />
                    Start Measurement
                </motion.button>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="mt-6 text-sm text-slate-500 flex items-center gap-2"
                >
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    Enterprise-grade AI accuracy
                </motion.div>
            </section>

            {/* How it Works Section */}
            <section className="px-4 py-16 bg-white border-t border-slate-100 flex-1">
                <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">How It Works</h2>
                <div className="max-w-4xl mx-auto grid sm:grid-cols-3 gap-8">

                    <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-sky-50 rounded-2xl flex items-center justify-center mb-4 text-brand-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                        </div>
                        <h3 className="font-semibold text-lg text-slate-900 mb-2">1. Grab an A4 Paper</h3>
                        <p className="text-slate-500 text-sm">Place a standard A4 paper on the floor against a wall. This acts as our reference scale.</p>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-sky-50 rounded-2xl flex items-center justify-center mb-4 text-brand-500">
                            <Ruler className="w-8 h-8" />
                        </div>
                        <h3 className="font-semibold text-lg text-slate-900 mb-2">2. Stand & Snap</h3>
                        <p className="text-slate-500 text-sm">Place your foot on the paper, heel touching the wall, and take a photo straight down.</p>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-sky-50 rounded-2xl flex items-center justify-center mb-4 text-brand-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
                        </div>
                        <h3 className="font-semibold text-lg text-slate-900 mb-2">3. Get Your Size</h3>
                        <p className="text-slate-500 text-sm">Our AI engine instantly calculates your exact foot length and gives you universal sizes.</p>
                    </div>

                </div>
            </section>
        </div>
    );
}
