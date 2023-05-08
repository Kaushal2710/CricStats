import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";

const IplPointsTable = () => {
  const [pointsTable, setPointsTable] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: "https://unofficial-cricbuzz.p.rapidapi.com/series/get-points-table",
        params: { seriesId: "5945" },
        headers: {
          "X-RapidAPI-Key":
            "59cf23befbmsh645164c3f88e859p1590d9jsnf7e6f4a3f71c",
          "X-RapidAPI-Host": "unofficial-cricbuzz.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        setPointsTable(response.data);
        console.log(response.data);
        console.log(response.data.pointsTable[0].pointsTableInfo[0]);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="overflow-hidden w-screen h-screen">
      <Navbar />
      <div className="w-screen h-screen flex items-center justify-center overflow-hidden">
        <table className="overflow-hidden">
          <thead>
            <tr>
              <th>Team</th>
              <th>MP</th>
              <th>W</th>
              <th>L</th>
              <th>NR</th>
              <th>Pts</th>
            </tr>
          </thead>
          <tbody>
            {pointsTable &&
              pointsTable.pointsTable[0].pointsTableInfo &&
              pointsTable.pointsTable[0].pointsTableInfo.map((team) => (
                <tr key={team.teamId}>
                  <td>{team.teamName}</td>
                  <td>{team.matchesPlayed}</td>
                  <td>{team.matchcesWon}</td>
                  <td>{team.matchesLost}</td>
                  <td>{team.points}</td>
                  <td>{team.nrr}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IplPointsTable;
