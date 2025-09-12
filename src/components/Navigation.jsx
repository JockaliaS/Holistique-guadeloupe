import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Leaf } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-gradient-to-r from-green-600 to-blue-600 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-white" />
              <span className="text-white text-xl font-bold">Holistique Guadeloupe</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-white hover:text-blue-200 transition-colors ${
                isActive('/') ? 'border-b-2 border-white' : ''
              }`}
            >
              Accueil
            </Link>
            <Link
              to="/charter"
              state={{ from: 'directory' }}
              className="text-white hover:text-blue-200 transition-colors"
            >
              Annuaire
            </Link>
            <Link
              to="/quiz"
              className={`text-white hover:text-blue-200 transition-colors ${
                isActive('/quiz') ? 'border-b-2 border-white' : ''
              }`}
            >
              Quiz
            </Link>
            <Link
              to="/blog"
              className={`text-white hover:text-blue-200 transition-colors ${
                isActive('/blog') ? 'border-b-2 border-white' : ''
              }`}
            >
              Blog
            </Link>
            <Link
              to="/journey"
              className={`text-white hover:text-blue-200 transition-colors ${
                isActive('/journey') ? 'border-b-2 border-white' : ''
              }`}
            >
              Parcours
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-blue-200 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-green-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className={`block px-3 py-2 text-white hover:text-blue-200 transition-colors ${
                isActive('/') ? 'bg-green-800 rounded' : ''
              }`}
              onClick={() => setIsOpen(false)}
            >
              Accueil
            </Link>
            <Link
              to="/charter"
              state={{ from: 'directory' }}
              className="block px-3 py-2 text-white hover:text-blue-200 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Annuaire
            </Link>
            <Link
              to="/quiz"
              className={`block px-3 py-2 text-white hover:text-blue-200 transition-colors ${
                isActive('/quiz') ? 'bg-green-800 rounded' : ''
              }`}
              onClick={() => setIsOpen(false)}
            >
              Quiz
            </Link>
            <Link
              to="/blog"
              className={`block px-3 py-2 text-white hover:text-blue-200 transition-colors ${
                isActive('/blog') ? 'bg-green-800 rounded' : ''
              }`}
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="/journey"
              className={`block px-3 py-2 text-white hover:text-blue-200 transition-colors ${
                isActive('/journey') ? 'bg-green-800 rounded' : ''
              }`}
              onClick={() => setIsOpen(false)}
            >
              Parcours
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}