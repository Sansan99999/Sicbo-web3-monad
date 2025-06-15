import React, { useState } from "react";

function BetPanel({ onBet }) {
  const [guess, setGuess] = useState(10);
  const [amount, setAmount] = useState("0.01");

  const handleClick = () => {
    if (guess < 3 || guess > 18) return alert("Guess must be 3 to 18");
    onBet(guess, amount);
  };

  return (
    <div className="bg-gray-800 p-4 rounded mb-4">
      <label className="block mb-2">Your Guess (3-18):</label>
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(Number(e.target.value))}
        className="w-full mb-2 text-black p-2 rounded"
      />
      <label className="block mb-2">Bet Amount (MON):</label>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full mb-4 text-black p-2 rounded"
      />
      <button onClick={handleClick} className="bg-blue-500 px-4 py-2 rounded">
        Roll Dice
      </button>
    </div>
  );
}

export default BetPanel;
