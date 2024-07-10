import React, { useEffect, useState } from 'react';
import ProductCard from '../../componentes/contenedores/ProductCard/ProductCard';
import './ProductList.css';
import { ConexionApi } from '../../hooks/conexion-api';

// Componente principal que muestra una lista de productos con búsqueda y eliminación
const ProductList = () => {
  // Desestructuramos getProductos de ConexionApi para obtener los datos de productos.
  const { getProductos } = ConexionApi();
  
  // Estado para almacenar los productos obtenidos de la API.
  const [productsData, setProductsData] = useState([]);
  
  // Estado para almacenar errores que ocurren durante la obtención de productos o eliminación.
  const [error, setError] = useState(null);
  
  // Estado para almacenar el valor de búsqueda ingresado por el usuario.
  const [searchInput, setSearchInput] = useState('');

  // Función para manejar los cambios en el campo de búsqueda.
  const handleSearchChange = (event) => {
    // Actualizamos el estado de searchInput con el valor del campo de búsqueda.
    setSearchInput(event.target.value);
  };

  // Función para filtrar los productos basados en el término de búsqueda.
  const filtro = async (inputBuscar) => {
    if (!inputBuscar.trim()) {
      // Si el término de búsqueda está vacío, obtenemos todos los productos.
      const allProducts = await getProductos();
      setProductsData(allProducts);
      return;
    }
    // Filtramos los productos que contienen el término de búsqueda en su nombre (sin importar mayúsculas/minúsculas).
    const filtroProductos = productsData.filter((product) => product.nombre.toLowerCase().includes(inputBuscar.toLowerCase()));
    setProductsData(filtroProductos);
  };

  // useEffect que se ejecuta cada vez que searchInput cambia.
  useEffect(() => {
    // Función asíncrona para obtener los productos y manejar errores.
    const fetchProductos = async () => {
      try {
        // Si hay un término de búsqueda, aplicamos el filtro. Si no, obtenemos todos los productos.
        if (searchInput) {
          await filtro(searchInput);
        } else {
          const productos = await getProductos();
          setProductsData(productos);
        }
      } catch (error) {
        // En caso de error, actualizamos el estado de error con el mensaje del error.
        setError(error.message);
      }
    };

    // Llamamos a la función fetchProductos para cargar los productos.
    fetchProductos();
  }, [searchInput]); // Dependencia en searchInput para que se ejecute cuando cambia.

  // Función para manejar la eliminación de un producto.
  const handleDelete = async (id) => {
    try {
      // Hacemos una petición DELETE para eliminar el producto con el id proporcionado.
      await fetch(`http://localhost:5000/products/${id}`, {
        method: 'DELETE', // Usamos el método DELETE para eliminar el producto.
      });

      // Actualizamos el estado de productsData eliminando el producto que fue eliminado.
      const updatedProducts = productsData.filter(product => product.id !== id);
      setProductsData(updatedProducts);
    } catch (error) {
      // En caso de error, actualizamos el estado de error con el mensaje del error.
      setError(error.message);
    }
  };

  return (
    <>
      {/* Contenedor para el campo de búsqueda */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Buscar productos..."
          value={searchInput} // El valor del campo de búsqueda se vincula con el estado de searchInput.
          onChange={handleSearchChange} // Manejador de cambios para actualizar searchInput.
        />
      </div>

      {/* Contenedor para la lista de productos */}
      <div className="product-list">
        {error ? (
          // Si hay un error, mostramos un mensaje de error.
          <p>Error al cargar productos: {error}</p>
        ) : (
          // Si no hay error, mostramos los productos o un mensaje si no hay productos.
          productsData.length ? productsData.map(product => (
            <ProductCard
              key={product.id} // La propiedad key ayuda a React a identificar qué items han cambiado.
              product={product} // Pasamos el producto al componente ProductCard.
              onDelete={handleDelete} // Pasamos la función handleDelete para eliminar productos.
            />
          )) : (
            // Mensaje mostrado cuando no hay productos y el término de búsqueda.
            <div className="empty-container">
              <h1 className=''>
                {searchInput ? `No se encontró el producto: "${searchInput}"` : "No hay productos"}
              </h1>
            </div>
          )
        )}
      </div>
    </>
  );
};

export default ProductList;
      