import React, { useCallback, useState } from 'react'
import QUESTIONS from '../Que.js'

// import QueTimer from './QueTimer.jsx';
// import Answers from './Answers.jsx';
import Questions from './Questions.jsx';
import Summary from './Summary.jsx';

export default function DashBoard() {
  const [answerstate, setAnswerstate] = useState('');
  const [answers, setAnswers] = useState([]);
  const activeindQue = answerstate === '' ? answers.length : answers.length - 1;

  const handleselectbutton = useCallback(function handleselectbutton(selectedans) {
    setAnswerstate('answered');
    setAnswers((prevans) => {
      return [...prevans, selectedans];
    });

    setTimeout(() => {
      if (selectedans === QUESTIONS[activeindQue].answers[0]) {
        setAnswerstate('Right');
      } else {
        setAnswerstate('Wrong');
      }

      setTimeout(() => {
        setAnswerstate('');
      }, 1000);
    }, 1000);
  }, [activeindQue]);

  const handleskipper = useCallback(() => handleselectbutton(null), [handleselectbutton]);

  const isquizcomplete = activeindQue === QUESTIONS.length;

  return (
    <div id="quiz">
      {isquizcomplete ? (
        <Summary userAnswers={answers}/>
      ) : (
        <Questions
          key={activeindQue}
          questiontext={QUESTIONS[activeindQue].text}
          answer={QUESTIONS[activeindQue].answers}
          onSelectedAnswer={handleselectbutton}
          onSkipper={handleskipper}
          answerstate={answerstate}
          selectedAnswer={answers[answers.length - 1]}
        />
      )}
    </div>
  );
}
