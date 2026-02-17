import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax Effect for Background & Content
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scaleImage = useTransform(scrollYProgress, [0, 1], [1.1, 1.3]);

  return (
    <section 
      ref={containerRef}
      id="hero"
      className="relative h-[100vh] flex items-center justify-center overflow-hidden bg-[#FCFBF7]"
    >
      {/* Background Image with Parallax Scale */}
      <motion.div 
        style={{ 
          y: yBg, 
          scale: scaleImage,
          backgroundImage: "url('https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80')" 
        }}
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 opacity-[0.12]"
      />

      {/* Decorative Frame */}
      <div className="absolute inset-0 border-[15px] md:border-[30px] border-[#FCFBF7] pointer-events-none z-30 shadow-[inset_0_0_100px_rgba(0,0,0,0.02)]" />

      {/* Animated Content */}
      <motion.div 
        style={{ opacity: opacityText }}
        className="relative z-20 text-center px-6 max-w-5xl"
      >
        {/* Established Tag with Letter Spacing Animation */}
        <motion.div
          initial={{ opacity: 0, letterSpacing: "0.2em" }}
          animate={{ opacity: 1, letterSpacing: "0.6em" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-[#C5A059] text-[9px] md:text-xs font-semibold mb-8 block uppercase"
        >
          TOPMAN DESIGNER STUDIO • MUMBAI
        </motion.div>

        {/* Title with Mask/Slide Effect */}
        <div className="overflow-hidden mb-6">
          <motion.h1 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-9xl font-serif text-[#1A1A1A] leading-[1.1] tracking-tighter"
          >
            The Art of <br /> 
            <span className="italic font-light text-[#C5A059] serif-font">Modern Heritage</span>
          </motion.h1>
        </div>

        {/* Description with Staggered Fade */}
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-[10px] md:text-[12px] text-[#4A4A4A] mb-12 tracking-[0.4em] font-light uppercase flex items-center justify-center gap-3 flex-wrap"
        >
          <span>Sherwani</span> <span className="w-1 h-1 rounded-full bg-[#C5A059]"></span> 
          <span>Suits</span> <span className="w-1 h-1 rounded-full bg-[#C5A059]"></span> 
          <span>Jodhpuri</span> <span className="w-1 h-1 rounded-full bg-[#C5A059]"></span> 
          <span>Tuxedo</span>
        </motion.p>

        {/* Refined CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button className="group relative px-10 py-4 bg-[#1A1A1A] text-[#FCFBF7] text-[10px] tracking-[0.3em] uppercase transition-all duration-500 hover:shadow-2xl active:scale-95">
            <span className="relative z-10 group-hover:text-white">Explore Collection</span>
            <div className="absolute inset-0 bg-[#C5A059] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </button>
          
          <button className="relative px-10 py-4 border border-[#C5A059] text-[#1A1A1A] text-[10px] tracking-[0.3em] uppercase transition-all duration-500 hover:bg-[#C5A059] hover:text-white overflow-hidden">
            Book Appointment
          </button>
        </motion.div>
      </motion.div>

      {/* Floating Scroll Indicator - Fixed position */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center"
      >
        <div className="relative w-5 h-9 border border-[#C5A059]/40 rounded-full flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-1 bg-[#C5A059] rounded-full"
          />
        </div>
        <span className="text-[7px] tracking-[0.4em] text-[#C5A059] uppercase mt-3 opacity-60">Discover</span>
      </motion.div>

      {/* Subtle Side Accents */}
      <div className="absolute left-8 bottom-0 hidden lg:block overflow-hidden">
         <div className="h-32 w-[1px] bg-gradient-to-t from-[#C5A059]/40 to-transparent" />
      </div>
      <div className="absolute right-8 bottom-0 hidden lg:block overflow-hidden">
         <div className="h-32 w-[1px] bg-gradient-to-t from-[#C5A059]/40 to-transparent" />
      </div>
    </section>
  );
}