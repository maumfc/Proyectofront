import React from 'react'
import ProductList from '../componentes/ProductList/ProductList'
import { useNavigate } from 'react-router-dom';
import './productos.css'

const Productos = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className='product-header-container'>
        <button className="add-product-button" onClick={() => { navigate('/productoform'); }}>
          Agregar Productos
        </button>
      </div>
      <div className='product-list-container'>
        <ProductList />
      </div>
    </>
  )
}

export default Productos
