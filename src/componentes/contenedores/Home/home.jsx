import React, { useEffect, useState } from 'react'; // Importación de React y funciones useEffect y useState desde 'react'
import './home.css'; // Importación del archivo de estilos 'home.css'
import { ConexionApi } from '../../../hooks/conexion-api'; // Importación de ConexionApi desde '../../../hooks/conexion-api'
import { Link } from 'react-router-dom'; // Importación del componente Link desde 'react-router-dom'

const Homec = () => { // Definición del componente funcional Homec
  const { getProductos } = ConexionApi(); // Extracción de la función getProductos desde ConexionApi
  const [productos, setProductos] = useState(); // Estado local para almacenar los productos

  useEffect(() => {
    const fetchProduct = async () => { // Función asincrónica para obtener productos
      const allProductos = await getProductos(); // Llamada a la función getProductos para obtener todos los productos
      const productosFavoritos = allProductos.filter((producto) => producto.esFavorito); // Filtrado de productos favoritos
      setProductos(productosFavoritos); // Actualización del estado con los productos favoritos
    };

    fetchProduct(); // Llamada a la función fetchProduct al montar el componente
  }, []); // Array vacío como segundo argumento para ejecutar useEffect solo una vez al montar el componente

  return (
    <div className="home"> {/* Contenedor principal con clase 'home' */}
      <header className="header-o"> {/* Encabezado con clase 'header-o' */}
        <h1>Bienvenido a Vínculo Encantado</h1> {/* Título principal */}
        <p>Descubre la elegancia en cada detalle.</p> {/* Descripción */}
      </header>
      <section className="featured-products"> {/* Sección de productos destacados */}
        <h2>Productos Destacados</h2> {/* Título de la sección */}
        <div className="product-grid"> {/* Contenedor de la cuadrícula de productos */}
          {productos && productos.length ? ( // Verificación de productos existentes y si hay productos favoritos
            productos.map((producto) => ( // Mapeo de cada producto en la lista
              <div className="product-item" key={producto.id}> {/* Elemento de producto con clase 'product-item' y clave única */}
                <img src={producto.imagen} alt={producto.nombre} /> {/* Imagen del producto */}
                <h3>{producto.nombre}</h3> {/* Nombre del producto */}
                <p className="price">${producto.precio}</p> {/* Precio del producto */}
              </div>
            ))
          ) : (
            <div className="no-products"> {/* Mensaje cuando no hay productos favoritos */}
              <p>No tienes productos favoritos en este momento.</p>
              <p>Explora la sección de <Link to="/productos">productos</Link> y agrega tus favoritos.</p>
            </div>
          )}
        </div>
      </section>
      <section className="about-us"> {/* Sección 'Acerca de Nosotros' */}
        <h2>Acerca de Nosotros</h2> {/* Título de la sección */}
        <p>En Vínculo Encantado, nos especializamos en crear pulseras que no solo son accesorios, sino expresiones de tu estilo personal. Nuestro compromiso con la calidad y el diseño nos distingue, ofreciendo piezas únicas que complementan tu vida cotidiana con elegancia y sofisticación.</p> {/* Descripción */}
      </section>
    </div>
  );
};

export default Homec; // Exportación del componente Homec para su uso en otras partes de la aplicación
