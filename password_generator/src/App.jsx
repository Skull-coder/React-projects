import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faCircleCheck} from '@fortawesome/free-solid-svg-icons';

import "./App.css"


function App() {
  const [password, setPassword] = useState('');
  const [faicon, setIcon] = useState(faCopy);
  const [boxStyle, setBoxStyle] = useState({});


  function passwordGenerator() {
    const capitals = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const smalls = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialChars = '!@#$%^&*()_+-={}[]<>?';

    // Helper function to pick random characters from a string
    const getRandomChars = (str, count) => {
      let result = '';
      for (let i = 0; i < count; i++) {
        result += str[Math.floor(Math.random() * str.length)];
      }
      return result;
    };

    // Sequence as per your requirement:
    const part1 = getRandomChars(capitals, 3);    // 3 capitals
    const part2 = getRandomChars(smalls, 4);      // 4 smalls
    const part3 = getRandomChars(numbers, 2);     // 2 numbers
    const part4 = getRandomChars(specialChars, 1);// 1 special character
    const part5 = getRandomChars(smalls, 3);      // 3 smalls

    // Combine all parts
    const password_generated = part1 + part2 + part3 + part4 + part5;


    return password_generated;
  }
  return (
    <>
      <div className="container">
        <div className="generator">
          <div className="box"
            style={boxStyle}
            onClick={() => {

              if (!password) return;

              navigator.clipboard.writeText(password)

              setIcon(faCircleCheck);
              setBoxStyle({ boxShadow: "0px 0px 10px 4px #a0f2bfff", borderRadius: "8px",} ); 

              

              setTimeout(() => {
                setIcon(faCopy);
                setBoxStyle({}); 
              }, 2000);
            }}>
            <p id="password">{password ? password : "Click on Generate"}</p>
            <FontAwesomeIcon icon={faicon} id='icon' style={{ color: faicon === faCircleCheck ? '#32eb79ff' : 'black', fontSize: '18px', display: password ? 'inline' : 'none' }} />
          </div>
          <button id="btn" onClick={() => setPassword(passwordGenerator())} >Generate</button>
        </div>
      </div>
    </>
  )
}

export default App
