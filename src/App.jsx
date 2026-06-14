import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Home as HomeIcon, Camera, UserCircle } from 'lucide-react';
import Home from './pages/Home';
import Measure from './pages/Measure';
import Result from './pages/Result';
import History from './pages/History';

function App() {
  const location = useLocation();
  const isMeasurePage = location.pathname === '/measure';
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans w-full max-w-full overflow-x-hidden">
      {!isMeasurePage && (
        <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100 px-4 py-3 flex items-center justify-between w-full">
          <div className="flex items-center gap-3">
            <img src="/assets/images/logo.png" alt="SoleMatch Logo" className="w-10 h-10 object-contain rounded-xl" />
            <span className="font-bold text-xl tracking-tight text-slate-900">SoleMatch</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm font-medium text-slate-600">
            <Link to="/" className="hover:text-brand-600 transition-colors">How it works</Link>
            <Link to="/history" className="hover:text-brand-600 transition-colors">My Size</Link>
          </nav>
          <Link to="/measure" className="hidden sm:inline-block bg-slate-900 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-slate-800 transition-colors shadow-sm">Measure</Link>
        </header>
      )}

      <main className={`flex-1 flex flex-col ${!isMeasurePage ? 'pb-20 sm:pb-0' : ''}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/measure" element={<Measure />} />
          <Route path="/result" element={<Result />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </main>

      {/* Mobile Bottom Navigation Bar */}
      {!isMeasurePage && (
        <nav className="sm:hidden fixed bottom-0 w-full bg-white/90 backdrop-blur-xl border-t border-slate-100 pb-safe pt-2 px-6 flex justify-between items-center z-50 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
          <Link to="/" className={`flex flex-col items-center gap-1 p-2 ${location.pathname === '/' ? 'text-brand-600' : 'text-slate-400'}`}>
            <HomeIcon className="w-6 h-6" />
            <span className="text-[10px] font-semibold">Home</span>
          </Link>
          
          <div className="relative -top-6">
            <Link to="/measure" className="w-14 h-14 bg-brand-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-brand-500/40 border-4 border-slate-50 active:scale-95 transition-transform">
              <Camera className="w-6 h-6" />
            </Link>
          </div>

          <Link to="/history" className={`flex flex-col items-center gap-1 p-2 ${location.pathname === '/history' ? 'text-brand-600' : 'text-slate-400'}`}>
            <UserCircle className="w-6 h-6" />
            <span className="text-[10px] font-semibold">Profile</span>
          </Link>
        </nav>
      )}
    </div>
  );
}

export default App;
