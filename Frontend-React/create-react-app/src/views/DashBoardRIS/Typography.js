import React, { useState } from 'react';
import { Grid, Card, CardContent, Typography, Avatar, Box, IconButton } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import NoteIcon from '@mui/icons-material/Note';
import PeopleIcon from '@mui/icons-material/People';
import AddPatientForm from './AddPatientForm'; // Ensure the path is correct

const Dashboard = () => {
  const [open, setOpen] = useState(false);

  const handleAddPatientOpen = () => {
    setOpen(true);
  };

  const handleAddPatientClose = () => {
    setOpen(false);
  };

  return (
    <MainCard title="Dashboard Doctor">
      <Grid container spacing={gridSpacing}>
        {/* Doctor Profile Section */}
        <Grid item xs={12} sx={{ mb: 3 }}>
          <Card sx={{ display: 'flex', alignItems: 'center', borderRadius: '16px', p: 2, boxShadow: 3 }}>
            <Avatar
              alt="Helmi Hnich"
              src="/path-to-avatar-image.jpg" // Replace with your image URL
              sx={{ width: 56, height: 56, mr: 2 }}
            />
            <CardContent>
              <Typography variant="h6" color="primary" component="div">
                Helmi Hnich
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Radiologist
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Buttons Section */}
        <Grid item xs={4} sm={4} md={4} sx={{ textAlign: 'center', mb: 3 }}>
          <Card sx={{ borderRadius: '16px', p: 2, boxShadow: 3 }} onClick={handleAddPatientOpen}>
            <IconButton sx={{ mb: 1 }}>
              <AddCircleOutlineIcon fontSize="large" />
            </IconButton>
            <Typography variant="body1">New patient</Typography>
          </Card>
        </Grid>
        <Grid item xs={4} sm={4} md={4} sx={{ textAlign: 'center', mb: 3 }}>
          <Card sx={{ borderRadius: '16px', p: 2, boxShadow: 3 }}>
            <IconButton sx={{ mb: 1 }}>
              <NoteIcon fontSize="large" />
            </IconButton>
            <Typography variant="body1">Note</Typography>
          </Card>
        </Grid>
        <Grid item xs={4} sm={4} md={4} sx={{ textAlign: 'center', mb: 3 }}>
          <Card sx={{ borderRadius: '16px', p: 2, boxShadow: 3 }}>
            <IconButton sx={{ mb: 1 }}>
              <PeopleIcon fontSize="large" />
            </IconButton>
            <Typography variant="body1">My patients</Typography>
          </Card>
        </Grid>

        {/* Next Appointment Section */}
        <Grid item xs={12} sx={{ mb: 3 }}>
          <Box sx={{ p: 2, borderRadius: '16px', border: '1px solid #ccc', boxShadow: 3 }}>
            <Typography variant="subtitle1" color="primary">
              Next Appointment
            </Typography>
            <Box sx={{ mt: 1, p: 1, borderRadius: '16px', border: '1px solid #ccc', height: '50px' }}>
              {/* Add your appointment content here */}
            </Box>
          </Box>
        </Grid>

        {/* Statistics Section */}
        <Grid item xs={6} sm={6} md={6} sx={{ textAlign: 'center', mb: 3 }}>
          <Card sx={{ borderRadius: '16px', p: 2, boxShadow: 3 }}>
            <Typography variant="body1">Number of patients of this month</Typography>
            <Box
              sx={{
                mt: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100px',
                width: '100px',
                backgroundColor: 'green',
                borderRadius: '50%',
                margin: '20px auto',
              }}
            >
              <Typography variant="h5" color="white">
                15
              </Typography>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={6} sm={6} md={6} sx={{ textAlign: 'center', mb: 3 }}>
          <Card sx={{ borderRadius: '16px', p: 2, boxShadow: 3 }}>
            <Typography variant="body1">Chart of appointment's number</Typography>
            <Box sx={{ mt: 1, height: '150px' }}>
              {/* Add your chart component here */}
            </Box>
          </Card>
        </Grid>
      </Grid>
      <AddPatientForm open={open} onClose={handleAddPatientClose} />
    </MainCard>
  );
};

export default Dashboard;
