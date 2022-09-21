import axios from 'axios';
import moment from 'moment';
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate, useParams } from 'react-router-dom';
import SideBar from '../../components/SideBar';
// import UseAuthContext from '../context/UseAuthContext';

// PAGE DETAILS QUI AFFICHE LES INFOS D'UN UTILISATEUR
// GET
// POST

function Details() {
  const { id } = useParams();
  const [user, setUser] = useState([]);

  const [formUpdate, setFormUpdate] = useState({
    first_name: '',
    last_name: '',
    email: '',
    banned_at: '',
  });
  const [editing, setEditing] = useState(false);

  // GET USERS ---------------------------------------------
  useEffect(() => {
    axios
      .get(`http://localhost/api/users/${id}`)
      .then((response) => {
        setFormUpdate((prevState) => ({
          ...prevState,
          ...response.data.data,
        }));
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [id]);

  const handleInputChange = (e) => {
    setFormUpdate({
      ...formUpdate,
      [e.target.name]: e.target.value,
    });
  };

  // UPDATE USER ---------------------------------------------
  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost/api/users/${id}`, formUpdate)
      .then((response) => {
        console.log(response);
        console.log('Succès !');
        // toast notif
        toast.success(`Modifications enregistrées !`, {
          duration: 6000,
        });
      })
      .catch(function (error) {
        console.log(error);
        toast.error(`Vos modifications n'ont pas été enregistrées.`);
      });
  };

  // DELETE USERS ---------------------------------------------
  const handleDelete = (e) => {
    e.preventDefault();
    axios
      .delete(`http://localhost/api/users/${id}`, formUpdate)
      .then((response) => {
        console.log(response);
        console.log('Succès !');
        // toast notif
        toast.success(`Utilisateur supprimé !`, {
          duration: 6000,
        });
      })
      .catch(function (error) {
        console.log(error);
        toast.error(`L'utilisateur n'a pas pu être supprimé.`);
      });
  };

  const navigate = useNavigate;

  // ALERTE SI USER CLIQUE SUR ANNULER ---------------------------------------------
  const Alert = () => {
    let text = 'Attention ! Les modifications seront perdues.';
    window.confirm(text) === true
      ? (window.location.href = '/home')
      : navigate('/home');
  };

  // CONTENU AFFICHÉ SI BANNI EST NULL  ---------------------------------------------
  console.log('formUpdate', formUpdate);
  return (
    <div className='details-page'>
      <Toaster position='bottom-right' reverseOrder={false} />
      <SideBar />
      <div className='page-position'>
        <div className='page-content'>
          <h1>Informations de l'utilisateur : {user.id}</h1>
          <div className='infos'>
            <form>
              <div>
                <label htmlFor='firstName'>Prénom : </label>
                {editing ? (
                  <input
                    name='first_name'
                    onChange={handleInputChange}
                    value={formUpdate.first_name}
                    placeholder="Prénom d'utilisateur"
                    required='required'
                  />
                ) : (
                  <span>{formUpdate.first_name}</span>
                )}
              </div>

              <div>
                <label htmlFor='last_name'>Nom : </label>
                {editing ? (
                  <input
                    name='last_name'
                    onChange={handleInputChange}
                    value={formUpdate.last_name}
                    placeholder="Nom d'utilisateur"
                    required='required'
                  />
                ) : (
                  <span>{formUpdate.last_name}</span>
                )}
              </div>

              <div>
                <label htmlFor='email'>Email : </label>
                {editing ? (
                  <input
                    name='email'
                    onChange={handleInputChange}
                    value={formUpdate.email}
                    placeholder='Email'
                    required='required'
                  />
                ) : (
                  <span>{formUpdate.email}</span>
                )}
              </div>

              <div>
                <label htmlFor='banned_at'>Banni : </label>
                {editing ? (
                  <input
                    name='banned_at'
                    type='checkbox'
                    onChange={handleInputChange}
                    value={
                      formUpdate.banned_at
                        ? 'false'
                        : moment().format('MM-DD-YYYY')
                    }
                  />
                ) : (
                  <span>{formUpdate.banned_at}</span>
                )}
              </div>

              <button className='cancel-button' onClick={Alert}>
                <Link to='/home'>Annuler</Link>
              </button>
              <button className='ok-button' onClick={handleDelete}>
                <Link to='/home'>Supprimer</Link>
              </button>

              {editing ? (
                <button
                  type='button'
                  className='ok-button'
                  onClick={() => setEditing(false)}
                >
                  Sauvegarder
                </button>
              ) : (
                <button
                  type='button'
                  className='ok-button'
                  onClick={() => setEditing(true)}
                >
                  Editer
                </button>
              )}

              <button
                className='ok-button'
                type='submit'
                value='Modifier'
                onClick={handleUpdate}
              >
                <Link to='/home'>Ok</Link>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
