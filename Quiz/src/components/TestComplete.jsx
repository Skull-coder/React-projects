import React from 'react'
import { CounterContext } from '../context/CounterContext';
import { useContext } from 'react';
import './TestComplete.css'

const TestComplete = () => {

    const { quizQuestions, Correct} = useContext(CounterContext);
  return (
    <>
        <div className="ComplitionBox">
            <h1>You Scored: {Correct}/{quizQuestions.length} </h1>

            <button onClick={() => window.location.reload()}>Reset Quiz</button>
        </div>
    </>
  )
}

export default TestComplete
