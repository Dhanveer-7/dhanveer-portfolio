import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="section-container hero-content">
        <h1 className="hero-title">Dhanveer M</h1>
        <p className="hero-subtitle" style={{ fontSize: '1.65rem', fontWeight: '600', color: 'var(--primary-dark)' }}>AI/ML Engineer Specializing in Multi-Agent Systems & RAG</p>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 2rem', fontSize: '1.2rem', lineHeight: '1.6' }}>
          I am a 3rd Year B.E. Computer Science Engineering student at Panimalar Engineering College. 
          I engineer robust multi-agent systems, design vectorized RAG frameworks, and build analytics solutions to turn complex data into actionable, automated insights.
        </p>

        {/* Quantified Stats Strip */}
        <div className="stats-strip" style={{ display: 'flex', justifyContent: 'center', gap: '2rem', margin: '2.5rem auto 3rem', flexWrap: 'wrap', maxWidth: '800px' }}>
          <div style={{ padding: '0.5rem 1.5rem', textAlign: 'center', flex: '1 1 120px' }}>
            <div style={{ fontSize: '2.25rem', fontWeight: '800', color: 'var(--primary-color)' }}>6</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '0.2rem' }}>Internships</div>
          </div>
          <div style={{ padding: '0.5rem 1.5rem', textAlign: 'center', flex: '1 1 120px', borderLeft: '1px solid var(--border-color)' }} className="stat-border-left">
            <div style={{ fontSize: '2.25rem', fontWeight: '800', color: 'var(--primary-color)' }}>4</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '0.2rem' }}>Hackathons</div>
          </div>
          <div style={{ padding: '0.5rem 1.5rem', textAlign: 'center', flex: '1 1 120px', borderLeft: '1px solid var(--border-color)' }} className="stat-border-left">
            <div style={{ fontSize: '2.25rem', fontWeight: '800', color: 'var(--primary-color)' }}>1</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '0.2rem' }}>Research Paper</div>
          </div>
          <div style={{ padding: '0.5rem 1.5rem', textAlign: 'center', flex: '1 1 120px', borderLeft: '1px solid var(--border-color)' }} className="stat-border-left">
            <div style={{ fontSize: '2.25rem', fontWeight: '800', color: 'var(--primary-color)' }}>PoC</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '0.2rem' }}>ISRO Project</div>
          </div>
        </div>

        <div className="hero-buttons">
          <a href="#case-studies" className="btn-primary" style={{ fontSize: '1.1rem', padding: '0.85rem 2rem' }}>
            View My Projects
          </a>
          <a href="#contact" className="btn-outline" style={{ fontSize: '1.1rem', padding: '0.85rem 2rem' }}>
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
