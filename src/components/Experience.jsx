import React from 'react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'Software Developer Intern',
      company: 'Stackmod Innovations Pvt. Ltd.',
      duration: 'Dec 2025 – Jan 2026',
      location: 'Technopark, Trivandrum',
      responsibilities: [
        'Developed a complete Student Management System using Java (OOP concepts) and designed a Swing-based GUI with CRUD modules.',
        'Implemented unique student ID validation and offline data persistence using file handling.',
        'Gained hands-on knowledge in application design, problem-solving, and writing maintainable code.'
      ]
    },
    {
      id: 2,
      role: 'Java Programming Intern',
      company: 'InternPe',
      duration: 'Dec 2025',
      location: 'Remote',
      responsibilities: [
        'Recognized as a "Star Performer" among the December batch for outstanding dedication and creativity.',
        'Developed multiple Java GUI applications including Connect Four, Tic Tac Toe, Rock Paper Scissors, and Guess the Number.',
        'Strengthened understanding of Java Swing, event handling, conditionals, and game logic.'
      ]
    },
    {
      id: 3,
      role: 'Python Programming Intern',
      company: 'CodeAlpha',
      duration: 'July 2025',
      location: 'Remote',
      responsibilities: [
        'Received an official Letter of Recommendation for strong analytical skills and dedication.',
        'Developed an Advanced Rule-Based Chatbot mapped with intents and natural conversation flow.',
        'Created a Stock Portfolio Tracker with file handling and UTF-8 encoding fixes, and built a Hangman game.',
        'Maintained structured and well-documented GitHub repositories for all deliverables.'
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="section-container">
        <h2 className="section-title">Work Experience & Internships</h2>
        
        <div className="timeline">
          {experiences.map(exp => (
            <div key={exp.id} className="timeline-item card">
              <div className="timeline-date">{exp.duration}</div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>{exp.role}</h3>
              <h4 style={{ fontSize: '1.1rem', color: 'var(--primary-color)', marginBottom: '0.25rem' }}>{exp.company}</h4>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '0.9rem' }}>{exp.location}</p>
              
              <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {exp.responsibilities.map((resp, index) => (
                  <li key={index} style={{ listStyleType: 'disc', color: 'var(--text-secondary)' }}>
                    {resp}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
