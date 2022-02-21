import React, { useState, useEffect } from "react";
//Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import axios from "axios";
import Establishment from "./pages/Establishment/Establishment";
import Home from "./pages/Home/Home";
import Restaurant from "./pages/Restaurant/Restaurant";

const App = () => {
  const [chosenCity, setChosenCity] = useState(null);
  const [chosenEstablishment, setChosenEstablishment] = useState("");
  const [establishmentData, setEstablishmentData] = useState(null);
  const [restaurantData, setRestaurantData] = useState(null);

  const handleGetEstablishments = async (chosenCity) => {
    await axios
      .get("http://localhost:8800/establishments", {
        params: {
          city: chosenCity,
          type: "restaurants",
          limit: 10,
        },
      })
      .then((response) => {
        if (!response.data) {
          console.error("No data FOUND");
          return;
        }
        setEstablishmentData(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    handleGetEstablishments(chosenCity);
  }, [chosenCity]);

  const handleGetRestaurants = async (chosenEstablishment) => {
    await axios
      .get("http://localhost:8800/restaurants", {
        params: {
          longitude: chosenEstablishment.coordinates.longitude,
          latitude: chosenEstablishment.coordinates.latitude,
        },
      })
      .then((response) => {
        if (!response.data) {
          console.error("No data FOUND");
          return;
        }
        setRestaurantData(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    chosenEstablishment && handleGetRestaurants(chosenEstablishment);
  }, [chosenEstablishment]);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home setChosenCity={setChosenCity} />} />
        <Route
          path='/:city'
          element={
            !establishmentData ? (
              ""
            ) : (
              <Establishment
                chosenCity={chosenCity}
                establishmentData={establishmentData}
                setChosenEstablishment={setChosenEstablishment}
                chosenEstablishment={chosenEstablishment}
              />
            )
          }
        ></Route>
        <Route
          path='/:city/:restaurants/*'
          element={
            !restaurantData ? (
              ""
            ) : (
              <Restaurant
                chosenEstablishment={chosenEstablishment}
                restaurantData={restaurantData}
              />
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
