import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { ShoppingCart, User, Search, Menu as MenuIcon, ChevronRight, Globe } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils.ts';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartCount = 0;

  const announcements = [
    'Dual-nozzle printing, made accessible. Meet Bambu Lab X2D. Learn More >>',
    'The Classic Evolves. All-New Bambu Lab P2S — Learn More >>',
    '🎉Meet the Ultimate Single-Nozzle 3D Printer! Learn More>>'
  ];

  const navItems = [
    { label: 'Sale', href: '/', hasIcon: true },
    { label: 'Printers', href: '/collections/3d-printer' },
    { label: 'AMS', href: '#' },
    { label: 'Filaments', href: '#' },
    { label: 'Accessories', href: '#' },
    { label: 'Material', href: '#' },
    { label: "Maker's Supply", href: '#' },
    { label: 'Support', href: 'https://bambulab.com/en/support', external: true },
  ];

  return (
    <header id="nav-header" className="sticky top-0 w-full bg-white z-50 shadow-sm">
      {/* Top Notice Header */}
      <div 
        id="notice-header" 
        className="h-9 text-[12px] leading-[17px] transition-all duration-300 overflow-hidden"
        style={{ background: 'linear-gradient(270.02deg, rgb(43, 44, 52) 11.04%, rgb(113, 109, 166) 100%)', color: 'rgb(245, 245, 245)' }}
      >
        <div className="mx-auto flex h-full items-center max-w-7xl px-4 lg:px-8 justify-between">
          <div className="hidden xl:flex items-center shrink-0">
            <a target="_blank" className="underline hover:no-underline cursor-pointer transition-colors duration-300" href="https://bambulab.com/">Bambulab.com</a>
          </div>
          <div className="flex-1 flex items-center justify-center overflow-hidden xl:px-4 h-full">
             <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 3000 }}
                loop
                direction="vertical"
                className="h-full w-full"
             >
                {announcements.map((text, i) => (
                  <SwiperSlide key={i} className="flex items-center justify-center">
                    <div className="text-[13px] font-medium text-center cursor-pointer">
                        {text}
                    </div>
                  </SwiperSlide>
                ))}
             </Swiper>
          </div>
          <div className="hidden xl:flex gap-1 items-center shrink-0">
            <button type="button" className="flex items-center gap-1 font-medium text-white">
              <Globe size={16} />
              <span>United States</span>
              <ChevronRight size={12} className="rotate-90" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Menu Header */}
      <div className="h-16 bg-white border-b border-border">
        <div className="mx-auto flex h-full items-center max-w-7xl px-4 lg:px-8 justify-between gap-6">
          <div className="flex gap-3 items-center shrink-0 h-full">
            <button 
              className="block xl:hidden p-1 hover:bg-light-grey rounded"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <MenuIcon size={24} />
            </button>
            <Link className="shrink-0" to="/">
              <img 
                alt="Bambu Lab" 
                width="100" 
                height="30" 
                className="w-20 h-6 xl:w-28 xl:h-8" 
                src="https://store.bblcdn.com/static/image/709db1f267756f4886616016f4370d06.png" 
              />
            </Link>
          </div>

          <nav className="hidden xl:block h-full">
            <ul className="flex h-full items-center gap-6 2xl:gap-8 font-bold text-sm tracking-tight">
              {navItems.map((item) => (
                <li key={item.label} className="h-full flex items-center group relative">
                   <Link 
                    to={item.href} 
                    className={cn(
                      "flex items-center gap-1 text-dark hover:text-brand transition-colors",
                      item.label === 'Sale' && "text-orange-500"
                    )}
                    target={item.external ? "_blank" : undefined}
                   >
                     {item.label === 'Sale' && (
                       <svg width="14" height="20" viewBox="0 0 14 20" fill="none" className="shrink-0">
                         <path d="M8.27951 1.42117C9.02554 1.07658 9.91125 1.31376 10.3849 1.98531L12.9397 5.60785C13.2309 6.02082 13.3242 6.54246 13.1934 7.03059L10.5354 16.9502C10.292 17.8586 9.35788 18.3979 8.44952 18.1545L1.87104 16.3918C0.962679 16.1484 0.423354 15.2142 0.666748 14.3059L3.3247 4.38628C3.45548 3.89821 3.79618 3.49278 4.25483 3.28076L8.27951 1.42117ZM8.68499 4.11497C7.77673 3.87179 6.8434 4.41126 6.60004 5.31951C6.35677 6.22772 6.89553 7.16069 7.80364 7.40421C8.71195 7.64759 9.64582 7.10913 9.88928 6.20086C10.1327 5.2925 9.59335 4.35837 8.68499 4.11497Z" fill="#FF8400" />
                       </svg>
                     )}
                     <span>{item.label}</span>
                   </Link>
                   <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand group-hover:w-full transition-all duration-300" />
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex gap-3 items-center shrink-0 h-full">
            <button className="p-1.5 hover:bg-light-grey rounded transition-colors group">
              <Search size={22} className="text-dark group-hover:text-brand" />
            </button>
            <button className="p-1.5 hover:bg-light-grey rounded transition-colors group relative">
              <ShoppingCart size={22} className="text-dark group-hover:text-brand" />
              <span className="absolute -top-1 -right-1 bg-brand text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">0</span>
            </button>
            <button className="p-1.5 hover:bg-light-grey rounded transition-colors group">
              <User size={22} className="text-dark group-hover:text-brand" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
