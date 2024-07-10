import React, { useEffect, useState } from 'react'; // Importación de React y hooks useEffect, useState desde 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'; // Importación de componentes de Formik para la gestión de formularios
import * as Yup from 'yup'; // Importación de Yup para la validación de esquemas
import './guardar-productos.css'; // Importación del archivo de estilos 'guardar-productos.css'
import { useGuardarProductos } from './use-guardar-productos'; // Importación del hook personalizado useGuardarProductos desde './use-guardar-productos'
import { useParams } from 'react-router-dom'; // Importación de useParams desde 'react-router-dom' para obtener parámetros de la URL
import { ConexionApi } from '../../../hooks/conexion-api'; // Importación de ConexionApi desde '../../../hooks/conexion-api' para realizar conexiones API

// Definición del componente funcional ProductoForm
const ProductoForm = () => {
    const { id } = useParams(); // Obtención del parámetro 'id' de la URL mediante useParams()

    const { handleSubmit } = useGuardarProductos(id); // Llamada al hook useGuardarProductos con el 'id' obtenido

    const { obtenerProductos } = ConexionApi(); // Obtención de la función obtenerProductos desde ConexionApi()

    // Estado inicial para los valores del formulario
    const [initialValues, setInitialValues] = useState({
        nombre: '',
        imagen: '',
        descripcion: '',
        precio: ''
    });

    // Esquema de validación Yup para los campos del formulario
    const validationSchema = Yup.object().shape({
        imagen: Yup.string().required('La imagen es requerida'),
        descripcion: Yup.string().required('La descripción es requerida'),
        nombre: Yup.string().required('El nombre es requerido'),
        precio: Yup.number().required('El precio es requerido').positive('El precio debe ser mayor que cero')
    });

    // Efecto useEffect para cargar los datos del producto a editar si existe 'id'
    useEffect(() => {
        const fetchProduct = async () => {
            if (id) {
                const productoEditar = await obtenerProductos(id); // Llamada a obtenerProductos con 'id' para obtener datos del producto
                if (productoEditar) {
                    setInitialValues({ // Actualización de initialValues con los datos del producto a editar
                        nombre: productoEditar.nombre,
                        imagen: productoEditar.imagen,
                        descripcion: productoEditar.descripcion,
                        precio: productoEditar.precio
                    });
                }
            }
        };
    
        fetchProduct(); // Llamada a la función fetchProduct dentro del efecto
    }, [id]); // Dependencia 'id' para ejecutar el efecto cuando 'id' cambie

    // Función onSubmit que se ejecuta al enviar el formulario
    const onSubmit = (values, { resetForm }) => {
        handleSubmit(values); // Llamada a handleSubmit con los valores del formulario
        resetForm(); // Reinicio del formulario después de enviar
    };

    // Renderizado del componente
    return (
        <div className='product-form-container'> {/* Contenedor principal del formulario */}
            <Formik
                initialValues={initialValues} // Valores iniciales del formulario
                validationSchema={validationSchema} // Esquema de validación para el formulario
                enableReinitialize={true} // Habilitar reinicialización de valores iniciales
                onSubmit={onSubmit} // Función onSubmit que maneja el envío del formulario
            >
                {({ errors, touched }) => ( // Renderizado condicional según el estado de errores y touched
                    <Form> {/* Componente Form de Formik para el formulario */}
                        <div className="form-control"> {/* Control del formulario para el campo 'imagen' */}
                            <h1>{id ? 'Editar Producto' : 'Agregar Producto'}</h1> {/* Título dinámico según exista 'id' */}
                            <label htmlFor="imagen">Imagen:</label> {/* Etiqueta para el campo 'imagen' */}
                            <Field name="imagen" type="text" /> {/* Campo de entrada 'imagen' */}
                            <ErrorMessage name="imagen" component="div" className="error" /> {/* Mensaje de error para 'imagen' */}
                        </div>
                        <div className="form-control"> {/* Control del formulario para el campo 'nombre' */}
                            <label htmlFor="nombre">Nombre:</label> {/* Etiqueta para el campo 'nombre' */}
                            <Field name="nombre" type="text" /> {/* Campo de entrada 'nombre' */}
                            <ErrorMessage name="nombre" component="div" className="error" /> {/* Mensaje de error para 'nombre' */}
                        </div>
                        <div className="form-control"> {/* Control del formulario para el campo 'descripcion' */}
                            <label htmlFor="descripcion">Descripción:</label> {/* Etiqueta para el campo 'descripcion' */}
                            <Field name="descripcion" as="textarea" /> {/* Campo de entrada 'descripcion' como textarea */}
                            <ErrorMessage name="descripcion" component="div" className="error" /> {/* Mensaje de error para 'descripcion' */}
                        </div>
                        <div className="form-control"> {/* Control del formulario para el campo 'precio' */}
                            <label htmlFor="precio">Precio:</label> {/* Etiqueta para el campo 'precio' */}
                            <Field name="precio" type="number" /> {/* Campo de entrada 'precio' */}
                            <ErrorMessage name="precio" component="div" className="error" /> {/* Mensaje de error para 'precio' */}
                        </div>
                        <button type="submit">{id ? 'Actualizar Producto' : 'Guardar Producto'}</button> {/* Botón de envío del formulario con texto dinámico */}
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default ProductoForm; // Exportación del componente ProductoForm para su uso en otras partes de la aplicación
