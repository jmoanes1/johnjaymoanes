import React from 'react';
import './Footer.css';

/**
 * Footer Component
 * Site footer with copyright and additional links
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-text">
            <p>
              Designed & Built with{' '}
              <span className="heart" aria-label="love">
              </span>{' '}
              by John Jay Moanes
            </p>
            <p className="footer-copyright">
              © {currentYear} All rights reserved.
            </p>
          </div>
          <div className="footer-links">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('hero')?.scrollIntoView({
                  behavior: 'smooth',
                });
              }}
              className="footer-link"
            >
              Back to Top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
