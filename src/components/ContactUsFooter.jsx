import React from 'react';
import './styles/contactusfooter.css';

const ContactUsFooter = () => {
  return (
    <footer className="contact-footer">
      <div className="contact-container">
        <div className="contact-info">
          <h3>Contact Us</h3>
          <p>
            <strong>Farma-Tech Int.</strong>
          </p>
          <p>1546 Boalch Ave NW #30</p>
          <p>North Bend, WA</p>
          <p>Phone: (425) 396-1050</p>
          <p>Email: </p>
          <p>Hours: Mon–Fri, 9am–5pm</p>
        </div>

        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2695.1539337445174!2d-121.79817052310162!3d47.50677707118081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54907c1b22994ba5%3A0xcf9d7c6fa613aa51!2sFarma-Tech%20Int!5e0!3m2!1sen!2sca!4v1742904760164!5m2!1sen!2sca"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </footer>
  );
};

export default ContactUsFooter;
