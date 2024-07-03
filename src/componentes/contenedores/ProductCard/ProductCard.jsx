import React from 'react';
import './ProductCard.css';
import { useNavigate } from 'react-router-dom';

const placeholderImage = 'https://via.placeholder.com/200'; // URL de la imagen placeholder

const ProductCard = ({ product, onDelete }) => {
  const { id, imagen, nombre, descripcion, precio } = product;
  const imageUrl = imagen || placeholderImage;
  const navigate = useNavigate();

  return (
    <div className="product-card">
      <img src={imageUrl} alt={nombre} className="product-image" />
      <div className="product-info">
        <h3>{nombre}</h3>
        <p>{descripcion}</p>
        <p className="product-price">${precio}</p>
        <div className='action-buttons'>
  <button
    className="delete-button"
    onClick={() => onDelete(id)}>Eliminar</button>
  <button className="delete-button" onClick={() => { navigate(`/edit-product/${id}`); }}>Editar</button>
</div>
       
      </div>
    </div>
  );
};

export default ProductCard;
