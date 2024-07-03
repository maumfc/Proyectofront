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
    async function loginApi(username, password) {
        try {
            const response = await fetch(`http://localhost:5000/users?username=${username}&password=${password}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            const users = await response.json();
            return users.length > 0;
        } catch (error) {
            console.log("Error en la conexión con la API:", error);
            throw error;
        }
    }

    async function actualizarProduct(product) {
        const { id } = product;
    
        try {
            const response = await fetch(`http://localhost:5000/products/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(product)
            });
    
            if (!response.ok) {
                throw new Error("Error en la actualización");
            }
    
            const updatedProduct = await response.json();
            return updatedProduct;
        } catch (error) {
            console.log("Error al editar el producto:", error);
            throw error;
        }
    }

    async function obtenerProductos(id) {
        try {
            const response = await fetch(`http://localhost:5000/products?id=${id}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            const producto = await response.json();
            return producto[0]
        } catch (error) {
            console.log("Error en la conexión con la API:", error);
            throw error;
        }
    }


    async function addProduct(product) {
        try {
            const response = await fetch("http://localhost:5000/products", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(product)
            });

            if (!response.ok) {
                throw new Error("error");
            }

            const newProduct = await response.json();
            return newProduct;
        } catch (error) {
            console.log("Error al agregar el producto:", error);
            throw error;
        }
    }

    async function registro(username, password) {
        try {
            const response = await fetch("http://localhost:5000/users", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const userData = await response.json();
            return userData;
        } catch (error) {
            console.log("Error en la conexión con la API:", error);
            throw error;
        }
    }



    return {
        getProductos,
        loginApi,
        addProduct,
        obtenerProductos,
        actualizarProduct
    };
};
