import { useState } from "react";
import './App.css'


function App() {

  let cards = [
    { name: "Pikachu" },
    { name: "Charmander" },
    { name: "Bulbasaur" },
    { name: "Squirtle" },
    { name: "Eevee" },
    { name: "Jigglypuff" },
    { name: "Meowth" },
    { name: "Snorlax" },
    { name: "Gengar" },
    { name: "Mewtwo" }
  ];

  const [shuffledCards, setShuffledCards] = useState(cards)
  const [playerScore, setPlayerScore] = useState(0);
  const [highestScore, setHighestScore] = useState(0);

  const [clicked, setClicked] = useState([]);

  function shuffling() {
    let newOrder = [...cards].sort(() => Math.random() - 0.5);

    setShuffledCards(newOrder);
  }

  const handleClick = async (name) => {
    if (!clicked.includes(name)) {
      
      setClicked([...clicked, name]);
      
      setPlayerScore((prevScore) => {
        const newScore = prevScore + 1;
        if (newScore > highestScore) {
          setHighestScore(newScore);
        }
        return newScore;
      });

    }
    else {
      setClicked([]);
      setPlayerScore(0);
    }
  }




  return (
    <>

      <div className="app">
        <div className="scoreBoard">
          <p>{`Your Score:${playerScore} High Score:${highestScore}`}</p>
        </div>

        <div className="container">
          {shuffledCards.map(card => (
            <div className="card" key={card.name} onClick={() => { shuffling(); handleClick(card.name); }}>
              <img
                src={`/${card.name}.png`}
                alt={card.name}
                className="card-img"
              />
              <h3>{card.name}</h3>
            </div>



          ))}
        </div>
      </div>

    </>

  )
}

export default App
