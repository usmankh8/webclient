import { Link } from 'react-router-dom';
import { cn } from '../lib/utils.ts';
import { motion } from 'motion/react';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  imageUrl: string;
  hoverImageUrl?: string;
  tag?: string;
  from?: boolean;
}

export default function ProductCard({
  id,
  name,
  price,
  originalPrice,
  imageUrl,
  hoverImageUrl,
  tag,
  from = true,
}: ProductCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group"
    >
      <Link to={`/products/${id}`} className="block relative overflow-hidden bg-light-grey rounded-lg aspect-square">
        <img 
          src={imageUrl} 
          alt={name} 
          className={cn(
            "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105",
            hoverImageUrl && "group-hover:opacity-0"
          )} 
        />
        {hoverImageUrl && (
          <img 
            src={hoverImageUrl} 
            alt={name} 
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700 group-hover:scale-105" 
          />
        )}
        {tag && (
          <div className="absolute top-3 right-3 z-10">
            <div className="bg-orange-500 text-white font-bold px-3 py-1 rounded text-xs">
              {tag}
            </div>
          </div>
        )}
      </Link>
      
      <div className="mt-5 space-y-2">
        <Link to={`/products/${id}`}>
          <h3 className="text-[15px] font-medium text-dark line-clamp-2 hover:text-brand transition-colors">
            {name}
          </h3>
        </Link>
        <div className="flex items-baseline gap-2 flex-wrap">
          <span className="text-dark font-semibold text-lg">
            {from && <span className="text-sm font-normal mr-1">From</span>}
            ${price.toLocaleString()}
            <span className="text-sm font-normal ml-0.5">.00 USD</span>
          </span>
          {originalPrice && (
            <span className="text-muted line-through text-sm">
              ${originalPrice.toLocaleString()}.00 USD
            </span>
          )}
        </div>
        <div className="pt-2">
          <Link 
            to={`/products/${id}`} 
            className="text-brand text-sm font-semibold flex items-center gap-1 group/link hover:underline"
          >
            View product
            <svg className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5" viewBox="0 0 6 16" fill="none">
              <path d="M1 4.5L4.8 8L1 11.5" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
            </svg>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
