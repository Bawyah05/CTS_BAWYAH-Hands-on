import React from 'react';

function IndianPlayers() {
  const team = ["Virat", "Rohit", "Gill", "Surya", "Hardik", "Jadeja", "Ashwin", "Rahul"];
  const oddTeam = team.filter((_, index) => index % 2 === 0);
  const evenTeam = team.filter((_, index) => index % 2 !== 0);

  const [t20_1, t20_2, ...t20rest] = ["Bumrah", "Shami", "Chahal", "Kuldeep"];
  const [ranji_1, ranji_2, ...ranjirest] = ["Pujara", "Rahane", "Ishant", "Umesh"];

  const mergedTeam = [...t20rest, ...ranjirest];

  return (
    <div>
      <h2>Odd Team Players</h2>
      <ul>
        {oddTeam.map((p, index) => <li key={index}>{p}</li>)}
      </ul>

      <h2>Even Team Players</h2>
      <ul>
        {evenTeam.map((p, index) => <li key={index}>{p}</li>)}
      </ul>

      <h2>Merged Team (T20 + Ranji)</h2>
      <ul>
        {mergedTeam.map((p, index) => <li key={index}>{p}</li>)}
      </ul>
    </div>
  );
}

export default IndianPlayers;
