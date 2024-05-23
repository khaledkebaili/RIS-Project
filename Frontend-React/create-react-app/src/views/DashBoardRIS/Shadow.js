import React, { useState } from 'react';
import { Box, Card, Grid, TextField, Button, Dialog, DialogTitle, DialogContent, MenuItem, Select, FormControl, InputLabel, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';

const AddPatientForm = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    familyName: '',
    sex: 'Male',
    birthday: '',
    address: '',
    mobileNumber: '',
    assuranceName: '',
    cin: '',
    socialSecurityNumber: '',
    situation: 'Single'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAdd = () => {
    // Handle form submission logic here
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth={false} PaperProps={{ style: { width: '45%' } }}>      
      <DialogTitle>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Typography variant="h2">New Patient</Typography>
          <IconButton onClick={onClose} style={{ position: 'absolute', right: 8, top: 8 }}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              margin="dense"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Family Name"
              name="familyName"
              value={formData.familyName}
              onChange={handleChange}
              margin="dense"
            />
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth margin="dense">
              <InputLabel>Sex</InputLabel>
              <Select
                name="sex"
                value={formData.sex}
                onChange={handleChange}
              >
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Birthday"
              name="birthday"
              type="date"
              value={formData.birthday}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              margin="dense"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              margin="dense"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Mobile Number"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              margin="dense"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Assurance's Name"
              name="assuranceName"
              value={formData.assuranceName}
              onChange={handleChange}
              margin="dense"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="CIN"
              name="cin"
              value={formData.cin}
              onChange={handleChange}
              margin="dense"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Social Security Number"
              name="socialSecurityNumber"
              value={formData.socialSecurityNumber}
              onChange={handleChange}
              margin="dense"
            />
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth margin="dense">
              <InputLabel>Situation</InputLabel>
              <Select
                name="situation"
                value={formData.situation}
                onChange={handleChange}
              >
                <MenuItem value="Single">Single</MenuItem>
                <MenuItem value="Married">Married</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Box display="flex" justifyContent="center" mt={2}>
              <Button variant="contained" color="primary" onClick={handleAdd} style={{ backgroundColor: '#4CAF50' }}>
                ADD
              </Button>
            </Box>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

const PatientsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [open, setOpen] = useState(false);
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
    navigate(`/patient-details/${patientName}`);
  };

  const handleAddPatientOpen = () => {
    setOpen(true);
  };

  const handleAddPatientClose = () => {
    setOpen(false);
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
                  <Button variant="contained" color="primary" onClick={handleAddPatientOpen}>
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
      <AddPatientForm open={open} onClose={handleAddPatientClose} />
    </Box>
  );
};

export default PatientsPage;
