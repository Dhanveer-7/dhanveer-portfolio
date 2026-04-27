import React from 'react';
import { ExternalLink } from 'lucide-react';

const Skills = () => {
  const languagesAdvanced = ['Java (Core & OOPs)', 'Python'];
  const languagesIntermediate = ['HTML', 'CSS', 'JavaScript', 'C++'];
  const systems = ['Data Structures', 'Algorithm Design', 'Software Development'];
  const technologies = ['MongoDB', 'Spring Boot', 'GIT', 'React', 'Generative AI', 'AWS Services', 'Postman API'];

  return (
    <section id="skills" className="skills bg-secondary">
      <div className="section-container">
        <h2 className="section-title">Skills & Technologies</h2>
        
        <div className="skills-grid">
          <div className="card skill-category">
            <h3>Programming Languages</h3>
            
            <h4 style={{ color: 'var(--text-secondary)', marginTop: '0.5rem', fontSize: '0.9rem' }}>Advanced</h4>
            <div className="skill-list" style={{ marginBottom: '1rem' }}>
              {languagesAdvanced.map((lang, index) => (
                <span key={`adv-${index}`} className="skill-item">{lang}</span>
              ))}
            </div>
            
            <h4 style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Intermediate</h4>
            <div className="skill-list">
              {languagesIntermediate.map((lang, index) => (
                <span key={`int-${index}`} className="skill-item">{lang}</span>
              ))}
            </div>
          </div>
          
          <div className="card skill-category">
            <h3>Frameworks, Concepts & AI</h3>
            <div className="skill-list" style={{ marginBottom: '1rem' }}>
              {systems.map((tool, index) => (
                <span key={`tool-${index}`} className="skill-item">{tool}</span>
              ))}
            </div>

            <div className="skill-list">
              {technologies.map((tool, index) => (
                <span key={`tool-${index}`} className="skill-item">{tool}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="card" style={{ marginTop: '2rem', textAlign: 'center' }}>
          <h3 style={{ color: 'var(--primary-color)', marginBottom: '1.5rem' }}>Coding Profiles</h3>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <a href="https://github.com/Dhanveer-7" target="_blank" rel="noopener noreferrer" className="btn-outline">
              GitHub <ExternalLink size={16} />
            </a>
            <a href="https://www.hackerrank.com/dhanveer24112006" target="_blank" rel="noopener noreferrer" className="btn-outline">
              HackerRank <ExternalLink size={16} />
            </a>
            <a href="https://g.dev/Dhanveer" target="_blank" rel="noopener noreferrer" className="btn-outline">
              Google Dev <ExternalLink size={16} />
            </a>
            <a href="https://www.linkedin.com/in/dhanveer-m-a0785232b/" target="_blank" rel="noopener noreferrer" className="btn-outline">
              LinkedIn <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
