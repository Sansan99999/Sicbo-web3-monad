import React from "react";

function Leaderboard() {
  const fakeData = [
    { address: "0xAbc...123", amount: "0.05 MON" },
    { address: "0xDef...456", amount: "0.03 MON" },
  ];

  return (
    <div className="bg-gray-700 p-4 rounded">
      <h2 className="text-xl mb-2">🏆 Top Players</h2>
      <ul>
        {fakeData.map((item, i) => (
          <li key={i}>{item.address} - {item.amount}</li>
        ))}
      </ul>
    </div>
  );
}

export default Leaderboard;
