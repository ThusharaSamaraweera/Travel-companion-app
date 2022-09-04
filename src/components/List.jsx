import {
  CircularProgress,
  FormControl,
  Grid,
  InputLabel,
  Select,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import useStyles from "../assets/styles/list";
import PlaceCard from "./PlaceCard";

const List = (props) => {
  const { places, childClicked, isLoading } = props;
  const classes = useStyles();
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");
  const [eleRefs, setEleRefs] = useState([]);

  useEffect(() => {
    const refs = Array(places?.length)
      .fill()
      .map((_, i) => eleRefs[i] || React.createRef());
    setEleRefs(refs);
  }, [places, childClicked]);

  return (
    <div className={classes.container}>
      <Typography variant="h4">
        Restaurants, Hotels & Attractions around you
      </Typography>

      {isLoading ? (
        <div className={classes.loading}>
          <CircularProgress size="5rem" />
        </div>
      ) : (
        <>
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
              <Grid item key={i} xs={12} ref={eleRefs[i]}>
                <PlaceCard
                  place={place}
                  key={i}
                  selected={Number(childClicked) === i}
                  refProp={eleRefs[i]}
                />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </div>
  );
};

export default List;
