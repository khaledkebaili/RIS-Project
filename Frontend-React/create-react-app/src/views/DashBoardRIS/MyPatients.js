import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid, InputBase, IconButton } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Xray from 'assets/images/xray.jpg';
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [patients, setPatients] = useState([]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:2000/patient');
        setPatients(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching patient data:', error);
      }
    };

    fetchData();
  }, []);

  const filteredPatients = patients.filter((patient) =>
    patient["Patient Name"].toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <MainCard
      title="X-RAY Examination"
      secondary={<SecondaryAction link="https://next.material-ui.com/system/Dashboard/" />}
    >
      {/* Search Bar */}
      <InputBase
        placeholder="Search Patient Name"
        value={searchQuery}
        onChange={handleSearchChange}
        sx={{ ml: 1, flex: 1 }}
      />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>

      <Grid container spacing={gridSpacing}>
        {/* Patient Cards */}
        {filteredPatients.map((patient, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <SubCard title={`Patient ${index + 1}`}>
              <Grid container direction="column" spacing={1}>
                <Grid item>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia sx={{ height: 140 }} image={Xray} title="X-RAY" />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        X-RAY number
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Patient Name: {patient["Patient Name"]}<br />
                        Age: {patient.Age} <br />
                        Date: {patient.Date}<br />
                        Doctor: {patient.Doctor}<br />
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Share</Button>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </Card>
                </Grid>
              </Grid>
            </SubCard>
          </Grid>
        ))}
      </Grid>
    </MainCard>
  );
};

export default Dashboard;
