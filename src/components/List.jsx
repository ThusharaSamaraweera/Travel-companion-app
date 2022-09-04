import { FormControl, Grid, InputLabel, Select, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import useStyles from '../assets/styles/list'
import PlaceDetails from './PlaceDetails'
import { getPlaces } from './services'

const List = () => {
  const classes = useStyles()
  const [type, setType] = useState('restaurants')
  const [rating, setRating] = useState('')
  const [places, setPlaces] = useState([])

  useEffect(() => {
    getPlaces().then((data) => {
      setPlaces(data)
      console.log(data)
    })
  }, [])

  return (
    <div className={classes.container}>
      <Typography variant="h4">
        Restaurants, Hotels & Attractions around you
      </Typography>
      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="restaurants">Restaurants</option>
          <option value="hotels">Hotels</option>
          <option value="attractions">Attractions</option>
        </Select>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select value={rating} onChange={(e) => setRating(e.target.value)}>
          <option value={0}>All</option>
          <option value={3}>Above 3.0</option>
          <option value={4}>Above 4</option>
          <option value={4.5}>Above 4.5</option>
        </Select>
      </FormControl>

      <Grid container spacing={3} className={classes.list}>
        {places?.map((place, i) => (
          <Grid item key={i} xs={12}>
            <PlaceDetails place={place}  />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default List