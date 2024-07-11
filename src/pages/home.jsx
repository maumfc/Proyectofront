import React from 'react'; // Importación de React desde 'react'
import Homec from '../componentes/contenedores/Home/home'; // Importación del componente Homec desde '../componentes/contenedores/Home/home'

const Home = () => { // Definición del componente funcional Home
  return (
    <div> {/* Contenedor principal */}
      <Homec /> {/* Renderiza el componente Homec */}
    </div>
  );
};

export default Home; // Exportación del componente Home para su uso en otras partes de la aplicación
