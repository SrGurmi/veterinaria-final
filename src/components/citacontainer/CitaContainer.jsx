
import CitaForm from '../citaform/CitaForm.jsx';
import CitaList from '../citalist/CitaList.jsx';
import styles from './citacontainer.module.css';
import PropTypes from 'prop-types'; // Importa PropTypes

const CitaContainer = ({ datos, setDatos }) => {
  // Define los PropTypes para las propiedades
  CitaContainer.propTypes = {
    datos: PropTypes.shape({
      nombreDueño: PropTypes.string.isRequired,
      // Agrega otras propiedades según tus necesidades
    }).isRequired,
    setDatos: PropTypes.func.isRequired,
  };

  return (
    <>
      <div className={`cita__wrapper ${styles.cita__wrapper}`}>
        <div className={`citaForm__wrapper ${styles.citaForm__wrapper}`}>
          <CitaForm datos={datos} setDatos={setDatos} />
        </div>
        <div className={`citaList__wrapper ${styles.citaList__wrapper}`}>
          {' '}
          <CitaList datos={datos} />
        </div>
      </div>
    </>
  );
};

export default CitaContainer;


