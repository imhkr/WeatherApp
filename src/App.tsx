import axios from "axios";
import { useState } from "react";
import CityComp from "./CityComp"
import WeatherIn from "./WeatherIn";

// import React, { Dispatch, useState, SetStateAction, Fragment } from "react";
interface Props {
}

const App: React.FC<Props> = (props) => {
  return (
    <div className="flex justify-center">
      {/* <WeatherIn /> */}
      <CityComp />
    </div >
  );
}

export default App;
