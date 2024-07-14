'use client';

import { useState } from 'react'
import AgilityQuiz from '../../components/AgilityQuiz'
import Congrats from '../../components/congrats'
import SentenceQuiz from '../../components/SentenceQuiz'
import GreetingQuiz from '../../components/GreetingQuiz'
import MatchingQuiz from '../../components/MatchingQuiz'

export default function Page() {
  const [currentStep,setCurrentStep] = useState(0)

  const handleNextStep = () => {
    console.log("handleNextStep")
    setCurrentStep((prevStep) => prevStep + 1)
  };
  const quizSlots = [0,1,2]
  return (
    <>
    {
        quizSlots.includes(currentStep) && (

      <div className="bg-white shadow-lg rounded-lg items-center p-8 mx-auto  mb-10 max-w-screen-2xl">
            <h1 className="text-4xl font-bold mb-2">Competencias sociolingüísticas</h1>
            <h2 className="text-2xl font-semibold mb-4">De acuerdo a las imágenes y situaciones presentadas a continuación selecciona la opción correcta en cada pregunta</h2>
      </div>
        )
    }
    {/* <GreetingQuiz /> */}
      <MatchingQuiz />
      
    </>
  )
}