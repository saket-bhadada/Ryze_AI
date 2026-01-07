import React from "react";

const Navbar = () => {
  return (
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
        <a
          href="#case-studies"
          style={{
            color: "var(--text-secondary)",
            textDecoration: "none",
            fontSize: "0.9rem",
          }}
        >
          Case Studies
        </a>
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
  );
};

export default Navbar;
