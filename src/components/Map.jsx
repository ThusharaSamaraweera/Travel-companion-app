import React from "react";
import { useMediaQuery } from "@material-ui/core";
import GoogleMapReact from "google-map-react";

import useStyles from "../assets/styles/map";

const Map = (props) => {
  const { coordinates, setCoordinates, setBounds, places, defaultCoordinates } = props;

  const classes = useStyles();
  const isMobile = useMediaQuery("(min-width:600px)");

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        defaultCenter={defaultCoordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={(e) => {
          console.log(e);
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={() => {}}
      >
      </GoogleMapReact>
    </div>
  );
};

export default Map;
