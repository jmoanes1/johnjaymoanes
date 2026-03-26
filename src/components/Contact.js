import React from 'react';
import './Contact.css';

/**
 * Contact Component — shows a single mail address
 */
const Contact = () => {
  const email = 'johnjaymoanes25@gmail.com';
  const phone = '09923811486';

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <div className="contact-content">
          <p className="contact-description">
            Reach out directly:
          </p>

          <a className="contact-email" href={`mailto:${email}`} aria-label={`Email ${email}`}>
            {email}
          </a>

          <a className="contact-phone" href={`tel:${phone}`} aria-label={`Call ${phone}`}>
            {phone}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
