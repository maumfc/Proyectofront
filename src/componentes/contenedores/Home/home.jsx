import React from 'react';
import './home.css';

const Homec = () => {
  return (
    <div className="home">
      <header className="header">
        <h1>Bienvenido a [Nombre de la Tienda]</h1>
        <p>Descubre la elegancia en cada detalle.</p>
      </header>
      <section className="featured-products">
        <h2>Productos Destacados</h2>
        <div className="product-grid">
          <div className="product-item">
            <img src="/images/product1.jpg" alt="Producto 1" />
            <h3>Pulsera de Plata Elegante</h3>
            <p className="price">$99.99</p>
          </div>
          <div className="product-item">
            <img src="/images/product2.jpg" alt="Producto 2" />
            <h3>Pulsera de Cuero Minimalista</h3>
            <p className="price">$49.99</p>
          </div>
          <div className="product-item">
            <img src="/images/product3.jpg" alt="Producto 3" />
            <h3>Pulsera de Perlas Moderna</h3>
            <p className="price">$79.99</p> 
          </div>
        </div>
      </section>
      <section className="about-us">
        <h2>Acerca de Nosotros</h2>
        <p>En [Nombre de la Tienda], nos especializamos en crear pulseras que no solo son accesorios, sino expresiones de tu estilo personal. Nuestro compromiso con la calidad y el diseño nos distingue, ofreciendo piezas únicas que complementan tu vida cotidiana con elegancia y sofisticación.</p>
      </section>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} [Nombre de la Tienda]. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default Homec;
