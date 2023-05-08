import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import PlayerSearch from "./components/PlayerSearch.jsx";
import TeamRankings from "./components/TeamRankings.jsx";
import darkMode from "./components/ModeToggle.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/playersearch",
    element: <PlayerSearch />,
  },
  {
    path: "/iplpointstable",
    element: <TeamRankings />,
  },
]);

//const [darkMode, setDarkMode] = useState(true);

const mode = true;
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className={mode ? "" : "dark"}>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
