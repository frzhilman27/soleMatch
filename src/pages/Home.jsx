import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Camera, Ruler, ShieldCheck, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col min-h-full">
            {/* Hero Section */}
            <section className="px-4 pt-12 pb-16 flex flex-col md:flex-row items-center justify-center gap-10 max-w-6xl mx-auto w-full bg-gradient-to-b from-brand-50 to-slate-50 rounded-b-3xl">
                <div className="flex-1 text-center md:text-left flex flex-col items-center md:items-start">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-xs font-semibold mb-6 uppercase tracking-wider border border-brand-200"
                    >
                        <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
                        Enterprise API Available
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4"
                    >
                        Precision Sizing for <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-blue-700">Every Brand</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-slate-600 text-lg sm:text-xl max-w-lg mb-8 leading-relaxed"
                    >
                        Reduce footwear return rates by 40%. Integrate SoleMatch's clinical AI measurement technology directly into your e-commerce experience.
                    </motion.p>

                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        onClick={() => navigate('/measure')}
                        className="w-full sm:w-auto flex items-center justify-center gap-3 bg-brand-600 text-white font-semibold text-lg py-4 px-8 rounded-2xl shadow-[0_10px_20px_-10px_rgba(37,99,235,0.6)] hover:bg-brand-700 hover:-translate-y-1 active:scale-95 transition-all"
                    >
                        <Camera className="w-6 h-6" />
                        Try Live Demo
                    </motion.button>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="mt-6 text-sm text-slate-500 flex items-center gap-2"
                    >
                        <ShieldCheck className="w-4 h-4 text-emerald-500" />
                        Trusted by 50+ Global Retailers
                    </motion.div>
                </div>
                
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9, x: 20 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="flex-1 w-full max-w-md relative"
                >
                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-400/20 to-transparent blur-3xl rounded-full"></div>
                    <img 
                        src="/assets/images/hero.png" 
                        alt="AI Foot Measurement UI" 
                        className="w-full h-auto object-cover rounded-3xl shadow-2xl relative z-10 border border-white/50"
                    />
                </motion.div>
            </section>

            {/* How it Works Section */}
            <section className="px-4 py-20 bg-white border-t border-slate-100 flex-1">
                <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Seamless Integration Process</h2>
                <div className="max-w-6xl mx-auto grid sm:grid-cols-3 gap-10 px-4">

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
                        className="flex flex-col items-center text-center group"
                    >
                        <div className="w-48 h-48 mb-6 rounded-3xl overflow-hidden shadow-lg border-2 border-transparent group-hover:border-brand-200 transition-all">
                            <img src="/assets/images/step1.png" alt="A4 Paper Setup" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <h3 className="font-bold text-xl text-slate-900 mb-3">1. Standardized Reference</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">Customers use a standard A4 paper as a universal calibration anchor. No special equipment required.</p>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-col items-center text-center group"
                    >
                        <div className="w-48 h-48 mb-6 rounded-3xl overflow-hidden shadow-lg border-2 border-transparent group-hover:border-brand-200 transition-all">
                            <img src="/assets/images/step2.png" alt="Snap Photo" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <h3 className="font-bold text-xl text-slate-900 mb-3">2. Single Capture</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">Our SDK guides the user to take a perfectly aligned top-down photo using augmented reality guides.</p>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-col items-center text-center group"
                    >
                        <div className="w-48 h-48 mb-6 rounded-3xl overflow-hidden shadow-lg border-2 border-transparent group-hover:border-brand-200 transition-all">
                            <img src="/assets/images/step3.png" alt="AI Analysis" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <h3 className="font-bold text-xl text-slate-900 mb-3">3. Instant Brand Match</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">Proprietary computer vision algorithms instantly map the 3D foot volume to brand-specific size charts.</p>
                    </motion.div>

                </div>
            </section>
        </div>
    );
}
