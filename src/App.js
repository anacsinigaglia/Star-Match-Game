import React, { useState } from 'react';
import Game from './components/Game/Game'
import './App.css';

function App() {
  const [gameId, setGameId] = useState(1); //ajuda a resetar o game

  return (
    <div className="App">
      <Game key={gameId} startNewGame={() => setGameId(gameId + 1)} />
    </div>
  );
}

export default App;
