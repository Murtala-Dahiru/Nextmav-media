import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 group"
          >
            <div className="p-2 bg-gradient-to-r from-electric-orange to-rich-violet rounded-lg group-hover:scale-110 transition-transform">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <span className={`text-2xl font-bold transition-colors ${
              scrolled ? 'text-deep-blue' : 'text-white'
            }`}>
              NextMav
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-medium transition-colors hover:text-electric-orange relative ${
                  location.pathname === item.path
                    ? scrolled ? 'text-electric-orange' : 'text-electric-orange'
                    : scrolled ? 'text-deep-blue' : 'text-white'
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-electric-orange"></span>
                )}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-gradient-to-r from-electric-orange to-rich-violet text-white px-6 py-2 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all"
            >
              Book Strategy Call
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-deep-blue' : 'text-white'
            }`}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t">
            <div className="px-6 py-4 space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block py-2 font-medium transition-colors hover:text-electric-orange ${
                    location.pathname === item.path
                      ? 'text-electric-orange'
                      : 'text-deep-blue'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full bg-gradient-to-r from-electric-orange to-rich-violet text-white px-6 py-3 rounded-full font-medium text-center mt-4"
              >
                Book Strategy Call
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;