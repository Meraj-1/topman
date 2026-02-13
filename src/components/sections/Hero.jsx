import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section 
      id="hero"
      className="relative h-[100vh] flex items-center justify-center overflow-hidden bg-[#FCFBF7]"
    >
      {/* Background Image with Light Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80')",
          opacity: '0.15' // Light theme ke liye image ko fade kiya hai
        }}
      />

      {/* Decorative Elements - Luxury Feel ke liye */}
      <div className="absolute inset-0 border-[20px] border-white/50 pointer-events-none z-10" />

      <div className="relative z-20 text-center px-6 max-w-5xl">
        {/* Established Tag */}
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[#C5A059] tracking-[0.6em] text-[10px] md:text-xs font-medium mb-6 block uppercase"
        >
          Topman Designer Studio Mumbai
        </motion.span>

        {/* Main Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl md:text-8xl font-serif text-[#1A1A1A] mb-8 leading-tight tracking-tight"
        >
          The Art of <br /> 
          <span className="italic font-light text-[#C5A059]">Modern Heritage</span>
        </motion.h1>

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-sm md:text-base text-[#4A4A4A] mb-12 tracking-[0.2em] font-light uppercase"
        >
          Sherwani <span className="mx-2 text-[#C5A059]">•</span> 
          Suits <span className="mx-2 text-[#C5A059]">•</span> 
          Jodhpuri <span className="mx-2 text-[#C5A059]">•</span> 
          Tuxedo
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <button className="group relative px-12 py-4 bg-[#1A1A1A] text-white text-[10px] tracking-[0.3em] uppercase overflow-hidden transition-all duration-500 hover:bg-[#C5A059]">
            <span className="relative z-10">Explore Collection</span>
          </button>
          
          <button className="px-12 py-4 border border-[#C5A059] text-[#1A1A1A] text-[10px] tracking-[0.3em] uppercase hover:bg-[#C5A059]/5 transition-all duration-500">
            Book Appointment
          </button>
        </motion.div>
      </div>

      {/* Floating Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-[8px] tracking-[0.3em] text-[#C5A059] uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#C5A059] to-transparent" />
      </motion.div>
    </section>
  );
}