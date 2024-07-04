import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './RegistroUsuario.css'; 
import { ConexionApi } from '../../../hooks/conexion-api';
import { useNavigate } from 'react-router-dom';

const RegistroUsuario = () => {
  const { registro}  = ConexionApi();

  const navigate = useNavigate();
  const initialValues = {
    nombre: '',
    correo: '',
    contraseña: '',
  };

  const validationSchema = Yup.object().shape({
    nombre: Yup.string()
      .required('El nombre es requerido'),
    correo: Yup.string()
      .email('Correo inválido')
      .required('El correo es requerido'),
    contraseña: Yup.string()
      .min(6, 'La contraseña debe tener al menos 6 caracteres')
      .required('La contraseña es requerida'),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    registro(values);
    setSubmitting(false);
    navigate.push ("/login");
  };

  return (
    <div className="registro-formulario">
      <h2>Registro de Usuario - Vínculo Encantado</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="campo-formulario">
              <label htmlFor="nombre">Nombre:</label>
              <Field type="text" id="nombre" name="nombre" />
              <ErrorMessage name="nombre" component="div" className="error" />
            </div>

            <div className="campo-formulario">
              <label htmlFor="correo">Correo:</label>
              <Field type="email" id="correo" name="correo" />
              <ErrorMessage name="correo" component="div" className="error" />
            </div>

            <div className="campo-formulario">
              <label htmlFor="contraseña">Contraseña:</label>
              <Field type="password" id="contraseña" name="contraseña" />
              <ErrorMessage name="contraseña" component="div" className="error" />
            </div>

            <button type="submit" disabled={isSubmitting}>
           
              Registrarse
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegistroUsuario;
