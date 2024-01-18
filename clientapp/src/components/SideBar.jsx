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
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem', color: '#000' }} />}
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
    <div className="
      w-[30vw] flex justify-center
    ">
      <div className="
        fixed h-[70vh] w-[20vw] mt-[8.5vh] mr-[1vw]
        bg-backgroundShadow
        rounded-[8px]
      "></div>
      <div className="
        fixed mt-[7.5vh]
        h-[70vh] w-[20vw] p-[56px]
        bg-backgroundLight
        rounded-[8px]
        border-[3px] border-border
      ">
        <div className="
          flex justify-center text-center
          font-sans font-bold not-italic
          text-white text-[40px] tracking-[0.2px] leading-10
          h-[30%]
        ">
          <p>
            Trouvez votre équipe
          </p>
        </div>
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
                placeholder="Rechercher"
                variant="outlined"
                className="mb-5"
                sx={{
                  '& .MuiInputBase-root': { color: '#000', backgroundColor: '#D0FFE9' },
                  '& label.Mui-focused': { color: '#000' },
                  '& label': { color: '#000' },
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
              className="font-bold rounded-t-[8px]"
              sx={{
                backgroundColor: '#D0FFE9',
                color: '#000',
              }}
            >
              <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                <Typography>Emploi</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <FormControl variant="outlined" className="mb-5 w-full">
                    {Array.from(jobMap).map(([job, value], index, self) => {
                      if (index < self.length) {
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
                  </FormControl>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}
              sx={{
                backgroundColor: '#D0FFE9',
                color: '#000',
              }}>
              <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                <Typography>Equipe</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <FormControl variant="outlined" className="mb-5 w-full">
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
                  </FormControl>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}
              className="rounded-b-[8px]"
              sx={{
                backgroundColor: '#D0FFE9',
                color: '#000',
              }}>
              <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                <Typography>Agence</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <FormControl variant="outlined" className="mb-5 w-full">
                    {Array.from(cityMap).map(([city, value], index, self) => {
                      if (index < self.length) {
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
                  </FormControl>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div >
    </div>
  );
}

export default SideBar;
