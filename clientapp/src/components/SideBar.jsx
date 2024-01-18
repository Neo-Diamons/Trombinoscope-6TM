import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { TextField, FormControl, Autocomplete } from "@mui/material";
import { Checkbox, FormControlLabel } from "@mui/material";

const cityMap = new Map([
  ["Rennes"],
  ["Angers"],
]);

const jobMap = new Map([
  ["Développeur"],
  ["Alternant"],
  ["Product Owner"],
]);

const teamMap = new Map([
  [`P\u00f4le AI`],
  [`P\u00f4le Walker`],
  [`Team IT`],
]);

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem', color: '#D0FFE9' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

function SideBar({ allTeams, setFilteredTeams }) {
  const [expanded, setExpanded] = React.useState('panel1');
  const [selectedJobs, setSelectedJobs] = React.useState(new Set());
  const [selectedTeams, setSelectedTeams] = React.useState(new Set());
  const [selectedCities, setSelectedCities] = React.useState(new Set());

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const handleJobChange = (job) => {
    if (selectedJobs.has(job)) {
      selectedJobs.delete(job);
    } else {
      selectedJobs.add(job);
    }
    setSelectedJobs(new Set(selectedJobs));
    filterTeams();
  }

  const handleTeamChange = (team) => {
    if (selectedTeams.has(team)) {
      selectedTeams.delete(team);
    } else {
      selectedTeams.add(team);
    }
    setSelectedTeams(new Set(selectedTeams));
    filterTeams();
  }

  const handleCityChange = (city) => {
    if (selectedCities.has(city)) {
      selectedCities.delete(city);
    } else {
      selectedCities.add(city);
    }
    setSelectedCities(new Set(selectedCities));
    filterTeams();
  }

  const filterTeams = () => {
    let filtered = allTeams;

    if (selectedJobs.size > 0) {
      filtered = filtered.filter((person) => {
        return selectedJobs.has(person.job);
      });
    }

    if (selectedTeams.size > 0) {
      filtered = filtered.filter((person) => {
        return selectedTeams.has(person.equip);
      });
    }

    if (selectedCities.size > 0) {
      filtered = filtered.filter((person) => {
        return selectedCities.has(person.agency);
      });
    }

    setFilteredTeams(filtered);
  }

  React.useEffect(() => {
    filterTeams();
  }, [selectedJobs, selectedTeams, selectedCities]);

  return (
    <>
      <div className="p-[30px] rounded-lg shadow-md flex flex-col bg-[#1B1B1B] text-white">
        <h1 className="text-2xl font-bold mb-10">Trouvez votre équipe</h1>
        <div className="flex flex-col justify-center w-full gap-10">
          <Autocomplete
            options={allTeams}
            getOptionLabel={(person) => `${person.firstname} ${person.name}`}
            filterOptions={(options, state) => options
              .filter((person) => {
                return ((person.firstname.toLowerCase().includes(state.inputValue.toLowerCase())
                  || person.name.toLowerCase().includes(state.inputValue.toLowerCase())) && person.photo_pro_url !== null);
              })}
            onChange={(event, newValue) => {
              if (newValue)
                setFilteredTeams([newValue]);
              else
                setFilteredTeams(allTeams);
            }}
            isOptionEqualToValue={(option, value) => option.id === value.id}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Rechercher"
                variant="outlined"
                className="mb-5"
                sx={{
                  '& .MuiInputBase-root': { color: '#D0FFE9', backgroundColor: '#2D2D2D' },
                  '& label.Mui-focused': { color: '#D0FFE9' },
                  '& label': { color: '#D0FFE9' },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: '#D0FFE9' },
                    '&:hover fieldset': { borderColor: '#D0FFE9' },
                    '&.Mui-focused fieldset': { borderColor: '#D0FFE9' }
                  }
                }}
              />
            )}
          />
          <div>
            <Accordion
              expanded={expanded === 'panel1'}
              onChange={handleChange('panel1')}
              sx={{
                backgroundColor: '#2D2D2D',
                color: '#D0FFE9',
              }}
            >
              <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                <Typography>Emploi</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <FormControl variant="outlined" className="mb-5 w-full">
                    <div className="flex flex-col lg:flex-row justify-center w-full lg:gap-10">
                      <div className="w-full lg:w-1/2">
                        {Array.from(jobMap).map(([job, value], index, self) => {
                          if (index < self.length / 2) {
                            return (
                              <FormControlLabel
                                key={job}
                                control={
                                  <Checkbox
                                    checked={selectedJobs.has(job)}
                                    onChange={() => handleJobChange(job)}
                                  />
                                }
                                label={job}
                              />
                            );
                          }
                          return null;
                        })}
                      </div>
                      <div className="w-full lg:w-1/2">
                        {Array.from(jobMap).map(([job, value], index, self) => {
                          if (index >= self.length / 2) {
                            return (
                              <FormControlLabel
                                key={job}
                                control={
                                  <Checkbox
                                    checked={selectedJobs.has(job)}
                                    onChange={() => handleJobChange(job)}
                                  />
                                }
                                label={job}
                              />
                            );
                          }
                          return null;
                        })}
                      </div>
                    </div>
                  </FormControl>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}
              sx={{
                backgroundColor: '#2D2D2D',
                color: '#D0FFE9',
              }}>
              <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                <Typography>Equipe</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <FormControl variant="outlined" className="mb-5 w-full">
                    <div className="flex lg:flex-row justify-center w-full lg:gap-10">
                      <div className="flex flex-col w-full lg:w-1/2">
                        {Array.from(teamMap).map(([team, value], index, self) => {
                          if (index < self.length / 2) {
                            return (
                              <FormControlLabel
                                key={team}
                                control={
                                  <Checkbox
                                    checked={selectedTeams.has(team)}
                                    onChange={() => handleTeamChange(team)}
                                  />
                                }
                                label={team}
                              />
                            );
                          }
                          return null;
                        })}
                      </div>
                      <div className="w-full lg:w-1/2">
                        {Array.from(teamMap).map(([team, value], index, self) => {
                          if (index >= self.length / 2) {
                            return (
                              <FormControlLabel
                                key={team}
                                control={
                                  <Checkbox
                                    checked={selectedTeams.has(team)}
                                    onChange={() => handleTeamChange(team)}
                                  />
                                }
                                label={team}
                              />
                            );
                          }
                          return null;
                        })}
                      </div>
                    </div>
                  </FormControl>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}
              sx={{
                backgroundColor: '#2D2D2D',
                color: '#D0FFE9',
              }}>
              <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                <Typography>Agence</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <FormControl variant="outlined" className="mb-5 w-full">
                    <div className="flex flex-col lg:flex-row justify-center w-full lg:gap-10">
                      <div className="w-full lg:w-1/2">
                        {Array.from(cityMap).map(([city, value], index, self) => {
                          if (index < self.length / 2) {
                            return (
                              <FormControlLabel
                                key={city}
                                control={
                                  <Checkbox
                                    checked={selectedCities.has(city)}
                                    onChange={() => handleCityChange(city)}
                                  />
                                }
                                label={city}
                              />
                            );
                          }
                          return null;
                        })}
                      </div>
                      <div className="w-full lg:w-1/2">
                        {Array.from(cityMap).map(([city, value], index, self) => {
                          if (index >= self.length / 2) {
                            return (
                              <FormControlLabel
                                key={city}
                                control={
                                  <Checkbox
                                    checked={selectedCities.has(city)}
                                    onChange={() => handleCityChange(city)}
                                  />
                                }
                                label={city}
                              />
                            );
                          }
                          return null;
                        })}
                      </div>
                    </div>
                  </FormControl>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div >
    </>
  );
}

export default SideBar;
