// import { Button } from '@mui/material';
// import { Route, Routes } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';
import React, { useContext } from 'react';
import { AuthContext } from '../../Pages/context/AuthProvider';

function Header({ onLogout }) {
  // bouton sign in sign up
  // utiliser link pour les changement de page classique
  // utiliser navigate pour les fonctions type Delete

  const ctx = useContext(AuthContext);

  return (
    <header>
      <a className='header-logo' href='/home'>
        Instabook
      </a>
      <nav>
        <ul>
          {/* {!ctx.isLoggedIn && (
            <li>
              <a href='/home'>Utilisateurs</a>
            </li>
          )} */}
          {ctx.isLoggedIn && (
            <li>
              <a href='/'>Admin</a>
            </li>
          )}
          {ctx.isLoggedIn && (
            <li>
              <button onClick={onLogout}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
