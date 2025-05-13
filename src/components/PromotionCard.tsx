import React from 'react';
import { ChevronRight } from 'lucide-react';

interface PromotionCardProps {
  title: string;
  subtitle?: string;
  description?: string;
  imageSrc: string;
  fullWidth?: boolean;
  darkMode?: boolean;
}

const PromotionCard: React.FC<PromotionCardProps> = ({ 
  title, 
  subtitle, 
  description, 
  imageSrc, 
  fullWidth = false,
  darkMode = false
}) => {
  return (
    <div className={`relative ${fullWidth ? 'w-full' : 'w-full'} overflow-hidden rounded-lg group`}>
      <div className="relative aspect-[16/9]">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className={`absolute inset-0 ${darkMode ? 'bg-black/50' : 'bg-gradient-to-t from-white/80 via-white/50 to-transparent'}`}></div>
        
        <div className="absolute bottom-0 left-0 p-6 w-full">
          <div className={darkMode ? 'text-white' : 'text-black'}>
            <h3 className="text-xl md:text-2xl font-bold mb-2">{title}</h3>
            {subtitle && <p className="text-sm mb-2">{subtitle}</p>}
            {description && <p className="text-sm mb-4 max-w-md">{description}</p>}
            
            <button className={`inline-flex items-center px-4 py-2 mt-2 ${
              darkMode 
                ? 'bg-white text-black hover:bg-gray-200' 
                : 'bg-black text-white hover:bg-gray-800'
            } transition-colors rounded-sm`}>
              Learn more <ChevronRight size={16} className="ml-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionCard;