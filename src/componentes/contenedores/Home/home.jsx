import React, { useEffect, useState } from 'react';
import './home.css';
import { ConexionApi } from '../../../hooks/conexion-api';
import { Link } from 'react-router-dom';

 
const Homec = () => {

  const { getProductos } = ConexionApi();
  const [productos, setProductos] = useState();

  useEffect(() => {
    const fetchProduct = async () => {
      const allProductos = await getProductos();
      const productosFavoritos = allProductos.filter((producto) => producto.esFavorito)
      setProductos(productosFavoritos)
    };

    fetchProduct();
  }, []);

  return (
    <div className="home">
      <header className="header-o">
        <h1>Bienvenido a Vínculo Encantado</h1>
        <p>Descubre la elegancia en cada detalle.</p>
      </header>
      <section className="featured-products">
        <h2>Productos Destacados</h2>
        <div className="product-grid">
        {productos && productos.length ? productos.map((producto) => (
            <div className="product-item" key={producto.id}>
              <img src={producto.imagen} alt={producto.nombre} />
              <h3>{producto.nombre}</h3>
              <p className="price">${producto.precio}</p>
            </div>
                  )) : (<div className="no-products">
                    <p>No tienes productos favoritos en este momento.</p>
                    <p>Explora la sección de <Link to="/productos">productos</Link>  y agrega tus favoritos.</p>
                  </div>)}
        </div>
      </section>
      <section className="about-us">
        <h2>Acerca de Nosotros</h2>
        <p>En Vínculo Encantado, nos especializamos en crear pulseras que no solo son accesorios, sino expresiones de tu estilo personal. Nuestro compromiso con la calidad y el diseño nos distingue, ofreciendo piezas únicas que complementan tu vida cotidiana con elegancia y sofisticación.</p>
      </section>
      
    </div>
  );
};

export default Homec;
