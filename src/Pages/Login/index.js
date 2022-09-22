import axios from 'axios';
import { useState } from 'react';
import isLoggedin from '../context/AuthProvider';

// import setAuthToken from '../context/setAuthToken';
// import UseAuthContext from '../context/UseAuthContext';

// PAGE LOGIN
// POST

// let token = '1|riKJKmiJQL7K4nE7DFhfIV9uyehOJPpXAD55vK3P';

// const config = {
//   headers: { Authorization: `Bearer ${token}` },
// };

// if (token) {
//   window.axios.defaults.common['Authorization'] = token.content;
// } else {
//   console.error(
//     'CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token'
//   );
// }

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState(false);

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();

    // APPEL API
    // fetch('http://localhost/login');

    axios
      .post('http://localhost/login', {
        email,
        password,
      })
      .then((response) => {
        const token = response.data.token;
        localStorage.setItem('token', token);

        console.log(response.statusText);

        window.location.href = '/home';
        setLogin(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className='login-page'>
      <div className='page-position-no-sidebar'>
        <h1>Connexion</h1>

        {/* EMAIL */}

        <form onSubmit={(e) => handleSubmit(e)}>
          <div className='form-field'>
            <input
              className='form__input'
              type='email'
              name='email'
              value={email}
              placeholder="Nom d'utilisateur"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* PASSWORD */}

          <div className='form-field'>
            <input
              className='form__input'
              type='password'
              name='Password'
              value={password}
              placeholder='Mot de passe'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* BOUTON CONNEXION */}

          <input
            className='submit-button'
            type='submit'
            onClick={(e) => handleSubmit(e)}
            value='Connexion'
          />

          {/* MESSAGE STATUT CONNECTE */}
          {login ? <p>Vous êtes connecté</p> : <p>Vous n'êtes pas connecté</p>}
        </form>
        <button onClick={isLoggedin === true}>Connexion rapide</button>
      </div>
    </div>
  );
};

export default Login;

// onLogout
// localStorage.removeItem('isLoggedIn');
