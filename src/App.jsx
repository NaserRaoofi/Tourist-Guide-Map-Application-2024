import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header'; // Correct path
import { CssBaseline, Grid } from '@mui/material';
import List from './components/List/List';
import Map from './components/Map/Map';
import { getPlacesData } from './services/api/index';

function App() {
  const [places, setPlaces] = useState([]); // Initialize the state
  const [coordinate, setCoordinate] = useState({ });
  const [bounds, setBounds] = useState({});
  console.log(bounds)
 

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinate({ lat: latitude, lng: longitude });
      },
      (error) => {
        console.error("Error getting geolocation:", error);

      }
    );
  }, []);

  useEffect(() => {
      getPlacesData(bounds.sw, bounds.ne).then((data) => {
        setPlaces(data);
      });
    
  }, [coordinate, bounds]);
  

  return (
    <div>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List places={places} />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map 
            setBounds={setBounds}
            setCoordinate={setCoordinate}
            coordinate={coordinate} 
            places={places}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
