import PropTypes from 'prop-types';
import styles from './logout.module.css';

const Logout = ({ username, handleLogOutClick }) => {
  return (
    <>
      <div className={styles.logOut_container}>
        <div className={`logOut__bienvenido ${styles.logOut__bienvenido}`}>
          <p>
            Bienvenido :{' '}
            <span className={styles.usernameColor}>{username}</span>
          </p>
        </div>
        <div className={`logOut__cerrarSesion ${styles.logOut__cerrarSesion}`}>
          <button
            onClick={handleLogOutClick}
            className={`logOut__boton ${styles.logOut__boton}`}
          >
            Cerrar Sesión
          </button>
        </div>
      </div>
    </>
  );
};

Logout.propTypes = {
  username: PropTypes.string.isRequired,
  handleLogOutClick: PropTypes.func
};

export default Logout;
