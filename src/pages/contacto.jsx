import React from 'react'; // Importación de React desde 'react'
import ContactInfo from '../componentes/contenedores/contacto/contacto'; // Importación del componente ContactInfo desde '../componentes/contenedores/contacto/contacto'

const Contacto = () => { // Definición del componente funcional Contacto
  return (
    <div> {/* Contenedor principal */}
      <ContactInfo /> {/* Renderiza el componente ContactInfo */}
    </div>
  );
};

export default Contacto; // Exportación del componente Contacto para su uso en otras partes de la aplicación
