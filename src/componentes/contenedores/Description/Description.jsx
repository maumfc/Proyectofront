import React from 'react'; // Importación de React para la creación de componentes
import './Description.css'; // Importación del archivo de estilos 'Description.css'

// Definición del componente funcional Description
const Description = () => {
  return (
    <div className="description"> {/* Contenedor principal con clase 'description' */}
      <header className="header"> {/* Encabezado con clase 'header' */}
        <h1>Bienvenido a Vínculo Encantado</h1> {/* Título principal */}
      </header>
      <section className="section"> {/* Sección con clase 'section' */}
        <h2>Nuestra Filosofía</h2> {/* Título de sección */}
        <p>En el corazón de Vínculo Encantado, creemos en la belleza de lo simple y en la sofisticación del minimalismo. Cada pulsera que diseñamos está pensada para ser una declaración de estilo que complementa tu vida cotidiana y celebra tu individualidad. Nos inspiramos en las tendencias actuales y en la artesanía artística para ofrecerte productos que no solo son accesorios, sino expresiones de tu identidad.</p> {/* Texto descriptivo */}

        <h2>Explora Nuestra Colección</h2> {/* Título de sección */}
        <p>Sumérgete en nuestra colección diversa, donde encontrarás desde pulseras delicadamente tejidas a mano hasta diseños modernos con materiales innovadores. Cada pieza está diseñada para ser cómoda y duradera, utilizando técnicas tradicionales junto con tecnología de vanguardia para garantizar la calidad y el estilo sin igual.</p> {/* Texto descriptivo */}

        <h2>Compromiso con la Sostenibilidad</h2> {/* Título de sección */}
        <p>En Vínculo Encantado, nos enorgullece nuestra dedicación a prácticas sostenibles. Utilizamos materiales éticos y trabajamos con artesanos locales para apoyar comunidades y minimizar nuestro impacto en el medio ambiente. Creemos en la moda con conciencia, donde cada compra contribuye a un futuro más brillante y responsable.</p> {/* Texto descriptivo */}

        <h2>Visítanos Hoy</h2> {/* Título de sección */}
        <p>Explora nuestra tienda en línea y descubre por qué Vínculo Encantado es más que una marca de pulseras; es un símbolo de elegancia moderna y compromiso con la calidad. Únete a nuestra comunidad de amantes del estilo y encuentra la pulsera perfecta que te acompañará en cada ocasión especial.</p> {/* Texto descriptivo */}

        <h2>Conecta con Nosotros</h2> {/* Título de sección */}
        <p>¿Listo para transformar tu estilo? Conéctate con nosotros en nuestras redes sociales para mantenerte al tanto de las últimas tendencias y novedades. Estamos aquí para ayudarte a encontrar la pulsera perfecta que cuenta tu historia de una manera única y memorable.</p> {/* Texto descriptivo */}
      </section>
    </div>
  );
}

export default Description; // Exportación del componente Description para su uso en otras partes de la aplicación
