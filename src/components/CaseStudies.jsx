import React, { useState } from 'react';
import { ExternalLink, Github, BookOpen, Briefcase, Award, Code, ChevronRight } from 'lucide-react';

const CaseStudies = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const studies = [
    {
      id: 1,
      title: "Multi-Agent Generative AI Framework with Retrieval-Augmented Knowledge Integration",
      category: "research",
      categoryLabel: "AI Research Paper",
      icon: BookOpen,
      duration: "Research Preprint / Under Review",
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
      duration: "Hackathon PoC",
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
      title: "IntelliTrace 2026 — Real-Time Cross-Channel Mule Account Detection",
      category: "project",
      categoryLabel: "VIT Indian Bank Hackathon — Runner-Up",
      icon: Award,
      duration: "Runner-Up PoC",
      description: "Developed an intelligent real-time Graph Intelligence Platform for Indian Bank to detect money mule rings across multi-channel banking logs. Unifies transaction logs, devices, IPs, and ATMs into a structured entity graph, applying Graph Neural Networks (GNN) to perform node classification.",
      highlights: [
        "Unifies siloed banking logs (App, Web, ATM, UPI) into a single entity-relation graph (Accounts, Devices, IPs, ATMs)",
        "Applies Graph Neural Networks (GNN) for node classification to automatically label suspicious money mule accounts",
        "Generates explainable 0–100 risk scores based on degree centrality, velocity metrics, and shared device clusters",
        "My Contribution: Directed entity graph schema normalization, graph centrality feature engineering, and Streamlit alerting dashboard design"
      ],
      tech: ['Python', 'Graph Neural Networks (GNN)', 'NetworkX', 'Streamlit', 'PyTorch Geometric', 'Pandas'],
      links: {
        github: 'https://github.com/Dhanveer-7',
        live: '#'
      }
    },
    {
      id: 4,
      title: "Q-Guard AI — Multi-Agent Quantum Fraud Intelligence",
      category: "project",
      categoryLabel: "RIT Quantathon 2026",
      icon: Code,
      duration: "Hackathon Project",
      description: "Developed a state-of-the-art Multi-Agent Quantum Machine Learning (QML) framework to identify complex, coordinated financial fraud in real-time. Maps multi-dimensional transaction telemetry to Hilbert space coordinates on a 4-Qubit Variational Quantum Circuit (VQC) to detect non-linear fraud loops.",
      highlights: [
        "Constructed a 4-Qubit Variational Quantum Circuit (VQC) with Pennylane to optimize risk weight calculations via Bloch Sphere projections",
        "Designed adaptive context-threshold limits (58% to 95%) leveraging temporal, merchant, and device trust telemetry",
        "Engineered Self-Explainable AI (XAI) modules translating quantum state measurements into human-readable compliance audit trails",
        "My Contribution: Led quantum circuit telemetry mapping, FastAPI service integration, and Vercel-based dashboard deployment"
      ],
      tech: ['Python', 'Pennylane (QML)', 'PyTorch', 'FastAPI', 'MongoDB', 'Vercel'],
      links: {
        github: 'https://github.com/Dhanveer-7/Quantathon-2026',
        live: 'https://quantathon-2026-weld.vercel.app/'
      }
    },
    {
      id: 5,
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
      id: 6,
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
      id: 7,
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
      id: 8,
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
    }
  ];

  const earlyInternships = [
    {
      role: "Software Developer Intern",
      company: "Stackmod Innovations Pvt. Ltd.",
      duration: "Dec 2025 – Jan 2026",
      tech: ["Java Swing", "OOP", "File I/O", "CRUD Modules"],
      highlights: "Developed Swing-based Student Management System with unique student ID validation and offline serialization persistence."
    },
    {
      role: "Java Programming Intern",
      company: "InternPe",
      duration: "Dec 2025",
      tech: ["Java Swing", "OOP", "Event Handling", "Win/Draw Logic"],
      highlights: "Earned 'Star Performer' award. Built Connect Four, Tic Tac Toe, Rock Paper Scissors, and Guess the Number."
    },
    {
      role: "Python Programming Intern",
      company: "CodeAlpha",
      duration: "July 2025",
      tech: ["Python", "Regex", "Intent Mapping", "File handling"],
      highlights: "Received Letter of Recommendation highlighting: 'Recognized for strong analytical skills and constructing rule-based chatbot architectures.'"
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

        {/* Early Foundational Internships List */}
        {(activeFilter === 'all' || activeFilter === 'internship') && (
          <div style={{ marginTop: '5.5rem' }}>
            <h3 style={{ fontSize: '1.8rem', color: 'var(--primary-color)', marginBottom: '1rem', textAlign: 'center', fontWeight: '700' }}>
              Foundational Internships
            </h3>
            <p style={{ color: 'var(--text-secondary)', textAlign: 'center', marginBottom: '3rem', fontSize: '1.05rem' }}>
              Early technical experiences focused on scripting, games development, and desktop application patterns.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {earlyInternships.map((intern, idx) => (
                <div key={idx} className="card" style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', borderTop: '4px solid var(--primary-color)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <h4 style={{ fontSize: '1.15rem', margin: 0, fontWeight: '700', color: 'var(--text-primary)' }}>{intern.role}</h4>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', whiteSpace: 'nowrap', fontWeight: '500', backgroundColor: 'var(--bg-primary)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>
                      {intern.duration}
                    </span>
                  </div>
                  <h5 style={{ fontSize: '0.95rem', color: 'var(--primary-dark)', margin: 0, fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <ChevronRight size={14} /> {intern.company}
                  </h5>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.925rem', lineHeight: '1.5', margin: '0.25rem 0', flex: 1 }}>
                    {intern.highlights}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.5rem', borderTop: '1px solid var(--border-color)', paddingTop: '0.75rem' }}>
                    {intern.tech.map((t, i) => (
                      <span key={i} style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem', backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: '4px', color: 'var(--text-secondary)', fontWeight: '500' }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default CaseStudies;
