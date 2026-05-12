import { ChevronRight, Filter, LayoutGrid, LayoutList, Search } from 'lucide-react';
import { motion } from 'motion/react';
import ProductCard from '../components/ProductCard.tsx';

export default function Printers() {
  const products = [
    { id: 'x2d', name: 'Bambu Lab X2D', price: 649, imageUrl: 'https://store.bblcdn.com/s7/default/40dfe73491624a24bad7f8466be06d38/1-new.jpg', hoverImageUrl: 'https://store.bblcdn.com/s7/bwqnt/aabafb4c8f14448e93d95d54bded8a60/3.jpg' },
    { id: 'h2c', name: 'Bambu Lab H2C', price: 2399, imageUrl: 'https://store.bblcdn.com/s7/default/3f19a5313c094327a2d50d0923867299/H2CC.jpg', hoverImageUrl: 'https://store.bblcdn.com/s7/default/ceb1e8c7ba13457f9147844e6bce5b11/H2CL.jpg' },
    { id: 'p2s', name: 'Bambu Lab P2S', price: 549, imageUrl: 'https://store.bblcdn.com/s7/default/a47bdb7ac6804dc78416d8901a71aba1/P2S.jpg', hoverImageUrl: 'https://store.bblcdn.com/s7/default/c2d75be87c2946dba3ab5074fb4afe78/P2S_Combo.jpg' },
    { id: 'h2s', name: 'Bambu Lab H2S', price: 1249, imageUrl: 'https://store.bblcdn.com/s7/default/f140b653727148c3b4d47156c8ef6138/H2SC.jpg', hoverImageUrl: 'https://store.bblcdn.com/s7/default/e81a6b3d0e2448a287368d5005286a1f/H2S.jpg' },
    { id: 'h2d', name: 'Bambu Lab H2D', price: 1749, originalPrice: 1999, imageUrl: 'https://store.bblcdn.com/s7/default/9e8cfe4f3ba64730b1443163ef31a990/H2D-compressed.jpg', tag: 'Save $250' },
    { id: 'a1', name: 'Bambu Lab A1 3D Printer', price: 299, originalPrice: 399, imageUrl: 'https://store.bblcdn.com/s7/default/7295f2694b23422290eaba7d4ea66406/A1_C-compressed.jpg', hoverImageUrl: 'https://store.bblcdn.com/s7/default/866e470a983f4d989f81a495a5f5c71c/A1-compressed.jpg' },
    { id: 'a1-mini', name: 'Bambu Lab A1 mini 3D Printer', price: 219, originalPrice: 299, imageUrl: 'https://store.bblcdn.com/s7/default/234c8ca9dced4d9888c545cbe8b2007c/A1_mini_C.jpg', hoverImageUrl: 'https://store.bblcdn.com/s7/default/062e0a7dc31a4393b26943f599d2db8c/A1_mini.jpg' },
    { id: 'p1s', name: 'Bambu Lab P1S 3D Printer', price: 399, originalPrice: 699, imageUrl: 'https://store.bblcdn.com/s7/default/7abb7477d233498b82a02dc93dd069df/P1.jpg', hoverImageUrl: 'https://store.bblcdn.com/s7/default/7f6a9319e420463baa7281eb4e26622a/2_bb5ca5ee-11f8-466c-8c39-ace73c014be3.jpg' },
    { id: 'x1e', name: 'Bambu Lab X1E', price: 2499, imageUrl: 'https://store.bblcdn.com/s7/default/2da45cf9e0744ca095352e11bf6461cb/X1E.png' },
    { id: 'x1c', name: 'Bambu Lab X1-Carbon 3D Printer', price: 1199, imageUrl: 'https://store.bblcdn.com/s7/default/eb13d80630ba49749f7e7f6e0f8de0b1/X1C.jpg' },
    { id: 'p1p', name: 'Bambu Lab P1P 3D Printer', price: 499, imageUrl: 'https://store.bblcdn.com/s7/default/2cb66e13353e4f7ca194a28b6d85918d/P1P.jpg' },
  ];

  return (
    <div className="flex flex-col w-full min-h-screen">
      <header className="mx-auto max-w-7xl px-4 lg:px-8 py-10 lg:py-16 w-full flex flex-col items-center">
        <h1 className="text-3xl lg:text-4xl font-extrabold text-dark tracking-tight">3D Printers</h1>
        <div className="relative mt-10 h-64 lg:h-40 w-full rounded-lg overflow-hidden group">
            <img 
                src="https://store.bblcdn.com/s7/default/936f5089d934479ca45f4bbe16e8781a/collection_pc.jpg" 
                className="absolute inset-0 w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-white/50 backdrop-blur-[1px]" />
            <div className="relative h-full flex flex-col justify-center items-center lg:items-start lg:px-12 text-center lg:text-left space-y-2">
                <h2 className="text-xl font-bold text-dark">Which 3D printer is right for me?</h2>
                <p className="text-sm text-muted">Take a quick quiz for recommendations tailored for you.</p>
                <button className="text-brand font-bold flex items-center gap-1 hover:underline pt-1">
                    Help Me Choose <ChevronRight size={14} />
                </button>
            </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl w-full px-4 lg:px-8">
        <div className="flex flex-col md:flex-row gap-2 items-center justify-between mb-8 pb-4 border-b border-border">
            <div className="flex-1 w-full max-w-md relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" size={18} />
                <input 
                    type="text" 
                    placeholder="Search for products in this collection" 
                    className="w-full pl-10 pr-4 py-2 bg-light-grey rounded-md text-sm border-none focus:ring-1 focus:ring-brand outline-none"
                />
            </div>
            <div className="flex items-center gap-6 self-end md:self-center">
                <button className="flex lg:hidden items-center gap-2 text-sm font-bold border border-border px-4 py-2 rounded-md">
                    <Filter size={16} /> Filters
                </button>
                
                <div className="hidden lg:flex items-center gap-6">
                    <a href="#" className="font-bold flex items-center gap-1 hover:text-brand transition-colors text-16">Compare <ChevronRight size={14} /></a>
                    <a href="#" className="font-bold flex items-center gap-1 hover:text-brand transition-colors text-16 text-muted font-normal">Help Me Choose <ChevronRight size={14} /></a>
                    <a href="#" className="font-bold flex items-center gap-1 hover:text-brand transition-colors text-16 text-muted font-normal border-r border-border pr-6">View All <ChevronRight size={14} /></a>
                </div>

                <div className="flex items-center gap-2 text-sm font-medium">
                    <span className="text-muted">Sort:</span>
                    <button className="flex items-center gap-1 hover:text-brand font-bold">
                        Relevance <ChevronRight className="rotate-90" size={14} />
                    </button>
                </div>
                <div className="flex items-center gap-3 border-l border-border pl-6">
                    <button className="p-1 hover:bg-light-grey rounded text-muted hover:text-dark">
                        <LayoutGrid size={20} />
                    </button>
                    <button className="p-1 hover:bg-light-grey rounded text-muted hover:text-dark">
                        <LayoutList size={20} />
                    </button>
                </div>
            </div>
        </div>

        <div className="flex gap-10">
            {/* Sidebar Filters */}
            <aside className="hidden lg:block w-60 shrink-0 space-y-8">
                <div>
                   <h3 className="font-bold text-dark mb-4 flex justify-between items-center border-b border-border pb-2">
                       By Series
                       <ChevronRight className="rotate-90 text-muted" size={16} />
                   </h3>
                   <ul className="space-y-4">
                       {['A Series', 'X Series', 'P Series', 'H Series'].map((s) => (
                           <li key={s} className="flex items-center gap-3 group cursor-pointer">
                               <div className="w-5 h-5 border-2 border-border group-hover:border-brand rounded transition-colors" />
                               <span className="text-[15px] font-medium group-hover:text-brand transition-colors">{s}</span>
                           </li>
                       ))}
                   </ul>
                </div>

                <div>
                   <h3 className="font-bold text-dark mb-4 flex justify-between items-center border-b border-border pb-2">
                       Availability
                   </h3>
                   <ul className="space-y-4">
                       {['In Stock', 'Pre-order'].map((s) => (
                           <li key={s} className="flex items-center gap-3 group cursor-pointer">
                               <div className="w-5 h-5 border-2 border-border group-hover:border-brand rounded transition-colors" />
                               <span className="text-[15px] font-medium group-hover:text-brand transition-colors">{s}</span>
                           </li>
                       ))}
                   </ul>
                </div>
            </aside>

            {/* Product Grid */}
            <main className="flex-1 pb-24">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12">
                   {products.map((product) => (
                       <ProductCard 
                          key={product.id} 
                          id="h2c"
                          name={product.name}
                          price={product.price}
                          imageUrl={product.imageUrl}
                          hoverImageUrl={product.hoverImageUrl}
                          originalPrice={product.originalPrice}
                          tag={product.tag}
                       />
                   ))}
                </div>
            </main>
        </div>
      </div>
    </div>
  );
}
