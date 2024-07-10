import React from 'react'; // Importación de React desde 'react'
import Description from '../componentes/contenedores/Description/Description'; // Importación del componente Description desde '../componentes/contenedores/Description/Description'

const About = () => { // Definición del componente funcional About
  return (
    <div> {/* Contenedor principal */}
      <Description /> {/* Renderiza el componente Description */}
    </div>
  );
};

export default About; // Exportación del componente About para su uso en otras partes de la aplicación
