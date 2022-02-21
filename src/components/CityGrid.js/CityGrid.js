import * as React from "react";
import Grid from "@mui/material/Grid";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import Paper from "@mui/material/Paper";
import CityCard from "./CityCard";

export default function CityGrid({ setChosenCity }) {
  const cities = [
    {
      name: "San Francisco",
      image:
        "https://a.cdn-hotels.com/gdcs/production92/d1580/9a28fc70-9bea-11e8-a1b5-0242ac110053.jpg",
      tags: "san-francisco",
    },
    {
      name: "Los Angeles",
      image:
        "https://a.cdn-hotels.com/gdcs/production65/d1094/007d42a5-84e4-418e-a07d-a020fe670a43.jpg",
      tags: "los-angeles",
    },
    {
      name: "New York",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg",
      tags: "new-york",
    },
    {
      name: "Japan",
      image:
        "https://www.state.gov/wp-content/uploads/2019/04/Japan-2107x1406.jpg",
      tags: "japan",
    },
    {
      name: "France",
      image:
        "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg",
      tags: "france",
    },
  ];

  const [spacing, setSpacing] = React.useState(2);

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  const jsx = `
<Grid container spacing={${spacing}}>
`;

  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent='center' spacing={spacing}>
          {/* {[0, 1, 2, 3, 4].map((value) => (
            <Grid key={value} item>
              <Paper
                sx={{
                  height: 500,
                  width: 400,
                  backgroundColor: (theme) =>
                    theme.palette.mode === "dark" ? "#1A2027" : "#1A2027",
                }}
              />
            </Grid>
          ))} */}

          {cities.map((city, index) => {
            return (
              <Grid key={city.name}>
                <CityCard city={city} setChosenCity={setChosenCity} />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
}
