import axios from 'axios';

const URL =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

const options = {
  params: {
    bl_latitude: "11.847676",
    tr_latitude: "12.838442",
    bl_longitude: "109.095887",
    tr_longitude: "109.149359",
  },
  headers: {
    "X-RapidAPI-Key": "8937832d6bmsh46d6349fe75bfd6p10087ejsnbd0615929792",
    "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
  },
};

export const getPlaces = async () => {
  try {
    const { data } = await axios.get(URL, options);
    return data.data;
  } catch (error) {
    console.log(error);
  }
}

