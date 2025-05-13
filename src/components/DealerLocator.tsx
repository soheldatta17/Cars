import React from 'react';
import { MapPin } from 'lucide-react';

const DealerLocator: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative rounded-lg overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/4394233/pexels-photo-4394233.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Map" 
              className="w-full h-full object-cover aspect-video"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 p-6">
              <div className="flex items-center text-white mb-2">
                <MapPin size={20} className="mr-2" />
                <span className="font-medium">Find the closest Audi dealer</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">Dealer Locator</h2>
            <p className="text-gray-600 mb-6">
              Find an Audi dealer near you. Our dealer network provides expert service, 
              maintenance, and sales support for all Audi vehicles.
            </p>
            
            <div className="mb-4">
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                Enter your location
              </label>
              <div className="flex">
                <input
                  type="text"
                  id="location"
                  placeholder="City or ZIP code"
                  className="flex-grow px-4 py-2 border border-gray-300 rounded-l-sm focus:outline-none focus:ring-2 focus:ring-red-600"
                />
                <button className="bg-red-600 text-white px-6 py-2 rounded-r-sm hover:bg-red-700 transition-colors">
                  Search
                </button>
              </div>
            </div>
            
            <button className="mt-4 text-red-600 font-medium flex items-center hover:underline">
              View all dealerships <MapPin size={16} className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealerLocator;