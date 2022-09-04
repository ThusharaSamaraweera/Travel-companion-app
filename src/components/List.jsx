import { FormControl, InputLabel, Select, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import useStyles from '../assets/styles/list'

const List = () => {
  const classes = useStyles()
  const [type, setType] = useState('restaurants')

  return (
    <div className={classes.container}>
      <Typography variant='h4'>
        Restaurants, Hotels & Attractions around you
      </Typography>
      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={(e) => setType(e.target.value)}>
          <option value='restaurants'>Restaurants</option>
          <option value='hotels'>Hotels</option>
          <option value='attractions'>Attractions</option>
        </Select>
      </FormControl>
    </div>
  )
}

export default List