// CSS
import './App.css';

// React
import { useCallback, useEffect, useState } from 'react';

// data
import {wordsList} from "./data/words";

// components
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';

const stages = [
  {id: 1, name: "start"},
  {id: 2, name: "game"},
  {id: 3, name: "end"}
];

function App() {
  const [gameStage, setGamestage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  // starts the secret word game
  const startGame = () => {
    setGamestage(stages[1].name);
  }

  // process the letter input
  const verifyLetter = () => {
    setGamestage(stages[2].name);
  }

  // restart the game
  const retry = () => {
    setGamestage(stages[0].name);
  }

  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame}/>}
      {gameStage === "game" && <Game verifyLetter={verifyLetter}/>}
      {gameStage === "end" && <GameOver retry={retry}/>}
    </div>
  )
}

export default App;
