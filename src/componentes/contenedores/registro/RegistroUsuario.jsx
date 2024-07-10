import React from 'react'; // Importación de React desde 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'; // Importación de Formik, Form, Field y ErrorMessage desde 'formik'
import * as Yup from 'yup'; // Importación de Yup para validación de esquema
import './RegistroUsuario.css'; // Importación del archivo de estilos 'RegistroUsuario.css'
import { ConexionApi } from '../../../hooks/conexion-api'; // Importación de ConexionApi desde '../../../hooks/conexion-api'
import { useNavigate } from 'react-router-dom'; // Importación de useNavigate desde 'react-router-dom'

const RegistroUsuario = () => { // Definición del componente funcional RegistroUsuario
  const { registro } = ConexionApi(); // Extracción de la función registro desde ConexionApi

  const navigate = useNavigate(); // Obtención de la función navigate desde 'react-router-dom'

  const initialValues = { // Valores iniciales para el formulario
    nombre: '',
    correo: '',
    contraseña: '',
  };

  const validationSchema = Yup.object().shape({ // Esquema de validación con Yup
    nombre: Yup.string()
      .required('El nombre es requerido'), // El nombre es obligatorio
    correo: Yup.string()
      .email('Correo inválido') // Debe ser un correo válido
      .required('El correo es requerido'), // El correo es obligatorio
    contraseña: Yup.string()
      .min(6, 'La contraseña debe tener al menos 6 caracteres') // La contraseña debe tener al menos 6 caracteres
      .required('La contraseña es requerida'), // La contraseña es obligatoria
  });

  const handleSubmit = (values, { setSubmitting }) => { // Función para manejar el envío del formulario
    registro(values); // Llama a la función registro con los valores del formulario
    setSubmitting(false); // Indica que el formulario ha sido enviado
    navigate.push("/login"); // Redirige al usuario a la página de inicio de sesión después de registrarse
  };

  return (
    <div className="registro-formulario"> {/* Contenedor principal del formulario de registro */}
      <h2>Registro de Usuario - Vínculo Encantado</h2> {/* Título del formulario */}
      <Formik
        initialValues={initialValues} // Valores iniciales del formulario
        validationSchema={validationSchema} // Esquema de validación
        onSubmit={handleSubmit} // Función a ejecutar al enviar el formulario
      >
        {({ isSubmitting }) => ( // Renderizado del formulario con Formik
          <Form> {/* Componente Form de Formik para el formulario */}
            <div className="campo-formulario"> {/* Campo para el nombre */}
              <label htmlFor="nombre">Nombre:</label> {/* Etiqueta del campo */}
              <Field type="text" id="nombre" name="nombre" /> {/* Campo de entrada para el nombre */}
              <ErrorMessage name="nombre" component="div" className="error" /> {/* Mensaje de error si la validación falla */}
            </div>

            <div className="campo-formulario"> {/* Campo para el correo */}
              <label htmlFor="correo">Correo:</label> {/* Etiqueta del campo */}
              <Field type="email" id="correo" name="correo" /> {/* Campo de entrada para el correo */}
              <ErrorMessage name="correo" component="div" className="error" /> {/* Mensaje de error si la validación falla */}
            </div>

            <div className="campo-formulario"> {/* Campo para la contraseña */}
              <label htmlFor="contraseña">Contraseña:</label> {/* Etiqueta del campo */}
              <Field type="password" id="contraseña" name="contraseña" /> {/* Campo de entrada para la contraseña */}
              <ErrorMessage name="contraseña" component="div" className="error" /> {/* Mensaje de error si la validación falla */}
            </div>

            <button type="submit" disabled={isSubmitting}> {/* Botón de registro */}
              Registrarse
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegistroUsuario; // Exportación del componente RegistroUsuario para su uso en otras partes de la aplicación
