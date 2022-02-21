import React, { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import axios from "axios";

const Restaurant = ({ chosenEstablishment, restaurantData }) => {
  // console.log(chosenEstablishment.chosenEstablishment);
  // console.log(chosenEstablishment);
  // console.log(restaurantData.businesses);

  // const handleClick = () => {
  //   console.log(chosenEstablishment);
  //   console.log(restaurantData);
  // };

  const handleUnlikeClick = () => {
    // remove like from DB

    console.log("unliked was clicked");
  };

  const handleLikeClick = (item) => {
    //add like to db
    console.log(item);

    try {
      // create ID inside DB and set it to true
      axios.post("http://localhost:8800/resto/create ", {
        id: item.id,
        name: item.name,
        isLiked: true,
      });
    } catch (err) {
      console.log(err);
    }

    console.log("liked was clicked");
  };

  const checkIsLiked = (item) => {
    console.log(item);
    const isLiked = false;

    return isLiked ? (
      <FavoriteIcon onClick={handleUnlikeClick} />
    ) : (
      <FavoriteBorderIcon onClick={() => handleLikeClick(item)} />
    );
  };

  return (
    <>
      {restaurantData.businesses.map((item, idx) => {
        // check if item ID is in DB

        return (
          <Card sx={{ display: "flex", cursor: "pointer" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component='div' variant='h5'>
                  {item.name}
                </Typography>
                <Typography component='div' variant='h5'>
                  {item.location.address1}
                </Typography>
                <Typography component='div' variant='h5'>
                  {item.location.city}
                </Typography>
                <Typography component='div' variant='h5'>
                  {item.location.state}
                </Typography>

                <Typography component='div' variant='h5'>
                  {/* {item.categories[idx]} */}
                </Typography>

                {/* {console.log(item)} */}
                {/* <Typography
           variant='subtitle1'
           color='text.secondary'
           component='div'
         >
           Mac Miller
         </Typography> */}
              </CardContent>
              <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
                {/* <FavoriteIcon />
                <FavoriteBorderIcon /> */}
                {/* {checkIsLiked} */}
                {checkIsLiked(item)}
              </Box>
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
        );
      })}
    </>
  );
};

export default Restaurant;
