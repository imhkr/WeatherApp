
import CityComp from "./CityComp"

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
