import React, { useState } from 'react';
import './ProductCard.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { ConexionApi } from '../../../hooks/conexion-api';

const placeholderImage = 'https://via.placeholder.com/200'; // URL de la imagen placeholder

const ProductCard = ({ product, onDelete }) => {
  const { actualizarProduct } = ConexionApi();
  const { id, imagen, nombre, descripcion, precio, esFavorito } = product;
  const imageUrl = imagen || placeholderImage;
  const navigate = useNavigate();

  const [isFavorite, setIsFavorite] = useState(esFavorito || false);

  const [showModal, setShowModal] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    actualizarProduct({ ...product, esFavorito: !isFavorite })
  };

  const handleDelete = () => {
    onDelete(id);
    setShowModal(false);
  };

  return (
    <>
    <div className="product-card">
      <img src={imageUrl} alt={nombre} className="product-image" />
      <div className="product-info">
        <h3>{nombre}</h3>
        <p>{descripcion}</p>
        <p className="product-price">${precio}</p>
        <div className='action-buttons'>
        <button className="delete-button" onClick={() => setShowModal(true)}>Eliminar</button>
          <button className="delete-button" onClick={() => { navigate(`/edit-product/${id}`); }}>Editar</button>
          <button className="favorite-button" onClick={toggleFavorite}>
            <FontAwesomeIcon icon={faHeart} className={isFavorite ? 'favorite-icon selected' : 'favorite-icon'} />
          </button>
        </div>
      </div>
    </div>
    {
        showModal && (
          <div className="modal">
            <div className="modal-content">
              <p>¿Estás seguro de que deseas eliminar este producto?</p>
              <div className="modal-actions">
                <button className="modal-button cancel" onClick={() => setShowModal(false)}>Cancelar</button>
                <button className="modal-button confirm" onClick={handleDelete}>Aceptar</button>
              </div>
            </div>
          </div>
        )
      }
    </>
  );
};

export default ProductCard;
