import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import NewModels from './components/NewModels';
import PromotionCard from './components/PromotionCard';
import DealerLocator from './components/DealerLocator';
import AppPromotion from './components/AppPromotion';
import ServiceCards from './components/ServiceCards';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans">
      <Header />
      <main>
        <Hero />
        <NewModels />
        
        <div className="container mx-auto px-4 my-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <PromotionCard 
            title="100 Days of Celebration" 
            subtitle="Benefits for Audi customers"
            imageSrc="https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            darkMode={true}
          />
          <PromotionCard 
            title="Audi Assist" 
            imageSrc="https://images.pexels.com/photos/3778720/pexels-photo-3778720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            darkMode={false}
          />
        </div>
        
        <div className="container mx-auto px-4 my-16">
          <PromotionCard 
            title="The home of electric" 
            description="Experience the future of mobility with Audi's electric vehicle lineup. Innovative design meets sustainable performance in our growing collection of e-tron vehicles."
            imageSrc="https://images.pexels.com/photos/3786091/pexels-photo-3786091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            fullWidth={true}
            darkMode={false}
          />
        </div>
        
        <DealerLocator />
        <AppPromotion />
        <ServiceCards />
      </main>
      <Footer />
    </div>
  );
}

export default App;