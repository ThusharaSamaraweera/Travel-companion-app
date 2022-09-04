import "./App.css";
import { CssBaseline, Grid } from "@material-ui/core";
import Header from "./components/Header";
import List from "./components/List";
import Map from "./components/Map";
import { useEffect, useState } from "react";
import { getPlaces } from "./services";
import {data} from "./data/places"

function App() {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [defaultCoordinates, setDefaultCoordinates] = useState({});
  const [bounds, setBounds] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
      setDefaultCoordinates({ lat: latitude, lng: longitude })
      setCoordinates({ lat: latitude, lng: longitude })
    })
  }, [])

  useEffect(() => {
    console.log(coordinates, bounds)
    getPlaces(bounds?.sw, bounds?.ne).then((data) => {
      setPlaces(data);
      console.log(data);
    });
    // setPlaces(data)
  }, [coordinates, bounds]);

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} sm={6}>
          <List places={places} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Map
            setBounds={setBounds}
            setCoordinates={setCoordinates}
            coordinates={coordinates}
            defaultCoordinates={defaultCoordinates}
            places={places}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
