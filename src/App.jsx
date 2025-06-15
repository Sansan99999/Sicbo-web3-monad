import React from 'react';
import BetPanel from './components/BetPanel.jsx';
import DiceAnimation from './components/DiceAnimation.jsx';
import Leaderboard from './components/Leaderboard.jsx';

export default function App() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Sicbo Web3 Monad</h1>
      <BetPanel />
      <DiceAnimation />
      <Leaderboard />
    </div>
  );
}
