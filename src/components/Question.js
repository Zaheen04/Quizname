import React from 'react';
import { useSelector } from 'react-redux';

const Question = () => {
    const quiz = useSelector(state => state.quiz);
    const { questions, currentQuestionIndex } = quiz;
    const currentQuestion = questions[currentQuestionIndex];

    return (
        <div>
            <h3>{currentQuestion.question}</h3>
            <ul>
                {currentQuestion.options.map((option, index) => (
                    <li key={index}>{option}</li>
                ))}
            </ul>
        </div>
    );
};

export default Question;
