// import axios from 'axios';
import { useState, useEffect } from 'react';
import { createContext } from 'react';

// Stockage de l'utilisateur dans l'état actuel pour garder la trace de tout changement, puis passez l'utilisateur au fournisseur dans la valeur prop.
// AuthProvider.js reçoit les children ayant accès au contexte.

// Crée un objet Context. Lorsque React affiche un composant qui s’abonne à cet objet Context,
// il lira la valeur actuelle du contexte depuis le Provider le plus proche situé plus haut dans l’arborescence.
// le context est à false par défaut
export const AuthContext = createContext({
  isLoggedIn: false,
});

// const baseURL = '';

const AuthProvider = ({ children }) => {
  const [users, setUser] = useState(null);

  // axios.post(URL, data, headers);

  useEffect(() => {
    setUser(AuthContext);
  }, []);

  return (
    <AuthContext.Provider value={{ users }}>{children}</AuthContext.Provider>
  );
};

// Récupérer le JWT du front mobile

// créer un docker pour connecter le back et le front

export default AuthProvider;
