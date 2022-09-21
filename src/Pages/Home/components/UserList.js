// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import User from './User';

// // FONCTION QUI RETOURNE UN TABLEAU AVEC L'ENSEMBLE DES UTILISATEURS
// // GET

// const baseURL = '';

// const UserList = ({ items }) => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     axios
//       .get(baseURL)
//       .then((response) => {
//         setUser(response.data);
//       })

//       .catch(function (error) {
//         console.log(error);
//       });
//   }, []);

//   if (!user) return null;

//   // FONCTION QUI PERMET D'AJOUTER DES USERS ---------------------------------------------
//   function addUserHandler(enteredname, enteredfirst_name) {
//     // mise à jour de l'état
//     setUser((prevUsers) => {
//       const updatedUsers = [...prevUsers];
//       updatedUsers.unshift({
//         id: Math.random().toString(),
//         name: enteredname,
//         first_name: enteredfirst_name,
//       });
//       return updatedUsers;
//     });
//   }

//   // FONCTION QUI PERMET DE SUPPRIMER DES USERS ---------------------------------------------
//   function deleteUserHandler(userId) {
//     setUser((prevUsers) => {
//       const updatedUsers = prevUsers.filter((user) => user.id !== userId);
//       return updatedUsers;
//     });
//   }

//   // fonction qui permet de supprimer un user
//   // function deleteHandler() {
//   //   onDeleteItem(id);
//   // }

//   return (
//     <tr>
//       <td className='user id'>
//         {items.map((user, index) => (
//           <User key={index} id={user.id}>
//             {user.id}
//           </User>
//         ))}
//       </td>

//       <td className='user name'>
//         {items.map((user, index) => (
//           <User key={index} id={user.id}>
//             {user.name}
//           </User>
//         ))}
//       </td>

//       <td className='user first_name'>
//         {items.map((user, index) => (
//           <User key={index} id={user.id}>
//             {user.first_name}
//           </User>
//         ))}
//       </td>

//       <td className='user email'>
//         {items.map((user, index) => (
//           <User key={index} id={user.id}>
//             {user.email}
//           </User>
//         ))}
//       </td>

//       <td className='actions'>
//         <td>
//           {items.map((user, index) => (
//             <User key={index} id={user.id}>
//               <button>
//                 <Link to='/view-user/:id'>Voir</Link>
//               </button>
//             </User>
//           ))}
//         </td>
//         <td>
//           {items.map((user, index) => (
//             <User key={index} id={user.id}>
//               <button>
//                 <Link to='/edit-user/:id'>Editer</Link>
//               </button>
//             </User>
//           ))}
//         </td>
//         <td>
//           {items.map((user, index) => (
//             <div key={index} id={user.id}>
//               <button>Delete</button>
//             </div>
//           ))}
//         </td>{' '}
//       </td>
//     </tr>
//   );
// };

// export default UserList;
