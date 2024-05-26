
import PropTypes from 'prop-types'; // Importa PropTypes

const Cita = ({ cita, index, removeCita }) => (
  <div className="card mb-3">
    <div className="card-body">
      <h5 className="card-title">Mascota: {cita.mascota}</h5>
      <p className="card-text">Propietario: {cita.propietario}</p>
      <p className="card-text">Fecha: {cita.fecha}</p>
      <p className="card-text">Hora: {cita.hora}</p>
      <p className="card-text">Síntomas: {cita.sintomas}</p>
      <button className="btn btn-danger" onClick={() => removeCita(index)}>Eliminar</button>
    </div>
  </div>
);


Cita.propTypes = {
  cita: PropTypes.shape({
    mascota: PropTypes.string.isRequired,
    propietario: PropTypes.string.isRequired,
    fecha: PropTypes.string.isRequired,
    hora: PropTypes.string.isRequired,
    sintomas: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  removeCita: PropTypes.func.isRequired,
};

export default Cita;


