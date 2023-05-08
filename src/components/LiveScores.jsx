import React from "react";

const LiveScores = () => {
  return <div>LiveScores</div>;
};

export default LiveScores;

// import React, { Component } from "react";
// import axios from "axios";

// class LiveScores extends Component {
//   state = {
//     liveScores: []
//   };

//   componentDidMount() {
//     axios
//       .get("https://cricapi.com/api/matches?apikey=3f570ff2-e93b-42bf-8329-6eff0ed91154")
//       .then(res => {
//         this.setState({ liveScores: res.data.matches });
//       });
//   }

//   render() {
//     return (
//       <div>
//         <h2>Live Scores</h2>
//         <ul>
//           {this.state.liveScores.map(score => (
//             <li key={score.unique_id}>
//               {score["team-1"]} vs {score["team-2"]} - {score.type}
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

// export default LiveScores;
