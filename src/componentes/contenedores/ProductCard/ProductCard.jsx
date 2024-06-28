// src/components/ProductCard.js
import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.imagen} alt={product.nombre} />
      <div className="product-info">
        <h3>{product.nombre}</h3>
        <p>{product.descripcion}</p>
      </div>
    </div>
  );
};

export default ProductCard;
