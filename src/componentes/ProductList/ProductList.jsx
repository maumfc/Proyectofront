import React, { useEffect, useState } from 'react';
import ProductCard from '../../componentes/contenedores/ProductCard/ProductCard';
import './ProductList.css';
import { ConexionApi } from '../../hooks/conexion-api';
//import productsData from '../../../public/products.json'; // Importamos los datos de productos desde el archivo JSON

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
  
  return (
    <div className="product-list">
      {error ? (
        <p>Error al cargar productos: {error}</p>
      ) : (
        productsData.map(product => (
          <ProductCard key={product.id} product={product} />
        ))
      )}
    </div>
  );
};

export default ProductList;
