import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="section-container hero-content">
        <h1 className="hero-title">Dhanveer M</h1>
        <p className="hero-subtitle">AI & Machine Learning Enthusiast | Data Analyst | CSE Student</p>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '650px', margin: '0 auto 2.5rem', fontSize: '1.25rem', lineHeight: '1.6' }}>
          I am a 3rd Year B.E. Computer Science Engineering student at Panimalar Engineering College. 
          I specialize in building intelligent applications, performing data analytics, and researching multi-agent systems to solve complex computational problems.
        </p>
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
