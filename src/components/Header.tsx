import React, { useState } from 'react';
import { Menu, X, Search, User, ShoppingCart } from 'lucide-react';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/9/92/Audi-Logo_2016.svg"
                alt="Audi"
                className="h-8 md:h-10 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-sm font-medium hover:text-red-600 transition-colors">Models</a>
            <a href="#" className="text-sm font-medium hover:text-red-600 transition-colors">Electric</a>
            <a href="#" className="text-sm font-medium hover:text-red-600 transition-colors">Services</a>
            <a href="#" className="text-sm font-medium hover:text-red-600 transition-colors">Dealers</a>
            <a href="#" className="text-sm font-medium hover:text-red-600 transition-colors">Experience</a>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:text-red-600 transition-colors">
              <Search size={20} />
            </button>
            <button className="p-2 hover:text-red-600 transition-colors hidden md:block">
              <User size={20} />
            </button>
            <button className="p-2 hover:text-red-600 transition-colors hidden md:block">
              <ShoppingCart size={20} />
            </button>
            <button 
              className="p-2 hover:text-red-600 transition-colors md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-sm font-medium py-2 hover:text-red-600 transition-colors">Models</a>
              <a href="#" className="text-sm font-medium py-2 hover:text-red-600 transition-colors">Electric</a>
              <a href="#" className="text-sm font-medium py-2 hover:text-red-600 transition-colors">Services</a>
              <a href="#" className="text-sm font-medium py-2 hover:text-red-600 transition-colors">Dealers</a>
              <a href="#" className="text-sm font-medium py-2 hover:text-red-600 transition-colors">Experience</a>
              <div className="flex space-x-4 py-2">
                <button className="flex items-center text-sm font-medium hover:text-red-600 transition-colors">
                  <User size={16} className="mr-2" />
                  Account
                </button>
                <button className="flex items-center text-sm font-medium hover:text-red-600 transition-colors">
                  <ShoppingCart size={16} className="mr-2" />
                  Cart
                </button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;