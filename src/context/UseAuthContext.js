import { useContext } from 'react';
import { AuthContext } from './AuthProvider';

// Désormais, si un code extérieur au fournisseur appelle AuthContext, votre application traitera l'erreur de manière élégante.

const UseAuthContext = () => {
  // user a un contexte paramétré a isLoggedIn=false au départ
  const user = useContext(AuthContext);

  // si il n'y a pas d'utilisateur
  if (user === undefined) {
    throw new Error('useAuthContext can only be used inside AuthProvider');
  }
  return user;
};

export default UseAuthContext;
