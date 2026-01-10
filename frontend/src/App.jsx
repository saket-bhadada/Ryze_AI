import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import PerformanceReport from './components/PerformanceReport';
import Footer from './components/Footer';
import CaseStudies from './pages/CaseStudies';
import Pricing from './pages/Pricing';
import TestimonialsPage from './pages/Testimonials';
import LightPillar from './components/LightPillar';

function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Testimonials />
      <PerformanceReport />
      <Footer />
    </main>
  )
}

function App() {
  return (
    <>
      <LightPillar
        topColor="#5227FF"
        bottomColor="#FF9FFC"
        intensity={1.0}
        rotationSpeed={0.3}
        glowAmount={0.005}
        pillarWidth={3.0}
        pillarHeight={0.4}
        noiseIntensity={0.5}
        pillarRotation={0}
        interactive={false}
        mixBlendMode="normal"
      />
      <div className="app-content">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
