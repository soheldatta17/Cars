import React from 'react';
import { Car, PenTool as Tool, PhoneCall } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="mb-4 text-red-600">
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
      <button className="mt-4 text-red-600 font-medium hover:underline">
        Learn more
      </button>
    </div>
  );
};

const ServiceCards: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Audi Services</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Exceptional service for an exceptional vehicle. Discover our range of services designed to keep your Audi in perfect condition.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard 
            icon={<Car size={32} />}
            title="Book a Test Drive"
            description="Experience the thrill of driving an Audi. Schedule a test drive at your nearest dealership."
          />
          <ServiceCard 
            icon={<Tool size={32} />}
            title="Book Authorized Service"
            description="Trust your Audi to the experts. Our authorized service centers use genuine parts and factory-trained technicians."
          />
          <ServiceCard 
            icon={<PhoneCall size={32} />}
            title="Press Releases"
            description="Stay updated with the latest news and announcements from Audi. Discover innovations, awards, and upcoming models."
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;