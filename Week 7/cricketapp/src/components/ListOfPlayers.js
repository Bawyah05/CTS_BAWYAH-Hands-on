import React from 'react';

function ListOfPlayers() {
  const players = [
    { name: "Virat Kohli", score: 85 },
    { name: "Rohit Sharma", score: 92 },
    { name: "Shubman Gill", score: 67 },
    { name: "Suryakumar Yadav", score: 55 },
    { name: "Hardik Pandya", score: 45 },
    { name: "Ravindra Jadeja", score: 70 },
    { name: "R Ashwin", score: 60 },
    { name: "KL Rahul", score: 82 },
    { name: "Shreyas Iyer", score: 90 },
    { name: "Jasprit Bumrah", score: 35 },
    { name: "Mohammed Siraj", score: 25 },
  ];

  const below70 = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map((p, index) => (
          <li key={index}>{p.name} - {p.score}</li>
        ))}
      </ul>

      <h3>Players with score below 70</h3>
      <ul>
        {below70.map((p, index) => (
          <li key={index}>{p.name} - {p.score}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListOfPlayers;
