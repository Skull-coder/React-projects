import React from 'react'
import { useContext, useEffect } from "react";
import { CounterContext } from '../context/CounterContext';
import './Questions.css'


const Questions = () => {


    const { setCorrect, question, setQuestion, quizQuestions, setQuizQuestions, selectedOptions, setSelectedOptions } = useContext(CounterContext);





    useEffect(() => {
        const QuizQuestions = [
            {
                "id": 1,
                "question": "What is the capital of France?",
                "options": [
                    { "text": "Paris", "correct": true },
                    { "text": "London", "correct": false },
                    { "text": "Rome", "correct": false },
                    { "text": "Berlin", "correct": false }
                ]
            },
            {
                "id": 2,
                "question": "Which language runs in a web browser?",
                "options": [
                    { "text": "Java", "correct": false },
                    { "text": "C", "correct": false },
                    { "text": "Python", "correct": false },
                    { "text": "JavaScript", "correct": true }
                ]
            },
            {
                "id": 3,
                "question": "Who painted the Mona Lisa?",
                "options": [
                    { "text": "Leonardo da Vinci", "correct": true },
                    { "text": "Pablo Picasso", "correct": false },
                    { "text": "Vincent Van Gogh", "correct": false },
                    { "text": "Michelangelo", "correct": false }
                ]
            },
            {
                "id": 4,
                "question": "What is the smallest prime number?",
                "options": [
                    { "text": "0", "correct": false },
                    { "text": "1", "correct": false },
                    { "text": "2", "correct": true },
                    { "text": "3", "correct": false }
                ]
            },
            {
                "id": 5,
                "question": "Which planet is known as the Red Planet?",
                "options": [
                    { "text": "Earth", "correct": false },
                    { "text": "Mars", "correct": true },
                    { "text": "Jupiter", "correct": false },
                    { "text": "Venus", "correct": false }
                ]
            },
            {
                "id": 6,
                "question": "Who wrote 'Romeo and Juliet'?",
                "options": [
                    { "text": "William Shakespeare", "correct": true },
                    { "text": "Charles Dickens", "correct": false },
                    { "text": "Jane Austen", "correct": false },
                    { "text": "Mark Twain", "correct": false }
                ]
            },
            {
                "id": 7,
                "question": "Which gas do humans need to breathe to survive?",
                "options": [
                    { "text": "Oxygen", "correct": true },
                    { "text": "Carbon Dioxide", "correct": false },
                    { "text": "Nitrogen", "correct": false },
                    { "text": "Helium", "correct": false }
                ]
            },
            {
                "id": 8,
                "question": "What is the chemical symbol for water?",
                "options": [
                    { "text": "O2", "correct": false },
                    { "text": "H2O", "correct": true },
                    { "text": "CO2", "correct": false },
                    { "text": "NaCl", "correct": false }
                ]
            },
            {
                "id": 9,
                "question": "Which country is home to the Great Wall?",
                "options": [
                    { "text": "India", "correct": false },
                    { "text": "China", "correct": true },
                    { "text": "Japan", "correct": false },
                    { "text": "Korea", "correct": false }
                ]
            },
            {
                "id": 10,
                "question": "What is 9 × 9?",
                "options": [
                    { "text": "81", "correct": true },
                    { "text": "72", "correct": false },
                    { "text": "99", "correct": false },
                    { "text": "90", "correct": false }
                ]
            }
        ]



        setQuizQuestions(QuizQuestions);


    }, [setQuizQuestions]);

    if (!quizQuestions.length) return <p>Loading...</p>;


    const currentQuestion = quizQuestions[question];

    const selectedIndex = selectedOptions[question];

    const handleOptionClick = (index) => {
        setSelectedOptions(prev => ({
            ...prev,
            [question]: index
        }));

        if (quizQuestions[question].options[index].correct) {
            setCorrect(prev => prev + 1);
        }

    };



    return (
        <>

            <div className="main">
                <h1>{currentQuestion.question}</h1>

                <div className="options">
                    {currentQuestion.options.map((opt, index) => {
                        let className = 'option';
                        if (selectedIndex !== undefined) {
                            if (opt.correct) {
                                className += ' correct';


                            }
                            else if (index === selectedIndex && !opt.correct) className += ' wrong';

                        }

                        return (
                            <p
                                key={index}
                                className={className}
                                onClick={() => selectedIndex === undefined ? handleOptionClick(index) : ''}
                            >
                                {opt.text}
                            </p>
                        );
                    })}
                </div>



                <div className="buttons">
                    <button onClick={() => { setQuestion((que) => que > 0 ? que - 1 : que) }} style={{
                        background: question === 0 ? 'rgba(0, 14, 86, 0.66)' : ''
                    }}>Previous</button>

                    <button onClick={() => { setQuestion((que) => que < quizQuestions.length - 1 ? que + 1 : que) }} style={{
                        background: question === quizQuestions.length - 1 ? 'rgba(0, 14, 86, 0.66)' : ''
                    }}>Next</button>
                </div>

            </div >

        </>
    )
}

export default Questions
