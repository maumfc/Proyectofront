import React, { useEffect, useState } from 'react';
import ProductCard from '../../componentes/contenedores/ProductCard/ProductCard';
import './ProductList.css';
import { ConexionApi } from '../../hooks/conexion-api';

const ProductList = () => {
  const { getProductos } = ConexionApi();
  const [productsData, setProductsData] = useState([]);
  const [error, setError] = useState(null);
  const [searchInput, setSearchInput] = useState(null);

  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
  };

  const filtro = async (inputBuscar) => {
    if (!inputBuscar.trim()) {
      const allProducts = await getProductos();
      setProductsData(allProducts);
      return;
    }
    const filtroProductos = productsData.filter((product) => product.nombre.toLowerCase().includes(inputBuscar.toLowerCase()));
    setProductsData(filtroProductos);
  };

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        if (searchInput) {
          await filtro(searchInput);
        } else {
          const productos = await getProductos();
          setProductsData(productos);
        }
      } catch (error) {
        setError(error.message);
      }
    };

    fetchProductos();
  }, [searchInput]);

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:5000/products/${id}`, {
        method: 'DELETE',
      });

      const updatedProducts = productsData.filter(product => product.id !== id);
      setProductsData(updatedProducts);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Buscar productos..."
          value={searchInput}
          onChange={handleSearchChange}
        />
      </div>

    <div className="product-list">
      {error ? (
        <p>Error al cargar productos: {error}</p>
      ) : (
        productsData.length ? productsData.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onDelete={handleDelete} />
          )) : <div className="empty-container"><h1 className=''> {searchInput ? `No se encontro el producto: "${searchInput}"` : "No hay productos"}</h1></div>
      )}
    </div>
    </>
  );
};

export default ProductList;