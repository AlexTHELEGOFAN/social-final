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
import setAuthToken from '../context/setAuthToken';
import moment from 'moment';

// PAGE HOME QUI AFFICHE TOUT LES UTILISATEURS
// GET

const Home = () => {
  const [user, setUser] = useState([]);
  const [numberOfPages, setNumberOfPages] = useState([]);
  const [pageSizeDB, setPageSizeDB] = useState([]);
  const [totalOfRows, setTotalOfRows] = useState([]);
  
  const navigate = useNavigate();
  
  const {t} = useTranslation()

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
      valueFormatter: (value) => {
        moment().format('LLLL')
      }
    },
    {
      field: 'banned_at',
      headerName: 'Banni',
      type: 'date',
      width: 75,
      renderCell: (row) => {
        <span>
          {row.value ? t('banned') : t('notBanned')}
        </span>
      }
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
    navigate(`/creation`);
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
