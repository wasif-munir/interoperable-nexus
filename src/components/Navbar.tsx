
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav 
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled 
          ? 'py-3 glass shadow-sm' 
          : 'py-5 bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center"
            aria-label="ConnectDev Pro Home"
          >
            <img 
              src="/logo-old.svg" 
              alt="ConnectDev.pro" 
              className="h-8 sm:h-10" 
            />
            <span className="ml-2 text-lg sm:text-xl font-display font-medium text-gray-900">
              ConnectDev<span className="text-brand-blue-500 font-semibold">.pro</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "font-medium transition-all duration-200 hover:text-brand-blue-500",
                  location.pathname === link.path ? "text-brand-blue-500" : "text-gray-700"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className={cn(
                "px-5 py-2 rounded-full font-medium text-white bg-brand-blue-500 shadow-button transition-all duration-300",
                "hover:bg-brand-blue-600 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0",
                "focus:outline-none focus:ring-2 focus:ring-brand-blue-300 focus:ring-offset-2"
              )}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 w-full glass shadow-md transition-all duration-300 ease-in-out transform origin-top",
          isMobileMenuOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"
        )}
      >
        <div className="px-4 pt-2 pb-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "block px-4 py-3 rounded-md font-medium transition-colors",
                location.pathname === link.path 
                  ? "bg-brand-blue-50 text-brand-blue-500" 
                  : "text-gray-700 hover:bg-gray-50 hover:text-brand-blue-500"
              )}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2">
            <Link
              to="/contact"
              className="block w-full text-center px-4 py-3 rounded-md font-medium text-white bg-brand-blue-500 hover:bg-brand-blue-600 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
