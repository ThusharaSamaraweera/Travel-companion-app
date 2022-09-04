import { Box, Card, CardContent, CardMedia, Typography } from '@material-ui/core'
import React from 'react'

import useStayles from '../assets/styles/placeCard'

const PlaceCard = ({ place }) => {
  const classes = useStayles()

  return (
    <Card elevation={6}>
      <CardMedia
        style={{ height: 250 }}
        image={
          place.photo
            ? place.photo.images.large.url
            : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
        }
        title={place.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {place.name}
        </Typography>
        <Box style={{display: 'flex', justifyContent: 'space-between'}}>
          <Typography variant="subtitle1">Ranking</Typography>
          <Typography gutterBottom variant="subtitle1">{place.ranking}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default PlaceCard