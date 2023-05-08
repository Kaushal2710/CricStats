import React, { useState } from "react";
// import PlayerSearch from "./components/PlayerSearch.jsx";
// import IplPointsTable from "./components/TeamRankings.jsx";
import Navbar from "./components/Navbar.jsx";
// import bootstrap from "bootstrap/dist/css/bootstrap.css";
// import { BrowserRouter, Router } from "react-router-dom";

import "./index.css";

const App = () => {
  return (
    <div className="App h-screen w-screen overflow-hidden overflow-x-hidden m-0 p-0">
      <Navbar />
      <div>{/* <PlayerSearch /> */}</div>
      <div>{/* <IplPointsTable /> */}</div>
    </div>
  );
};

export default App;
