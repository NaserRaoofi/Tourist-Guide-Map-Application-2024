import React from 'react';
import GoogleMapReact from 'google-map-react';
import { useMediaQuery } from '@mui/material';
import { styles } from './styles';
import Marker from './Marker'; // Import the custom Marker component

const Map = ({ setCoordinate, setBounds, coordinate, places }) => {
  const isDesktop = useMediaQuery('(min-width:600px)');

  return (
    <div style={styles.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyBja9T3AxWwGqjeOZUT6fe5dUZXHnsc21I' }}
        center={coordinate}
        defaultZoom={11}
        margin={[50, 50, 50, 50]}
        options={{ disableDefaultUI: true, zoomControl: true }}
        onChange={(e) => {
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
          setCoordinate({ lat: e.center.lat, lng: e.center.lng });
        }}
        onChildClick={() => {}}
      >
        {places?.map((place, i) => (
          <Marker
            key={i}
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            place={place}
            isDesktop={isDesktop}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
