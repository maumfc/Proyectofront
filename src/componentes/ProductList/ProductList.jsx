import React, { useEffect, useState } from 'react';
import ProductCard from '../../componentes/contenedores/ProductCard/ProductCard';
import './ProductList.css';
import { ConexionApi } from '../../hooks/conexion-api';

const ProductList = () => {
  const { getProductos } = ConexionApi();
  const [productsData, setProductsData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const productos = await getProductos();
        setProductsData(productos);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchProductos();
  }, [getProductos]);

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
    <div className="product-list">
      {error ? (
        <p>Error al cargar productos: {error}</p>
      ) : (
        productsData.length ? productsData.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onDelete={handleDelete} />
        )) : <div clasName="empty-container"><h1 className=''>No hay productos</h1></div>
      )}
    </div>
  );
};

export default ProductList;