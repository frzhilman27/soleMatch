import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Measure from './pages/Measure';
import Result from './pages/Result';
import History from './pages/History';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans w-full max-w-full overflow-x-hidden">
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100 px-4 py-3 flex items-center justify-between w-full">
        <div className="flex items-center gap-3">
          <img src="/assets/images/logo.png" alt="SoleMatch Logo" className="w-10 h-10 object-contain rounded-xl" />
          <span className="font-bold text-xl tracking-tight text-slate-900">SoleMatch</span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm font-medium text-slate-600">
          <Link to="/" className="hover:text-brand-600 transition-colors">How it works</Link>
          <Link to="/history" className="hover:text-brand-600 transition-colors">My Size</Link>
        </nav>
        <Link to="/measure" className="bg-slate-900 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-slate-800 transition-colors shadow-sm">Measure</Link>
      </header>

      <main className="flex-1 flex flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/measure" element={<Measure />} />
          <Route path="/result" element={<Result />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
