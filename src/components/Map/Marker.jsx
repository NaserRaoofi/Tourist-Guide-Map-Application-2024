import React from 'react';
import { Paper, Typography } from '@mui/material';
import LocationOnOutlined from '@mui/icons-material/LocationOnOutlined';
import { styles } from './styles';

const Marker = ({ place, isDesktop }) => {
  return (
    <div style={styles.markerContainer}>
      {isDesktop ? (
        <LocationOnOutlined color="error" fontSize="large" />
      ) : (
        <Paper elevation={3} style={styles.paper}>
          <Typography style={styles.typography} variant="subtitle2" gutterBottom>
            {place.name}
          </Typography>
          <img style={styles.pointer} src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'} alt={place.name} />
        </Paper>
      )  }
    </div>
  );
};

export default Marker;
