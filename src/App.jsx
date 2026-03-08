import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Measure from './pages/Measure';
import Result from './pages/Result';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans w-full max-w-full overflow-x-hidden">
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100 px-4 py-3 flex items-center justify-between w-full">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-brand-500 text-white flex items-center justify-center font-bold text-lg shrink-0">
            S
          </div>
          <span className="font-bold text-xl tracking-tight text-slate-900">SoleMatch</span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm font-medium text-slate-600">
          <a href="#" className="hover:text-brand-500 transition-colors">How it Works</a>
          <a href="#" className="hover:text-brand-500 transition-colors">Partner with Us</a>
        </nav>
      </header>

      <main className="flex-1 flex flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/measure" element={<Measure />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
