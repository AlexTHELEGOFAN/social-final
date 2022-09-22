import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

// PAGE QUI PERMET DE CREER UN UTILISATEUR
// POST

function CreateUser() {
  const [formCreate, setFormCreate] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    setFormCreate({
      ...formCreate,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate();

  // POST DU NOUVEAU USER DANS L'API ---------------------------------------------
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost/api/users', formCreate)
      .then((response) => {
        console.log(response);
        console.log('Succès !');
        navigate('/home');
        // toast notif
        toast.success('Utilisateur créé !', {
          duration: 6000,
        });
      })
      .catch(function (error) {
        console.log(error);
        toast.error(`L'adresse mail existe déjà !`);
      });
  };

  // ALERTE SI USER CLIQUE SUR ANNULER ---------------------------------------------
  const Alert = () => {
    let text = 'Attention ! Les modifications seront perdues.';
    window.confirm(text) === true
      ? navigate('/home')
      : window.close();
  };

  //
  // RETOURNE LE FORMULAIRE DE CRÉATION DE COMPTE REGISTER ---------------------------------------------
  return (
    <div className='create-user-page'>
      <Toaster position='bottom-right' reverseOrder={false} />
      <div className='page-position-no-sidebar'>
        <h1>Créer un nouvel utilisateur</h1>

        <form>
          {/* PRENOM */}
          <div className='form-field'>
            <label className='form__label'></label>
            <input
              type='text'
              name='first_name'
              className='form__input'
              value={formCreate.first_name}
              onChange={handleInputChange}
              placeholder="Prénom d'utilisateur"
              required='required'
            />
          </div>

          {/* NOM */}
          <div className='form-field'>
            <label className='form__label'></label>
            <input
              type='text'
              name='last_name'
              className='form__input'
              value={formCreate.last_name}
              onChange={handleInputChange}
              placeholder="Nom d'utilisateur"
            />
          </div>

          {/* EMAIL */}
          <div className='form-field'>
            <label className='form__label'></label>
            <input
              type='email'
              name='email'
              className='form__input'
              value={formCreate.email}
              onChange={handleInputChange}
              placeholder='Adresse email'
              required
            />
          </div>

          {/* MOT DE PASSE */}
          <div className='form-field'>
            <label className='form__label' htmlFor='password'></label>
            <input
              type='password'
              name='password'
              className='form__input'
              value={formCreate.password}
              onChange={handleInputChange}
              placeholder='Mot de passe'
              required
            />
          </div>

          {/* BOUTON REGISTER */}
          <div className='buttons'>
            <button className='cancel-button' onClick={Alert}>
              Annuler
            </button>

            <button
              className='submit-button'
              onClick={handleSubmit}
              type='submit'
              value='Créer'
            >
              Créer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateUser;
