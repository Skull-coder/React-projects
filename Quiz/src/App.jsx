import React from 'react'
import CounterProvider from "./context/CounterProvider";
import Questions from "./components/Questions";
import List from './components/List';
import TestComplete from './components/TestComplete';
import { CounterContext } from './context/CounterContext';
import './App.css'

function App() {
  return (
    <CounterProvider>
      <InnerApp />
    </CounterProvider>
  )
}

// Now we can safely use useContext inside a child of CounterProvider
const InnerApp = () => {
  const { quizQuestions, selectedOptions } = React.useContext(CounterContext);

  return (
    <div className="Appcontainer">
      <div className="app">
        <Questions />
        <List />
        {quizQuestions.length === Object.keys(selectedOptions).length && <TestComplete />}
      </div>
    </div>
  )
}

export default App
