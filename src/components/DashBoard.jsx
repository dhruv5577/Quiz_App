import React, { useCallback, useRef, useState } from 'react'
import QUESTIONS from '../Que.js'
import quizcomplete from '../assets/quiz-complete.png'
import QueTimer from './QueTimer.jsx';

export default function DashBoard() {
  
  const shuffledans=useRef();
  const [answerstate,setAnswerstate]=useState('');
  const [answers,setAnswers]=useState([]);
  const activeindQue=answerstate===''? answers.length:answers.length-1;

  const handleselectbutton=useCallback(function handleselectbutton(selectedans){
    setAnswerstate('answered');
    setAnswers((prevans)=>{
      return [...prevans,selectedans];
    });


    setTimeout(()=>{
      if(selectedans===QUESTIONS[activeindQue].answers[0]){
        setAnswerstate('Right');
      }
      else{
        setAnswerstate('Wrong');
      }

      setTimeout(()=>{
        setAnswerstate('');
      })
    },1000)


  },[activeindQue]);

  
  const isquizcomplete=activeindQue===QUESTIONS.length;

  if(isquizcomplete){
    return (
      <div id='summary'>
        <img src={quizcomplete} alt='Winning moment' />
        <h2>Quiz Has Been Completed</h2>
      </div>
    )

  }

  if(!shuffledans.current){
    shuffledans.current=[...QUESTIONS[activeindQue].answers];
    shuffledans.current.sort(()=>Math.random()-0.5);
  }
 

  const handleskipper=useCallback(()=>handleselectbutton(null),[handleselectbutton])

  
  return (
    <div id="quiz">
    <div className='question'>
      <QueTimer key={activeindQue} timeout={10000} ontimeout={handleskipper}/>
      <h2>{QUESTIONS[activeindQue].text}</h2>
      <ul id="answers">
        {shuffledans.current.map((ans)=>{
          const isselected=answers[answers.length-1]===ans;
          let cssclasses='';

          if(answerstate==='answered' && isselected){
            cssclasses='selected';
          }

          if((answerstate==='Right')|| (answerstate==='Wrong') && isselected){
            cssclasses=answerstate;
          }


          return <li key={ans} className="answer">
          <button className={cssclasses} onClick={()=>handleselectbutton(ans)}>{ans}</button>
        </li>
        }
          
        )}
      </ul>
    </div>
    </div>
  )
}
