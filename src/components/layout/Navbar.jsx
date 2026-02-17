import { useState, useEffect } from 'react';
import { Menu, X, Phone, Instagram, MapPin } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Logic: Scroll effect sirf tab dikhega jab mobile menu CLOSE ho
      if (!mobileMenuOpen) {
        setIsScrolled(window.scrollY > 40);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen]);

  // Prevent body scroll and force "Solid" header when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      // Menu close hote hi current scroll position check karo
      setIsScrolled(window.scrollY > 40);
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'The Studio', href: '#hero' },
    { name: 'Heritage', href: '#history' },
    { name: 'Collection', href: '#collection' },
    { name: 'Reels', href: '#reels' },
    { name: 'Why Us', href: '#whychoose' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav className={`fixed w-full z-[100] transition-all duration-500 ease-in-out ${
        // Agar mobile menu open hai, toh hamesha full background aur original padding rakho
        (isScrolled || mobileMenuOpen) 
          ? 'bg-[#FCFBF7] py-4 shadow-md' 
          : 'bg-transparent py-8'
      }`}>
        
        {/* --- Top Information Bar (Desktop) --- */}
        {/* Mobile menu khulte hi ye invisible ho jana chahiye to save space */}
        <div className={`hidden lg:block overflow-hidden transition-all duration-500 ${
          (isScrolled || mobileMenuOpen) ? 'max-h-0 opacity-0 mb-0' : 'max-h-10 opacity-100 mb-6'
        }`}>
          <div className="max-w-[1400px] mx-auto px-8 flex justify-between items-center border-b border-[#1A1A1A]/5 pb-3">
            <div className="flex gap-6 text-[9px] tracking-[0.3em] text-[#4A4A4A] font-medium">
              <span className="flex items-center gap-2"><MapPin size={12} className="text-[#C5A059]"/> MUMBAI, INDIA</span>
              <span className="opacity-30">|</span>
              <span>WORLDWIDE SHIPPING</span>
            </div>
            <div className="text-[9px] tracking-[0.3em] text-[#C5A059] font-bold">
              BESPOKE APPOINTMENT: +91 7021843417
            </div>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-8 flex justify-between items-center">
          
          {/* --- Left: Socials (Desktop Only) --- */}
          <div className="flex-1 hidden lg:flex items-center gap-6">
            <a href="https://instagram.com/topmandesignerstudio" target="_blank" rel="noreferrer" 
               className="text-[#1A1A1A] hover:text-[#C5A059] transition-all transform hover:scale-110">
              <Instagram size={20} strokeWidth={1.2} />
            </a>
          </div>

          {/* --- Center: Brand Identity --- */}
          <div className="flex flex-col items-center">
            <h1 className={`font-serif tracking-[0.5em] transition-all duration-500 text-[#1A1A1A] font-light leading-none ${
              // Mobile menu open hone par font size stable rakho (na bohot bada, na chota)
              (isScrolled || mobileMenuOpen) ? 'text-xl sm:text-2xl' : 'text-3xl sm:text-5xl'
            }`}>
              TOPMAN
            </h1>
            
            {/* Tagline logic: Menu open hone par ye hide ho jayegi for better mobile view */}
            <div className={`flex items-center gap-3 w-full transition-all duration-500 overflow-hidden ${
              (isScrolled || mobileMenuOpen) ? 'max-h-0 opacity-0 mt-0' : 'max-h-10 opacity-100 mt-2'
            }`}>
              <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#C5A059]/40"></div>
              <span className="text-[8px] tracking-[0.5em] text-[#C5A059] uppercase font-semibold whitespace-nowrap">
                Designer Studio
              </span>
              <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#C5A059]/40"></div>
            </div>
          </div>

          {/* --- Right: Desktop Links & Mobile Toggle --- */}
          <div className="flex-1 flex justify-end items-center gap-8">
            <ul className="hidden xl:flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-[#1A1A1A]">
              {navLinks.map((link) => (
                <li key={link.name} className="relative group overflow-hidden">
                  <a href={link.href} className="block py-1 group-hover:text-[#C5A059] transition-colors duration-500">
                    {link.name}
                  </a>
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#C5A059] transform -translate-x-[105%] group-hover:translate-x-0 transition-transform duration-500"></span>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-5">
              <a href="tel:+917021843417" className="text-[#1A1A1A] hover:text-[#C5A059] transition-all hidden sm:block">
                 <Phone size={19} strokeWidth={1.5} />
              </a>
              <button 
                className="xl:hidden z-[110] relative text-[#1A1A1A] p-2 focus:outline-none"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={28} strokeWidth={1.2} /> : <Menu size={28} strokeWidth={1.2} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* --- Fullscreen Mobile Menu Overlay --- */}
      <div className={`fixed inset-0 z-[95] bg-[#FCFBF7] transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${
        mobileMenuOpen ? 'translate-y-0 visible opacity-100' : '-translate-y-full invisible opacity-0'
      }`}>
        <div className="h-full flex flex-col items-center justify-center p-8">
          <div className="mb-12 text-[#C5A059] text-[10px] tracking-[0.8em] uppercase font-black opacity-40">
            Navigation
          </div>
          
          <div className="flex flex-col items-center space-y-6">
            {navLinks.map((link, index) => (
              <a 
                key={link.name} 
                href={link.href}
                className={`text-4xl font-serif text-[#1A1A1A] transition-all duration-700 ${
                  mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <div className={`mt-20 flex flex-col items-center gap-8 transition-all duration-1000 delay-500 ${
            mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent"></div>
            <a href="https://wa.me/917021843417" 
               className="text-[10px] tracking-[0.3em] font-bold text-[#FCFBF7] bg-[#1A1A1A] px-10 py-5 rounded-sm active:bg-[#C5A059] transition-all">
              WHATSAPP CONSULTATION
            </a>
          </div>
        </div>
      </div>
    </>
  );
}