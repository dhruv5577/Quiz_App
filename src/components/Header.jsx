import React from 'react'
import logoimg from '../assets/quiz-logo.png'

export default function Header() {
  return (
    <header>
      <img src={logoimg} alt="Quiz Logo" />
      <h1>ReactQuiz</h1>
    </header>
  )
}
