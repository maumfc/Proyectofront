import React from 'react';
import './ProductCard.css';

const placeholderImage = 'https://via.placeholder.com/200'; // URL de la imagen placeholder

const ProductCard = ({ product, onDelete }) => {
  const { id, imagen, nombre, descripcion, precio } = product;
  const imageUrl = imagen || placeholderImage;

  return (
    <div className="product-card">
      <img src={imageUrl} alt={nombre} className="product-image" />
      <div className="product-info">
        <h3>{nombre}</h3>
        <p>{descripcion}</p>
        <p className="product-price">${precio}</p>
        <button
          className="delete-button"
          onClick={() => onDelete(id)}>Eliminar</button>
      </div>
    </div>
  );
};

export default ProductCard;
