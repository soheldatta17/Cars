import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarModel {
  id: number;
  name: string;
  price: string;
  image: string;
}

const NewModels: React.FC = () => {
  const models: CarModel[] = [
    {
      id: 1,
      name: 'Q7',
      price: 'Starting at $59,200',
      image: 'https://images.pexels.com/photos/112452/pexels-photo-112452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 2,
      name: 'A6',
      price: 'Starting at $55,900',
      image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 3,
      name: 'e-tron GT',
      price: 'Starting at $104,900',
      image: 'https://images.pexels.com/photos/4037856/pexels-photo-4037856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % models.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + models.length) % models.length);
  };

  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Discover Our Latest Models</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience innovation, performance, and luxury with our newest lineup of vehicles.
            Each model represents the perfect blend of technology and design.
          </p>
        </div>
        
        <div className="relative">
          <div className="overflow-hidden rounded-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {models.map((model) => (
                <div key={model.id} className="w-full flex-shrink-0 px-4">
                  <div className="card group">
                    <div className="aspect-[16/9] relative overflow-hidden">
                      <img 
                        src={model.image} 
                        alt={`Audi ${model.name}`} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <h3 className="text-white text-3xl font-bold mb-2">{model.name}</h3>
                      <p className="text-white/80 mb-6">{model.price}</p>
                      <div className="flex gap-4">
                        <button className="btn-primary">
                          Build Yours
                        </button>
                        <button className="btn-secondary">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 left-0 -translate-y-1/2 bg-white/90 hover:bg-white rounded-r-lg p-4 shadow-lg transition-all hover:-translate-x-1"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 right-0 -translate-y-1/2 bg-white/90 hover:bg-white rounded-l-lg p-4 shadow-lg transition-all hover:translate-x-1"
          >
            <ChevronRight size={24} />
          </button>
          
          <div className="flex justify-center mt-8 gap-2">
            {models.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === activeIndex ? 'bg-red-600 w-8' : 'bg-gray-300 w-2 hover:bg-red-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewModels;