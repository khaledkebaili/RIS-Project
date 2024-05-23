import React, { useState } from 'react';
import { Box, Grid, TextField, Button, Dialog, DialogTitle, DialogContent, MenuItem, Select, FormControl, InputLabel, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

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
    <Dialog open={open} onClose={onClose} maxWidth={false} PaperProps={{ style: { width: '46%' } }}>      
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

export default AddPatientForm;
