import React,{useState} from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import {styles} from './styles'
import PlaceDetail from '../PlaceDetail/PlaceDetail'




export default function List({places}) {
  const [type,setType]=useState('Resturant');
  const [rating,setRating]=useState('')
  return (
    <div style={styles.container}>
        <Typography variant='h4'> Resturant, Hotels and Attractions around you </Typography>
        <FormControl style={styles.formControl}>
          <InputLabel>Type</InputLabel>
          <Select  value={type} onChange={(e)=> setType(e.target.value)}>
            <MenuItem value='Resturant'>Resturant</MenuItem>
            <MenuItem value='Hotel'>Hotel</MenuItem>
            <MenuItem value='Attractions'>Attractions</MenuItem>
          </Select>
        </FormControl>
        <FormControl style={styles.formControl}>
          <InputLabel>Rating</InputLabel>
          <Select value={rating} onChange={(e)=> setRating(e.target.value)}>
            <MenuItem value={0}>All</MenuItem>
            <MenuItem value={3}>above 3</MenuItem>
            <MenuItem value={4}>above 4</MenuItem>
            <MenuItem value={4.5}>above 4.5</MenuItem>
          </Select>
        </FormControl>
        <Grid container spacing={3} style={styles.list}>
         {places?.map((place, i) => (
        <Grid item key={i} xs={12}>
          <PlaceDetail place={place} />
        </Grid>
      ))}
    </Grid>
    </div>
  )
}
