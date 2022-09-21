import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Pages/Home';
import CreateUser from './Pages/CreateUser';
import NotFound from './Pages/Notfound/index.js';
import Login from './Pages/Login';

import AuthProvider from './Pages/context/AuthProvider';
import Details from './Pages/Details';
import Stats from './Pages/Stats';
import Header from './components/Header';

function App() {
  //   onLogout
  // localStorage.removeItem('isLoggedIn');

  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // <AuthContext.Provider
  //       value={{
  //         isLoggedIn: isLoggedIn,
  //       }}
  //     >

  // Les users ont seulement accès à /login
  return (
    <AuthProvider>
      <Router>
        <Header />
        <div style={{ marginTop: '5rem' }}>
          <Routes>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/creation' element={<CreateUser />} />
            <Route path='/view-edit-user/:id' element={<Details />} />
            <Route path='/stats' element={<Stats />} />
            <Route path='/login' element={<Login />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
