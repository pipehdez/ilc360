'use client';

import { useState } from 'react'
import AgilityQuiz from '../../components/AgilityQuiz'


interface Option {
  id: string
  word: string
  isCorrect: boolean
  src: string
}

interface Question {
  id: string
  category: string
  options: Option[]
}

const questionsOne: Question[] = [
  {
    id: '1',
    category: 'Aparatos eléctricos',
    options: [
      { id: '1',word: 'Botas',isCorrect: false, src:'/img/botas.jpg' },
      { id: '2',word: 'Teléfono',isCorrect: true,src: '/img/telefono-fijo.jpg' },
      { id: '3',word: 'Casa',isCorrect: false,src: '/img/casa.jpg' },
      { id: '4',word: 'Guitarra',isCorrect: false,src: '/img/guitarra.jpg' },
      { id: '5',word: 'Computador',isCorrect: true,src: '/img/pc.jpg' },
      { id: '6',word: 'Cama',isCorrect: false,src: '/img/cama.jpg' },
      { id: '7',word: 'Silla',isCorrect: false,src: '/img/silla.jpg' },
      { id: '8',word: 'Gafas',isCorrect: false,src: '/img/gafas.jpg' },
    ],
  },
]

const questionsTwo: Question[] = [
  {
    id: '2',
    category: 'Utensilios de cocina',
    options: [
      { id: '1',word: 'Toallas',isCorrect: false,src: '/img/TOALLAS.jpg' },
      { id: '2',word: 'Rallador',isCorrect: true,src: '/img/RALLADOR.jpg' },
      { id: '3',word: 'Lapíz',isCorrect: false,src: '/img/LAPIZ.jpg' },
      { id: '4',word: 'Cartera',isCorrect: false,src: '/img/CARTERA.jpg' },
      { id: '5',word: 'Anillo',isCorrect: false,src: '/img/ANILLO.jpg' },
      { id: '6',word: 'Zapatos',isCorrect: false,src: '/img/ZAPATOS.jpg' },
      { id: '7',word: 'Cuchillo',isCorrect: true,src: '/img/cuchillo-2.jpg' },
      { id: '8',word: 'Tambor',isCorrect: false,src: '/img/TAMBOR.jpg' },
      { id: '9',word: 'Puerta',isCorrect: false,src: '/img/PUERTA.jpg' },
      { id: '10',word: 'Reloj',isCorrect: false,src: '/img/RELOJ.jpg' },
      { id: '11',word: 'Plancha',isCorrect: false,src: '/img/PLANCHA.jpg' },
      { id: '12',word: 'Sartén',isCorrect: true,src: '/img/SARTEN.jpg' },
    ],
  },
]

export default function Page() {
  const [currentStep,setCurrentStep] = useState(0)

  const handleNextStep = () => {
    console.log("handleNextStep")
    setCurrentStep((prevStep) => prevStep + 1)
  };
  return (
    <>
      <div className="bg-white shadow-lg rounded-lg items-center p-8 mx-auto  mb-10 max-w-screen-2xl">
        <h1 className="text-4xl font-bold mb-2">AGILIDAD</h1>
        <h2 className="text-2xl font-semibold mb-4">La rapidez con la que una persona puede entender y responder o actuar según la información que recibe.</h2>
        <p className="text-lg mb-2">Elige las palabras de acuerdo a la categoría semántica dada.</p>
      </div>
    {
      currentStep === 0 ? (
          <AgilityQuiz questions={questionsOne} onClick={handleNextStep} />
      ) : currentStep === 1 ? (
            <AgilityQuiz questions={questionsTwo} onClick={handleNextStep} />
      ) : currentStep === 2 ? (
        <h1>Step 3</h1>
      ) : currentStep === 3 ? (
        <h1>Step 4</h1>
      ) : currentStep === 4 ? (
        <h1>Step 5</h1>
      ) : (
        <h1>Congrats</h1>
      )
    }
      
    </>
  )
}