import { useNavigate } from 'react-router-dom'; // Importación del hook useNavigate desde 'react-router-dom' para la navegación programática
import { ConexionApi } from '../../../hooks/conexion-api'; // Importación de ConexionApi desde '../../../hooks/conexion-api' para realizar conexiones API

// Definición del hook personalizado useGuardarProductos
export function useGuardarProductos(id) {
    const navigate = useNavigate(); // Obtención de la función navigate del hook useNavigate para la navegación

    const { addProduct, actualizarProduct } = ConexionApi(); // Desestructuración de funciones addProduct y actualizarProduct desde ConexionApi

    // Función asincrónica handleSubmit para manejar la acción de guardar productos
    async function handleSubmit(producto) {
        try {
            if (id) { // Si existe 'id', se actualiza el producto
                await actualizarProduct({ id, ...producto }); // Llamada a la función actualizarProduct con 'id' y los datos del producto
            } else { // Si no existe 'id', se agrega un nuevo producto
                await addProduct(producto); // Llamada a la función addProduct con los datos del nuevo producto
            }
            navigate('/productos'); // Navegación a la ruta '/productos' después de guardar o actualizar el producto
        } catch (error) { // Manejo de errores
            console.error("Error al guardar el producto:", error); // Impresión del error en la consola
        }
    }

    // Retorno de la función handleSubmit para ser utilizada fuera del hook
    return {
        handleSubmit
    }
};
