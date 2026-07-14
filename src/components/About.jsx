import React from 'react';
import { Download, BookOpen, Award, GraduationCap } from 'lucide-react';

const About = () => {
  const certifications = [
    { name: "AI-Powered Digital Twin of India's Climate — ISRO Bharatiya Antariksh Hackathon 2026", link: "https://dhanveer-7-climate-twin--app-eodlti.streamlit.app/" },
    { name: "Exploratory Data Analysis (Level 2 – AI Ready of AI ASCEND) — Accenture via FutureSkills PRIME", link: "" },
    { name: "AWS Educate Introduction to Cloud 101", link: "https://lnkd.in/gHibjaud" },
    { name: "AWS Educate Introduction to Generative AI", link: "https://lnkd.in/gh-Q4g2H" },
    { name: "AWS Educate Machine Learning Foundations", link: "https://lnkd.in/gegCRceu" },
    { name: "Artificial Intelligence Fundamentals — IBM via Edunet Foundation", link: "https://lnkd.in/gUX6nWjC" },
    { name: "AWS APAC Solutions Architecture Virtual Experience (Forage)", link: "" },
    { name: "AI Ascend 2026 Learning Program (Kyndryl & AWS)", link: "" },
    { name: "C Programming Certification (GUVI & HCL)", link: "" },
    { name: "Postman API Fundamentals Student Expert", link: "" },
    { name: "Basics of Python (Infosys Springboard)", link: "" },
    { name: "Website Development (Igniters)", link: "" },
    { name: "Power BI for Beginners (Simplilearn)", link: "" },
    { name: "DCA (MS Office) & Web Designing (NKI Education)", link: "" }
  ];

  const skillGroups = [
    {
      title: "Programming Languages",
      skills: ["Java (Core & OOPs)", "Python", "C", "C++", "HTML", "CSS", "JavaScript"]
    },
    {
      title: "AI, Machine Learning & Data",
      skills: ["Generative AI", "Multi-Agent Frameworks", "RAG Systems", "XGBoost", "Scikit-Learn", "SQLite", "MongoDB", "Power BI", "Plotly"]
    },
    {
      title: "Frameworks, Tools & Cloud",
      skills: ["React.js", "Node.js", "Spring Boot", "AWS Services", "Postman API", "Git / GitHub"]
    },
    {
      title: "Concepts & Methodologies",
      skills: ["Data Structures", "Algorithm Design", "Software Development", "API Integration", "Database Management"]
    }
  ];

  return (
    <section id="about" className="about">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        {/* Intro & Career Goal */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3.5rem' }}>
          <div className="card" style={{ borderLeft: '4px solid var(--primary-color)' }}>
            <h3 style={{ fontSize: '1.4rem', color: 'var(--primary-color)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <BookOpen size={20} /> Professional Summary
            </h3>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.6', color: 'var(--text-primary)', margin: 0 }}>
              Hello! I'm <strong>Dhanveer M</strong>, a growth-driven Computer Science Engineering student passionate about solving complex real-world problems using Python, Data Science, and AI.
              I believe in learning by doing — no shortcuts, love documenting projects professionally on GitHub, and find joy in fixing bugs, learning from failures, and helping others grow.
            </p>
          </div>
          
          <div className="card" style={{ borderLeft: '4px solid var(--primary-color)' }}>
            <h3 style={{ fontSize: '1.4rem', color: 'var(--primary-color)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Award size={20} /> Career Goal
            </h3>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.6', color: 'var(--text-primary)', margin: 0 }}>
              My goal is to engineer intelligent, scalable AI systems and data pipelines. 
              I am actively seeking software engineering and AI/ML internship opportunities where I can apply my skills in multi-agent frameworks, machine learning, and full-stack software development to build high-impact solutions.
            </p>
          </div>
        </div>

        {/* Education Timeline */}
        <h3 style={{ fontSize: '1.8rem', color: 'var(--primary-color)', marginBottom: '1.5rem', textAlign: 'center', fontWeight: '700' }}>Education</h3>
        <div className="timeline" style={{ marginBottom: '4rem' }}>
          <div className="timeline-item card">
            <div className="timeline-date">Graduating May 2028</div>
            <h4 style={{ fontSize: '1.35rem', marginBottom: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <GraduationCap size={22} style={{ color: 'var(--primary-color)' }} /> Panimalar Engineering College
            </h4>
            <p style={{ color: 'var(--text-primary)', fontWeight: '600', margin: '0.2rem 0' }}>B.E. Computer Science and Engineering — 3rd Year (CSE)</p>
            <p style={{ color: 'var(--text-secondary)', margin: '0.2rem 0' }}>Chennai, Tamil Nadu</p>
            <p style={{ marginTop: '0.75rem', fontWeight: '700', color: 'var(--primary-color)' }}>CGPA: 8.55</p>
          </div>
          
          <div className="timeline-item card">
            <div className="timeline-date">2024</div>
            <h4 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>M.S.P. Solai Nadar Memorial Hr. Sec School</h4>
            <p style={{ color: 'var(--text-secondary)' }}>Higher Secondary Course (HSC)</p>
            <p style={{ marginTop: '0.5rem', fontWeight: '600' }}>Percentage: 80.33%</p>
          </div>
        </div>

        {/* Skills Section */}
        <h3 style={{ fontSize: '1.8rem', color: 'var(--primary-color)', marginBottom: '2rem', textAlign: 'center', fontWeight: '700' }}>Technical Skills</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
          {skillGroups.map((group, idx) => (
            <div key={idx} className="card skill-category" style={{ padding: '1.5rem', height: '100%' }}>
              <h4 style={{ color: 'var(--primary-color)', fontSize: '1.15rem', marginBottom: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem', fontWeight: '600' }}>
                {group.title}
              </h4>
              <div className="skill-list" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {group.skills.map((skill, index) => (
                  <span key={index} className="skill-item" style={{ fontSize: '0.85rem', padding: '0.4rem 0.8rem', backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: '6px' }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <h3 style={{ fontSize: '1.8rem', color: 'var(--primary-color)', marginBottom: '1.5rem', textAlign: 'center', fontWeight: '700' }}>Certifications & Achievements</h3>
        <div className="card" style={{ marginBottom: '3.5rem' }}>
          <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem', listStyleType: 'disc', paddingLeft: '1.5rem', color: 'var(--text-secondary)' }}>
            {certifications.map((cert, index) => (
              <li key={index} style={{ marginBottom: '0.5rem', fontSize: '0.95rem' }}>
                {cert.link ? (
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s', fontWeight: '500' }} 
                    onMouseEnter={(e) => e.target.style.color = 'var(--primary-color)'} 
                    onMouseLeave={(e) => e.target.style.color = 'inherit'}
                  >
                    {cert.name} <span style={{ fontSize: '0.85rem', color: 'var(--primary-color)' }}>↗</span>
                  </a>
                ) : (
                  cert.name
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Resume Download Action */}
        <div style={{ textAlign: 'center' }}>
          <a 
            href="/dhanveer-portfolio/Dhanveer_M_Resume.pdf" 
            download="Dhanveer_M_Resume.pdf" 
            className="btn-primary" 
            style={{ fontSize: '1.15rem', padding: '0.9rem 2.5rem', borderRadius: '9999px', boxShadow: 'var(--shadow-md)' }}
          >
            <Download size={22} />
            Download Resume (PDF)
          </a>
        </div>

      </div>
    </section>
  );
};

export default About;
