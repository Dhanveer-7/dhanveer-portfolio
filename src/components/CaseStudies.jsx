import React, { useState } from 'react';
import { ExternalLink, Github, BookOpen, Briefcase, Award, Code } from 'lucide-react';

const CaseStudies = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const studies = [
    {
      id: 1,
      title: "Multi-Agent Generative AI Framework with Retrieval-Augmented Knowledge Integration",
      category: "research",
      categoryLabel: "AI Research Paper",
      icon: BookOpen,
      duration: "Published 2026",
      description: "Authored research on KAIR (Knowledge-Aware Iterative Retrieval) for multi-agent systems. Explores cooperative agent workflows and vector retrieval-augmented knowledge bases to improve autonomous decision-making accuracy and reduce latency.",
      highlights: [
        "Formulated knowledge-aware iterative retrieval mechanisms for agent networks to prevent context-drift",
        "Designed semantic vector search integrations for long-running autonomous tasks",
        "Pioneered structured benchmark metrics to evaluate agent coordination and task resolution times"
      ],
      tech: ['Multi-Agent Systems', 'RAG', 'Vector DBs', 'Semantic Search', 'LangChain'],
      links: {
        github: 'https://github.com/Dhanveer-7',
        live: '#'
      }
    },
    {
      id: 2,
      title: "AI-Powered Digital Twin of India's Climate",
      category: "project",
      categoryLabel: "ISRO Hackathon 2026",
      icon: Award,
      duration: "Winner PoC",
      description: "Developed an advanced spatial-temporal climate digital twin dashboard for 36 Indian states. Ingests historical daily meteorology data (220k+ records), builds recursive multi-step forecasting models, and maps spatial z-score anomalies.",
      highlights: [
        "Achieved temperature forecasting accuracy of R² ≥ 0.97 and MAE of ≈ 1.0°C using Random Forest and XGBoost",
        "Engineered a thread-safe SQLite pipeline handling 220,000+ historical weather records",
        "Integrated CartoDB dark-matter Folium map layers and Plotly metrics for interactive stress-testing"
      ],
      tech: ['Streamlit', 'Python', 'XGBoost', 'Scikit-Learn', 'Folium', 'SQLite', 'Plotly'],
      links: {
        github: 'https://github.com/Dhanveer-7/climate-twin-',
        live: 'https://dhanveer-7-climate-twin--app-eodlti.streamlit.app/'
      }
    },
    {
      id: 3,
      title: "Neuro Compiler — GUI-Based Multi-Language Compiler Platform",
      category: "project",
      categoryLabel: "Sathak-a-thon 2.0 Hackathon",
      icon: Code,
      duration: "Project",
      description: "Developed an interactive web compiler and secure exam testing environment for students, incorporating real-time execution and AI-powered debugging recommendations.",
      highlights: [
        "Built support for GCC, Python Interpreter, and Java JDK execution with Monaco Editor integration",
        "Led MongoDB database schemas, backend API routing, and AI error explanation support integration",
        "Designed teacher analytics dashboards for real-time exam performance and tracking"
      ],
      tech: ['React.js', 'Node.js', 'MongoDB', 'Python', 'Monaco Editor', 'GCC'],
      links: {
        github: 'https://github.com/Dhanveer-7/Neuro-Compiler',
        live: '#'
      }
    },
    {
      id: 4,
      title: "HealthAssist AI Chatbot",
      category: "project",
      categoryLabel: "Google Cloud Run Hackathon 2025",
      icon: Code,
      duration: "Project",
      description: "An AI-powered healthcare virtual assistant built to offer reliable, empathetic health guidance and medical symptom screening.",
      highlights: [
        "Utilized Gemini AI and LangChain for empathetic conversational agent workflows",
        "Deployed utilizing Google Cloud Run and Serverless architectures for high scalability",
        "Focused on TechForGood, ensuring response safety guidelines and medical disclaimer integrations"
      ],
      tech: ['Google Cloud', 'Gemini AI', 'React.js', 'Node.js', 'Cloud Run'],
      links: {
        github: 'https://github.com/Dhanveer-7',
        live: '#'
      }
    },
    {
      id: 5,
      title: "General AI Fluency Intern",
      category: "internship",
      categoryLabel: "FlyRank Corp. — Internship",
      icon: Briefcase,
      duration: "July 2026 – August 2026",
      description: "Accepted into the intensive 6-week internship program focusing on general AI fluency, generative workflows, and agentic framework integrations.",
      highlights: [
        "Collaborating with industry mentors on multi-agent frameworks and workflow audits",
        "Exploring generative AI applications and evaluating prompts/models for production tasks",
        "Contributing to documentation and benchmarking of LLM capabilities and latency"
      ],
      tech: ['Generative AI', 'Agentic Systems', 'LLM Benchmarking', 'Workflow Audit'],
      links: {
        github: 'https://github.com/Dhanveer-7',
        live: '#'
      }
    },
    {
      id: 6,
      title: "AI & Machine Learning Intern",
      category: "internship",
      categoryLabel: "Edunet Foundation (AICTE) — Internship",
      icon: Briefcase,
      duration: "January 2026 – February 2026",
      description: "Completed a structured 6-week hands-on learning and implementation internship on AI/ML algorithms and cloud technologies.",
      highlights: [
        "Trained and evaluated classical supervised learning models (classification, regression)",
        "Gained practical experience with cloud environments and deploying model endpoints",
        "Received IBM SkillsBuild credentials in AI Fundamentals upon program completion"
      ],
      tech: ['Python', 'Scikit-Learn', 'IBM SkillsBuild', 'Cloud Deployments'],
      links: {
        github: 'https://github.com/Dhanveer-7',
        live: '#'
      }
    },
    {
      id: 7,
      title: "Software Developer Intern",
      category: "internship",
      categoryLabel: "Stackmod Innovations — Internship",
      icon: Briefcase,
      duration: "December 2025 – January 2026",
      description: "Developed desktop software applications using object-oriented Java concepts and interactive GUI designs.",
      highlights: [
        "Programmed a complete Student Management System in Java Swing with secure CRUD operations",
        "Implemented custom offline database persistence using local file-handling serialization",
        "Designed input validation systems for unique identifiers to guarantee data integrity"
      ],
      tech: ['Java', 'Java Swing', 'File I/O', 'OOP'],
      links: {
        github: 'https://github.com/Dhanveer-7',
        live: '#'
      }
    },
    {
      id: 8,
      title: "Java Programming Intern",
      category: "internship",
      categoryLabel: "InternPe — Internship",
      icon: Briefcase,
      duration: "December 2025",
      description: "Recognized as a 'Star Performer' for designing interactive, algorithmic gameplay logic in Java.",
      highlights: [
        "Developed 4 graphical Java games (Connect Four, Tic Tac Toe, Rock Paper Scissors, Guess the Number)",
        "Implemented game algorithms and win/draw condition evaluations in Swing",
        "Focused on interactive UI rendering and event-driven keyboard/mouse listeners"
      ],
      tech: ['Java GUI', 'Java Swing', 'Event Handling', 'Game Algorithms'],
      links: {
        github: 'https://github.com/Dhanveer-7',
        live: '#'
      }
    },
    {
      id: 9,
      title: "Python Programming Intern",
      category: "internship",
      categoryLabel: "CodeAlpha — Internship",
      icon: Briefcase,
      duration: "July 2025",
      description: "Awarded Letter of Recommendation for constructing rule-based chatbot architectures and stock valuation trackers.",
      highlights: [
        "Engineered stock portfolio valuation logs with file-system data streams",
        "Faced and resolved deep Unicode parsing errors during UTF-8 stream coding",
        "Designed rule-based matching loops for intent detection and messaging automation"
      ],
      tech: ['Python', 'File Handling', 'Chatbot Architectures', 'Debugging'],
      links: {
        github: 'https://github.com/Dhanveer-7',
        live: '#'
      }
    }
  ];

  const filteredStudies = activeFilter === 'all' 
    ? studies 
    : studies.filter(s => s.category === activeFilter);

  return (
    <section id="case-studies" className="case-studies bg-secondary">
      <div className="section-container">
        <h2 className="section-title">Case Studies & Experience</h2>
        
        {/* Filters */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginBottom: '3.5rem', flexWrap: 'wrap' }}>
          {['all', 'research', 'project', 'internship'].map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              style={{
                padding: '0.6rem 1.5rem',
                borderRadius: '9999px',
                border: '1.5px solid var(--primary-color)',
                backgroundColor: activeFilter === filter ? 'var(--primary-color)' : 'transparent',
                color: activeFilter === filter ? '#ffffff' : 'var(--primary-color)',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                textTransform: 'capitalize'
              }}
            >
              {filter === 'all' ? 'Show All' : filter === 'research' ? 'AI Research' : filter === 'project' ? 'Hackathons & Projects' : 'Internships'}
            </button>
          ))}
        </div>

        {/* Grid List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {filteredStudies.map(study => {
            const IconComponent = study.icon;
            return (
              <div key={study.id} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', borderLeft: '5px solid var(--primary-color)' }}>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ padding: '0.6rem', borderRadius: '8px', backgroundColor: 'rgba(99, 153, 34, 0.1)', color: 'var(--primary-color)' }}>
                      <IconComponent size={24} />
                    </div>
                    <div>
                      <span style={{ fontSize: '0.85rem', color: 'var(--primary-color)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        {study.categoryLabel}
                      </span>
                      <h3 style={{ fontSize: '1.6rem', marginTop: '0.2rem', lineHeight: '1.3' }}>{study.title}</h3>
                    </div>
                  </div>
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: '500', backgroundColor: 'var(--bg-primary)', padding: '0.3rem 0.8rem', borderRadius: '4px' }}>
                    {study.duration}
                  </span>
                </div>

                <p style={{ color: 'var(--text-primary)', fontSize: '1.05rem', lineHeight: '1.6', margin: 0 }}>
                  {study.description}
                </p>

                <div>
                  <h4 style={{ fontSize: '1.05rem', color: 'var(--text-primary)', marginBottom: '0.6rem', fontWeight: '600' }}>Key Accomplishments & Outcomes:</h4>
                  <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    {study.highlights.map((highlight, idx) => (
                      <li key={idx} style={{ listStyleType: 'disc', color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.5' }}>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.25rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-color)' }}>
                  <div className="project-tags" style={{ margin: 0 }}>
                    {study.tech.map((t, idx) => (
                      <span key={idx} className="tag" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--primary-dark)', border: '1px solid var(--border-color)', fontSize: '0.8rem' }}>{t}</span>
                    ))}
                  </div>

                  <div style={{ display: 'flex', gap: '1.25rem' }}>
                    <a href={study.links.github} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-primary)', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
                      <Github size={16} />
                      Codebase
                    </a>
                    {study.links.live !== '#' && (
                      <a href={study.links.live} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--primary-color)', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
