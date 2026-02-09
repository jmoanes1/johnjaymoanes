import React from 'react';
import './About.css';

/**
 * About Component
 * Personal introduction and background information section
 */
const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
            I am a flexible and resourceful person who enjoys exploring new challenges and learning along the way. I value growth, 
            adaptability, and curiosity, and I’m always open to new opportunities that help me expand my knowledge and abilities.
            </p>
            <div className="about-highlights">
              <div className="highlight-item">
                <span className="highlight-icon">🎯</span>
                <span>Problem Solver</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">🚀</span>
                <span>Fast Learner</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">💡</span>
                <span>Creative Thinker</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">🤝</span>
                <span>Team Player</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
