import React from "react";
import CityGrid from "../../components/CityGrid.js/CityGrid";
const Home = ({ setChosenCity }) => {
  return (
    <div>
      <CityGrid setChosenCity={setChosenCity} />
    </div>
  );
};

export default Home;
