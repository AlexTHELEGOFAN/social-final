import React, { useEffect, useState } from 'react';
import SideBar from '../../components/SideBar';
import Chart from 'react-google-charts';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import UseAuthContext from '../context/UseAuthContext';

// PAGE STATISTIQUES QUI AFFICHE UN GRAPHIQUE
// GET

function Stats() {
  const [totalUsers, setTotalUsers] = useState([]);
  const [totalPosts, setTotalPosts] = useState([]);
  // Pas de route
  const [totalLikes, setTotalLikes] = useState([]);
  // Pas de route

  // GET USERS ---------------------------------------------
  useEffect(() => {
    axios
      .get('http://localhost/api/users')
      .then((response) => {
        console.log(response.data.meta.total);
        setTotalUsers(response.data.meta.total);
      })

      .catch(function (error) {
        console.log(error);
      });
  }, []);

  // GET TOTAL DES POSTS ---------------------------------------------
  useEffect(() => {
    axios
      .get('http://localhost/api/posts')
      .then((response) => {
        console.log(response.data.data);
        setTotalPosts(response.data.data.length);
      })

      .catch(function (error) {
        console.log(error);
      });
  }, []);

  // GET TOTAL DES LIKES ---------------------------------------------
  useEffect(() => {
    axios
      .get('http://localhost/api/likes')
      .then((response) => {
        console.log(response.data.data);
        setTotalLikes(response.data.data.length);
      })

      .catch(function (error) {
        console.log(error);
      });
  }, []);

  // Verifie si l'user est loggedIn
  // const { users } = UseAuthContext();
  // if (!users) {
  //   return <Navigate replace to='/login' />;
  // }

  const data = [
    ['Année', 'Utilisateurs', 'Publications', 'Likes'],
    ['', totalUsers, 50, 30],
  ];

  const options = {
    title: 'Activité par jour',
    curveType: 'function',
    legend: { position: 'bottom' },
    vAxis: {
      viewWindowMode: 'explicit',
      viewWindow: {
        min: 0,
      },
    },
  };

  return (
    <div className='stats-page'>
      <SideBar />
      <div className='page-position'>
        <div className='page-content'>
          <h1>Statistiques</h1>
          <div>
            <Chart
              chartType='ColumnChart'
              width='100%'
              height='400px'
              data={data}
              options={options}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
