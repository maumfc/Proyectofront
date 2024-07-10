import React from 'react'; // Importación de React para la creación de componentes
import './contacto.css'; // Importación del archivo de estilos 'contacto.css'

// Definición del componente funcional ContactInfo
const ContactInfo = () => {
  return (
    <div className="contact-info"> {/* Contenedor principal con clase 'contact-info' */}
      <h2>Contact Information</h2> {/* Título de información de contacto */}
      <div className="info-item"> {/* Primer ítem de información */}
        <h3>Address:</h3> {/* Título de dirección */}
        <p>123 calle ross, Santa Ana, San jose</p> {/* Dirección */}
      </div>
      <div className="info-item"> {/* Segundo ítem de información */}
        <h3>Phone:</h3> {/* Título de teléfono */}
        <p>
          <a href="https://wa.me/50664453107" target="_blank" rel="noopener noreferrer">
            +506 64453107
          </a> {/* Número de teléfono con enlace */}
        </p>
      </div>
      <div className="info-item"> {/* Tercer ítem de información */}
        <h3>Email:</h3> {/* Título de correo electrónico */}
        <p>maurenmfc@gmail.com</p> {/* Dirección de correo electrónico */}
      </div>
      <div className="info-item"> {/* Cuarto ítem de información */}
        <h3>Working Hours:</h3> {/* Título de horario de trabajo */}
        <p>Mon - Fri: 9:00 AM - 5:00 PM</p> {/* Horario de trabajo */}
      </div>
      <div className="map-container"> {/* Contenedor para un mapa interactivo */}
        {/* Aquí podrías integrar un mapa interactivo, por ejemplo con Google Maps */}
        <iframe
          title="Location Map" // Título del iframe
          width="100%" // Ancho del iframe
          height="300" // Altura del iframe
          frameBorder="0" // Borde del iframe
          style={{ border: 0 }} // Estilos del iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d584.1961916027353!2d-84.19700605455104!3d9.934967075346986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2scr!4v1719603727970!5m2!1ses-419!2scr"
          allowFullScreen // Permite pantalla completa en el iframe
        ></iframe>
      </div>
      <div className="contact-form"> {/* Contenedor para el formulario de contacto */}
        <h2>Contact Us</h2> {/* Título de contacto */}
        <form> {/* Formulario de contacto */}
          <input type="text" placeholder="Name" required /> {/* Campo de nombre */}
          <input type="email" placeholder="Email" required /> {/* Campo de correo electrónico */}
          <textarea placeholder="Message" required></textarea> {/* Campo de mensaje */}
          <button type="submit">Send Message</button> {/* Botón de enviar mensaje */}
        </form>
      </div>
      <div className="social-links"> {/* Contenedor para enlaces a redes sociales */}
        <h3>Follow Us:</h3> {/* Título de seguir en redes sociales */}
        <a href="https://www.facebook.com/example" target="_blank" rel="noopener noreferrer">
          Facebook {/* Enlace a Facebook */}
        </a>
        <a href="https://twitter.com/example" target="_blank" rel="noopener noreferrer">
          Twitter {/* Enlace a Twitter */}
        </a>
        <a href="https://www.linkedin.com/company/example" target="_blank" rel="noopener noreferrer">
          LinkedIn {/* Enlace a LinkedIn */}
        </a>
      </div>
    </div>
  );
};

export default ContactInfo; // Exportación del componente ContactInfo para su uso en otras partes de la aplicación
