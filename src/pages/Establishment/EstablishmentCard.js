import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  useNavigate,
} from "react-router-dom";

export default function EstablishmentCard({
  chosenCity,
  establishmentData,
  setChosenEstablishment,
  chosenEstablishment,
}) {
  const navigate = useNavigate();

  // let { path } = useRouteMatch();

  // console.log(path);
  // const theme = useTheme();

  // console.log(establishmentData.businesses);
  const handleItemClick = (item) => {
    // console.log(item);
    setChosenEstablishment(item);
    navigate(`/${chosenCity}/${item.alias}`);
  };

  // console.log(chosenEstablishment.alias);

  return (
    <>
      {establishmentData.businesses.map((item, idx) => (
        <Link to={`/${chosenCity}/${item.alias}`}>
          <Card
            onClick={() => handleItemClick(item)}
            sx={{ display: "flex", cursor: "pointer" }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component='div' variant='h5'>
                  {item.name}
                </Typography>
                {/* <Typography
                variant='subtitle1'
                color='text.secondary'
                component='div'
              >
                Mac Miller
              </Typography> */}
              </CardContent>
              <Box
                sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
              ></Box>
            </Box>
            <CardMedia
              component='img'
              sx={{ width: 151 }}
              image={
                item.image_url
                  ? item.image_url
                  : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"
              }
              alt={`${item.name}-pic`}
            />
          </Card>
        </Link>
      ))}
    </>
  );
}
