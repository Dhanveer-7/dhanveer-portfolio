import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'HealthAssist AI',
      category: 'Cloud / AI Hackathon',
      description: 'An AI-powered healthcare chatbot built to offer reliable and empathetic health guidance. Participated in the Google Cloud Run Hackathon 2025 organized by Google Cloud and DevPost.',
      features: [
        'AI-powered health guidance using Gemini AI',
        'Deployed utilizing Google Cloud technologies',
        'Collaborative team effort emphasizing TechForGood'
      ],
      tech: ['Google Cloud', 'Gemini AI', 'Chatbot'],
      links: {
        github: 'https://github.com/Dhanveer-7',
        live: '#'
      }
    },
    {
      id: 2,
      title: 'Neuro Compiler — GUI-Based Multi-Language Compiler Platform',
      category: 'Desktop Application Hackathon',
      description: 'Developed during Sathak-a-thon 2.0 at MSAJCE. Functions as a multilanguage compiler platform enabling users to write and execute code in multiple languages, with an integrated exam portal for teachers and students.',
      features: [
        'Write, compile, and execute code in multiple programming languages with real-time feedback',
        'AI-powered debugging assistance and error explanations',
        'Integrated test environment with performance evaluation and student tracking'
      ],
      tech: ['React.js', 'Node.js', 'MongoDB', 'Python'],
      links: {
        github: 'https://github.com/Dhanveer-7',
        live: '#'
      }
    },
    {
      id: 3,
      title: 'Student Management System',
      category: 'Software Application',
      description: 'A complete, real-world desktop application built during the Stackmod internship to manage student records effectively.',
      features: [
        'Swing-based GUI with Add, View, Update, and Delete modules',
        'Unique student ID validation',
        'Automatic data persistence using local file handling'
      ],
      tech: ['Java (OOP)', 'Java Swing', 'File Handling'],
      links: {
        github: 'https://github.com/Dhanveer-7',
        live: '#'
      }
    },
    {
      id: 4,
      title: 'Advanced AI & Data Tracking Tools',
      category: 'Python Scripts',
      description: 'Projects built during CodeAlpha internship involving AI chatbots and financial data tracking.',
      features: [
        'Rule-Based Chatbot: Recognizes intent and processes advanced logical mapping',
        'Stock Portfolio Tracker: File handling and UTF-8 encoding for real-time stock valuation logs'
      ],
      tech: ['Python', 'File I/O', 'Algorithm Design'],
      links: {
        github: 'https://github.com/Dhanveer-7',
        live: '#'
      }
    },
    {
      id: 5,
      title: 'Collection of Java Classic Games',
      category: 'Desktop Games',
      description: 'A collection of interactive games including Connect Four, Tic Tac Toe, Rock Paper Scissors, and Guess the Number, built at InternPe.',
      features: [
        'Interactive 2-player graphical interface mechanics',
        'Algorithms for win, draw, and reset scenarios',
        'Complex UI and event handling integrations'
      ],
      tech: ['Java GUI', 'Java Swing'],
      links: {
        github: 'https://github.com/Dhanveer-7',
        live: '#'
      }
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="section-container">
        <h2 className="section-title">Featured Projects & Hackathons</h2>
        
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ color: 'var(--primary-color)', fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                {project.category}
              </span>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{project.title}</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', flex: 1 }}>
                {project.description}
              </p>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>Key Features:</h4>
                <ul style={{ paddingLeft: '1.5rem' }}>
                  {project.features.map((feature, idx) => (
                    <li key={idx} style={{ listStyleType: 'disc', color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="project-tags">
                {project.tech.map((t, i) => (
                  <span key={i} className="tag">{t}</span>
                ))}
              </div>
              
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-color)' }}>
                <a href={project.links.github} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)', fontWeight: '500' }}>
                  <Github size={18} />
                  GitHub Code
                </a>
                {project.links.live !== '#' && (
                  <a href={project.links.live} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary-color)', fontWeight: '500' }}>
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
