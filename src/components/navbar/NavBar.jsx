import styles from './navbar.module.css';
import { useState } from 'react';
import Login from '../login/Login.jsx';
import Logout from '../logout/Logout.jsx';


const NavBar = () => {
  const [buttonsVisible, setButtonsVisible] = useState(true);
  const [isLoged, setIsLoged] = useState(false);
  const [username, setUsername] = useState('');

  const handleLoginClick = () => {
    setButtonsVisible(false);
  };

  const handleLogOutClick = () => {
    setButtonsVisible(true);
    setIsLoged(false);
  };

  const handleLoginSuccess = (username) => {
    setIsLoged(true);
    setUsername(username);
  };

  return (
    <>
      <div className={`${styles.navBarMain} ${styles.navBar}`}>
        <nav className="navbar navbar-expand-lg">
          <div className={`navbar__box container-fluid ${styles.navBar__box}`}>
            <div className={`nav__img ${styles.nav__img}`}>
              <img src="src/assets/logo.png" alt="Logo" />
            </div>
            <div className="navbar-collapse" id="navbarNav">
              <ul className={`navbar-nav ${styles.navbar_}`}>
                <li className="nav-item">
                  <a
                    className={`${styles.nav__inicio}`}
                    aria-current="page"
                    href="#"
                  >
                    Inicio
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`${styles.nav__inicio} ${styles.nav__item}`}
                    href="#"
                  >
                    Acerca de
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`${styles.nav__inicio} ${styles.nav__item}`}
                    href="#"
                  >
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {buttonsVisible ? (
          <div className={`navBarLogging ${styles.navBarLogging}`}>
            <div className={`crearCuenta_nav ${styles.crearCuenta}`}>
              <button
                className={`crearCuenta__botton ${styles.crearCuenta__botton}`}
              >
                Crear cuenta
              </button>
            </div>
            <div
              className={`iniciarSession__nav ${styles.iniciarSession__nav}`}
            >
              <button
                className={`iniciarSession__botton ${styles.iniciarSession__botton}`}
                onClick={handleLoginClick}
              >
                Iniciar Sesión
              </button>
            </div>
          </div>
        ) : isLoged ? (
          <Logout handleLogOutClick={handleLogOutClick} username={username} />
        ) : (
          <div className={`navBar__login ${styles.navBar__login}`}>
            <Login onSuccess={handleLoginSuccess} />
          </div>
        )}
      </div>
    </>
  );
};

export default NavBar;
