import React, { useState } from 'react';
import Header from './HeaderLogin';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const port = process.env.PORT || 8080;

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    fetch(`http://localhost:${port}/api/user/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Header />

      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-10 text-center mt-28 text-white">Barbara</h1>

        <div className="flex flex-col items-center justify-center">

          <TextField
            className="w-full"
            id="outlined-basic"
            label="Username"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            sx={{
              '& .MuiInputBase-root': { color: '#D0FFE9', backgroundColor: '#2D2D2D' },
              '& label.Mui-focused': { color: '#D0FFE9' },
              '& label': { color: '#D0FFE9' },
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#D0FFE9' },
                '&:hover fieldset': { borderColor: '#D0FFE9' },
                '&.Mui-focused fieldset': { borderColor: '#D0FFE9' }
              },
              margin: '8px',
            }}
          />

          <TextField
            className="w-full mt-5"
            id="outlined-basic"
            label="Password"
            variant="outlined"
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            sx={{
              '& .MuiInputBase-root': { color: '#D0FFE9', backgroundColor: '#2D2D2D' },
              '& label.Mui-focused': { color: '#D0FFE9' },
              '& label': { color: '#D0FFE9' },
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#D0FFE9' },
                '&:hover fieldset': { borderColor: '#D0FFE9' },
                '&.Mui-focused fieldset': { borderColor: '#D0FFE9' }
              },
              margin: '8px',
              marginBottom: '20px',
            }}
          />

          <Button
            className="mt-5 w-full"
            variant="contained"
            onClick={handleLogin}
            sx={{
              backgroundColor: '#4CAF50',
              color: 'white',
              '&:hover': {
                backgroundColor: '#4CAF50',
                opacity: 0.8,
              },
            }}
          >
            Login
          </Button>
        </div>
      </div>
    </>
  );
}

export default Login;
