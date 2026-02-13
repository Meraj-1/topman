import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf')",
      }}
    >
      <div className="bg-black/70 absolute inset-0"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative text-center z-10"
      >
        <h1 className="text-5xl md:text-7xl font-luxury text-gold mb-6">
          Beat Ethnic Designer Outfits
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Sherwani | Jodhpuri | Suits | Tuxedo | Indo-Western
        </p>
        <button className="px-8 py-3 bg-gold text-black font-semibold rounded">
          Explore Collection
        </button>
      </motion.div>
    </section>
  );
}
