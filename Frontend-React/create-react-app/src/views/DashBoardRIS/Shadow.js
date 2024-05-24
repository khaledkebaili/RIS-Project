import React, { useState } from 'react';
import { Box, Card, Grid, TextField, Button, Dialog, DialogTitle, DialogContent, MenuItem, Select, FormControl, InputLabel, IconButton, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import SearchIcon from '@mui/icons-material/Search';
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
    <Dialog open={open} onClose={onClose} maxWidth={false} PaperProps={{ style: { width: '40%' } }}>
      <DialogTitle>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Typography variant="h4">New Patient</Typography>
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
              <Button variant="contained" color="primary" onClick={handleAdd} style={{ backgroundColor: '#3CD42F' }}>
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
    { name: 'Helmi Hnich', date: '25/05/2024' },
    { name: 'Firas Hajlaoui', date: '29/05/2024' },
    { name: 'Khaled Kbeili', date: '02/06/2024' },
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

  const handleDelete = (patientName) => {
    // Add logic to delete patient here
    console.log(`Deleted ${patientName}`);
  };

  const handleAddPatientOpen = () => {
    setOpen(true);
  };

  const handleAddPatientClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Box display="flex" alignItems="center" mb={2}>
        <Typography  color="black"style={{ fontSize:'25px' }}>
          Dashboard /
        </Typography>
        <Typography  color="#7200A8" style={{ marginLeft: '8px', fontSize:'25px' }}>
          My patients
        </Typography>
      </Box>
      <Box display="flex" alignItems="center" mb={2}>
        <TextField
          placeholder="Search for a patient"
          value={searchTerm}
          onChange={handleSearch}
          InputProps={{
            startAdornment: (
              <SearchIcon style={{ marginRight: '8px' }} />
            )
          }}
          style={{ flexGrow: 1, marginRight: '16px', marginLeft: '700px', }}
        />
        <Button
          variant="outlined"
          onClick={handleAddPatientOpen}
          style={{
            color: '#5152BC',
            borderColor: '#5152BC',
            borderRadius: '20px',
            textTransform: 'none',
            height: '50px',
            width: '150px',
            marginRight: '80px',
          }}
        >
          Add patient
        </Button>
        
      </Box>
      <Box>
          <Typography  color="#5152BC" style={{ marginLeft: '8px', fontSize:'20px', marginBottom:"20px" }}>
           Patients List
          </Typography>
        </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead style={{ backgroundColor: '#f5f5f5' }}>
            <TableRow>
              <TableCell>Name & Family name of patient</TableCell>
              <TableCell>Appointment</TableCell>
              <TableCell>Details</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredPatients.map((patient, index) => (
              <TableRow key={index}>
                <TableCell>{patient.name}</TableCell>
                <TableCell>{patient.date}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleView(patient.name)}>
                    <VisibilityIcon />
                  </IconButton>
                </TableCell>
                <TableCell>
                  <IconButton onClick={() => handleDelete(patient.name)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <AddPatientForm open={open} onClose={handleAddPatientClose} />
    </Box>
  );
};

export default PatientsPage;
