import React, { useState } from 'react';
import './Hero.css';

/**
 * Hero — minimal landing: clear hierarchy, grid layout, generous space.
 */
const Hero = () => {
  const [photoFailed, setPhotoFailed] = useState(false);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const focusAreas = ['Product UI', 'Design systems', 'Frontend', 'Full-stack'];

  return (
    <section id="hero" className="hero section" aria-labelledby="hero-heading">
      <div className="container hero-container">
        <div className="hero-layout">
          <div className="hero-copy">
            <p className="hero-eyebrow"></p>

            <h1 id="hero-heading" className="hero-name">
              John Jay Moanes
            </h1>

            <p className="hero-role">
              {/* I design and build clear, usable interfaces — from structure in the browser to
              thoughtful interaction details. */}
            </p>

            <p className="hero-description">
            Junior developer building clean, user-friendly interfaces.
            Focused on simple solutions, continuous learning, and reliable results.
            </p>

            <ul className="hero-focus" aria-label="Focus areas">
              {focusAreas.map((label) => (
                <li key={label} className="hero-focus-item">
                  {label}
                </li>
              ))}
            </ul>

            <div className="hero-cta">
              <button type="button" className="btn btn-primary" onClick={() => scrollToSection('projects')}>
                Selected work
              </button>
              <button type="button" className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
                Contact
              </button>
              <a
                href="/resume.pdf"
                download="John_Jay_Moanes_Resume.pdf"
                className="btn btn-resume"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Résumé
              </a>
            </div>
          </div>

          <aside className="hero-visual" aria-label="Portrait">
            <figure className="hero-photo-frame">
              {!photoFailed ? (
                <img
                  src="/profile-picture.jpg"
                  alt="John Jay Moanes"
                  className="hero-profile-picture"
                  width={320}
                  height={320}
                  onError={() => setPhotoFailed(true)}
                />
              ) : (
                <div className="hero-photo-fallback" role="img" aria-label="John Jay Moanes">
                  <span className="hero-photo-initials" aria-hidden="true">
                    JM
                  </span>
                </div>
              )}
            </figure>
          </aside>
        </div>

        <button
          type="button"
          className="scroll-indicator"
          aria-label="Scroll to About section"
          onClick={() => scrollToSection('about')}
        >
          <span className="scroll-line" aria-hidden />
        </button>
      </div>
    </section>
  );
};

export default Hero;
