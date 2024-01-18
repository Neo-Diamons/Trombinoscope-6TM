import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Home from '../Home.jsx';

function Header() {
  return (
    <header>
      <Link to="/">
        <img
          loading="eager"
          src="https://www.6tm.com/app/uploads/2023/09/6tm_title-001.svg"
          alt="6TM logo with title"
        />
      </Link>
      <Link to="/">
      <Stack spacing={2} direction="row">
        <Button
          id="outlined-basic"
          label="Retour"
          variant="outlined"
          size="small"
          sx={{
            backgroundColor: 'transparent',
            color: '#D0FFE9',
            borderColor: '#D0FFE9',
            position: 'absolute',
            right: 40,
            top: 25
          }}
        >Retour</Button>
      </Stack>
      </Link>
    </header>
  );
}

export default Header;
