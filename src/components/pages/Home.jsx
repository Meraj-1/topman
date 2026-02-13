import React, { useEffect } from 'react';
// Layout
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

// Sections
import Hero from "../sections/Hero";
import About from "../sections/About";
import History from "../sections/History";
import Collection from "../sections/Collection";
import WhyChooseUs from "../sections/WhyChooseUs";
import Reels from "../sections/Reels";
import Contact from "../sections/Contact";

export default function Home() {
  return (
    <main className="bg-[#FCFBF7] min-h-screen">
      <Navbar />
      
      {/* Sections with IDs for Smooth Scrolling */}
      <section id="hero"><Hero /></section>
      <section id="about"><About /></section>
      <section id="history"><History /></section>
      <section id="collection"><Collection /></section>
      <section id="whychoose"><WhyChooseUs /></section>
      <section id="reels"><Reels /></section>
      <section id="contact"><Contact /></section>
      
      <Footer />
    </main>
  );
}