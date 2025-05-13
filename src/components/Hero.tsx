import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/3874337/pexels-photo-3874337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
      </div>
      
      <div className="relative h-full container mx-auto px-4 flex flex-col justify-center">
        <div className="max-w-xl">
          <div className="mb-4 inline-block px-4 py-1 bg-red-600 text-white text-sm font-semibold tracking-wider rounded-full">
            RS Q8
          </div>
          <h1 className="heading-xl text-white mb-6">
            Power that packs<br />a punch and a smile.
          </h1>
          <p className="text-white/90 text-lg mb-8 font-light">
            Experience the thrill of driving with the new Audi RS Q8. 
            Pure power meets exceptional design.
          </p>
          <div className="flex gap-4">
            <button className="btn-primary">
              Discover more <ChevronRight size={16} className="ml-2" />
            </button>
            <button className="btn-secondary">
              Book a test drive
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex gap-2">
          <div className="w-2 h-2 rounded-full bg-white/30"></div>
          <div className="w-6 h-2 rounded-full bg-white"></div>
          <div className="w-2 h-2 rounded-full bg-white/30"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;