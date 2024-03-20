import React from 'react';
import { useSelector } from 'react-redux';
import Question from './Question';
import Timer from './Timer';
import FeedbackModal from './FeedbackModal';
import ResultModal from './ResultModal';

const Quiz = () => {
    const quiz = useSelector(state => state.quiz);
    const { questions, currentQuestionIndex, isQuizOver } = quiz;

    return (
        <div>
            {isQuizOver ? (
                <ResultModal />
            ) : (
                <div>
                    <h2>Question {currentQuestionIndex + 1} of {questions.length}</h2>
                    <Question />
                    <Timer />
                    <FeedbackModal />
                </div>
            )}
        </div>
    );
};

export default Quiz;
