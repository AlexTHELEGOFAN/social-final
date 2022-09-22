import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';

import Home from './Pages/Home';
import CreateUser from './Pages/CreateUser';
import NotFound from './Pages/Notfound/index.js';
import Login from './Pages/Login';

import AuthProvider from './Pages/context/AuthProvider';
import Details from './Pages/Details';
import Stats from './Pages/Stats';
import Header from './components/Header';
import { useEffect } from 'react';
import axios from 'axios';

function App() {
  const navigate = '/';

  useEffect(() => {
    if (!JSON.parse(localStorage.getItem('acces_token'))) {
      navigate('/login');
    }
  }, [JSON.parse(localStorage.getItem('acces_token'))]);



  const banUser = (id) => {
    axios.delete(`/ban-user/${id}`).then((res) => {
      console.log(res.data.data)
      localStorage.deleteItem('acces_token')


    }).catch((err) => {
      console.log(err)
      console.log(t(''))
    })
   }
 
  return (
    <AuthProvider>
      <Router>
        <Header />
        <SideBar />
        <div style={{ marginTop: '5rem' }}>
          <Routes>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/signup' element={<CreateUser />} />
            <Route path='/users/:id' element={<Details />} />
            <Route path='/stats' element={<Stats />} />
            <Route path='/login' element={<Login />} />
            <Route path='/products/:id' element={<Products />} />

            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
