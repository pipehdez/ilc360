'use client'

import { useState } from 'react'

import MatchingQuiz from '../../components/MatchingQuiz'
import Spacing from '../../components/spacing'
import DistanceQuiz from '../../components/DistanceQuiz'
import Congrats from '../../components/congrats'
import BrushRequestQuiz from '../../components/BrushRequestQuiz'

export default function Page() {
  const [currentStep,setCurrentStep] = useState(0)

  const handleNextStep = () => {
    console.log("handleNextStep")
    setCurrentStep((prevStep) => prevStep + 1)
  }
  const quizSlots = [0]
  return (
    <>
      <Spacing />
      {
        quizSlots.includes(currentStep) && (

          <div className="bg-white shadow-lg rounded-lg items-center p-8 mx-auto  mb-10 max-w-screen-2xl">
            <h1 className="text-4xl font-bold mb-2">Competencias sociolingüísticas</h1>

            <h2 className="text-2xl font-semibold mb-4">Habilidad de utilizar el lenguaje de manera efectiva en diferentes contextos comunicativos y sociales, el desarrollo de estas competencias permite a las personas comunicarse de manera más eficiente y respetuosa, facilitando así la comprensión mutua y la cohesión social.
              La competencia comunicativa es la habilidad de comunicar bien, de ser entendido y entender a los demás, de saber estructurar este proceso para establecer las relaciones sociales con sus semejantes, donde se integran la correcta escucha, lectura, y expresión oral y escrita.</h2>

            <p>De acuerdo a las imágenes y situaciones presentadas a continuación selecciona la opción correcta en cada pregunta</p>
          </div>
        )
      }
      {/* <GreetingQuiz /> */}
      {/* <MatchingQuiz /> */}
      {
        currentStep === 0 ? (
          <DistanceQuiz onCLick={handleNextStep} />
        ) : currentStep === 1 ? (<BrushRequestQuiz onCLick={handleNextStep} />)
        :
        (
          <Congrats />
        )
      }


    </>
  )
}