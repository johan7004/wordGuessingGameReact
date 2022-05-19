import logo from "./logo.svg";
import { useState } from "react";
import PlayerInput from "./components/player/PlayerInput";
import "./App.css";

function App() {
  const [playerOneInput, setPlayerOneInput] = useState("");
  const [playerTwoInput, setPlayerTwoInput] = useState("");
  function playerInput1(e) {
    e.preventDefault();
    const inputValue = e.target;
    setPlayerOneInput(inputValue.player1.value);
  }

  function playerInput2(e) {
    e.preventDefault();
    const inputValue = e.target;
    setPlayerTwoInput(inputValue.player2.value);
  }
  return (
    <div className="App">
      <div className="App-header">
        <div className="player1-input__container">
          <p>Player 1</p>
          <form onSubmit={playerInput1}>
            <input name="player1" placeholder="Enter the Word"></input>
            <button type="submit">Submit</button>
          </form>
        </div>

        <img src={logo} className="App-logo" alt="logo" />
        <div className="player2-input__container">
          <p>Player 2</p>
          <PlayerInput
            playerOneWord={playerOneInput}
            playerTwoWord={playerTwoInput}
          />
          <form onSubmit={playerInput2}>
            <input name="player2" placeholder="Guess The Word"></input>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
