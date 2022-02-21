import React, { useState, useEffect } from "react";
import EstablishmentCard from "./EstablishmentCard";
const Establishment = ({
  chosenCity,
  establishmentData,
  setChosenEstablishment,
  chosenEstablishment,
}) => {
  return (
    <div>
      <EstablishmentCard
        establishmentData={establishmentData}
        setChosenEstablishment={setChosenEstablishment}
        chosenCity={chosenCity}
        chosenEstablishment={chosenEstablishment}
      />
    </div>
  );
};

export default Establishment;
