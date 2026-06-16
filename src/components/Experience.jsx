import React from 'react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'General AI Fluency Intern',
      company: 'FlyRank Corp.',
      duration: 'July 2026 – Aug 2026 (Upcoming)',
      location: 'Remote',
      responsibilities: [
        'Accepted into the 6-week intensive FlyRank AI Internship program as a General AI Fluency Intern.',
        'Eager to collaborate with experienced mentors and fellow interns on artificial intelligence and machine learning.',
        'Focusing on general AI fluency, generative systems, and real-world data-driven problem-solving.'
      ]
    },
    {
      id: 2,
      role: 'AI & Machine Learning Intern',
      company: 'Edunet Foundation (AICTE)',
      duration: 'Jan 2026 – Feb 2026',
      location: 'Remote',
      responsibilities: [
        'Successfully completed a 6-week Internship on Artificial Intelligence & Machine Learning.',
        'Strengthened understanding of AI/ML concepts and worked on practical implementations.',
        'Gained valuable industry exposure in emerging technologies.'
      ]
    },
    {
      id: 3,
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
      id: 4,
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
      id: 5,
      role: 'Python Programming Intern',
      company: 'CodeAlpha',
      duration: 'July 2025',
      location: 'Remote',
      responsibilities: [
        'Received an official Letter of Recommendation for strong analytical skills and dedication.',
        'Completed 4 real-world projects including an Advanced Rule-Based Chatbot, Stock Portfolio Tracker, and a Hangman game.',
        'Faced and overcame bugs like UnicodeEncodeError and gained experience in GitHub structuring.'
      ]
    },
    {
      id: 6,
      role: 'Python Intern',
      company: 'Codec Technologies India',
      duration: 'May 2025 – Jun 2025',
      location: 'Remote',
      responsibilities: [
        'Worked on Python logic building, small automation scripts, and structured problem-solving exercises.'
      ]
    },
    {
      id: 7,
      role: 'Course Instructor',
      company: 'NKI Computers',
      duration: 'May 2024 – Jul 2024',
      location: 'Tamil Nadu, India',
      responsibilities: [
        'Taught HTML and CSS to students during a web design program.',
        'Guided students in using MS Office tools effectively.'
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
