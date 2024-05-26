import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './login.module.css';
import PropTypes from 'prop-types';

const Login = ({ onSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== '123' || username === '') {
      toast.error('Usuario o contraseña incorrecto');
    } else {
      onSuccess(username);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className={`navBar__login ${styles.navBar__login}`}>
          <div className={`login__user ${styles.login__user}`}>
            <input
              type="text"
              className={`inputField ${styles.inputField}`}
              id="name"
              name="name"
              placeholder="Usuario"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>

          <div className={`login__password ${styles.login__password}`}>
            <input
              type="password"
              className={`inputField ${styles.inputField}`}
              id="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className={`login__button ${styles.login__button}`}>
            <button
              type="submit"
              className={`logginButton__button ${styles.logginButton__button}`}
            >
              Aceptar
            </button>
          </div>
        </div>
      </form>
      <ToastContainer />
    </>
  );
};

Login.propTypes = {
  onSuccess: PropTypes.func.isRequired
};

export default Login;
