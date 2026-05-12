import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const menuSections = [
    {
      title: 'Menu',
      items: [
        { label: 'Sale', href: '/' },
        { label: 'Printers', href: '/collections/3d-printer' },
        { label: 'AMS', href: '/' },
        { label: 'Filaments', href: '/' },
        { label: 'Accessories', href: '/' },
        { label: 'Material', href: '/' },
        { label: "Maker's Supply", href: '/' },
        { label: 'Support', href: '/' },
      ],
    },
    {
      title: 'Support',
      items: [
        { label: 'Order Tracker', href: '#' },
        { label: 'FAQ', href: '#' },
        { label: 'Official Wiki', href: '#' },
        { label: 'Shipping Policy', href: '#' },
        { label: 'Returns & Refunds', href: '#' },
        { label: 'Cookie Settings', href: '#' },
        { label: 'Privacy Notice', href: '#' },
        { label: 'Terms of Service', href: '#' },
        { label: 'Terms of Sales', href: '#' },
        { label: 'Warranty Statement', href: '#' },
        { label: 'Payment Help', href: '#' },
      ],
    },
    {
      title: 'Explore',
      items: [
        { label: 'Official Website', href: '#' },
        { label: 'Authorized Reseller', href: '#' },
        { label: 'Contact Us', href: '#' },
        { label: 'About Us', href: '#' },
      ],
    },
  ];

  return (
    <footer id="section-footer" className="border-t border-border bg-white text-muted py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {menuSections.map((section) => (
            <div key={section.title}>
              <h2 className="mb-6 font-bold text-dark text-lg">{section.title}</h2>
              <ul className="space-y-4">
                {section.items.map((item) => (
                  <li key={item.label}>
                    <Link to={item.href} className="text-muted hover:text-dark transition-colors duration-200 block text-[15px]">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h2 className="mb-6 font-bold text-dark text-lg">About Bambu Lab</h2>
            <div className="text-[15px] leading-relaxed mb-8">
              <p>
                Bambu Lab is a consumer tech company focusing on desktop 3D printers. 
                Starting with the X1 series, Bambu Lab builds state-of-the-art 3D printers 
                that break the barriers between the digital and physical worlds, 
                bringing creativity to a whole new level.
              </p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-muted hover:text-dark transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted hover:text-dark transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted hover:text-dark transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted hover:text-dark transition-colors" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <Link to="/" className="text-dark hover:text-brand font-semibold text-sm transition-colors">
            © Bambu Lab USA
          </Link>
        </div>
      </div>
    </footer>
  );
}
