import React from 'react';
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Chip,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import Rating from '@mui/lab/Rating';
import { styles } from './styles';

export default function PlaceDetail({ place }) {
  return (
    <Card elevation={6}>
       <CardMedia 
       style={{height:350}} 
        image={place.photo ? place.photo.images.large.url :'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'} 
        title={place.name}/>

        <CardContent>
          <Typography gutterBottom variant='h5'>{place.name}</Typography>
          <Box display='flex' justifyContent='space-between'>
            <Typography variant='subtitle1'>Price</Typography>
            <Typography gutterBottom variant='subtitle1'>{place.price_level}</Typography>
          </Box>
          <Box display='flex' justifyContent='space-between'>
            <Typography variant='subtitle1'>Ranking</Typography>
            <Typography gutterBottom variant='subtitle1'>{place.ranking}</Typography>
          </Box>
        
          {place?.cuisine?.map(({name})=>(
            <Chip key={name} size='small' label={name} ></Chip>
           ))}

           {place?.address && (
            <Typography gutterBottom variant='body2' color='textSecondary'> 
            <LocationOnIcon/> {place.address}
            </Typography>
           )}
            {place?.phone && (
            <Typography gutterBottom variant='body2' color='textSecondary'> 
            <PhoneIcon/> {place.phone}
            </Typography>
           )}
           <CardActions >
            <Button size='small' color='primary' onClick={()=>window.open(place.web_url,'_blank')}>Trip advisor</Button>
            <Button size='small' color='primary' onClick={()=>window.open(place.website,'_blank')}>Website</Button>
           </CardActions>
        </CardContent>
      
    </Card>
  );
}
