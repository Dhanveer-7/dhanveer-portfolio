import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "AI-Powered Digital Twin of India's Climate",
      category: 'ISRO Bharatiya Antariksh Hackathon 2026',
      description: "Developed an advanced spatial-temporal Digital Twin of India's Climate as a Proof-of-Concept (PoC) web application. The platform ingests historical meteorology data across all 36 Indian States and Union Territories, builds recursive multi-step forecasting models, maps spatial z-score anomalies, and enables interactive 'what-if' stress testing to evaluate ecological risks and sectoral impacts.",
      features: [
        'Robust Ingestion Pipeline: Vectorized daily meteorological generator spanning 16 years (220k+ records) with cyclic trigonometric seasonal components',
        'ML Prediction Engine: Trained Random Forest and XGBoost Regressors in parallel with a recursive forecasting algorithm for 7-day and 30-day forecast windows',
        'What-If Stress Testing Simulator: Estimates crop yield drops, reservoir depletion, and thermal discomfort indexes under warming scenarios',
        'Interactive Mapping Room: Renders spatial anomalies and weather heatmaps on CartoDB dark-matter Folium map layers'
      ],
      tech: ['Streamlit', 'Python', 'XGBoost', 'Scikit-Learn', 'Folium', 'SQLite', 'Plotly'],
      links: {
        github: 'https://github.com/Dhanveer-7/climate-twin-',
        live: 'https://dhanveer-7-climate-twin--app-eodlti.streamlit.app/'
      }
    },
    {
      id: 2,
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
      id: 3,
      title: 'Neuro Compiler — GUI-Based Multi-Language Compiler Platform',
      category: 'Hackathon (Sathak-a-thon 2.0)',
      description: 'Developed at Mohamed Sathak A.J. College of Engineering (MSAJCE). Neuro Compiler is a GUI-based multi-language editor and compiler platform designed to simplify coding practice and secure lab examinations for students.',
      features: [
        'Multi-Language Compiler: Supports writing, compiling, and executing code in multiple programming languages using Monaco/CodeMirror editors, GCC, Python Interpreter, and Java JDK.',
        'AI Debugger Integration: Integrates AI support to provide real-time debugging assistance and detailed error explanations.',
        'Exam Portal & Dashboards: Incorporates a secure exam environment for students with teacher performance tracking dashboards.',
        'My Contribution: Led MongoDB database integration, backend API development, and AI debugging support integration.'
      ],
      tech: ['React.js', 'Node.js', 'MongoDB', 'Python', 'Monaco Editor', 'GCC'],
      links: {
        github: 'https://github.com/Dhanveer-7/Neuro-Compiler',
        live: '#'
      }
    },
    {
      id: 4,
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
      id: 5,
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
      id: 6,
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
