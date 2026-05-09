import React from 'react';

const About = () => {
  const certifications = [
    'AWS APAC Solutions Architecture Virtual Experience (Forage)',
    'AWS Educate (Cloud 101, Gen AI, ML Foundations)',
    'AI Ascend 2026 Learning Program (Kyndryl & AWS)',
    'Artificial Intelligence Fundamentals (IBM SkillsBuild)',
    'C Programming Certification (GUVI & HCL)',
    'Obtain an Appropriate Job (Wadhwani Foundation)',
    'Postman API Fundamentals Student Expert',
    'Basics of Python (Infosys Springboard)',
    'Artificial Intelligence (Accenture & Kodacy)',
    'Generative AI Studio (Simplilearn)',
    'Employability Skills - JobReady (SWAYAM - 105 hours)',
    'Freedom with AI Certification',
    'Website Development (Igniters)',
    'Power BI for Beginners (Simplilearn)',
    'Cyber Security Awareness',
    'HP LIFE Online Course (AI)',
    'DCA (MS Office) & Web Designing (NKI Education)'
  ];

  return (
    <section id="about" className="about bg-secondary">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="card" style={{ marginBottom: '2rem' }}>
          <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
            Hello! I'm Dhanveer M, a dedicated and growth-driven Computer Science Engineering student at Panimalar Engineering College, passionate about solving real-world problems using Python, Data Science, and AI.
          </p>
          <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
            Over the past year, I’ve completed multiple internships and hands-on projects that helped shape my practical coding skills and professional mindset. I believe in learning by doing — no shortcuts, love documenting projects professionally on GitHub, and find joy in fixing bugs, learning from failures, and helping others grow.
          </p>
          <p style={{ fontSize: '1.1rem' }}>
            Whether I'm participating in hackathons like Sathak-a-thon and Google Cloud Run, writing Python and Java scripts, or learning about cutting-edge AI and Cloud architectures, I believe that every expert was once a beginner.
          </p>
        </div>

        <h3 style={{ fontSize: '1.8rem', color: 'var(--primary-color)', marginBottom: '1.5rem', textAlign: 'center' }}>Education</h3>
        
        <div className="timeline">
          <div className="timeline-item card">
            <div className="timeline-date">Graduating May 2028</div>
            <h4 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>Panimalar Engineering College</h4>
            <p style={{ color: 'var(--text-secondary)' }}>B.E. Computer Science and Engineering</p>
            <p style={{ color: 'var(--text-secondary)' }}>Chennai, Tamil Nadu</p>
            <p style={{ marginTop: '0.5rem', fontWeight: '500' }}>CGPA: 8.55</p>
          </div>
          
          <div className="timeline-item card">
            <div className="timeline-date">2024</div>
            <h4 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>M.S.P. Solai Nadar Memorial Hr. Sec School</h4>
            <p style={{ color: 'var(--text-secondary)' }}>HSC</p>
            <p style={{ marginTop: '0.5rem', fontWeight: '500' }}>Percentage: 80.33%</p>
          </div>

          <div className="timeline-item card">
            <div className="timeline-date">2022</div>
            <h4 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>M.S.P. Solai Nadar Memorial Hr. Sec School</h4>
            <p style={{ color: 'var(--text-secondary)' }}>SSLC</p>
            <p style={{ marginTop: '0.5rem', fontWeight: '500' }}>Percentage: 55.6%</p>
          </div>
        </div>

        <h3 style={{ fontSize: '1.8rem', color: 'var(--primary-color)', marginTop: '3rem', marginBottom: '1.5rem', textAlign: 'center' }}>Certifications & Achievements</h3>
        <div className="card">
          <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem', listStyleType: 'disc', paddingLeft: '1.5rem', color: 'var(--text-secondary)' }}>
            {certifications.map((cert, index) => (
              <li key={index} style={{ marginBottom: '0.5rem' }}>{cert}</li>
            ))}
          </ul>
        </div>

        <h3 style={{ fontSize: '1.8rem', color: 'var(--primary-color)', marginTop: '3rem', marginBottom: '1.5rem', textAlign: 'center' }}>Coursework</h3>
        <div className="card">
          <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', listStyleType: 'disc', paddingLeft: '1.5rem', color: 'var(--text-secondary)' }}>
            <li style={{ width: '45%' }}>Data Structures & Object Oriented Programming</li>
            <li style={{ width: '45%' }}>Analysis and Design of Algorithms</li>
            <li style={{ width: '45%' }}>Database Management Systems (DBMS)</li>
            <li style={{ width: '45%' }}>Artificial Intelligence & Cloud Computing</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
