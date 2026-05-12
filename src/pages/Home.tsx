import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { ArrowRight, ChevronRight as ChevronRightIcon } from 'lucide-react';
import { motion } from 'motion/react';
import ProductCard from '../components/ProductCard.tsx';
import { Link } from 'react-router-dom';

export default function Home() {
  const slides = [
    {
      id: 'x2d',
      title: 'Xcellence made simple',
      subtitle: 'Bambu Lab X2D',
      price: '$649.00 USD',
      bgColor: 'bg-[#F2F2F2]',
      image: 'https://store.bblcdn.com/s7/default/1fb0cceef00c4b6786e0a407557fda91/X2D-compressed.jpg',
      textColor: 'text-dark',
      btnBg: 'bg-dark',
      btnText: 'text-white'
    },
    {
      id: 'p2s',
      title: 'The Icon, Redefined',
      subtitle: 'Bambu Lab P2S',
      price: '$549.00 USD',
      bgColor: 'bg-[#BABCC0]',
      image: 'https://store.bblcdn.com/s7/default/384af4dee5db4f3394d6544710a0d16f/H2D-PC-tuya.jpg',
      textColor: 'text-dark',
      btnBg: 'bg-white',
      btnText: 'text-dark'
    },
    {
      id: 'h2c',
      title: 'Uncompromising Multi-Material.',
      subtitle: 'Bambu Lab H2C',
      price: '$2,399.00 USD',
      bgColor: 'bg-[#8C7D61]',
      image: 'https://store.bblcdn.com/s7/default/a73a8d16d2364d54bc935152b774f3fe/PC-tuya.jpg',
      textColor: 'text-white',
      btnBg: 'bg-white',
      btnText: 'text-dark'
    }
  ];

  const categories = [
    { name: '3D Printers', desc: 'Advanced printers empower advanced projects', image: 'https://store.bblcdn.com/s7/bwqnt/45f56daafc2f476384246b3920acd53c/PC.jpg' },
    { name: 'Filaments', desc: 'Excellent quality, performance & ease of use', image: 'https://store.bblcdn.com/s2/default/90cb05d773eb47359dc250e11ff6a01d/3.jpg' },
    { name: 'Accessories', desc: 'Upgrade your printer with advanced parts', image: 'https://store.bblcdn.com/s7/default/6fdadd993e46428f98f07dd6599d6730/1920-1025.jpg' },
    { name: "Maker's Supply", desc: 'Parts supply to complete your projects', image: 'https://store.bblcdn.com/s2/default/157960b805694094a06e643c2d824a9f/7.jpg' },
    { name: 'Material', desc: 'Materials for laser and blade cutting', image: 'https://store.bblcdn.com/s7/default/f3908af2ce9447fd8721d10e1740e5d2/shouyePC_..jpg' }
  ];

  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* Hero Swiper */}
      <section className="relative w-full h-[560px] bg-light-grey">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop
          className="h-full w-full"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="relative h-full w-full overflow-hidden">
                <img src={slide.image} alt={slide.title} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/5" />
                <div className="relative mx-auto max-w-7xl h-full px-4 lg:px-8 flex items-center">
                  <div className={slide.textColor}>
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                      className="space-y-4 max-w-lg"
                    >
                      <span className="text-sm font-bold tracking-widest uppercase">{slide.subtitle}</span>
                      <h2 className="text-4xl lg:text-6xl font-extrabold leading-tight">{slide.title}</h2>
                      <div className="text-2xl font-bold">{slide.price}</div>
                      <Link to={`/products/h2c`} className={`mt-8 px-10 py-3 rounded font-bold flex items-center gap-2 transition-transform hover:scale-105 ${slide.btnBg} ${slide.btnText}`}>
                        BUY NOW <ArrowRight size={18} />
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Categories Grid */}
      <section className="mx-auto max-w-7xl px-4 lg:px-8 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          {categories.map((cat, idx) => (
            <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative h-80 bg-light-grey rounded-lg overflow-hidden flex flex-col justify-end text-center"
            >
                <Link to="/collections/3d-printer" className="absolute inset-0 z-20"></Link>
                <div className="absolute top-0 w-full p-5 z-10">
                    <h3 className="text-xl font-bold text-dark group-hover:text-brand transition-colors">{cat.name}</h3>
                    <p className="text-[11px] text-muted mt-1 leading-tight">{cat.desc}</p>
                </div>
                <img src={cat.image} alt={cat.name} className="h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Flash Sale Banner */}
      <section className="mx-auto max-w-7xl px-4 lg:px-8 pt-20">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-10">
            <h2 className="text-3xl font-extrabold">Flash Sale</h2>
            <div className="flex items-center gap-3">
              <span className="text-xl font-bold bg-gradient-to-b from-orange-500 to-red-600 bg-clip-text text-transparent">Starts in</span>
              <div className="flex gap-2 text-sm font-bold">
                {[ {v: '10', l: 'H'}, {v: '47', l: 'M'}, {v: '21', l: 'S'} ].map((t) => (
                  <div key={t.l} className="flex items-center gap-1">
                    <span className="bg-gradient-to-b from-orange-500 to-red-600 text-white px-2 py-2 rounded-md w-9 h-10 flex items-center justify-center">{t.v}</span>
                    <span className="bg-gradient-to-b from-orange-500 to-red-600 bg-clip-text text-transparent">{t.l}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <a href="#" className="flex items-center gap-2 text-dark font-bold hover:text-brand transition-colors">
            View More <ChevronRight size={16} />
          </a>
        </div>
      </section>

      {/* Flash Sale Carousel */}
      <section className="mx-auto max-w-7xl px-4 lg:px-8 pb-20">
        <Swiper
          slidesPerView={1.5}
          spaceBetween={16}
          breakpoints={{
            640: { slidesPerView: 2.5 },
            1024: { slidesPerView: 4 }
          }}
          className="w-full"
        >
          {[
            { id: '1', name: 'Laser Upgrade Kit', price: 436.80, originalPrice: 728.00, tag: '40% OFF', imageUrl: 'https://store.bblcdn.com/s7/default/ca0ea754025443349d09e8b3c31a6c37/SL004_-_4_(1).png' },
            { id: '2', name: '3mm Laser Plywood & Bamboo Trial Kit', price: 84.00, originalPrice: 140.00, tag: '40% OFF', imageUrl: 'https://store.bblcdn.com/s7/default/7cf7d0c85e904a3bbcc5f9e21a623f9b/222.jpg' },
            { id: '3', name: 'TPU 85A / TPU 90A', price: 20.99, originalPrice: 41.99, tag: '50% OFF', imageUrl: 'https://store.bblcdn.com/s7/default/9218dd7f72af4425be51eeb30853a75e/silver_2.png' },
            { id: '4', name: 'White CCT Tunable COB LED Strip Light', price: 32.99, originalPrice: 43.99, tag: '25% OFF', imageUrl: 'https://store.bblcdn.com/s7/default/dd03284a210d40ea825925ca098ed0ce/Group48446.png' }
          ].map((product) => (
            <SwiperSlide key={product.id}>
              <div className="bg-light-grey rounded-lg overflow-hidden group">
                <div className="relative aspect-square">
                   <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                   <div className="absolute top-2 right-2 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded">
                      {product.tag}
                   </div>
                </div>
                <div className="p-4 space-y-2">
                   <h3 className="text-sm font-bold line-clamp-2 min-h-[40px]">{product.name}</h3>
                   <div className="flex flex-col">
                      <span className="text-red-600 font-bold">${product.price.toFixed(2)} USD</span>
                      <span className="text-muted line-through text-xs font-medium">${product.originalPrice.toFixed(2)} USD</span>
                   </div>
                   <button className="w-full border border-dark text-dark font-bold text-sm py-2 rounded hover:bg-dark hover:text-white transition-colors">
                      Notify Me
                   </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Featured Products */}
      <section className="mx-auto max-w-7xl px-4 lg:px-8 py-20 border-t border-border">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-extrabold">Featured Products</h2>
          <div className="flex gap-4">
            <button className="w-10 h-10 border border-dark rounded-full flex items-center justify-center hover:bg-dark hover:text-white transition-colors"><ChevronRight size={20} className="rotate-180" /></button>
            <button className="w-10 h-10 border border-dark rounded-full flex items-center justify-center hover:bg-dark hover:text-white transition-colors"><ChevronRight size={20} /></button>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
           <motion.div 
              whileHover={{ y: -5 }}
              className="bg-light-grey rounded-lg overflow-hidden flex h-[350px] relative transition-shadow hover:shadow-xl group"
           >
              <img src="https://store.bblcdn.com/s7/default/33cf0298b1a04d938349f55e7adbfeb5/Featured_Products_1920-1025_AMS2Pro.jpg" className="absolute inset-0 w-full h-full object-cover" />
              <div className="relative p-10 flex flex-col justify-center max-w-xs space-y-4">
                  <h3 className="text-2xl font-extrabold">AMS 2 Pro</h3>
                  <p className="text-sm">2nd Gen AMS, compatible with X1 & P1</p>
                  <div className="font-bold text-lg">$299.00 USD <span className="text-muted line-through text-sm ml-2">$359.00</span></div>
                  <Link to="/products/h2c" className="bg-transparent border border-dark px-8 py-2 rounded font-bold hover:bg-dark hover:text-white transition-colors w-fit text-center block">
                    Buy now
                  </Link>
              </div>
           </motion.div>
           <motion.div 
              whileHover={{ y: -5 }}
              className="bg-light-grey rounded-lg overflow-hidden flex h-[350px] relative transition-shadow hover:shadow-xl group"
           >
              <img src="https://store.bblcdn.com/s7/default/beda97f4439c4d37ad0ac302b3e1eba9/Tungsten_(2).jpg" className="absolute inset-0 w-full h-full object-cover" />
              <div className="relative p-10 flex flex-col justify-center max-w-xs space-y-4">
                  <h3 className="text-2xl font-extrabold">Tungsten Carbide Nozzle</h3>
                  <p className="text-sm">Perfect for Abrasive Filaments</p>
                  <Link to="/products/h2c" className="bg-transparent border border-dark px-8 py-2 rounded font-bold hover:bg-dark hover:text-white transition-colors w-fit text-center block">
                    Buy now
                  </Link>
              </div>
           </motion.div>
        </div>
      </section>

      {/* 3D Printer Feature Section */}
      <section className="mx-auto max-w-7xl px-4 lg:px-8 py-20">
        <div className="flex justify-between items-end mb-10">
            <h2 className="text-3xl font-extrabold">3D Printer</h2>
            <div className="hidden lg:flex gap-6">
                <a href="#" className="font-bold flex items-center gap-1 hover:text-brand transition-colors">Help Me Choose <ChevronRight size={14} /></a>
                <a href="#" className="font-bold flex items-center gap-1 hover:text-brand transition-colors">View All <ChevronRight size={14} /></a>
            </div>
        </div>
        
        <div className="space-y-6">
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="relative rounded-lg overflow-hidden h-96 lg:h-[400px]"
            >
                <img src="https://store.bblcdn.com/s7/bwqnt/ac446d0cfeb34b609a82f9075e914d40/PC.jpg" className="absolute inset-0 w-full h-full object-cover" />
                <div className="relative h-full flex flex-col justify-center px-10">
                    <div className="w-full max-w-sm space-y-3">
                        <span className="text-sm font-bold">Bambu Lab X2D</span>
                        <h3 className="text-2xl lg:text-3xl font-extrabold">Xcellence made simple</h3>
                        <div className="text-xl font-bold">From $649.00 USD</div>
                        <Link to={`/products/x2d`} className="mt-4 bg-dark text-white px-8 py-2.5 rounded font-bold hover:bg-brand transition-colors flex items-center gap-2 w-fit">
                            Buy Now <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ProductCard id="h2c" name="Bambu Lab H2C" price={2399} imageUrl="https://store.bblcdn.com/s7/bwqnt/8fc833b6d5504e0293b0e792b3367e9a/PC_384x536.jpg" />
                <ProductCard id="h2c" name="Bambu Lab H2D" price={1749} originalPrice={1999} imageUrl="https://store.bblcdn.com/s7/default/b14185e35d1048c4a0682622fd1c0bb3/MO_H2D.jpg" tag="Save $250" />
                <ProductCard id="h2c" name="Bambu Lab H2S" price={1249} imageUrl="https://store.bblcdn.com/s7/default/accb8a6be7864f03a879113f996196f0/3D_Printers-PC-h2s.jpg" />
            </div>
        </div>
      </section>

      {/* Filaments Section */}
      <section className="mx-auto max-w-7xl px-4 lg:px-8 py-20 border-t border-border">
        <div className="flex justify-between items-end mb-10">
            <h2 className="text-3xl font-extrabold">Filaments</h2>
            <a href="#" className="font-bold flex items-center gap-1 hover:text-brand transition-colors text-18">View All <ChevronRight size={14} /></a>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="relative rounded-lg overflow-hidden h-[400px] group cursor-pointer">
                <img src="https://store.bblcdn.com/s1/default/8fcbbc38b1944f1391b49281ac0eaa33/Filaments_CMYK_PC.jpg" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="relative p-10 flex flex-col justify-start space-y-3">
                    <h3 className="text-2xl font-extrabold max-w-[250px]">PLA CMYK Lithophane Bundle</h3>
                    <p className="text-sm">Infuse Your Lithophane With Vibrant Hues</p>
                    <div className="text-red-600 font-bold">Save 28% on 4 Rolls</div>
                    <Link to="/products/h2c" className="bg-transparent border border-dark px-8 py-2 rounded font-bold hover:bg-dark hover:text-white transition-colors w-fit text-center block">
                        Buy now
                    </Link>
                </div>
            </div>
            <div className="relative rounded-lg overflow-hidden h-[400px] group cursor-pointer">
                <img src="https://store.bblcdn.com/s7/default/3097f4db1eca4830aa7812e0be1d02e2/Homepage_Filament_Module_PC_New.png" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="relative p-10 flex flex-col justify-start space-y-3">
                    <h3 className="text-2xl font-extrabold max-w-[250px]">Buy More, Save More</h3>
                    <p className="text-sm">Stock up on quality filaments for special discounts.</p>
                    <div className="text-red-600 font-bold">As low as $12.99 per roll</div>
                    <Link to="/products/h2c" className="bg-transparent border border-dark px-8 py-2 rounded font-bold hover:bg-dark hover:text-white transition-colors w-fit text-center block">
                        Buy now
                    </Link>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {['PLA', 'PETG', 'ABS & ASA', 'PC & TPU'].map((f, i) => (
                <div key={f} className="bg-light-grey rounded-lg overflow-hidden group cursor-pointer">
                    <img src={`https://store.bblcdn.com/s2/default/${['45415374089847da961be5c21f5071ef/5.jpg', '467d85baad41438abfceb0b873a8df79/6.jpg', '5700175e2a4a414d91cffb2229687a50/7.jpg', '70baa9bbfed64c34b0fa38b1c8fee43b/8.jpg'][i]}`} className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="p-4 text-center font-bold">{f}</div>
                </div>
            ))}
        </div>
      </section>

      {/* Accessories Section */}
      <section className="mx-auto max-w-7xl px-4 lg:px-8 py-20 border-t border-border">
        <div className="flex justify-between items-end mb-10">
            <h2 className="text-3xl font-extrabold">Accessories</h2>
            <a href="#" className="font-bold flex items-center gap-1 hover:text-brand transition-colors text-18">View All <ChevronRight size={14} /></a>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="relative rounded-lg overflow-hidden h-[400px] group cursor-pointer">
                <img src="https://store.bblcdn.com/s7/default/299bfe9183734db2b5420f025bbfbc60/left-pc.jpg" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="relative p-10 flex flex-col justify-start space-y-3">
                    <h3 className="text-2xl font-extrabold max-w-[250px]">3D Effect Plate Bulk Sale</h3>
                    <p className="text-sm text-gray-500">More Plate Styles, Better Prints</p>
                    <div className="text-red-600 font-bold">Up to 30% OFF</div>
                    <Link to="/products/h2c" className="bg-transparent border border-dark px-8 py-2 rounded font-bold hover:bg-dark hover:text-white transition-colors w-fit text-center block">
                        Buy Now
                    </Link>
                </div>
            </div>
            <div className="relative rounded-lg overflow-hidden h-[400px] group cursor-pointer">
                <img src="https://store.bblcdn.com/s7/default/0d87302029d64f70a65b3f15ee955ad7/right-pc.jpg" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="relative p-10 flex flex-col justify-start space-y-3">
                    <h3 className="text-2xl font-extrabold max-w-[250px]">Hotend Bulk Sale</h3>
                    <p className="text-sm text-gray-500">Buy more, Save More</p>
                    <div className="text-red-600 font-bold">Up to 30% off</div>
                    <Link to="/products/h2c" className="bg-transparent border border-dark px-8 py-2 rounded font-bold hover:bg-dark hover:text-white transition-colors w-fit text-center block">
                        Buy Now
                    </Link>
                </div>
            </div>
        </div>
      </section>

      {/* Maker's Supply Section */}
      <section className="mx-auto max-w-7xl px-4 lg:px-8 py-20 border-t border-border">
        <div className="flex justify-between items-end mb-10">
            <h2 className="text-3xl font-extrabold text-dark">Maker's Supply</h2>
            <a href="#" className="font-bold flex items-center gap-1 hover:text-brand transition-colors text-18">View All <ChevronRight size={14} /></a>
        </div>
        <div className="flex flex-col lg:flex-row gap-6 mb-6">
            <div className="flex-1 relative rounded-lg overflow-hidden h-[400px] group cursor-pointer bg-light-grey">
                <img src="https://store.bblcdn.com/s7/default/57f731b644a04ab1bd6b8d9fac39dea5/PC.jpg" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="relative p-10 flex flex-col justify-start space-y-3">
                    <h3 className="text-2xl font-extrabold max-w-[250px]">Maker's Supply</h3>
                    <p className="text-sm">Everything You Need to Complete Your Masterpiece, in One Click</p>
                    <Link to="/products/h2c" className="mt-4 bg-transparent border border-dark px-8 py-2 rounded font-bold hover:bg-dark hover:text-white transition-colors w-fit flex items-center gap-2">
                        Shop Now <ArrowRight size={16} />
                    </Link>
                </div>
            </div>
            <div className="flex-1 relative rounded-lg overflow-hidden h-[400px] group cursor-pointer bg-light-grey">
                <img src="https://store.bblcdn.com/s7/default/8c168e573999475392d14c972f977181/CB-pc.png" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="relative p-10 flex flex-col justify-start space-y-3">
                    <h3 className="text-2xl font-extrabold max-w-[250px]">CyberBrick</h3>
                    <p className="text-sm">Build Smarter, Code Freer, Share Globally.</p>
                    <Link to="/products/h2c" className="mt-4 bg-transparent border border-dark px-8 py-2 rounded font-bold hover:bg-dark hover:text-white transition-colors w-fit flex items-center gap-2">
                        View More <ArrowRight size={16} />
                    </Link>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {[
                { name: 'Makerlab Accessories', sub: 'Accessories for your MakerLab creations', img: 'https://store.bblcdn.com/s7/default/90d0b3dbce3b4b5eb48ff3d880156360/5.jpg' },
                { name: 'Model Kits', sub: 'Album of great projects', img: 'https://store.bblcdn.com/s7/default/2770a18852464b84ad025f3986e7b989/1.png' },
                { name: 'Maker Combo Kits', sub: 'Curated Kits for Every Maker', img: 'https://store.bblcdn.com/s7/default/16d919e0136947bea784e0f9606048f0/8.jpg' }
            ].map((item) => (
                <div key={item.name} className="bg-light-grey rounded-lg overflow-hidden group cursor-pointer">
                    <img src={item.img} className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="p-6 text-center space-y-1">
                        <div className="font-bold text-dark">{item.name}</div>
                        <div className="text-xs text-muted leading-tight">{item.sub}</div>
                    </div>
                </div>
            ))}
        </div>
      </section>

      {/* Material Section */}
      <section className="mx-auto max-w-7xl px-4 lg:px-8 py-20 border-t border-border">
        <div className="flex justify-between items-end mb-10">
            <h2 className="text-3xl font-extrabold text-dark tracking-tight">Material</h2>
            <a href="#" className="font-bold flex items-center gap-1 hover:text-brand transition-colors text-18">View All <ChevronRight size={14} /></a>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="relative rounded-lg overflow-hidden h-[400px] group cursor-pointer bg-light-grey">
                <img src="https://store.bblcdn.com/s7/default/3ba6053e2006421cb0a9cd8eeab7c1f3/PC.png" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="relative p-10 flex flex-col justify-start space-y-3">
                    <h3 className="text-2xl font-extrabold max-w-[250px]">Material Bulk Sale</h3>
                    <p className="text-sm">Buy 4/6/8 Items - Up to 15% Off</p>
                    <Link to="/products/h2c" className="mt-4 bg-transparent border border-dark px-8 py-2 rounded font-bold hover:bg-dark hover:text-white transition-colors w-fit block text-center">
                        Learn more
                    </Link>
                </div>
            </div>
            <div className="relative rounded-lg overflow-hidden h-[400px] group cursor-pointer bg-light-grey">
                <img src="https://store.bblcdn.com/s7/default/b985672beec44c5b9cddb8f714549531/BUNDLE-PC.png" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="relative p-10 flex flex-col justify-start space-y-3">
                    <h3 className="text-2xl font-extrabold max-w-[250px]">Hot Sale Bundle</h3>
                    <p className="text-sm">Less hassle, lower cost</p>
                    <Link to="/products/h2c" className="mt-4 bg-transparent border border-dark px-8 py-2 rounded font-bold hover:bg-dark hover:text-white transition-colors w-fit block text-center">
                        Learn more
                    </Link>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
                { name: 'Basswood Plywood', img: 'https://store.bblcdn.com/s7/default/714553b72ccf43b18e53fe86bdf6cf9d/B-YA001.png' },
                { name: 'Birch Plywood', img: 'https://store.bblcdn.com/s7/default/2aa1e37ffb0348d2b799ef7e798e0aac/B-YA002.png' },
                { name: 'Black Walnut Plywood', img: 'https://store.bblcdn.com/s7/default/0cf3ba465af44bb4b1ccb6e1746d7de3/B-YA003.png' },
                { name: 'Bamboo Board', img: 'https://store.bblcdn.com/s7/default/b15c981847cc4f20975fe504fc55d29d/B-YA005.png' }
            ].map((item) => (
                <div key={item.name} className="bg-light-grey rounded-lg overflow-hidden group cursor-pointer">
                    <img src={item.img} className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="p-4 text-center font-bold text-sm">{item.name}</div>
                </div>
            ))}
        </div>
      </section>

      {/* Why shop section */}
      <section className="bg-light-grey py-20 mb-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2 className="text-3xl font-extrabold text-center mb-16">Why shop on Bambu Lab Store</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                    { title: 'Exclusive Offers', sub: 'on Official Store', icon: 'https://store.bblcdn.com/s2/default/ccf0cf065521490ab4de917897e2059b/Download-3.svg' },
                    { title: '100% Secure', sub: 'Payment', icon: 'https://store.bblcdn.com/s2/default/8f932d94999d4ce0bf08a9fc7c1ea124/Download-2.svg' },
                    { title: '14-day Return', sub: '& Refund Service', icon: 'https://store.bblcdn.com/s2/default/68f11b893e984ec898022a324163f522/Download-1.svg' },
                    { title: 'Lifetime', sub: 'Customer Support', icon: 'https://store.bblcdn.com/s2/default/c943a31046324f2780b172e017ce037e/Download.svg' }
                ].map((item) => (
                    <div key={item.title} className="text-center group cursor-pointer">
                        <img src={item.icon} alt={item.title} className="w-16 h-16 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                        <h4 className="font-bold text-dark"><span className="text-brand">{item.title}</span> {item.sub}</h4>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="mx-auto max-w-7xl px-4 lg:px-8 mb-24">
        <div className="bg-dark rounded-2xl overflow-hidden flex flex-col lg:flex-row">
            <div className="flex-1 p-10 lg:p-16 flex flex-col justify-center space-y-8">
                <div>
                   <h3 className="text-3xl lg:text-4xl font-extrabold text-white">Get $10 OFF Over $100!</h3>
                   <p className="text-gray-400 mt-2">Eligible New Subscribers Only</p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3">
                    <input 
                        type="email" 
                        placeholder="Please enter email" 
                        className="flex-1 px-4 py-4 rounded bg-white text-dark focus:outline-none focus:ring-2 focus:ring-brand"
                    />
                    <button className="bg-brand hover:bg-brand-light text-white font-bold py-4 px-10 rounded transition-colors whitespace-nowrap">
                        Subscribe
                    </button>
                </div>
                
                <div className="flex gap-3 items-start">
                    <input type="checkbox" className="mt-1.5 w-4 h-4 accent-brand" />
                    <p className="text-[11px] text-gray-400 leading-relaxed">
                        I consent to receive marketing emails from Bambu Lab. Unsubscribe anytime 
                        via email links or contact us. See our Privacy Notice, Terms of Use, 
                        Terms of Sales and T&Cs for details.
                    </p>
                </div>
            </div>
            <div className="hidden lg:block lg:w-[500px]">
                <img src="https://store.bblcdn.com/s7/default/57ddddf3290648ab9165f1a9ea508e55/bottom_pc.png" className="w-full h-full object-cover" />
            </div>
        </div>
      </section>
    </div>
  );
}

function ChevronRight({ size = 24, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
