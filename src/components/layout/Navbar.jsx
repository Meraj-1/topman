import { useState, useEffect } from 'react';
import { Menu, X, Search, Phone, Instagram, MapPin } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Aapki demand ke mutabiq updated links
  const navLinks = [
    { name: 'The Studio', href: '#hero' },
    { name: 'Heritage', href: '#history' },
    { name: 'Collection', href: '#collection' },
    { name: 'Reels', href: '#reels' },
    { name: 'Why Us', href: '#whychoose' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-700 ${
      isScrolled 
        ? 'bg-[#FCFBF7]/95 backdrop-blur-md py-3 shadow-sm border-b border-[#C5A059]/10' 
        : 'bg-transparent py-8'
    }`}>
      {/* Top Thin Bar - Sirf Desktop par dikhega for Extra Luxury feel */}
      {!isScrolled && (
        <div className="hidden lg:flex justify-between max-w-[1400px] mx-auto px-8 mb-4 border-b border-[#1A1A1A]/5 pb-2">
          <div className="flex gap-4 text-[9px] tracking-[0.3em] text-[#4A4A4A]">
            <span className="flex items-center gap-1"><MapPin size={10}/> MUMBAI, INDIA</span>
            <span className="opacity-50">|</span>
            <span>WORLDWIDE SHIPPING</span>
          </div>
          <div className="text-[9px] tracking-[0.3em] text-[#C5A059]">
            BOOK YOUR BESPOKE APPOINTMENT: +91 7021843417
          </div>
        </div>
      )}

      <div className="max-w-[1400px] mx-auto px-8 flex justify-between items-center">
        
        {/* Left Side: Instagram Social */}
        <div className="hidden lg:flex items-center gap-6 text-[#4A4A4A]">
          <a href="https://instagram.com/topmandesignerstudio" target="_blank" rel="noreferrer" className="hover:text-[#C5A059] transition-colors">
            <Instagram size={18} strokeWidth={1.2} />
          </a>
        </div>

        {/* Center: Brand Identity (Dynamic sizing on scroll) */}
        <div className="flex flex-col items-center group cursor-pointer">
          <h1 className={`font-serif tracking-[0.4em] transition-all duration-700 text-center ${
            isScrolled ? 'text-xl' : 'text-4xl'
          } text-[#1A1A1A] font-light`}>
            TOPMAN
          </h1>
          <div className={`flex items-center gap-3 w-full transition-opacity duration-500 ${isScrolled ? 'opacity-0 h-0' : 'opacity-100'}`}>
            <div className="h-[0.5px] flex-1 bg-[#C5A059]/40"></div>
            <span className="text-[8px] tracking-[0.6em] text-[#C5A059] uppercase py-1 font-medium">
              Designer Studio
            </span>
            <div className="h-[0.5px] flex-1 bg-[#C5A059]/40"></div>
          </div>
        </div>

        {/* Right Side: Desktop Menu */}
        <div className="flex items-center gap-8">
          <ul className="hidden xl:flex gap-10 text-[10px] font-medium uppercase tracking-[0.25em] text-[#1A1A1A]">
            {navLinks.map((link) => (
              <li key={link.name} className="relative group cursor-pointer overflow-hidden">
                <a href={link.href} className="block group-hover:text-[#C5A059] transition-colors duration-500 py-1">
                  {link.name}
                </a>
                {/* Dashing Underline Effect */}
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#C5A059] -translate-x-[105%] group-hover:translate-x-0 transition-transform duration-500"></span>
              </li>
            ))}
          </ul>

          {/* Search & Mobile Icons */}
          <div className="flex items-center gap-5 text-[#1A1A1A]">
            <a href="tel:+917021843417" className="hover:text-[#C5A059] hidden sm:block">
               <Phone size={18} strokeWidth={1.5} />
            </a>
            <button 
              className="xl:hidden text-[#1A1A1A] hover:rotate-90 transition-transform duration-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={26} strokeWidth={1.2} /> : <Menu size={26} strokeWidth={1.2} />}
            </button>
          </div>
        </div>
      </div>

      {/* Royal Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-[#FCFBF7] transition-all duration-700 ease-in-out z-[-1] flex flex-col items-center justify-center space-y-8 ${
        mobileMenuOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-full opacity-0 invisible'
      }`}>
        <div className="absolute top-10 text-[#C5A059] text-[9px] tracking-[0.7em] uppercase opacity-60 font-bold">Menu</div>
        
        {navLinks.map((link, index) => (
          <a 
            key={link.name} 
            href={link.href}
            className={`text-3xl font-serif text-[#1A1A1A] hover:text-[#C5A059] transition-all duration-300 ${mobileMenuOpen ? 'translate-y-0' : 'translate-y-10'}`}
            style={{ transitionDelay: `${index * 100}ms` }}
            onClick={() => setMobileMenuOpen(false)}
          >
            {link.name}
          </a>
        ))}
        
        <div className="mt-12 flex flex-col items-center gap-4">
          <div className="h-[1px] w-12 bg-[#C5A059]/40"></div>
          <a href="https://wa.me/917021843417" className="text-[10px] tracking-[0.4em] text-[#4A4A4A] border border-[#C5A059] px-6 py-3 hover:bg-[#C5A059] hover:text-white transition-all">
             WHATSAPP CONSULTATION
          </a>
        </div>
      </div>
    </nav>
  );
}