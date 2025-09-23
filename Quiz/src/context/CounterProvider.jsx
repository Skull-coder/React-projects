import { useState } from "react";
import { CounterContext } from "./CounterContext";

const CounterProvider = ({ children }) => {
  const [question, setQuestion] = useState(0);
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [Correct, setCorrect] = useState(0)


  return (
    <CounterContext.Provider value={{ question, setQuestion, quizQuestions, setQuizQuestions, selectedOptions, setSelectedOptions, Correct, setCorrect}}>
      {children}
    </CounterContext.Provider>
  );
};

export default CounterProvider;
