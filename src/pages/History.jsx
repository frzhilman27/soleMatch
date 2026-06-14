import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, History as HistoryIcon, UserCircle } from 'lucide-react';

export default function History() {
    const navigate = useNavigate();
    const [history, setHistory] = useState(null);

    useEffect(() => {
        const savedData = localStorage.getItem('solematch_history');
        if (savedData) {
            setHistory(JSON.parse(savedData));
        }
    }, []);

    return (
        <div className="flex flex-col min-h-full p-4 sm:p-8 max-w-2xl mx-auto w-full bg-slate-50">
            <div className="flex items-center gap-4 mb-8 mt-4">
                <button onClick={() => navigate(-1)} className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-600 shadow-sm border border-slate-200">
                    <ArrowLeft className="w-6 h-6" />
                </button>
                <h1 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
                    <UserCircle className="w-6 h-6 text-brand-500" />
                    My Foot Profile
                </h1>
            </div>

            {history ? (
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="bg-white rounded-3xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] p-6 border border-slate-100"
                >
                    <div className="flex justify-between items-center mb-6 border-b border-slate-100 pb-4">
                        <p className="text-sm font-medium text-slate-500">Last Measured</p>
                        <p className="text-sm font-bold text-slate-800">
                            {new Date(history.date).toLocaleDateString()}
                        </p>
                    </div>

                    <div className="mb-6 flex justify-between items-end border-b border-slate-100 pb-6">
                        <div>
                            <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">True Foot Length</p>
                            <div className="flex items-baseline gap-1">
                                <span className="text-5xl font-extrabold text-slate-900">{history.footLength}</span>
                                <span className="text-xl font-bold text-slate-400">cm</span>
                            </div>
                        </div>
                        <div className="px-3 py-1 bg-brand-50 text-brand-600 font-bold rounded-lg text-sm uppercase">
                            {history.gender === 'M' ? 'Men' : 'Women'}
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="text-center p-4 bg-slate-50 rounded-2xl border border-slate-100">
                            <p className="text-xs font-bold text-slate-400 mb-1 uppercase tracking-wider">EU</p>
                            <p className="text-3xl font-bold text-brand-600">{history.sizesData.Generic.eu || history.sizesData.Generic.EU}</p>
                        </div>
                        <div className="text-center p-4 bg-slate-50 rounded-2xl border border-slate-100">
                            <p className="text-xs font-bold text-slate-400 mb-1 uppercase tracking-wider">US</p>
                            <p className="text-3xl font-bold text-slate-900">{history.sizesData.Generic.us || history.sizesData.Generic.US}</p>
                        </div>
                        <div className="text-center p-4 bg-slate-50 rounded-2xl border border-slate-100">
                            <p className="text-xs font-bold text-slate-400 mb-1 uppercase tracking-wider">UK</p>
                            <p className="text-3xl font-bold text-slate-900">{history.sizesData.Generic.uk || history.sizesData.Generic.UK}</p>
                        </div>
                    </div>
                </motion.div>
            ) : (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                    <HistoryIcon className="w-16 h-16 text-slate-300 mb-4" />
                    <h2 className="text-xl font-bold text-slate-700 mb-2">No Profile Found</h2>
                    <p className="text-slate-500 mb-6 max-w-sm">You haven't measured your foot yet. Start a new measurement to build your size profile.</p>
                    <button 
                        onClick={() => navigate('/measure')}
                        className="bg-brand-600 text-white font-semibold py-3 px-6 rounded-xl hover:bg-brand-700 active:scale-95 transition-all shadow-md shadow-brand-500/20"
                    >
                        Measure Now
                    </button>
                </div>
            )}
        </div>
    );
}
