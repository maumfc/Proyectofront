export const ConexionApi = () => {
    // Definimos una constante BASE_URL para almacenar la URL base de la API,
    // lo que facilita el mantenimiento y evita errores en las URLs.
    const BASE_URL = "http://localhost:5000";

    // Función asíncrona para obtener la lista de productos desde la API.
    async function getProductos() {
        try {
            // Hacemos una petición GET a la URL de productos.
            const response = await fetch(`${BASE_URL}/products`);

            // Comprobamos si la respuesta es exitosa, es decir, el estado HTTP es 2xx.
            if (!response.ok) {
                // Si no es exitosa, lanzamos un error con el estado HTTP.
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            // Convertimos la respuesta a formato JSON y la devolvemos.
            return await response.json();
        } catch (error) {
            // En caso de error en la conexión o en el proceso, lo registramos en la consola.
            console.error("Error en la conexión con la API:", error);
            // Lanzamos el error para que la función que llama a esta funcióń pueda manejarlo.
            throw error;
        }
    }

    // Función asíncrona para hacer login de un usuario verificando el nombre de usuario y la contraseña.
    async function loginApi(username, password) {
        try {
            // Hacemos una petición GET a la URL de usuarios con parámetros de nombre de usuario y contraseña.
            const response = await fetch(`${BASE_URL}/users?username=${username}&password=${password}`);

            // Comprobamos si la respuesta es exitosa.
            if (!response.ok) {
                // Si no es exitosa, lanzamos un error con el estado HTTP.
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            // Convertimos la respuesta a formato JSON y verificamos si hay usuarios.
            const users = await response.json();
            // Retornamos true si hay usuarios, indicando que el login es exitoso.
            return users.length > 0;
        } catch (error) {
            // En caso de error, lo registramos en la consola.
            console.error("Error en la conexión con la API:", error);
            // Lanzamos false para que la función que llama a esta funcióń pueda manejarlo.
            return false
        }
    }

    // Función asíncrona para actualizar un producto en la API.
    async function actualizarProduct(product) {
        // Extraemos el id del producto que se necesita para la actualización.
        const { id } = product;

        try {
            // Hacemos una petición PUT a la URL del producto específico para actualizarlo.
            const response = await fetch(`${BASE_URL}/products/${id}`, {
                method: 'PUT', // Usamos el método PUT para la actualización.
                headers: {
                    'Content-Type': 'application/json' // Indicamos que el contenido enviado es JSON.
                },
                body: JSON.stringify(product) // Convertimos el producto a formato JSON para enviarlo.
            });

            // Comprobamos si la respuesta es exitosa.
            if (!response.ok) {
                // Si no es exitosa, lanzamos un error con un mensaje genérico.
                throw new Error("Error en la actualización");
            }

            // Convertimos la respuesta a formato JSON y la devolvemos.
            return await response.json();
        } catch (error) {
            // En caso de error, lo registramos en la consola.
            console.error("Error al editar el producto:", error);
            // Lanzamos el error para que la función que llama a esta funcióń pueda manejarlo.
            throw error;
        }
    }

    // Función asíncrona para obtener un producto específico por su id.
    async function obtenerProductos(id) {
        try {
            // Hacemos una petición GET a la URL de productos con el id como parámetro.
            const response = await fetch(`${BASE_URL}/products?id=${id}`);

            // Comprobamos si la respuesta es exitosa.
            if (!response.ok) {
                // Si no es exitosa, lanzamos un error con el estado HTTP.
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            // Convertimos la respuesta a formato JSON y retornamos el primer producto de la lista.
            const producto = await response.json();
            return producto[0];
        } catch (error) {
            // En caso de error, lo registramos en la consola.
            console.error("Error en la conexión con la API:", error);
            // Lanzamos el error para que la función que llama a esta funcióń pueda manejarlo.
            throw error;
        }
    }

    // Función asíncrona para agregar un nuevo producto a la API.
    async function addProduct(product) {
        try {
            // Hacemos una petición POST a la URL de productos para agregar un nuevo producto.
            const response = await fetch(`${BASE_URL}/products`, {
                method: 'POST', // Usamos el método POST para agregar un nuevo producto.
                headers: {
                    'Content-Type': 'application/json' // Indicamos que el contenido enviado es JSON.
                },
                body: JSON.stringify({ ...product, esFavorito: false }) // Convertimos el producto a formato JSON, con esFavorito en false por defecto.
            });

            // Comprobamos si la respuesta es exitosa.
            if (!response.ok) {
                // Si no es exitosa, lanzamos un error con un mensaje genérico.
                throw new Error("Error al agregar el producto");
            }

            // Convertimos la respuesta a formato JSON y la devolvemos.
            return await response.json();
        } catch (error) {
            // En caso de error, lo registramos en la consola.
            console.error("Error al agregar el producto:", error);
            // Lanzamos el error para que la función que llama a esta funcióń pueda manejarlo.
            throw error;
        }
    }

    // Función asíncrona para registrar un nuevo usuario en la API.
    async function registro(username, password) {
        try {
            // Hacemos una petición POST a la URL de usuarios para agregar un nuevo usuario.
            const response = await fetch(`${BASE_URL}/users`, {
                method: 'POST', // Usamos el método POST para agregar un nuevo usuario.
                headers: {
                    'Content-Type': 'application/json' // Indicamos que el contenido enviado es JSON.
                },
                body: JSON.stringify({ username, password }) // Convertimos el nombre de usuario y contraseña a formato JSON para enviarlos.
            });

            // Comprobamos si la respuesta es exitosa.
            if (!response.ok) {
                // Si no es exitosa, lanzamos un error con el estado HTTP.
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            // Convertimos la respuesta a formato JSON y la devolvemos.
            return await response.json();
        } catch (error) {
            // En caso de error, lo registramos en la consola.
            console.error("Error en la conexión con la API:", error);
            // Lanzamos el error para que la función que llama a esta funcióń pueda manejarlo.
            throw error;
        }
    }

    // Devolvemos un objeto con las funciones que queremos exponer desde este módulo.
    return {
        registro,         // Función para registrar un nuevo usuario.
        getProductos,    // Función para obtener todos los productos.
        loginApi,        // Función para hacer login de un usuario.
        addProduct,      // Función para agregar un nuevo producto.
        obtenerProductos,// Función para obtener un producto específico por su id.
        actualizarProduct// Función para actualizar un producto existente.
    };
};
