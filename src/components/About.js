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
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
