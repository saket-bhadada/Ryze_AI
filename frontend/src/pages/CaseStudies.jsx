import React from 'react'
import { motion } from 'framer-motion'

const CaseStudies = () => {
  return (
    <motion.div
      layoutId="case-studies-bg"
      style={{
        minHeight: '100vh',
        padding: '6rem 2rem',
        background: 'linear-gradient(180deg, #030014 0%, #07021a 100%)',
        color: 'var(--text-primary)'
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <motion.h1 layoutId="case-studies-text" style={{ fontSize: '2rem', marginBottom: '1rem' }}>Case Studies</motion.h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
          A selection of customer stories and results.
        </p>
        <section style={{ display: 'grid', gap: '1rem' }}>
          <article style={{ padding: '1.25rem', borderRadius: 12, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.03)' }}>
            <h2 style={{ margin: 0 }}>Acme Corp — 3x Revenue Increase</h2>
            <p style={{ color: 'var(--text-secondary)', marginTop: '.5rem' }}>Brief summary of the case study. Click to expand for more.</p>
          </article>
          <article style={{ padding: '1.25rem', borderRadius: 12, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.03)' }}>
            <h2 style={{ margin: 0 }}>Beta LLC — Cost Savings with Automation</h2>
            <p style={{ color: 'var(--text-secondary)', marginTop: '.5rem' }}>Brief summary of the case study.</p>
          </article>
        </section>
      </div>
    </motion.div>
  )
}

export default CaseStudies
