import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent hover:opacity-80 transition">
          Athul A
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <Link to="/" className={`transition font-medium ${isActive('/') ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>
            Home
          </Link>
          <Link to="/projects" className={`transition font-medium ${isActive('/projects') ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>
            Projects
          </Link>
          <Link to="/about" className={`transition font-medium ${isActive('/about') ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>
            About
          </Link>
          <Link to="/contact" className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition font-medium transform hover:scale-105">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <Link to="/" onClick={() => setMenuOpen(false)} className={`block py-2 px-4 rounded-lg transition ${isActive('/') ? 'bg-blue-100 text-blue-600 font-medium' : 'text-gray-700 hover:bg-gray-50'}`}>
            Home
          </Link>
          <Link to="/projects" onClick={() => setMenuOpen(false)} className={`block py-2 px-4 rounded-lg transition ${isActive('/projects') ? 'bg-blue-100 text-blue-600 font-medium' : 'text-gray-700 hover:bg-gray-50'}`}>
            Projects
          </Link>
          <Link to="/about" onClick={() => setMenuOpen(false)} className={`block py-2 px-4 rounded-lg transition ${isActive('/about') ? 'bg-blue-100 text-blue-600 font-medium' : 'text-gray-700 hover:bg-gray-50'}`}>
            About
          </Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)} className="block bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 px-4 rounded-lg hover:shadow-lg transition font-medium text-center">
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
