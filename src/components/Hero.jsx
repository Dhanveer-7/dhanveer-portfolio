import React from 'react';
import { Github, Mail, Linkedin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="section-container hero-content">
        <h1 className="hero-title">Dhanveer M</h1>
        <p className="hero-subtitle">Aspiring Java Developer | Core Java, OOPs, Data Structures | Pre-Final Year</p>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 2rem' }}>
          B.E. Computer Science Engineering Student @ Panimalar Engineering College | Math Club Coordinator. 
          Passionate about AI, Machine Learning, and solving real-world problems.
        </p>
        <div className="hero-buttons">
          <a href="#contact" className="btn-primary">
            <Mail size={20} />
            Get in Touch
          </a>
          <a href="https://github.com/Dhanveer-7" target="_blank" rel="noopener noreferrer" className="btn-outline">
            <Github size={20} />
            GitHub
          </a>
          <a href="https://linkedin.com/in/dhanveer-m-a0785232b" target="_blank" rel="noopener noreferrer" className="btn-outline">
            <Linkedin size={20} />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
