import React from 'react';
import './Skills.css';

/**
 * Skills Component
 * Displays technical skills in a clean, minimal grid layout
 */
const Skills = () => {
  // All skills in a flat array for simplicity
  const skills = [
    'React',
    'JavaScript',
    'HTML5',
    'CSS3',
    'Python',
    'Django',
    'PostgreSQL',
    'Git',
    'AWS',
  ];

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
