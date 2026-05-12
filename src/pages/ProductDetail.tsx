import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Star, ShieldCheck, Truck, RotateCcw, ChevronRight, Play, ChevronDown, X, Globe } from 'lucide-react';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { cn } from '../lib/utils.ts';

export default function ProductDetail() {
  const { id } = useParams();
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const product = {
    name: "Bambu Lab H2C",
    price: "2,399.00",
    description: "Hotend Change Multi-material Printing. Minimal Purge Waste Multi-Color Printing. Precise & Fast Inductive Nozzle Heating. Close-loop Servo Extruder.",
    images: [
      "https://store.bblcdn.com/s7/default/3f19a5313c094327a2d50d0923867299/H2CC.jpg",
      "https://store.bblcdn.com/s7/default/ceb1e8c7ba13457f9147844e6bce5b11/H2CL.jpg",
      "https://store.bblcdn.com/s7/default/46261d7d0a484f7c9b8f9b8b0bd424bc/3.jpg",
      "https://store.bblcdn.com/s7/default/db73b54173b04296a6784f63ff1e6e80/4.jpg",
      "https://store.bblcdn.com/s7/default/8e7435ab5f0c4d1d9879d047e72d34b5/1.jpg"
    ],
    video: "https://store.bblcdn.com/s7/default/aa8be6b62b574ac984ff2beec3cec123/PC_2.mp4",
    poster: "https://store.bblcdn.com/s7/default/9813ddf4755f42f9bfadb9260aa1de43/PC.jpg"
  };

  const specs = [
    { label: "Printing Technology", val: "Fused Deposition Modeling" },
    { label: "Build Volume (Left)", val: "325*320*320 mm³" },
    { label: "Dual Nozzle Printing", val: "300*320*325 mm³" },
    { label: "Max Nozzle Temp", val: "350 °C" },
    { label: "Max Heatbed Temp", val: "120 °C" },
    { label: "Max Speed", val: "1000 mm/s" },
    { label: "Max Acceleration", val: "20,000 mm/s²" },
    { label: "Chamber Heating", val: "Active (Max 65 °C)" }
  ];

  const faqs = [
    { q: "1. What hotends are included in the H2C Combo?", a: "The H2C AMS Combo includes 8 hotends and 1 AMS 2 Pro. It features 4x 0.4mm hardened steel induction hotends, 1x 0.2mm and 1x 0.6mm induction hotends for the right side, and 2x 0.4mm hardened steel standard hotends for the left side." },
    { q: "2. If I want full hotend-swap capability, what additional hotends do I need?", a: "To fully experience the Vortek 6-hotend automatic swap system, we recommend purchasing extra AMS and Hotends which include: 3 × 0.4 mm induction hotends, 1 × 0.2 mm left hotend, 1 × 0.6 mm left hotend, 1 x AMS 2 Pro, 1 x AMS HT." },
    { q: "3. Does the H2C support laser and blade-cutting functions?", a: "The H2C Laser Edition supports both 10W and 40W laser modules and is also compatible with the blade-cutting module. The non-laser H2C supports blade-cutting by default." },
    { q: "4. How many colors can it print at most?", a: "The H2C supports up to 24 materials in a single print through parallel-connected AMS units. In extreme scenarios, it can support up to 25 colors." }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Video Section */}
      <section className="relative h-[600px] xl:h-[800px] w-full bg-black overflow-hidden">
        <video 
           src={product.video} 
           poster={product.poster}
           autoPlay 
           muted 
           loop 
           playsInline 
           className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
             className="space-y-6"
           >
              <h1 className="text-xl font-bold bg-gradient-to-r from-orange-200 to-yellow-500 bg-clip-text text-transparent">Bambu Lab H2C</h1>
              <h2 className="text-4xl lg:text-7xl font-extrabold text-white leading-tight">Uncompromising <br/>Multi-Material.</h2>
              <button className="bg-white/90 backdrop-blur text-dark rounded-full px-10 py-3 font-bold flex items-center gap-2 mx-auto hover:bg-white transition-all transform hover:scale-105 active:scale-95">
                 <Play size={20} fill="currentColor" /> Watch Video
              </button>
           </motion.div>
        </div>
      </section>

      {/* Main Product Info Section */}
      <div className="mx-auto max-w-7xl px-4 lg:px-8 py-20" id="buy-section">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Gallery - Left Column */}
          <div className="lg:col-span-7 space-y-6">
             <div className="bg-light-grey rounded-2xl overflow-hidden aspect-square">
                <Swiper
                  modules={[Pagination, Autoplay]}
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 5000 }}
                  className="h-full w-full"
                >
                  {product.images.map((img, i) => (
                    <SwiperSlide key={i}>
                      <img src={img} className="w-full h-full object-cover" alt="" />
                    </SwiperSlide>
                  ))}
                </Swiper>
             </div>
             <div className="grid grid-cols-5 gap-3">
                {product.images.map((img, i) => (
                  <div key={i} className="aspect-square bg-light-grey rounded-lg overflow-hidden border border-border cursor-pointer hover:border-brand transition-colors group">
                    <img src={img} className="w-full h-full object-cover transition-transform group-hover:scale-110" alt="" />
                  </div>
                ))}
             </div>
          </div>

          {/* Product Actions - Right Column */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-4">
              <div className="flex items-center gap-1 text-brand">
                 {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                 <span className="text-muted text-sm ml-2 font-medium">(256 verified reviews)</span>
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight">Bambu Lab H2C</h1>
              <div className="flex items-center gap-2">
                 <div className="text-3xl font-extrabold text-dark tracking-tighter">${product.price} USD</div>
                 <div className="text-brand font-bold text-xs bg-brand/10 px-2 py-1 rounded">FREE SHIPPING</div>
              </div>
            </div>

            <div className="space-y-4 pt-6 border-t border-border">
               <h3 className="font-bold text-lg text-dark">Product Features</h3>
               <ul className="space-y-4">
                 {[
                   "Hotend Change Multi-material Printing",
                   "Minimal Purge Waste Multi-Color Printing",
                   "Precise & Fast Inductive Nozzle Heating",
                   "Close-loop Servo Extruder",
                   "350°C Nozzles & 65°C Active Heated Chamber",
                   "330*320*325 mm³ Build Volume"
                 ].map(item => (
                   <li key={item} className="flex gap-3 text-muted text-[15px] font-medium leading-snug">
                      <span className="text-brand flex-shrink-0">•</span> {item}
                   </li>
                 ))}
               </ul>
            </div>

            <div className="space-y-4">
               <div className="flex flex-col gap-4">
                  <button className="w-full bg-dark hover:bg-black text-white font-extrabold py-4 rounded-md transition-all shadow-md active:scale-[0.99]">
                    ADD TO CART
                  </button>
                  <button className="w-full bg-brand hover:bg-brand-light text-white font-extrabold py-4 rounded-md transition-all shadow-lg shadow-brand/20 active:scale-[0.99]">
                    BUY NOW
                  </button>
               </div>
            </div>

            <div className="grid grid-cols-2 gap-x-6 gap-y-4 pt-10 border-t border-border">
               {[
                 { icon: ShieldCheck, text: "Official Warranty" },
                 { icon: Truck, text: "Fast Shipping" },
                 { icon: RotateCcw, text: "14-Day Returns" },
                 { icon: Globe, text: "Lifetime Support" }
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-3">
                    <div className="p-2 bg-light-grey rounded-full border border-border text-brand"><item.icon size={18} /></div>
                    <span className="text-xs font-bold text-dark">{item.text}</span>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </div>

      {/* Segmented Feature Section */}
      <section className="bg-dark text-white py-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
           <div className="text-center max-w-3xl mx-auto space-y-6 mb-20">
              <motion.h2 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="text-4xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-b from-gray-100 to-gray-400 bg-clip-text text-transparent"
              >
                Vortek Hotend Change System
              </motion.h2>
              <p className="text-gray-400 text-lg lg:text-xl font-medium">Faster, cleaner multi-color prints with less weight. No more nozzle purging between every color swap.</p>
           </div>
           
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {[
                { title: 'Minimal Purge Waste', desc: 'Saves up to 60% print time and drastically reduces material waste.', img: 'https://store.bblcdn.com/s7/default/ec971bd3a124430d82349819e6f42061/PC1.jpg' },
                { title: 'Auto Filament Change', desc: 'Intelligent automation for complex, multi-material projects.', img: 'https://store.bblcdn.com/s7/default/e0bfaf0d28de4bf68ef5d965f110f60c/PC2.jpg' },
                { title: '8-Second Heating', desc: 'Induction heating reaches printing temperature in record time.', img: 'https://store.bblcdn.com/s7/default/1599080ebe7f448d8f5a23792928c958/PC5.jpg' },
                { title: 'Vision Calibration', desc: 'Automated offset calibration within 25 microns of precision.', img: 'https://store.bblcdn.com/s7/default/2bcf2dff0c364d9898758232bdcee29a/PC9.jpg' }
              ].map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden group cursor-pointer"
                >
                    <img src={feature.img} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-10">
                       <h3 className="text-2xl font-bold">{feature.title}</h3>
                       <p className="text-gray-300 mt-2 font-medium">{feature.desc}</p>
                    </div>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-24 bg-white">
         <div className="mx-auto max-w-5xl px-4 lg:px-8">
            <h2 className="text-4xl font-extrabold text-center mb-16 tracking-tight">H2C Technical Specifications</h2>
            <div className="border border-border rounded-2xl overflow-hidden shadow-xl shadow-gray-100 overflow-x-auto">
               <table className="w-full text-left">
                  <thead className="bg-[#f9f9f9] border-b border-border">
                     <tr>
                        <th className="px-8 py-6 font-bold text-dark uppercase tracking-wider text-sm">Item</th>
                        <th className="px-8 py-6 font-bold text-dark uppercase tracking-wider text-sm">Specifications</th>
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                     {specs.map(item => (
                       <tr key={item.label} className="group hover:bg-light-grey/30 transition-colors">
                          <td className="px-8 py-6 font-bold text-dark bg-light-grey/20 w-1/3 border-r border-border">{item.label}</td>
                          <td className="px-8 py-6 text-muted font-medium">{item.val}</td>
                       </tr>
                     ))}
                  </tbody>
               </table>
            </div>
            <div className="mt-10 flex justify-center">
                <button className="text-brand font-bold flex items-center gap-2 hover:underline">
                  Download Full TDS (PDF) <ChevronRight size={16} />
                </button>
            </div>
         </div>
      </section>

      {/* Unboxing Video Section */}
      <section className="py-24 bg-dark overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
           <h2 className="text-3xl lg:text-4xl font-extrabold text-center text-white mb-16">Unboxing Video</h2>
           <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl group cursor-pointer">
              <img 
                src="https://store.bblcdn.com/s7/default/f9cc8472e25c454a9174308d598df2c1/unboxing_pc.jpg" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80" 
                alt="Unboxing" 
              />
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-20 h-20 bg-brand rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                    <Play size={32} fill="currentColor" className="ml-1" />
                 </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                 <p className="text-white font-medium">Watch the official unboxing of Bambu Lab H2C and see what's inside the box.</p>
              </div>
           </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
           <h2 className="text-4xl font-extrabold text-center mb-16 tracking-tight text-dark">FAQ</h2>
           <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white rounded-xl border border-border shadow-sm overflow-hidden transition-all duration-300">
                   <button 
                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                    className="w-full px-8 py-6 flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
                   >
                      <span className="font-bold text-dark text-lg">{faq.q}</span>
                      <ChevronDown className={cn("text-brand transition-transform duration-500", activeFaq === idx && "rotate-180")} size={24} />
                   </button>
                   {activeFaq === idx && (
                     <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        className="px-8 pb-8 text-muted leading-relaxed font-medium"
                     >
                        {faq.a}
                     </motion.div>
                   )}
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Bottom Sticky Action */}
      <div className="fixed bottom-0 left-0 right-0 p-4 pb-safe bg-white border-t border-border xl:hidden z-[60] flex items-center shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
          <div className="flex flex-col justify-center px-4">
             <span className="text-[10px] font-bold text-muted uppercase tracking-widest">Price</span>
             <span className="font-extrabold text-xl text-dark tracking-tighter">$2,399.00</span>
          </div>
          <button className="flex-1 bg-brand text-white font-bold py-4 rounded-lg transform active:scale-95 transition-transform shadow-lg shadow-brand/20">
            BUY NOW
          </button>
      </div>
    </div>
  );
}
