import React from 'react'
import { Autocomplete } from '@react-google-maps/api' 
import { AppBar, Box, InputBase, Toolbar, Typography } from '@material-ui/core'
import useStyles from '../assets/styles/header'
import SearchIcon from "@material-ui/icons/Search";

const Header = () => {
  const classes = useStyles()

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          Travel Advisor
        </Typography>
        <Box display='flex'>
          <Typography variant="h6" className={classes.title}>
            Explore new places
          </Typography>

        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header