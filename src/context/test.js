// import { useState, useEffect } from 'react';
// import { createContext } from 'react';

// // Stockage de l'utilisateur dans l'état actuel pour garder la trace de tout changement, puis passez l'utilisateur au fournisseur dans la valeur prop.
// // AuthProvider.js reçoit les children ayant accès au contexte.

// // Crée un objet Context. Lorsque React affiche un composant qui s’abonne à cet objet Context,
// // il lira la valeur actuelle du contexte depuis le Provider le plus proche situé plus haut dans l’arborescence.
// // le context est à false par défaut
// export const AuthContext = createContext({
//   isLoggedIn: false,
//   onLogout: () => {},
//   onLogin: (email, password) => {},
// });

// const AuthProvider = ({ children }) => {
//   const [isLoggedIn, setIsLoggedIn] = useState(null);

//   useEffect(() => {
//     const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

//     // si le login est égal à 1, alors l'état login est true
//     if (storedUserLoggedInInformation === '1') {
//       //maj de l'état
//       setIsLoggedIn(true);
//     }
//   }, []);

//   function logoutHandler() {
//     localStorage.removeItem('isLoggedIn');
//     setIsLoggedIn(false);
//   }

//   function loginHandler() {
//     localStorage.setItem('isLoggedIn');
//     setIsLoggedIn(true);
//   }

//   return (
//     <AuthContext.Provider
//       value={{
//         isLoggedIn: isLoggedIn,
//         onLogout: logoutHandler,
//         onLogin: loginHandler,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // Metre le JWT

// export const setAuthToken = (token) => {
//   if (token) {
//     axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//   } else delete axios.defaults.headers.common['Authorization'];
// };
