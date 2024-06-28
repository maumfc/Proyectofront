// src/components/ContactInfo.js
import React from 'react';
import './contacto.css';

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <h2>Contact Information</h2>
      <div className="info-item">
        <h3>Address:</h3>
        <p>123 Main St, City, Country</p>
      </div>
      <div className="info-item">
        <h3>Phone:</h3>
        <p>+1 234 567 890</p>
      </div>
      <div className="info-item">
        <h3>Email:</h3>
        <p>info@example.com</p>
      </div>
      <div className="info-item">
        <h3>Working Hours:</h3>
        <p>Mon - Fri: 9:00 AM - 5:00 PM</p>
      </div>
      <div className="map-container">
        {/* Aquí podrías integrar un mapa interactivo, por ejemplo con Google Maps */}
        <iframe
          title="Location Map"
          width="100%"
          height="300"
          frameBorder="0"
          style={{ border: 0 }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1234.5678!2d-73.987654!3d40.748817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x123456789abcdef0!2sEmpresa%20XYZ!5e0!3m2!1sen!2sus!4v1624859278368!5m2!1sen!2sus"
          allowFullScreen
        ></iframe>
      </div>
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
      <div className="social-links">
        <h3>Follow Us:</h3>
        <a href="https://www.facebook.com/example" target="_blank" rel="noopener noreferrer">
          Facebook
        </a>
        <a href="https://twitter.com/example" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
        <a href="https://www.linkedin.com/company/example" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
