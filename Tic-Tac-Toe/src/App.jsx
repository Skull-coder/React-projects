import { useState, useRef } from 'react'

import './App.css'

function App() {
  const [player, setPlayer] = useState('X')
  const [winner, setWinner] = useState("");

  const movesRef = useRef(["", "", "", "", "", "", "", "", ""]);

  const move_number = useRef(0);

  const handleClick = (e) => {
    const target = e.target;

    if (winner) return;

    console.log(target.tagName.toLowerCase());

    if (target.className === "box") {
      const isEmpty = target.textContent.trim() === "";

      if (isEmpty) {
        target.innerHTML = player;

        movesRef.current[parseInt(target.id, 10)] = player;
        move_number.current += 1;

        if (isWon()) {
          setWinner(player);  // store winner in state


        } else {
          setPlayer(player === 'X' ? 'O' : 'X');
        }


        console.log(movesRef);
      }

    }
  };

  const resetGame = () => {
    setPlayer('X');
    setWinner('');
    move_number.current = 0;
    movesRef.current = ["", "", "", "", "", "", "", "", ""]

    const boxes = document.querySelectorAll(".box");
    boxes.forEach(box => box.innerHTML = "");
  }

  function isDraw(){
    if(move_number.current === 9){
      return true;
    }
    return false
  }

  

  function isWon() {
    const moves = movesRef.current;

    if (moves[0] !== "" && moves[0] === moves[1] && moves[1] === moves[2]) {
      // alert(`Player ${moves[0]} has won the game!`);
      return true;
    }
    else if (moves[3] !== "" && moves[3] === moves[4] && moves[4] === moves[5]) {
      // alert(`Player ${moves[3]} has won the game!`);
      return true;
    }
    else if (moves[6] !== "" && moves[6] === moves[7] && moves[7] === moves[8]) {
      // alert(`Player ${moves[6]} has won the game!`);
      return true;
    }
    else if (moves[0] !== "" && moves[0] === moves[3] && moves[3] === moves[6]) {
      // alert(`Player ${moves[0]} has won the game!`);
      return true;
    }
    else if (moves[1] !== "" && moves[1] === moves[4] && moves[4] === moves[7]) {
      // alert(`Player ${moves[1]} has won the game!`);
      return true;
    }
    else if (moves[2] !== "" && moves[2] === moves[5] && moves[5] === moves[8]) {
      // alert(`Player ${moves[2]} has won the game!`);
      return true;
    }
    else if (moves[0] !== "" && moves[0] === moves[4] && moves[4] === moves[8]) {
      // alert(`Player ${moves[0]} has won the game!`);
      return true;
    }
    else if (moves[2] !== "" && moves[2] === moves[4] && moves[4] === moves[6]) {
      // alert(`Player ${moves[2]} has won the game!`);
      return true;
    }

    // If no condition matches
    return false;
  }





  return (
    <>
      <div className="container" >

        <h1>Tic-Tac-Toe</h1>
        <div className="app">
          <p><b> {!winner ? isDraw() ? `Draw!` : `Next Move ${player}` : `${player} Won`}</b></p>

          <div className="board" onClick={handleClick}>

            <div className="box" id='0'></div>
            <div className="box" id='1'></div>
            <div className="box" id='2'></div>
            <div className="box" id='3'></div>
            <div className="box" id='4'></div>
            <div className="box" id='5'></div>
            <div className="box" id='6'></div>
            <div className="box" id='7'></div>
            <div className="box" id='8'></div>


          </div>

        </div>

        <button id='btn' onClick={resetGame} style={{display: winner? 'flex' : isDraw() ? 'flex' : 'none'}}>Reset the game</button>

      </div>
    </>
  )
}

export default App
