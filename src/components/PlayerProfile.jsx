import React, { useState, useEffect } from "react";
import axios from "axios";

const PlayerStats = ({ playerID }) => {
  const [playerData, setPlayerData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url:
          "https://cricbuzz-cricket.p.rapidapi.com/stats/v1/player/" + playerID,
        headers: {
          "content-type": "application/octet-stream",
          "X-RapidAPI-Key":
            "59cf23befbmsh645164c3f88e859p1590d9jsnf7e6f4a3f71c",
          "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        setPlayerData(response.data);
        console.log("response", response);
      } catch (error) {
        console.error(error);
      }
    };

    playerID !== null ? fetchData() : null;
  }, [playerID]);

  return (
    <div className="player-stats">
      {playerData ? (
        <div>
          <h2>{playerData.name}</h2>
          <p>Full Name: {playerData.name}</p>
          <p>Born: {playerData.DoB}</p>
          <p>Major Teams: {playerData.teams}</p>
          <p>Playing Role: {playerData.role}</p>
          <p>Batting Style: {playerData.bat}</p>
          <p>Bowling Style: {playerData.bowl}</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default PlayerStats;
