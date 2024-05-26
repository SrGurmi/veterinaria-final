
import { useState } from 'react';
import Header from './components/header/Header.jsx';
import Navbar from './components/navbar/NavBar.jsx';
import CitaContainer from './components/citacontainer/CitaContainer.jsx';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [citas, setCitas] = useState([]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === '123') {
      setIsLoggedIn(true);
    } else {
      alert('Contraseña incorrecta');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  const addCita = (cita) => {
    setCitas([...citas, cita]);
  };

  const removeCita = (index) => {
    setCitas(citas.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <Header />
      <Navbar
        isLoggedIn={isLoggedIn}
        handleLogin={handleLogin}
        handleLogout={handleLogout}
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        handleSubmit={handleLogin}
      />
      <div className="container mt-4">
        {isLoggedIn && <CitaContainer citas={citas} addCita={addCita} removeCita={removeCita} />
        }   
      </div>
    </div>
  );
};

export default App;


