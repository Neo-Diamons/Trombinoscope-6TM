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

      <div className="flex w-screen h-screen flex-col items-center justify-center">
        <div className="relative w-[290px] h-[330px] flex flex-col items-center justify-center rounded-lg px-6 py-12 mt-8 gap-[50px] bg-backgroundShadow">
          <div className="absolute flex flex-col items-center justify-center border-4 border-[#606060] rounded-lg px-6 py-12 gap-[50px] bg-[#0c1414] -mt-8 -mr-8">
            <div className="flex flex-col gap-4">
              <TextField
                className="w-full"
                id="outlined-basic"
                placeholder="Nom d'utilisateur"
                variant="outlined"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                sx={{
                  '& .MuiInputBase-root': { color: '#0c1414', backgroundColor: 'white', borderRadius: '20px' },
                  '& label.Mui-focused': { color: 'transparent' },
                  '& label.Mui-emptyInputBase': { color: '#0c1414' },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: '#0c1414' },
                    '&:hover fieldset': { borderColor: '#0c1414' },
                    '&.Mui-focused fieldset': { borderColor: 'white' }
                  },
                }}
              />
              <TextField
                className="w-full"
                id="outlined-basic"
                placeholder="Nom d'utilisateur"
                variant="outlined"
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                sx={{
                  '& .MuiInputBase-root': { color: '#0c1414', backgroundColor: 'white', borderRadius: '20px' },
                  '& label.Mui-focused': { color: 'transparent' },
                  '& label': { color: '#0c1414' },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: '#0c1414' },
                    '&:hover fieldset': { borderColor: '#0c1414' },
                    '&.Mui-focused fieldset': { borderColor: 'white' }
                  },
                }}
              />
            </div>
            <Button
              fullWidth
              variant="contained"
              onClick={handleLogin}
              sx={{
                borderRadius: '20px',
                backgroundColor: '#D0FFE9',
                color: 'white',
                height: '56px', // adjust this value to match the TextField's height
                '&:hover': {
                  backgroundColor: '#D0FFE9',
                  opacity: 0.8,
                },
              }}
            >
              <p className="text-black text-lg font-bold">Se connecter</p>
            </Button>
          </div >
        </div>
      </div>
    </>
  );
}

export default Login;
