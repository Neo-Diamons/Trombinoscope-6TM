import { useEffect, useState, useRef } from "react";
import Header from "../components/Header.jsx";
import Modal from "@mui/material/Modal";

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

import TextField from '@mui/material/TextField';

const port = process.env.PORT || 8080;

function deletePerson(id) {
  fetch(`http://localhost:${port}/api/people/${id}`, {
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
  fetch(`http://localhost:${port}/api/people/${id}`, {
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
      })
      .catch((err) => console.log(err));
  }, []);

  const descriptionRef = useRef(null);

  useEffect(() => {
    if (descriptionRef.current) {
      descriptionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [selectedPerson]);

  const [_, setFilteredTeams] = useState(allTeams);

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
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-[8px]"
              onClick={() => {
                setDeleteModal(false);
                setSelectedPerson(null);
              }}
            >
              Annuler
            </button>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-[8px]"
              onClick={() => {
                deletePerson(selectedPerson.id);
                setDeleteModal(false);
                setSelectedPerson(null);
              }}
            >
              Supprimer
            </button>
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
              label="Equip"
              variant="outlined"
              value={selectedPerson && selectedPerson.equip}
              onChange={(e) => setSelectedPerson({ ...selectedPerson, equip: e.target.value })}
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
              placeholder="Doit être une URL (.jpeg uniquement)"
              value={selectedPerson && selectedPerson.photo_pro_url}
              onChange={(e) => setSelectedPerson({ ...selectedPerson, photo_pro_url: e.target.value })}
            />
            <TextField
              className="w-full"
              id="outlined-basic"
              label="Fun Picture"
              variant="outlined"
              placeholder="Doit être une URL (.jpeg uniquement)"
              value={selectedPerson && selectedPerson.photo_fun_url}
              onChange={(e) => setSelectedPerson({ ...selectedPerson, photo_fun_url: e.target.value })}
            />
          </div>
          <div className="flex justify-between pt-[20px]">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-[8px]"
              onClick={() => {
                editPerson(selectedPerson.id, selectedPerson);
                setEditModal(false);
                setSelectedPerson(null);
              }}
            >
              Modifier
            </button>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-[8px]"
              onClick={() => {
                setEditModal(false);
                setSelectedPerson(null);
              }}
            >
              Annuler
            </button>
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
              key={person.id}
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.9)",
              }}
            >
              <ListItemAvatar>
                <Avatar alt={person.firstname} src={person.photo_pro_url} />
              </ListItemAvatar>
              <ListItemText primary={`${person.firstname} ${person.name}`} secondary={`${person.job}`} />
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-l-[8px]"
                onClick={() => {
                  setSelectedPerson(person);
                  setEditModal(true);
                }}
              >
                Modifier
              </button>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-r-[8px]"
                onClick={() => {
                  setSelectedPerson(person);
                  setDeleteModal(true);
                }}Fab
              >
                Supprimer
              </button>
            </ListItem>
          ))}
        </List>
      </div>
    </>
  );
}

export default Admin;
