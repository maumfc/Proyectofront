import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './guardar-productos.css'


const ProductoForm = () => {
    // Define las validaciones del formulario usando Yup
    const validationSchema = Yup.object().shape({
        imagen: Yup.string().required('La imagen es requerida'),
        descripcion: Yup.string().required('La descripción es requerida'),
        nombre: Yup.string().required('El nombre es requerida'),
        precio: Yup.number().required('El precio es requerido').positive('El precio debe ser mayor que cero')
    });

    const initialValues = {
        nombre: '',
        imagen: '',
        descripcion: '',
        precio: ''
    };

    const onSubmit = (values, { resetForm }) => {
        // Aquí podrías enviar los datos a un servidor o realizar otras acciones
        useGuardarProductos(values); // Llama a tu función para guardar productos
        resetForm();
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {({ errors, touched }) => (
                <Form>
                    <div className="form-control">
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

                    <button type="submit">Guardar Producto</button>
                </Form>
            )}
        </Formik>
    );
};

export default ProductoForm;
