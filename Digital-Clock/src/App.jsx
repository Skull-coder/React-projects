import { useState } from 'react'
import React from 'react';

import TimeClock from './components/TimeClock'
import Timer from './components/Timer';
import SetTimer from './components/SetTimer';

import './App.css'

function App() {
  const [mode, setMode] = useState('TimeClock')

  return (
    <>
      <div className="container">

        <div className="Mainapp">
          <div className="swicthModebtn">
            <button onClick={() => setMode('TimeClock')} style={
              {
                border: mode === 'TimeClock' ? '1px solid white' : '',
                boxShadow: mode === 'TimeClock' ? '0px 0px 4px white' : 'none'
              }
            } >CLock</button>
            <button onClick={() => setMode('StopWatch')} style={{
              border: mode === 'StopWatch' ? '1px solid white' : '',
              boxShadow: mode === 'StopWatch' ? '0px 0px 4px white' : 'none'
            }}>StopWatch</button>
            <button onClick={() => setMode('Timer')} style={{
              border: mode === 'Timer' ? '1px solid white' : '',
              boxShadow: mode === 'Timer' ? '0px 0px 4px white' : 'none'
            }}>Timer</button>
          </div>

          {mode === 'TimeClock' && <TimeClock />}
          {mode === 'StopWatch' && <Timer />}
          {mode === 'Timer' && <SetTimer />}
        </div>
      </div>
    </>
  )
}

export default App
