import React,{useRef} from 'react'


export default function Answers({answer,selectedans,answerstate,onSelect}) {

  const shuffledans=useRef();

  if(!shuffledans.current){
    shuffledans.current=[...answer];
    shuffledans.current.sort(()=>Math.random()-0.5);
  }

  return (
    <ul id="answers">
        {shuffledans.current.map((ans)=>{
          const isselected=selectedans===ans;
          let cssclasses='';

          if(answerstate==='answered' && isselected){
            cssclasses='selected';
          }

          if((answerstate==='Right')|| (answerstate==='Wrong') && isselected){
            cssclasses=answerstate;
          }


          return <li key={ans} className="answer">
          <button className={cssclasses} onClick={()=>onSelect(ans)}>{ans}</button>
        </li>
        }
          
        )}
      </ul>
  )
}
