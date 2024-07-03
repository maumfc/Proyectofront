import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './guardar-productos.css'
import { useGuardarProductos } from './use-guardar-productos';
import { useParams } from 'react-router-dom';
import { ConexionApi } from '../../../hooks/conexion-api';

const ProductoForm = () => {
    const { id } = useParams();

const { handleSubmit } = useGuardarProductos(id);
const { obtenerProductos } = ConexionApi();
const [initialValues, setInitialValues] = useState({
    nombre: '',
    imagen: '',
    descripcion: '',
    precio: ''
});
    const validationSchema = Yup.object().shape({
        imagen: Yup.string().required('La imagen es requerida'),
        descripcion: Yup.string().required('La descripción es requerida'),
        nombre: Yup.string().required('El nombre es requerida'),
        precio: Yup.number().required('El precio es requerido').positive('El precio debe ser mayor que cero')
    });

    useEffect(() => {
        const fetchProduct = async () => {
            if (id) {
                const productoEditar = await obtenerProductos(id);
                if (productoEditar) {
                    setInitialValues({
                        nombre: productoEditar.nombre,
                        imagen: productoEditar.imagen,
                        descripcion: productoEditar.descripcion,
                        precio: productoEditar.precio
                    });
                }
            }
        };
    
        fetchProduct();
    }, [id]);

    const onSubmit = (values, { resetForm }) => {
        handleSubmit(values);
        resetForm();
    };

    return (
        <div className='product-form-container'>
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            enableReinitialize={true}
            onSubmit={onSubmit}
        >
            {({ errors, touched }) => (
                <Form>
                    <div className="form-control">
                    <h1>{id ? 'Editar Producto' : 'Agregar Producto'}</h1>
                        <label htmlFor="imagen">Imagen:</label>
                        <Field name="imagen" type="text" />
                        <ErrorMessage name="imagen" component="div" className="error" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="descripcion">Nombre:</label>
                        <Field name="nombre" type={"text"}/>
                        <ErrorMessage name="nombre" component="div" className="error" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="descripcion">Descripción:</label>
                        <Field name="descripcion" as="textarea" />
                        <ErrorMessage name="descripcion" component="div" className="error" />
                    </div>

                    <div className="form-control">
                        <label htmlFor="precio">Precio:</label>
                        <Field name="precio" type="number" />
                        <ErrorMessage name="precio" component="div" className="error" />
                    </div>

                    <button type="submit">{id ? 'Actualizar Producto' : 'Guardar Producto'}</button>
                </Form>
            )}
        </Formik>
        </div>
    );
};

export default ProductoForm;
