import * as React from "react";
import { Link } from "react-router-dom";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function CityCard({ city, setChosenCity }) {
  const handleCardClick = () => {
    // console.log(city.tags);
    setChosenCity(city.tags);
  };

  return (
    <Link to={`/${city.tags}`}>
      {/* // <Link to='/establishments'> */}
      <Card
        sx={{ maxWidth: 345 }}
        onClick={handleCardClick}
        style={{ cursor: "pointer" }}
      >
        <CardMedia
          component='img'
          alt={`${city.name}-img`}
          height='140'
          image={city.image}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {city.name}
          </Typography>
          <Typography variant='body2' color='text.secondary'></Typography>
        </CardContent>
      </Card>
    </Link>
  );
}
