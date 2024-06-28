// CONEXION CON API JSON-SERVER

export const ConexionApi = () => {
    async function getProductos() {
        try {
            const response = await fetch("http://localhost:5000/products");
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const datos = await response.json();
            return datos;
        } catch (error) {
            console.log("Error en la conexión con la API:", error);
            throw error; 
        }
    }

    return {
        getProductos
    };
};
