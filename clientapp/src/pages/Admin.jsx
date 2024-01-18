import { useEffect, useState, useRef } from "react";
import Header from "../components/Header.jsx";
import Modal from "@mui/material/Modal";

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab';

const port = process.env.PORT || 8080;

function deletePerson(id) {
  fetch(`http://localhost:${port}/api/peoples/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      console.log(res);
      window.location.reload();
    })
    .catch((err) => console.log(err));
}

function editPerson(id, person) {
  fetch(`http://localhost:${port}/api/peoples/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(person),
  })
    .then((res) => {
      console.log(res);
      window.location.reload();
    })
    .catch((err) => console.log(err));
}

function Admin() {
  const [allTeams, setAllTeams] = useState([]);
  const [selectedPerson, setSelectedPerson] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:${port}/api/peoples`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setAllTeams(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const descriptionRef = useRef(null);

  useEffect(() => {
    if (descriptionRef.current) {
      descriptionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [selectedPerson]);

  const [filteredTeams, setFilteredTeams] = useState(allTeams);

  useEffect(() => {
    setFilteredTeams(allTeams);
  }, [allTeams]);

  const [deleteModal, setDeleteModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

  return (
    <>
      <Modal
        open={deleteModal}
        onClose={() => {
          setDeleteModal(false);
          setSelectedPerson(null);
        }}
      >
        <div className="bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 rounded-xl">
          <h1 className="text-2xl font-bold mb-10 text-center my-5">Voulez-vous vraiment supprimer {selectedPerson && selectedPerson.firstname} {selectedPerson && selectedPerson.name} ?</h1>
          <div className="flex justify-between">
            <Fab
              variant="extended"
              size="small"
              sx={{
                color: 'white',
                backgroundColor: 'red',
                '&:hover': {
                  backgroundColor: '#b30000',
                },
              }}
              onClick={() => {
                deletePerson(selectedPerson.id);
                setDeleteModal(false);
                setSelectedPerson(null);
              }}
            >
              Supprimer
            </Fab>
            <Fab
              variant="extended"
              size="small"
              sx={{
                color: 'black',
                backgroundColor: '#D0FFE9',
                '&:hover': {
                  backgroundColor: '#b3ffd5',
                },
              }}
              onClick={() => {
                setDeleteModal(false);
                setSelectedPerson(null);
              }}
            >
              Annuler
            </Fab>
          </div>
        </div>
      </Modal>
      <Modal
        open={editModal}
        onClose={() => {
          setEditModal(false);
          setSelectedPerson(null);
        }}
      >
        <div className="bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 rounded-xl w-[800px]">
          <h1 className="text-2xl font-bold mb-10 text-center my-5">Modifier {selectedPerson && selectedPerson.firstname} {selectedPerson && selectedPerson.name} ?</h1>
          <div className="flex flex-col gap-5">
            <TextField
              className="w-full"
              id="outlined-basic"
              label="Firstname"
              variant="outlined"
              value={selectedPerson && selectedPerson.firstname}
              onChange={(e) => setSelectedPerson({ ...selectedPerson, firstname: e.target.value })}
            />
            <TextField
              className="w-full"
              id="outlined-basic"
              label="Name"
              variant="outlined"
              value={selectedPerson && selectedPerson.name}
              onChange={(e) => setSelectedPerson({ ...selectedPerson, name: e.target.value })}
            />
            <TextField
              className="w-full"
              id="outlined-basic"
              label="Job"
              variant="outlined"
              value={selectedPerson && selectedPerson.job}
              onChange={(e) => setSelectedPerson({ ...selectedPerson, job: e.target.value })}
            />
            <TextField
              className="w-full"
              id="outlined-basic"
              label="Agency"
              variant="outlined"
              value={selectedPerson && selectedPerson.agency}
              onChange={(e) => setSelectedPerson({ ...selectedPerson, agency: e.target.value })}
            />
            <TextField
              className="w-full"
              id="outlined-basic"
              label="Profil Picture"
              variant="outlined"
              placeholder="Doit être une URL"
              value={selectedPerson && selectedPerson.photo_pro_url}
              onChange={(e) => setSelectedPerson({ ...selectedPerson, photo_pro_url: e.target.value })}
            />
            <TextField
              className="w-full"
              id="outlined-basic"
              label="Fun Picture"
              variant="outlined"
              placeholder="Doit être une URL"
              value={selectedPerson && selectedPerson.photo_fun_url}
              onChange={(e) => setSelectedPerson({ ...selectedPerson, photo_fun_url: e.target.value })}
            />
          </div>
          <div className="flex justify-between">
            <Fab
              variant="extended"
              size="small"
              sx={{
                color: 'white',
                backgroundColor: 'red',
                '&:hover': {
                  backgroundColor: '#b30000',
                },
              }}
              onClick={() => {
                editPerson(selectedPerson.id, selectedPerson);
                setEditModal(false);
                setSelectedPerson(null);
              }}
            >
              Modifier
            </Fab>
            <Fab
              variant="extended"
              size="small"
              sx={{
                color: 'black',
                backgroundColor: '#D0FFE9',
                '&:hover': {
                  backgroundColor: '#b3ffd5',
                },
              }}
              onClick={() => {
                setEditModal(false);
                setSelectedPerson(null);
              }}
            >
              Annuler
            </Fab>
          </div>
        </div>
      </Modal>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <Header />
        <h1 className="text-4xl font-bold mb-10 text-center my-28 text-white">Admin Panel</h1>
        <List sx={{ width: '100%', maxWidth: '90%', bgcolor: 'transparent' }} className="flex flex-col items-center justify-center z-0">
          {allTeams.map((person) => (
            <ListItem
              className="rounded-[8px] my-5 justify-between"
              key={person.photo_pro_url}
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.9)",
              }}
            >
              <ListItemAvatar>
                <Avatar alt={person.firstname} src={person.photo_pro_url} />
              </ListItemAvatar>
              <ListItemText primary={`${person.firstname} ${person.name}`} secondary={`${person.job}`} />
              <Fab
                variant="extended"
                size="small"
                sx={{
                  color: 'black',
                  backgroundColor: '#D0FFE9',
                  '&:hover': {
                    backgroundColor: '#b3ffd5',
                  },
                }}
                onClick={() => {
                  setSelectedPerson(person);
                  setEditModal(true);
                }}
              >
                Modifier
              </Fab>
              <Fab
                variant="extended"
                size="small"
                sx={{
                  color: 'white',
                  backgroundColor: 'red',
                  '&:hover': {
                    backgroundColor: '#b30000',
                  },
                }}
                onClick={() => {
                  setSelectedPerson(person);
                  setDeleteModal(true);
                }}
              >
                Supprimer
              </Fab>
            </ListItem>
          ))}
        </List>
      </div>
    </>
  );
}

export default Admin;
