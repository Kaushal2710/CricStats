import React, { useState } from "react";
import axios from "axios";
import PlayerProfile from "./PlayerProfile";
import Navbar from "./Navbar";

const PlayerSearch = () => {
  const [playerID, setplayerID] = useState(null);
  const [playerName, setplayerName] = useState("");

  const handleSubmit = async () => {
    const options = {
      method: "GET",
      url: "https://cricbuzz-cricket.p.rapidapi.com/stats/v1/player/search",
      params: {
        plrN: playerName,
      },
      headers: {
        "content-type": "application/octet-stream",
        "X-RapidAPI-Key": "59cf23befbmsh645164c3f88e859p1590d9jsnf7e6f4a3f71c",
        "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data.player[0].id);
      setplayerID(response.data.player[0].id);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) => {
    setplayerName(event.target.value);
  };

  return (
    <div className="App h-screen w-screen justify-center  items-center overflow-hidden overflow-x-hidden m-0 p-0 dark:bg-neutral-600">
      <Navbar />
      <div className="player-search w-screen flex flex-col justify-center items-center my-10">
        <h1>Search for a player</h1>
        <form action="#" onSubmit={handleSubmit} className="flex w-80 my-6 ">
          <div class="relative mb-4 flex w-full flex-wrap items-stretch">
            {/* <label>
              Player Name: */}
            <input
              type="search"
              className="relative m-0 -mr-0.5 block w-8 min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon3"
              value={playerName}
              onChange={handleChange}
            />
            {/* </label> */}
            <button
              class="relative z-[2] rounded-r border-2 border-primary px-6 py-2 text-xs font-medium uppercase text-primary transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
              type="button"
              id="button-addon3"
              data-te-ripple-init
            >
              Search
            </button>
          </div>
        </form>
        <PlayerProfile playerID={playerID} />
      </div>
    </div>
  );
};

export default PlayerSearch;
