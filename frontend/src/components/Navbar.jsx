import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import "./App.css"; // Assuming your CSS variables are here

const Navbar = () => {
  // State to track if the page is open
  const [activePage, setActivePage] = useState(null);

  // Common transition settings for smoothness
  const transition = { type: "spring", stiffness: 200, damping: 25 };

  return (
    <>
      {/* --- THE NAVBAR --- */}
      <nav
        className="glass-panel"
        style={{
          position: "fixed",
          top: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "90%",
          maxWidth: "1200px",
          zIndex: 1000,
          padding: "1rem 2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            fontWeight: "bold",
            fontSize: "1.5rem",
            letterSpacing: "-0.5px",
          }}
        >
          Ryze<span className="text-gradient">.ai</span>
        </div>

        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          
          {/* 1. THE TRIGGER LINK */}
          {/* We wrap the link in a motion component */}
          <motion.div 
             layoutId="case-studies-bg" // THIS ID MUST MATCH THE PAGE ID
             onClick={() => setActivePage("case-studies")}
             style={{ cursor: "pointer", borderRadius: "8px" }}
          >
             <motion.a
              layoutId="case-studies-text" // Separate ID for text so it doesn't stretch weirdly
              style={{
                color: "var(--text-secondary)",
                textDecoration: "none",
                fontSize: "0.9rem",
                padding: "8px 12px", // Give it some hit area
                display: "block"
              }}
            >
              Case Studies
            </motion.a>
          </motion.div>

          <a
            href="#story"
            style={{
              color: "var(--text-secondary)",
              textDecoration: "none",
              fontSize: "0.9rem",
            }}
          >
            Our Story
          </a>

          <a
            href="#community"
            style={{
              color: "var(--text-secondary)",
              textDecoration: "none",
              fontSize: "0.9rem",
            }}
          >
            Community
          </a>

          <button
            className="btn-primary"
            style={{ padding: "0.5rem 1.25rem", fontSize: "0.9rem" }}
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* --- THE EXPANDED PAGE OVERLAY --- */}
      <AnimatePresence>
        {activePage === "case-studies" && (
          <>
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActivePage(null)} // Click outside to close
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "rgba(0,0,0,0.6)",
                backdropFilter: "blur(5px)",
                zIndex: 1050,
              }}
            />

            {/* The Actual Expanded Page */}
            <motion.div
              layoutId="case-studies-bg" // MATCHES THE NAV ITEM ID
              transition={transition}
              style={{
                position: "fixed",
                top: "5vh",
                left: "5vw",
                width: "90vw",
                height: "90vh",
                background: "#0f0728", // Matches your --bg-secondary
                borderRadius: "24px",
                overflow: "hidden",
                zIndex: 1100,
                border: "1px solid var(--glass-border)",
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                display: "flex",
                flexDirection: "column"
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setActivePage(null)}
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                  background: "rgba(255,255,255,0.1)",
                  border: "none",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                  color: "white",
                  cursor: "pointer",
                  zIndex: 10
                }}
              >
                ✕
              </button>

              {/* Page Content */}
              <div style={{ padding: "60px" }}>
                <motion.h1 
                  layoutId="case-studies-text" // MATCHES NAV TEXT ID
                  className="text-gradient"
                  style={{ fontSize: "3rem", margin: "0 0 2rem 0" }}
                >
                  Case Studies
                </motion.h1>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  style={{ color: "var(--text-secondary)", maxWidth: "600px" }}
                >
                  <p style={{ fontSize: "1.2rem", lineHeight: "1.6" }}>
                    Here is where your detailed case studies would appear. 
                    Notice how the text "Case Studies" floated from the navbar 
                    to this position automatically?
                  </p>
                  
                  <div style={{ marginTop: "40px", display: "grid", gap: "20px", gridTemplateColumns: "1fr 1fr" }}>
                    <div className="glass-panel" style={{ height: "200px", padding: "20px" }}>
                      <h3>Project Alpha</h3>
                      <p>AI Integration for Finance</p>
                    </div>
                    <div className="glass-panel" style={{ height: "200px", padding: "20px" }}>
                      <h3>Project Beta</h3>
                      <p>Automated Legal Compliance</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;