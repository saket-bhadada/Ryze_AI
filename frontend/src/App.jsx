import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import PerformanceReport from './components/PerformanceReport';
import Footer from './components/Footer';
import CaseStudies from './pages/CaseStudies';

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
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-studies" element={<CaseStudies />} />
      </Routes>
    </>
  );
}

export default App;
