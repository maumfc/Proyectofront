import React, { useState } from 'react';
import './ProductCard.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const placeholderImage = 'https://via.placeholder.com/200'; // URL de la imagen placeholder

const ProductCard = ({ product, onDelete }) => {
  const { id, imagen, nombre, descripcion, precio } = product;
  const imageUrl = imagen || placeholderImage;
  const navigate = useNavigate();

  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="product-card">
      <img src={imageUrl} alt={nombre} className="product-image" />
      <div className="product-info">
        <h3>{nombre}</h3>
        <p>{descripcion}</p>
        <p className="product-price">${precio}</p>
        <div className='action-buttons'>
          <button className="delete-button" onClick={() => onDelete(id)}>Eliminar</button>
          <button className="delete-button" onClick={() => { navigate(`/edit-product/${id}`); }}>Editar</button>
          <button className="favorite-button" onClick={toggleFavorite}>
            <FontAwesomeIcon icon={faHeart} className={isFavorite ? 'favorite-icon selected' : 'favorite-icon'} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
