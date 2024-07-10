import React from 'react';
import './contacto.css';

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <h2>Contact Information</h2>
      <div className="info-item">
        <h3>Address:</h3>
        <p>123 calle ross, Santa Ana, San jose</p>
      </div>
      <div className="info-item">
        <h3>Phone:</h3>
        <p>
          <a href="https://wa.me/50664453107" target="_blank" rel="noopener noreferrer">
            +506 64453107
          </a>
        </p>
      </div>
      <div className="info-item">
        <h3>Email:</h3>
        <p>maurenmfc@gmail.com</p>
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
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d584.1961916027353!2d-84.19700605455104!3d9.934967075346986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2scr!4v1719603727970!5m2!1ses-419!2scr"
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
