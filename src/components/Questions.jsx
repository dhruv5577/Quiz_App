import QueTimer from "./QueTimer"
import Answers from "./Answers"

export default function Questions({questiontext,answer,onSelectedAnswer,selectedAnswer,answerstate,onSkipper}) {
  return (
    <>
      <div className='question'>
      <QueTimer  timeout={10000} ontimeout={onSkipper}/>
      <h2>{questiontext}</h2>
      <Answers answer={answer} answerstate={answerstate} selectedans={selectedAnswer} onSelect={onSelectedAnswer}/>
    </div>
    </>
  )
}
