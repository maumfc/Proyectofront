import React from 'react'; // Importación de React desde 'react'
import ProductList from '../componentes/ProductList/ProductList'; // Importación del componente ProductList desde '../componentes/ProductList/ProductList'
import { useNavigate } from 'react-router-dom'; // Importación de useNavigate desde 'react-router-dom'
import './productos.css'; // Importación del archivo de estilos 'productos.css'. Asegúrate de que la ruta al archivo CSS sea correcta.

const Productos = () => { // Definición del componente funcional Productos
  const navigate = useNavigate(); // Obtención de la función navigate desde 'react-router-dom'

  return (
    <>
      <div className='product-header-container'> {/* Contenedor para el encabezado de la página */}
        <button className="add-product-button" onClick={() => { navigate('/productoform'); }}> {/* Botón para agregar productos, al hacer clic navega a '/productoform' */}
          Agregar Productos {/* Texto del botón */}
        </button>
      </div>
      <div className='product-list-container'> {/* Contenedor para la lista de productos */}
        <ProductList /> {/* Renderiza el componente ProductList, que muestra la lista de productos */}
      </div>
    </>
  );
};

export default Productos; // Exportación del componente Productos para su uso en otras partes de la aplicación
