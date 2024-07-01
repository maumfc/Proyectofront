import { useNavigate } from 'react-router-dom';
import { ConexionApi } from '../../../hooks/conexion-api';

export function useGuardarProductos() {
    const navigate = useNavigate();
    const { addProduct } = ConexionApi();

    function handleSubmit(producto) {
        console.log(producto)
        addProduct(producto)
        navigate('/productos')
    }

    return {
        handleSubmit
    }
};
