import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  DataGrid,
  GridActionsCellItem,
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarFilterButton,
} from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import VisibilityIcon from '@mui/icons-material/Visibility';
import BlockIcon from '@mui/icons-material/Block';
import { Button } from '@mui/material';
import { Toaster, toast } from 'react-hot-toast';

// import UseAuthContext from '../context/UseAuthContext';
import SideBar from '../../components/SideBar';
import moment from 'moment';
import setAuthToken from '../context/setAuthToken';

// PAGE HOME QUI AFFICHE TOUT LES UTILISATEURS
// GET

const Home = () => {
  const navigate = useNavigate();
  // const initialRows = [
  //   {
  //     id: 1,
  //     first_name: 'Harnold',
  //     last_name: 'Choizhaienestguerre',
  //     email: 'harnold.choizhaienestguerre@gmail.com',
  //     created_at: '01/01/2001',
  //     updated_at: '01/01/2011',
  //     status: false,
  //   },
  //   {
  //     id: 2,
  //     first_name: 'Schaimecédine',
  //     last_name: 'Ivrahimobitch',
  //     email: 'alexandre.pozzi@gmail.com',
  //     created_at: '03/01/2006',
  //     updated_at: '01/01/2011',
  //     status: true,
  //   },
  //   {
  //     id: 3,
  //     first_name: 'Lannister',
  //     last_name: 'Jaime',
  //     email: 'alexandre.pozzi@gmail.com',
  //     created_at: '03/01/2001',
  //     updated_at: '01/01/2011',
  //     status: true,
  //   },
  //   {
  //     id: 4,
  //     first_name: 'vc',
  //     last_name: 'Arya',
  //     email: 'alexandre.pozzi@gmail.com',
  //     created_at: '01/01/2001',
  //     updated_at: '01/01/2011',
  //     status: false,
  //   },
  //   {
  //     id: 5,
  //     first_name: 'Targaryen',
  //     last_name: 'Daenerys',
  //     email: 'alexandre.pozzi@gmail.com',
  //     created_at: '01/01/2001',
  //     updated_at: '01/01/2011',
  //     status: false,
  //   },
  //   {
  //     id: 6,
  //     first_name: 'Melisandre',
  //     last_name: 'f',
  //     email: 'alexandre.pozzi@gmail.com',
  //     created_at: '01/01/2001',
  //     updated_at: '01/01/2011',
  //     status: false,
  //   },
  //   {
  //     id: 7,
  //     first_name: 'Clifford',
  //     last_name: 'Ferrara',
  //     email: 'alexandre.pozzi@gmail.com',
  //     created_at: '01/01/2001',
  //     updated_at: '01/01/2011',
  //     status: false,
  //   },
  //   {
  //     id: 8,
  //     first_name: 'Frances',
  //     last_name: 'Rossini',
  //     email: 'alexandre.pozzi@gmail.com',
  //     created_at: '01/01/2001',
  //     updated_at: '01/01/2011',
  //     status: false,
  //   },
  //   {
  //     id: 9,
  //     first_name: 'Roxie',
  //     last_name: 'Harvey',
  //     email: 'alexandre.pozzi@gmail.com',
  //     created_at: '01/01/2001',
  //     updated_at: '01/01/2011',
  //     status: false,
  //   },
  //   {
  //     id: 10,
  //     first_name: 'Frances',
  //     last_name: 'Harvey',
  //     email: 'alexandre.pozzi@gmail.com',
  //     created_at: '01/01/2001',
  //     updated_at: '01/01/2011',
  //     status: false,
  //   },
  //   {
  //     id: 11,
  //     first_name: 'Roxie',
  //     last_name: 'Harvey',
  //     email: 'alexandre.pozzi@gmail.com',
  //     created_at: '01/01/2001',
  //     updated_at: '01/01/2011',
  //     status: false,
  //   },
  //   {
  //     id: 12,
  //     first_name: 'Frances',
  //     last_name: 'Harvey',
  //     email: 'alexandre.pozzi@gmail.com',
  //     created_at: '01/01/2010',
  //     updated_at: '01/09/2011',
  //     status: false,
  //   },
  //   {
  //     id: 13,
  //     first_name: 'Roxie',
  //     last_name: 'Harvey',
  //     email: 'alexandre.pozzi@gmail.com',
  //     created_at: '01/01/2002',
  //     updated_at: '01/01/2012',
  //     status: false,
  //   },
  // ];

  // const [rows, setRows] = useState(initialRows);

  // GESTION DE STATE DE USER ---------------------------------------------

  const [user, setUser] = useState([]);
  const [numberOfPages, setNumberOfPages] = useState([]);
  const [pageSizeDB, setPageSizeDB] = useState([]);
  const [totalOfRows, setTotalOfRows] = useState([]);
  // const [pageNumber, setPageNumber] = useState(2);

  const fetchUser = (pageNumber = 1) => {
    axios
      .get(`http://localhost/api/users?page=${pageNumber}`)
      .then((response) => {
        setUser(response.data.data);
        setNumberOfPages(response.data.meta.current_page - 1);
        setPageSizeDB(response.data.meta.per_page);
        setTotalOfRows(response.data.meta.total);
        pageNumber = numberOfPages;
        console.log(response.data.meta.total);
      })

      .catch(function (error) {
        console.log(error);
      });
  };

  const handleChangePage = (pageNumber) => {
    fetchUser(pageNumber + 1);
  };

  // GET USERS ---------------------------------------------
  useEffect(() => {
    fetchUser();
  }, []);

  // UPDATE USERS ---------------------------------------------
  const handleUpdate = (e) => {
    console.log('succes');
  };

  // FONCTION VOIR USER ---------------------------------------------

  const viewUser = (id) => {
    navigate(`/view-edit-user/${id}`);
  };

  // FONCTION BANNIR USER ---------------------------------------------

  const banUser = (id) => {
    setUser((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id ? { ...user, banned_at: !user.banned_at } : user
      )
    );
  };

  // FONCTION SUPPRIMER USER ---------------------------------------------

  const handleDelete = (id) => {
    setTimeout(() => {
      // suprression
      setUser((prevUsers) => prevUsers.filter((user) => user.id !== id));

      // toast notif
      toast.success('Utilisateur supprimé !', {
        duration: 6000,
      });
    });
  };

  // VERIFIE SI L'USER EST LOGGEDIN ---------------------------------------------

  const token = localStorage.getItem('token');
  if (token) {
    setAuthToken(token);
  }

  // CREATION DES COLONNES DU TABLEAU ---------------------------------------------
  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'first_name', headerName: 'Prénom', width: 200, editable: true },
    { field: 'last_name', headerName: 'Nom', width: 200, editable: true },
    { field: 'email', headerName: 'Email', width: 300, editable: true },
    { field: 'created_at', headerName: 'Créé le', type: 'date', width: 130 },
    {
      field: 'updated_at',
      headerName: 'Mis à jour le',
      type: 'date',
      width: 130,
    },
    {
      field: 'banned_at',
      headerName: 'Banni',
      type: 'date',
      width: 75,
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 80,

      // renderCell: (index) => index.api.getRowIndex(index.row.id) + 1,

      // ou bien getActions: (params) => onClick={viewUser(params.id)}
      getActions: (row) => [
        <GridActionsCellItem
          icon={<VisibilityIcon />}
          label='Voir'
          onClick={() => viewUser(row.id)}
        />,

        <GridActionsCellItem
          icon={<BlockIcon />}
          label='Bannir'
          onClick={() => banUser(row.id)}
          showInMenu
        />,
        <GridActionsCellItem
          icon={<DeleteIcon />}
          label='Supprimer'
          onClick={() => handleDelete(row.id)}
          showInMenu
        />,
      ],
    },
  ];

  // Editer en clean :
  // https://codesandbox.io/s/fullfeaturedcrudgrid-demo-mui-x-forked-r003f2?file=/demo.tsx:5547-5562

  // CREATION D'UNE NOUVELLE LIGNE ---------------------------------------------
  const handleNewClick = () => {
    const key = Math.floor(Math.random() * 10000000);
    let creation = moment().format('MM-DD-YYYY');
    setUser((oldRows) => [
      ...oldRows,
      {
        id: key,
        first_name: '',
        last_name: '',
        email: '',
        created_at: creation,
        updated_at: creation,
        banned_at: creation,
      },
    ]);
  };

  // BARRE D'OUTIL AVEC AJOUT D'USER
  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <Button
          color='primary'
          startIcon={<AddIcon />}
          onClick={() => {
            handleNewClick();
          }}
        >
          Ajouter un utilisateur
        </Button>
        <GridToolbarColumnsButton />
        <GridToolbarFilterButton />
        <GridToolbarExport />
      </GridToolbarContainer>
    );
  }

  // RETOURNE LE TABLEAU D'USERS ---------------------------------------------
  return (
    <div className='home-page'>
      <Toaster position='bottom-right' reverseOrder={false} />
      <SideBar />
      <div className='page-position'>
        <div className='page-content'>
          <h1>Liste des utilisateurs</h1>

          {/* 
          <div className='home-functions'>
            <SearchBar />
            <div className='right-functions'>
              <button className='export'>EXPORTER</button>

              <a href='/creation'>
                <button className='create-user'>+ CREER</button>
              </a>
            </div>
          </div>
          */}

          <div style={{ height: 800, width: '100%' }}>
            <DataGrid
              getRowHeight={() => 'auto'}
              columns={columns}
              rows={user}
              rowCount={totalOfRows}
              pageSize={pageSizeDB}
              rowsPerPage={[]}
              page={numberOfPages}
              pagination
              paginationMode='server'
              onPageChange={handleChangePage}
              components={{ Toolbar: CustomToolbar }}
              checkboxSelection
              initialState={{
                sorting: {
                  sortModel: [{ field: 'id', sort: 'asc' }],
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
