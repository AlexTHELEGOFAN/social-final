import React from 'react';

function SideBar({ onCreatingUser }) {
  return (
    <div className='sidebar'>
      <div>
        <a href='/home'>Utilisateurs</a>
      </div>
      <div>
        <a href='/creation'>Nouvel utilisateur</a>
      </div>
      <div>
        <a href='/stats'>Statistiques</a>
      </div>
    </div>
  );
}

export default SideBar;
