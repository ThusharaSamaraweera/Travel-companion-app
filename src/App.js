import "./App.css";
import { CssBaseline, Grid } from "@material-ui/core";
import Header from "./components/Header";
import List from "./components/List";
import Map from "./components/Map";
import { useEffect, useState } from "react";
import { getPlaces } from "./services";
import { data } from "./data/places";

function App() {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [defaultCoordinates, setDefaultCoordinates] = useState({});
  const [bounds, setBounds] = useState({});
  const [childClicked, setChildClicked] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");
  const [filteredPlaces, setFilteredPlaces] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setDefaultCoordinates({ lat: latitude, lng: longitude });
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    setIsLoading(true);
    getPlaces(type, bounds?.sw, bounds?.ne).then((data) => {
      setPlaces(data);
      setIsLoading(false);
    });
    // setPlaces(data);
    // setIsLoading(false);
    setFilteredPlaces([]);
  }, [coordinates, bounds, childClicked, type]);

  useEffect(() => {
    const filteredPlaces = data.filter((place) => place.rating > rating);
    setFilteredPlaces(filteredPlaces);
  }, [rating]);

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} sm={6}>
          <List
            places={filteredPlaces.length ? filteredPlaces : places}
            childClicked={childClicked}
            isLoading={isLoading}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Map
            setBounds={setBounds}
            setCoordinates={setCoordinates}
            coordinates={coordinates}
            defaultCoordinates={defaultCoordinates}
            places={filteredPlaces.length ? filteredPlaces : places}
            setChildClicked={setChildClicked}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
