import React from 'react'
import { useContext } from 'react';
import { CounterContext } from '../context/CounterContext';
import './List.css'

const List = () => {

    const {question, quizQuestions, setQuestion, selectedOptions } = useContext(CounterContext);



    return (
        <>
            <div className="container">
                {quizQuestions.map((q, index) => {
                    let boxClass = "box";

                    // Check if an option was selected for this question
                    if (selectedOptions[index] !== undefined) {
                        const selectedIndex = selectedOptions[index];
                        const isCorrect = q.options[selectedIndex].correct;

                        boxClass += isCorrect ? " correct" : " wrong";
                    }

                    return (
                        <div
                            key={index}
                            className={boxClass}
                            onClick={() => setQuestion(index)}

                            style={{ background: question === index ? ' rgba(169, 169, 169, 0.3)': ''}}
                        >
                            <span>{q.id}</span>
                        </div>
                    );
                })}
            </div>

        </>
    )
}

export default List
