import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div>
            <h3 className="text-white text-sm font-bold mb-4">Models</h3>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-white transition-colors">A3</a></li>
              <li><a href="#" className="hover:text-white transition-colors">A4</a></li>
              <li><a href="#" className="hover:text-white transition-colors">A6</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Q5</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Q7</a></li>
              <li><a href="#" className="hover:text-white transition-colors">e-tron</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-sm font-bold mb-4">Used Cars</h3>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-white transition-colors">Audi Approved</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Find a Dealer</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Current Offers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Trade-In Value</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-sm font-bold mb-4">Customer Service</h3>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Roadside Assistance</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Service Centers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Owner's Manual</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Recall Information</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-sm font-bold mb-4">Innovation</h3>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-white transition-colors">Audi Connect</a></li>
              <li><a href="#" className="hover:text-white transition-colors">e-tron Technology</a></li>
              <li><a href="#" className="hover:text-white transition-colors">quattro</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Driver Assistance</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-sm font-bold mb-4">Support</h3>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-white transition-colors">Find a Dealer</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Request a Brochure</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Legal</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <svg width="80" height="24" viewBox="0 0 80 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 12C20 14.1217 19.1571 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20C9.87827 20 7.84344 19.1571 6.34315 17.6569C4.84285 16.1566 4 14.1217 4 12C4 9.87827 4.84285 7.84344 6.34315 6.34315C7.84344 4.84285 9.87827 4 12 4C14.1217 4 16.1566 4.84285 17.6569 6.34315C19.1571 7.84344 20 9.87827 20 12Z" fill="white"/>
              <path d="M32 12C32 14.1217 31.1571 16.1566 29.6569 17.6569C28.1566 19.1571 26.1217 20 24 20C21.8783 20 19.8434 19.1571 18.3431 17.6569C16.8429 16.1566 16 14.1217 16 12C16 9.87827 16.8429 7.84344 18.3431 6.34315C19.8434 4.84285 21.8783 4 24 4C26.1217 4 28.1566 4.84285 29.6569 6.34315C31.1571 7.84344 32 9.87827 32 12Z" fill="white"/>
              <path d="M44 12C44 14.1217 43.1571 16.1566 41.6569 17.6569C40.1566 19.1571 38.1217 20 36 20C33.8783 20 31.8434 19.1571 30.3431 17.6569C28.8429 16.1566 28 14.1217 28 12C28 9.87827 28.8429 7.84344 30.3431 6.34315C31.8434 4.84285 33.8783 4 36 4C38.1217 4 40.1566 4.84285 41.6569 6.34315C43.1571 7.84344 44 9.87827 44 12Z" fill="white"/>
              <path d="M56 12C56 14.1217 55.1571 16.1566 53.6569 17.6569C52.1566 19.1571 50.1217 20 48 20C45.8783 20 43.8434 19.1571 42.3431 17.6569C40.8429 16.1566 40 14.1217 40 12C40 9.87827 40.8429 7.84344 42.3431 6.34315C43.8434 4.84285 45.8783 4 48 4C50.1217 4 52.1566 4.84285 53.6569 6.34315C55.1571 7.84344 56 9.87827 56 12Z" fill="white"/>
            </svg>
          </div>
          
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Youtube size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 text-xs text-center text-gray-500">
          <p>© {new Date().getFullYear()} Audi. All rights reserved.</p>
          <p className="mt-2">Fuel consumption and emission values according to WLTP.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;