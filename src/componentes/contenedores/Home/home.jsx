import React from 'react';
import './home.css';

const productos = [
  {
    id: 1,
    nombre: 'Pulsera de Plata Elegante',
    imagen: 'https://m.media-amazon.com/images/I/513EKR4wdbL._AC_SX679_.jpg',
    precio: '$99.99',
  },
  {
    id: 2,
    nombre: 'Pulsera de Cuero Minimalista',
    imagen: 'https://www.ignatius.es/wp-content/uploads/2024/03/pulseras-para-parejas-063gsa.webp',
    precio: '$49.99',
  },
  {
    id: 3,
    nombre: 'Pulsera de Perlas Moderna',
    imagen: 'https://argenteus925.com/cdn/shop/products/IMG_20220210_182415_1597x1597.jpg?v=1644544814',
    precio: '$79.99',
  },
];

const Homec = () => {
  return (
    <div className="home">
      <header className="header-o">
        <h1>Bienvenido a Vínculo Encantado</h1>
        <p>Descubre la elegancia en cada detalle.</p>
      </header>
      <section className="featured-products">
        <h2>Productos Destacados</h2>
        <div className="product-grid">
          {productos.map((producto) => (
            <div className="product-item" key={producto.id}>
              <img src={producto.imagen} alt={producto.nombre} />
              <h3>{producto.nombre}</h3>
              <p className="price">{producto.precio}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="about-us">
        <h2>Acerca de Nosotros</h2>
        <p>En Vínculo Encantado, nos especializamos en crear pulseras que no solo son accesorios, sino expresiones de tu estilo personal. Nuestro compromiso con la calidad y el diseño nos distingue, ofreciendo piezas únicas que complementan tu vida cotidiana con elegancia y sofisticación.</p>
      </section>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Vínculo Encantado. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Homec;
