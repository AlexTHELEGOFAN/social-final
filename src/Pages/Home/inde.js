// import { useState, useEffect } from 'react';
// import { createContext } from 'react';

// Stockage de l'utilisateur dans l'état actuel pour garder la trace de tout changement, puis passez l'utilisateur au fournisseur dans la valeur prop.
// AuthProvider.js reçoit les children ayant accès au contexte.

// Crée un objet Context. Lorsque React affiche un composant qui s’abonne à cet objet Context,
// il lira la valeur actuelle du contexte depuis le Provider le plus proche situé plus haut dans l’arborescence.
// le context est à false par défaut
// export const AuthContext = createContext({
//   isLoggedIn: false,
// });

// const AuthProvider = ({ children }) => {
//   const [authUser, setAuthUser] = useState({
//     accessToken: null,
//     refreshToken: null,
//     authenticated: null,
//   });

// const logout = async () => {
//   await Keychain.resetGenericPassword();
//   setAuthUser({
//     accessToken: null,
//     refreshToken: null,
//     authenticated: false,
//   });
// };

//   const getAccessToken = () => {
//     return authUser.accessToken;
//   };

//   useEffect(() => {
//     setAuthUser(AuthContext);
//   }, []);

//   return (
//     <AuthContext.Provider
//       value={{
//         authUser,
//         getAccessToken,
//         setAuthUser,
//         // logout,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };
// Ajouter le JWT

// Verifie si l'user est loggedIn, si oui il sera redirigé vers la page home
// const { user } = UseAuthContext();
// if (!user) {
//   return <Navigate replace to='/login' />;
// }

/*

  return (
    <div className='home-page'>
      <SideBar />
      <div className='page-position'>
        <div className='page-content'>
          <h1>Liste des utilisateurs</h1>

          <div className='home-functions'>
            <SearchBar />
            <div className='right-functions'>
              <button className='export'>EXPORTER</button>

              <a href='/creation'>
                <button className='create-user'>+ CREER</button>
              </a>
            </div>
          </div>

          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Prénom</th>
                <th>Nom</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Thor</td>
                <td>Odinson</td>
                <td>thor.odinson@gmail.com</td>
                <td className='actions'>
                  <button>Voir</button>

                  <button>Editer</button>

                  <button>Supprimer</button>

                  <button>Bannir</button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Thor</td>
                <td>Odinson</td>
                <td>thor.odinson@gmail.com</td>
                <td className='actions'>
                  <button>Voir</button>

                  <button>Editer</button>

                  <button>Supprimer</button>

                  <button>Bannir</button>
                </td>
              </tr>
            </tbody>
          </table>

          <div>
            <button>Précedent</button>
            <button>Suivant</button>
          </div>
        </div>
      </div>
    </div>
  );
};
*/
//  <tbody>{content}</tbody>

/*



axios
  .get(baseURL)
  .then(function (response) {
    console.log(response.data);
  })
  .then(function (response) {
    console.log(response.data);
  });

// Using Authorization Header
axios({
  method: 'get',
  url: baseURL,
  headers: {
    Authorization: `Bearer ${process.env.TOKEN}`,
  },
}).then((response) => {
  console.log(response.data);
});

*/

/*

const headers = {
  'Content-Type': 'text/json',
};

const data = {
  name: 'John Doe',
};

const result = await axios.post(baseURL, data, {
  headers: headers,
});

console.log(result.data.headers['Content-Type']); // text/json
*/

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [authToken, setAuthToken] = useState('');

//   axios
//     .post(baseURL, {
//       username,
//       password,
//     })
//     .then((response) => {
//       if (response.data.accessToken) {
//         localStorage.setItem('user', JSON.stringify(response.data));
//       }
//       //get token from response
//       const token = response.data.token;

//       //set JWT token to local
//       localStorage.setItem('token', token);

//       // token to axios common header
//       setAuthToken(token);

//       // redirige user a la page home
//       window.location.href = '/';
//     })
//     .catch((err) => console.log(err));
// };

// import { createAuthProvider } from 'react-token-auth';

// const authWithJwt = createAuthProvider({
//   accessTokenKey: 'accessToken',
//   onUpdateToken: (token) =>
//     fetch('/update-token', {
//       method: 'POST',
//       body: token.refreshToken,
//     }).then((refresh) => refresh.json()),
// });

// export default authWithJwt;

// const jwt = require('jsonwebtoken');
// function generateAccessToken(username) {
//   return jwt.sign({ username }, process.env.TOKEN_SECRET, {
//     expiresIn: '1800s',
//   });
// }

// PAGE LOGIN
// POST

// const baseURL = '';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const [isLoggedIn, setIsLoggedIn] = useState(
//     localStorage.getItem(localStorage.getItem('isLoggedIn') || false)
//   );

//   const userList = [{ username: 'user', password: 'user' }];
//   // A remplacer par une requete axios

//   const handleSubmit = (e) => {
//     // en cas d'erreur
//     e.preventDefault();
//     // cherche si username et password existent dans la liste
//     const findAccount = userList.find((user) => user.username === username);
//     const findPassword = userList.find((user) => user.password === password);
//     if (findAccount && findPassword) {
//       setIsLoggedIn(true);
//       localStorage.setItem('isLoggedIn', true);
//       <Navigate to='/home' />;
//     }
//   };

//   return (
//     <div className='login-page'>
//       <div className='page-position-no-sidebar'>
//         <h1>Connexion</h1>

//         {/* USERname */}

//         <form onSubmit={handleSubmit}>
//           <div className='form-field'>
//             <input
//               type='text'
//               name='Username'
//               className='form__input'
//               value={username}
//               placeholder="Nom d'utilisateur"
//               onChange={(e) => setUsername(e.target.value)}
//             />
//           </div>

//           {/* PASSWORD */}

//           <div className='form-field'>
//             <input
//               type='password'
//               name='Password'
//               className='form__input'
//               placeholder='Mot de passe'
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>

//           {/* BOUTON CONNEXION */}

//           <input className='submit-button' type='submit' value='Connexion' />
//         </form>
//       </div>
//     </div>
//   );
// };

// // export default Login;

// // onLogout
// // localStorage.removeItem('isLoggedIn');

// import { fetchUtils, Admin, Resource } from 'react-admin';
// import simpleRestProvider from 'ra-data-simple-rest';

// const httpClient = (url, options = {}) => {
//   if (!options.headers) {
//     options.headers = new Headers({ Accept: 'application/json' });
//   }
//   const { token } = JSON.parse(localStorage.getItem('auth'));
//   options.headers.set('Authorization', `Bearer ${token}`);
//   return fetchUtils.fetchJson(url, options);
// };
// const dataProvider = simpleRestProvider('http://localhost:3000', httpClient);

// <div>
//   <label htmlFor="firstName">First Name: </label>
//   {editing ? (
//     <input
//       name="firstName"
//       onChange={event =>
//         setUser({ ...user, firstName: event.target.value })
//       }
//       value={user.firstName}
//     />
//   ) : (
//     <span>{user.firstName}</span>
//   )}
// </div>

// <p>
//   Prénom :
//   <input
//     type='text'
//     id='first_name'
//     className='form__modify'
//     value={user.first_name}
//     onChange={handleInputChange}
//     placeholder="Prénom d'utilisateur"
//     required='required'
//   />
// </p>
// <p>
//   Nom :
//   <input
//     type='text'
//     id='last_name'
//     className='form__modify'
//     value={user.last_name}
//     onChange={handleInputChange}
//     placeholder="Nom d'utilisateur"
//     required='required'
//   />
// </p>
// <p>
//   Email :
//   <input
//     type='email'
//     id='email'
//     className='form__modify'
//     value={user.email}
//     onChange={handleInputChange}
//     placeholder='Email'
//     required='required'
//   />
// </p>

// <p>
//   Banni{' '}
//   <input
//     type='checkbox'
//     id='banned_at'
//     value={user.banned_at}
//     onChange={handleInputChange}
//     placeholder='Banni'
//   />
// </p>

// const banUser = (id) => {
//   setUser((prevUsers) =>
//     prevUsers.map((user) =>
//       user.id === id ? { ...user, status: !user.status } : user
//     )
//   );
// };

// const createToken = () => {
//   axios
//     .post('http://localhost/api/tokens/create/${id}', {
//       email,
//       password,
//     })
//     .then((response) => {
//       response();
//       console.log(response);
//       console.log('Succès !');
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// };

// const [isLoggedIn, setIsLoggedIn] = useState(
//   localStorage.getItem(localStorage.getItem('isLoggedIn') || false)
// );

// // const handleSubmit = (e) => {
// //   // en cas d'erreur
// //   e.preventDefault();
// //   // cherche si username et password existent dans la liste
// //   const findAccount = userList.find((user) => user.username === username);
// //   const findPassword = userList.find((user) => user.password === password);
// //   if (findAccount && findPassword) {
// //     setIsLoggedIn(true);
// //     localStorage.setItem('isLoggedIn', true);
// //     <Navigate to='/home' />;
// //   }
// // };

//   // const { user } = UseAuthContext();
//   // if (!user) {
//   //   return <Navigate replace to='/login' />;
//   // }

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = () => {
//     axios
//       .post('http://localhost/login', {
//         email,
//         password,
//       })
//       .then((response) => {
//         response();
//         console.log(response);
//         console.log('Succès !');
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   };

//   const createToken = () => {
//     axios
//       .post('http://localhost/api/tokens/create/${id}', {
//         email,
//         password,
//       })
//       .then((response) => {
//         response();
//         console.log(response);
//         console.log('Succès !');
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   };

//   const [isLoggedIn, setIsLoggedIn] = useState(
//     localStorage.getItem(localStorage.getItem('isLoggedIn') || false)
//   );

//   const configuration = {
//     method: 'post',
//     url: 'http://localhost/login',
//     data: {
//       email,
//       password,
//     },
//   };
//   // const handleSubmit = (e) => {
//   //   // en cas d'erreur
//   //   e.preventDefault();
//   //   // cherche si username et password existent dans la liste
//   //   const findAccount = userList.find((user) => user.username === username);
//   //   const findPassword = userList.find((user) => user.password === password);
//   //   if (findAccount && findPassword) {
//   //     setIsLoggedIn(true);
//   //     localStorage.setItem('isLoggedIn', true);
//   //     <Navigate to='/home' />;
//   //   }
//   // };

//   const handleSubmit = (email, password) => {
//     //reqres registered sample user
//     const loginPayload = {
//       email: 'test',
//       password: 'test',
//     };

//     axios
//       .post('http://localhost/login', loginPayload)
//       .then((response) => {
//         // obtention du token
//         const token = response.data.token;

//         //set JWT
//         localStorage.setItem('token', token);

//         //set token au axios common header
//         setAuthToken(token);

//         //redirige user à home
//         window.location.href = '/home';
//       })
//       .catch((err) => console.log(err));
//   };

//   import axios from 'axios';

// const setAuthToken = (token) => {
//   if (token) {
//     axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//   } else delete axios.defaults.headers.common['Authorization'];
// };

// export default setAuthToken;

// import Cookies from 'universal-cookie';
// const cookies = new Cookies();

// cookies.set('TOKEN', response.token, {
//   path: '/',
// });

// let token = document.head.querySelector('meta[name="csrf-token"]');

// if (token) {
//     window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
// } else {
//     console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
// }

// const setAuthToken = (token) => {
//   if (token) {
//     axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//   } else delete axios.defaults.headers.common['Authorization'];
// };
