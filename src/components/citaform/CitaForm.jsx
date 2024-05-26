import { useState } from 'react';
import PropTypes from 'prop-types'; // Importa PropTypes
import styles from './citaform.module.css';

function CitaForm({ datos, setDatos }) {
  const initUser = {
    nombreMascota: datos.nombreMascota,
    nombreDueño: datos.nombreDueño,
    fecha: datos.fecha,
    hora: datos.hora,
    sintomas: datos.sintomas
  };

  const [citaForm, setCitaForm] = useState(initUser);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCitaForm({
      ...citaForm,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDatos(citaForm);
    setCitaForm(initUser);
  };

  return (
    <div className={`citaForm__mainBox ${styles.citaForm__mainBox}`}>
      <form onSubmit={handleSubmit}>
        <h1 className={`title ${styles.title}`}>Añadir cita</h1>
        <hr />
        <label>Nombre mascota</label>
        <input
          className={`citaForm__input ${styles.citaForm__input}`}
          type="text"
          id="nombreMascota"
          name="nombreMascota"
          value={citaForm.nombreMascota}
          onChange={handleInputChange}
          required
        />

        {/* Resto de los campos de entrada (nombreDueño, fecha, hora, sintomas) */}

        <button
          className={`citaForm__buttonEnviar ${styles.citaForm__buttonEnviar}`}
          type="submit"
        >
          Nueva cita
        </button>
      </form>
    </div>
  );
}


CitaForm.propTypes = {
  datos: PropTypes.shape({
    nombreMascota: PropTypes.string.isRequired,
    nombreDueño: PropTypes.string.isRequired,
    fecha: PropTypes.string.isRequired,
    hora: PropTypes.string.isRequired,
    sintomas: PropTypes.string.isRequired,
  }).isRequired,
  setDatos: PropTypes.func.isRequired,
};

export default CitaForm;

