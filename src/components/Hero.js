import React from 'react';
import './Hero.css';

/**
 * Hero Component
 * Main landing section with name, role, and call-to-action buttons
 */
const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="hero section">
      <div className="container">
        <div className="hero-content">
          {/* Profile Picture - Left Side */}
          <div className="hero-image-wrapper">
            <img
              src="/profile-picture.jpg"
              alt="Profile"
              className="hero-profile-picture"
              onError={(e) => {
                // Fallback to placeholder if image doesn't exist
                e.target.style.display = 'none';
              }}
            />
          </div>

          {/* Content - Right Side */}
          <div className="hero-text-content">
            {/* Greeting Text */}
            <div className="hero-greeting">
              <span className="greeting-text">Hi, my name is</span>
            </div>

            {/* Name */}
            <h1 className="hero-name">
              <span className="name-text">John Jay Moanes</span>
            </h1>

        

            {/* Description */}
            <p className="hero-description">
            I am a flexible and resourceful individual who enjoys exploring new challenges and learning along the way. Driven by growth, adaptability, and curiosity, 
            I'm always open to new opportunities that help me expand my skills and turn ideas into meaningful results.
            </p>

            {/* CTA Buttons */}
            <div className="hero-cta">
              <button
                className="btn btn-primary"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </button>
              <a
                href="/resume.pdf"
                download="John_Jay_Moanes_Resume.pdf"
                className="btn btn-resume"
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
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Download Resume
              </a>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="scroll-indicator">
            <div className="scroll-arrow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
