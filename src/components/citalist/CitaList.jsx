
import PropTypes from 'prop-types';

const CitaList = ({ datos }) => {
  const citas = [];

  const nuevaCita = {
    nombreDueño: datos.nombreDueño,
    nombreMascota: datos.nombreMascota,
    fecha: datos.fecha,
    hora: datos.hora,
    sintomas: datos.sintomas
  };
  citas.push(nuevaCita);

  return (
    <>
      <div className="container__citas">
        {citas.map((cita, index) => (
          <div key={index} className="info">
            <div>Nombre Dueño: {cita.nombreDueño}</div>
            <div>Nombre Mascota: {cita.nombreMascota}</div>
            <div>Fecha: {cita.fecha}</div>
            <div>Hora: {cita.hora}</div>
            <div>Síntomas: {cita.sintomas}</div>
          </div>
        ))}
      </div>
    </>
  );
};

CitaList.propTypes = {
  datos: PropTypes.shape({
    nombreDueño: PropTypes.string.isRequired,
    nombreMascota: PropTypes.string.isRequired,
    fecha: PropTypes.string.isRequired,
    hora: PropTypes.string.isRequired,
    sintomas: PropTypes.string.isRequired
  }).isRequired
};

export default CitaList;
