import React, { useCallback, useEffect, useState } from 'react'

export default function QueTimer({timeout,ontimeout}) {

  const[remaingTime,setRemaingTime]=useState(timeout);

  useEffect(()=>{
    const timer=setTimeout(ontimeout,timeout);

    return ()=>{
      clearTimeout(timer)
    }
  },[timeout,ontimeout])
  

  useEffect(()=>{
    const interval=setInterval(()=>{
      setRemaingTime(prev=>prev-100)
    },100);

    return ()=>{
      clearInterval(interval);
    }
  },[])

  

  return (
    <progress id='question-time' max={timeout} value={remaingTime}/>
  )
}
