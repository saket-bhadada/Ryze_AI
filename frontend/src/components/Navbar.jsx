import React, { useState } from "react";

import { useNavigate } from 'react-router-dom'
// import "./App.css"; // Assuming your CSS variables are here

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (destination) => {
    setIsMobileMenuOpen(false); // Close mobile menu if open
    
    if (destination === 'features') {
      const element = document.getElementById('autonomous-ai-marketer');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate('/');
        setTimeout(() => {
          const el = document.getElementById('autonomous-ai-marketer');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else if (destination === 'testimonials') {
       const element = document.getElementById('testimonials');
       if (element) {
         element.scrollIntoView({ behavior: 'smooth' });
       } else {
         navigate('/');
         setTimeout(() => {
           const el = document.getElementById('testimonials');
           if (el) el.scrollIntoView({ behavior: 'smooth' });
         }, 100);
       }
    } else if (destination === 'pricing') {
      navigate('/pricing');
    }
  };

  return (
    <>
      <nav className="glass-panel navbar">
        <div className="navbar-logo" onClick={() => { navigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} style={{cursor: 'pointer'}}>
          Ryze<span className="text-gradient">.ai</span>
        </div>

        {/* Desktop Links */}
        <div className="navbar-links">
          <div className="nav-link-item" onClick={() => handleNavigation('features')}>Features</div>
          <div className="nav-link-item" onClick={() => handleNavigation('testimonials')}>Testimonials</div>
          <button className="btn-primary" onClick={() => handleNavigation('pricing')}>Get Started</button>
        </div>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(true)}>
          ☰
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={() => setIsMobileMenuOpen(false)}>✕</button>
        
        <div className="navbar-logo" onClick={() => { setIsMobileMenuOpen(false); navigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          Ryze<span className="text-gradient">.ai</span>
        </div>

        <div className="nav-link-item" onClick={() => handleNavigation('features')}>Features</div>
        <div className="nav-link-item" onClick={() => handleNavigation('testimonials')}>Testimonials</div>
        <button className="btn-primary" style={{marginTop: '2rem'}} onClick={() => handleNavigation('pricing')}>Get Started</button>
      </div>
    </>
  );
};

export default Navbar;