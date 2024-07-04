import { useNavigate } from 'react-router-dom';
import { ConexionApi } from '../../../hooks/conexion-api';

export function useGuardarProductos(id) {
    const navigate = useNavigate();
    const { addProduct, actualizarProduct } = ConexionApi();

    async function handleSubmit(producto) {
        try {
            if (id) {
                await actualizarProduct({ id, ...producto });
            } else {
                await addProduct(producto);
            }
            navigate('/productos');
        } catch (error) {
            console.error("Error al guardar el producto:", error);
        }
    }

    return {
        handleSubmit
    }
};