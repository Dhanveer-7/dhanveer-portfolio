import React, { useState } from 'react';
import { Mail, Linkedin, Github, FileText, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setSubmitted(false);
      }, 5000);
    }
  };

  return (
    <section id="contact" className="contact bg-secondary">
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'start' }}>
          
          {/* Info Card */}
          <div className="card" style={{ borderLeft: '4px solid var(--primary-color)' }}>
            <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', fontWeight: '700' }}>Let's Connect!</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.1rem', lineHeight: '1.6' }}>
              I'm always open to discussing new opportunities, creative project ideas, research collaborations, or internship openings. 
              Drop me a message and I'll get back to you as soon as possible!
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <a href="mailto:dhanveer24112006@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-primary)', textDecoration: 'none', fontWeight: '600', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = 'var(--primary-color)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-primary)'}>
                <div style={{ padding: '0.5rem', borderRadius: '50%', backgroundColor: 'var(--bg-primary)', display: 'flex', color: 'var(--primary-color)' }}>
                  <Mail size={18} />
                </div>
                dhanveer24112006@gmail.com
              </a>

              <a href="https://linkedin.com/in/dhanveer-m-a0785232b" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-primary)', textDecoration: 'none', fontWeight: '600', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = 'var(--primary-color)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-primary)'}>
                <div style={{ padding: '0.5rem', borderRadius: '50%', backgroundColor: 'var(--bg-primary)', display: 'flex', color: 'var(--primary-color)' }}>
                  <Linkedin size={18} />
                </div>
                LinkedIn Profile
              </a>

              <a href="https://github.com/Dhanveer-7" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-primary)', textDecoration: 'none', fontWeight: '600', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = 'var(--primary-color)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-primary)'}>
                <div style={{ padding: '0.5rem', borderRadius: '50%', backgroundColor: 'var(--bg-primary)', display: 'flex', color: 'var(--primary-color)' }}>
                  <Github size={18} />
                </div>
                GitHub Repository
              </a>

              <a href="/dhanveer-portfolio/Dhanveer_M_Resume.pdf" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-primary)', textDecoration: 'none', fontWeight: '600', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = 'var(--primary-color)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-primary)'}>
                <div style={{ padding: '0.5rem', borderRadius: '50%', backgroundColor: 'var(--bg-primary)', display: 'flex', color: 'var(--primary-color)' }}>
                  <FileText size={18} />
                </div>
                View CV / Resume PDF
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card">
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <CheckCircle size={48} style={{ color: 'var(--primary-color)', marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Message Sent!</h3>
                <p style={{ color: 'var(--text-secondary)' }}>Thank you for reaching out, {formData.name || 'there'}. I will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                <div>
                  <label htmlFor="name" style={{ display: 'block', fontSize: '0.9rem', fontWeight: '600', marginBottom: '0.4rem', color: 'var(--text-primary)' }}>Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid var(--border-color)', outline: 'none', fontSize: '0.95rem' }}
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" style={{ display: 'block', fontSize: '0.9rem', fontWeight: '600', marginBottom: '0.4rem', color: 'var(--text-primary)' }}>Your Email *</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid var(--border-color)', outline: 'none', fontSize: '0.95rem' }}
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" style={{ display: 'block', fontSize: '0.9rem', fontWeight: '600', marginBottom: '0.4rem', color: 'var(--text-primary)' }}>Subject</label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid var(--border-color)', outline: 'none', fontSize: '0.95rem' }}
                    placeholder="Internship Inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" style={{ display: 'block', fontSize: '0.9rem', fontWeight: '600', marginBottom: '0.4rem', color: 'var(--text-primary)' }}>Message *</label>
                  <textarea
                    id="message"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid var(--border-color)', outline: 'none', fontSize: '0.95rem', resize: 'vertical' }}
                    placeholder="Write your message here..."
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '0.85rem', borderRadius: '6px' }}>
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
