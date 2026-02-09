import React from 'react';
import './Projects.css';

/**
 * Projects Component
 * Showcases portfolio projects with clean, professional design
 */
const Projects = () => {
  // Sample projects data - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: 'Sports Bar Table Reservation System',
      description:
        'A Sports Bar Table Reservation System that allows customers to easily book tables online, view availability in real-time, and receive instant confirmations, streamlining the reservation process for both guests and staff.',
      techStack: ['React', 'HTML', 'CSS', 'JavaScripts'],
      githubUrl: 'https://github.com/jmoanes1/table_support_system',
      liveUrl: 'https://table-support-system.vercel.app/',
      thumbnail: '/Screenshot 2026-02-09 153420.png',
    },
   
   
   
  ];

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              {project.thumbnail && (
                <div className="project-thumbnail-wrapper">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="project-thumbnail"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
              )}
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.techStack.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="project-actions">
                <a
                  href={project.githubUrl}
                  className="project-btn project-btn-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  Code
                </a>
                <a
                  href={project.liveUrl}
                  className="project-btn project-btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} live`}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
