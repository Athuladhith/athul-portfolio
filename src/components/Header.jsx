import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center pt-6 px-4 pointer-events-none">
      <header className="bg-gray-900/80 backdrop-blur-xl shadow-2xl border border-gray-800 rounded-full pointer-events-auto w-full max-w-4xl transition-all duration-300">
        <nav className="px-6 py-3 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-white hover:text-purple-400 transition-colors">
            Athul<span className="text-purple-500">.</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-2 items-center bg-gray-950/50 p-1 rounded-full border border-gray-800/50">
            <Link to="/" className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isActive('/') ? 'bg-white/10 text-white shadow-sm' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}>
              Home
            </Link>
            <Link to="/projects" className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isActive('/projects') ? 'bg-white/10 text-white shadow-sm' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}>
              Projects
            </Link>
            <Link to="/about" className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isActive('/about') ? 'bg-white/10 text-white shadow-sm' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}>
              About
            </Link>
          </div>

          <div className="hidden md:block">
            <Link to="/contact" className="bg-white text-black px-5 py-2.5 rounded-full text-sm font-bold hover:bg-gray-200 transition-colors shadow-lg shadow-white/10">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-full hover:bg-gray-800 text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-4 bg-gray-900 border border-gray-800 rounded-3xl p-4 space-y-2 shadow-2xl animate-in fade-in slide-in-from-top-2">
            <Link to="/" onClick={() => setMenuOpen(false)} className={`block py-3 px-6 rounded-2xl transition-colors ${isActive('/') ? 'bg-gray-800 text-white font-medium' : 'text-gray-400 hover:bg-gray-800/50 hover:text-white'}`}>
              Home
            </Link>
            <Link to="/projects" onClick={() => setMenuOpen(false)} className={`block py-3 px-6 rounded-2xl transition-colors ${isActive('/projects') ? 'bg-gray-800 text-white font-medium' : 'text-gray-400 hover:bg-gray-800/50 hover:text-white'}`}>
              Projects
            </Link>
            <Link to="/about" onClick={() => setMenuOpen(false)} className={`block py-3 px-6 rounded-2xl transition-colors ${isActive('/about') ? 'bg-gray-800 text-white font-medium' : 'text-gray-400 hover:bg-gray-800/50 hover:text-white'}`}>
              About
            </Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)} className="block mt-4 bg-white text-black py-3 px-6 rounded-2xl font-bold text-center hover:bg-gray-200 transition-colors">
              Contact
            </Link>
          </div>
        )}
      </header>
    </div>
  );
}
