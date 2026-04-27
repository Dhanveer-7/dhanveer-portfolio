import React from 'react';
import { Mail, Linkedin, Github, FileText } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="card" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
          <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Let's work together!</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.1rem' }}>
            I'm currently looking for new opportunities and collaborations. 
            Whether you have a question, a project idea, or just want to say hi, 
            I'll try my best to get back to you!
          </p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
            <a href="mailto:dhanveer24112006@gmail.com" className="btn-primary" style={{ width: '100%', maxWidth: '300px', justifyContent: 'center' }}>
              <Mail size={20} />
              Say Hello
            </a>
            
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
              <a href="https://www.linkedin.com/in/dhanveer-m-a0785232b/" target="_blank" rel="noopener noreferrer" 
                 style={{ padding: '0.75rem', borderRadius: '50%', backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)', boxShadow: 'var(--shadow-sm)', transition: 'all 0.3s' }}>
                <Linkedin size={24} />
              </a>
              <a href="https://github.com/Dhanveer-7" target="_blank" rel="noopener noreferrer"
                 style={{ padding: '0.75rem', borderRadius: '50%', backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)', boxShadow: 'var(--shadow-sm)', transition: 'all 0.3s' }}>
                <Github size={24} />
              </a>
              <a href="https://g.dev/Dhanveer" target="_blank" rel="noopener noreferrer"
                 style={{ padding: '0.75rem', borderRadius: '50%', backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)', boxShadow: 'var(--shadow-sm)', transition: 'all 0.3s' }} title="Google Dev Profile">
                <FileText size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
