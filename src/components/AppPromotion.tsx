import React from 'react';
import { Smartphone, CheckCircle } from 'lucide-react';

const AppPromotion: React.FC = () => {
  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Because you expect more from your Audi.
            </h2>
            <p className="mb-8 text-gray-300">
              Get connected in your car on your phone. myAudi.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <CheckCircle size={20} className="text-red-600 mt-1 mr-3 flex-shrink-0" />
                <p>Access vehicle status and information</p>
              </div>
              <div className="flex items-start">
                <CheckCircle size={20} className="text-red-600 mt-1 mr-3 flex-shrink-0" />
                <p>Control vehicle functions remotely</p>
              </div>
              <div className="flex items-start">
                <CheckCircle size={20} className="text-red-600 mt-1 mr-3 flex-shrink-0" />
                <p>Schedule service appointments</p>
              </div>
              <div className="flex items-start">
                <CheckCircle size={20} className="text-red-600 mt-1 mr-3 flex-shrink-0" />
                <p>Navigate with real-time traffic information</p>
              </div>
            </div>
            
            <button className="bg-red-600 text-white px-6 py-3 rounded-sm flex items-center hover:bg-red-700 transition-colors">
              <Smartphone size={18} className="mr-2" />
              Download myAudi
            </button>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Audi mobile app" 
              className="rounded-lg shadow-2xl w-full"
            />
            <div className="absolute -bottom-4 -right-4 bg-red-600 w-24 h-24 rounded-full flex items-center justify-center text-white font-bold text-lg transform rotate-12">
              New
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPromotion;