import React from 'react';
import ContactUsFooter from '../components/ContactUsFooter';
import './styles/contactus.css';

const ContactUs = () => {
  return (
    <div className="contact-us-page">
      <section className="contact-header">
        <h1>Contact Us</h1>
        <p>
          We'd love to hear from you! Reach out to us using the information
          below.
        </p>
      </section>
      <section className="contact-form-section">
        {/*
        <h2>Send Us a Message</h2>
        <form className="contact-form">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            rows="5"
            required
          ></textarea>

          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
        */}
      </section>
    </div>
  );
};

export default ContactUs;
