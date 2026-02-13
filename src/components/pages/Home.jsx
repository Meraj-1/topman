import Navbar from "../layout/Navbar";
import Hero from "../sections/Hero";
import About from "../sections/About";
import History from "../sections/History";
import Collection from "../sections/Collection";
import WhyChooseUs from "../sections/WhyChooseUs";
import Reels from "../sections/Reels";
import Contact from "../sections/Contact";
import Footer from "../layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <History />
      <Collection />
      <WhyChooseUs />
      <Reels />
      <Contact />
      <Footer />
    </>
  );
}
