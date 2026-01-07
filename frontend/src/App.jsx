import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import PerformanceReport from './components/PerformanceReport';
import Footer from './components/Footer';

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <PerformanceReport />
      <Footer />
    </main>
  );
}

export default App;
