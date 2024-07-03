import React from 'react'
import quizcomplete from '../assets/quiz-complete.png'
import QUESTIONS from '../Que.js'

export default function Summary({userAnswers}) {

  const skippedanswer=userAnswers.filter(answer=>answer===null);
  const correctedanswer=userAnswers.filter((ans,ind)=>{
    ans===QUESTIONS[ind].answers[0]
  });
  const skippedanswershare=Math.round((skippedanswer/userAnswers.length)*100);

  const correctanswershare=Math.round((correctedanswer/userAnswers.length)*100);

  const wronganswershare=100-correctanswershare-skippedanswershare;


  return (
    <div id='summary'>
          <img src={quizcomplete} alt='Winning moment' />
          <h2>Quiz Has Been Completed</h2>
          <div id="summary-stats">
            <p>
              <span className='number'>{skippedanswershare}%</span>
              <span className='text'>skipped</span>
            </p>
            <p>
              <span className='number'>{correctanswershare}%</span>
              <span className='text'>answers corectly</span>
            </p>
            <p>
              <span className='number'>{wronganswershare}%</span>
              <span className='text'>answers incorrectly</span>
            </p>

          </div>
          <ol>
            {userAnswers.map((ans,ind)=>{

              let cssclass='user-answer'

              if(ans===null){
                cssclass+=' skipped';
              }
              else if(ans===QUESTIONS[ind].answers[0]){
                cssclass+=' correct';

              }
              else{
                cssclass+=' wrong'
              }


              return (
              <li key={ind}>
                <h3>{ind+1}</h3>
                <p className="questions">{QUESTIONS[ind].text}</p>
                <p className={cssclass}>{ans ?? 'skipped'}</p>
              </li>
              )
            })}
            
          </ol>
    </div>
  )
}
