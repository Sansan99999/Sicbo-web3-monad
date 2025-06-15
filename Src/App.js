import React, { useState } from "react";
import { ethers } from "ethers";
import abi from "../abi/Sicbo.json";
import BetPanel from "./components/BetPanel";
import Leaderboard from "./components/Leaderboard";
import DiceAnimation from "./components/DiceAnimation";

const CONTRACT_ADDRESS = "0xb5ae1b76d28e48a6eed2dd9801da9803494b0ece"; // Ganti dengan alamat di Remix

function App() {
  const [result, setResult] = useState(null);

  const handleBet = async (guess, amount) => {
    if (!window.ethereum) return alert("Install MetaMask!");

    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(CONTRACT_ADDRESS, abi, signer);

    try {
      const tx = await contract.rollDice(guess, { value: ethers.parseEther(amount) });
      await tx.wait();
      setResult("Bet placed. Wait for result in event logs.");
    } catch (error) {
      console.error(error);
      setResult("Transaction failed");
    }
  };

  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">🎲 Sicbo Web3 on Monad</h1>
      <BetPanel onBet={handleBet} />
      <DiceAnimation />
      <Leaderboard />
      {result && <p className="mt-4 text-green-400">{result}</p>}
    </div>
  );
}

export default App;
