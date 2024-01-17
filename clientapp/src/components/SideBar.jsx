import { TextField, FormControl, MenuItem, Select, InputLabel } from "@mui/material";

function SideBar() {
  return (
    <>
      <div className="p-[30px] rounded-lg shadow-md flex flex-col bg-[#1B1B1B] text-white">
        <h1 className="text-2xl font-bold mb-10">Trouvez votre équipe</h1>
        <div className="flex flex-col justify-center w-full">
          <TextField
            id="outlined-basic"
            label="Rechercher"
            variant="outlined"
            className="mb-5"
            sx={{
              '& .MuiInputBase-root': { color: '#D0FFE9', backgroundColor: '#2D2D2D' },
              '& label.Mui-focused': { color: '#D0FFE9' },
              '& label': { color: '#D0FFE9' },
              '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#D0FFE9' },
              '&:hover fieldset': { borderColor: '#D0FFE9' },
              '&.Mui-focused fieldset': { borderColor: '#D0FFE9' } }
            }}
          />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={age}
              label="Age"
              // onChange={handleChange}
            >
              {/* <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem> */}
            </Select>
          </FormControl>
        </div>
      </div>
    </>
  );
}

export default SideBar;
