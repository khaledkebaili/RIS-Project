import React, { useState } from 'react';
import { Box, Card, Grid, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const PatientsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const patients = [
    { name: 'Helmi Hnich', date: '25/05/2024', appointmentDate: '01/06/2024', appointments: 2 },
    { name: 'Firas Hajlaoui', date: '29/05/2024', appointmentDate: '05/06/2024', appointments: 1 },
    { name: 'Khaled Kbeili', date: '02/06/2024', appointmentDate: '10/06/2024', appointments: 3 },
  ];

  const filteredPatients = patients.filter((patient) =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleView = (patientName) => {
    // Replace 'patient-details' with your target route
    navigate(`/patient-details/${patientName}`);
  };

  return (
    <Box>
      <Card>
        <Box p={3}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid container alignItems="center" justifyContent="space-between">
                <Grid item>
                  <h2>Dashboard / My patients</h2>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="primary">
                    Add patient
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                placeholder="Search for a patient"
                value={searchTerm}
                onChange={handleSearch}
                InputProps={{
                  endAdornment: (
                    <Box component="span" mr={1}>
                      <i className="fas fa-search"></i>
                    </Box>
                  )
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Box>
                <Grid container spacing={2}>
                  {filteredPatients.map((patient, index) => (
                    <Grid item xs={12} key={index}>
                      <Card>
                        <Box p={2}>
                          <Grid container alignItems="center" justifyContent="space-between">
                            <Grid item>
                              <h3>{patient.name}</h3>
                              <p>Next appointment: {patient.appointmentDate}</p>
                              <p>Appointments: {patient.appointments}</p>
                            </Grid>
                            <Grid item>
                              <Box display="flex" flexDirection="column" alignItems="flex-end">
                                <Button
                                  variant="contained"
                                  color="primary"
                                  style={{ marginBottom: '8px' }}
                                  onClick={() => handleView(patient.name)}
                                >
                                  View
                                </Button>
                                <Button variant="contained" color="secondary">
                                  Delete
                                </Button>
                              </Box>
                            </Grid>
                          </Grid>
                        </Box>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </Box>
  );
};

export default PatientsPage;
