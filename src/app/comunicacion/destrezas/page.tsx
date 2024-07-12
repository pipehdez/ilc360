'use client'
import { useState } from 'react'
import Quiz from '../components/quiz'
import QuizSlots, { ImageItem } from '../components/quizSlots'

const imagesActivityTwo: ImageItem[] = [
    { id: '1',src: '/img/phone.jpg',name: 'Phone' },
    { id: '2',src: '/img/clock.jpg',name: 'Clock' },
    { id: '3',src: '/img/pen.jpg',name: 'Pen' },
    { id: '4',src: '/img/stapler.jpg',name: 'Stapler' },
]

const imagesActivityOne: ImageItem[] = [
    { id: '1',src: '/img/chair.jpg',name: 'Chair' },
    { id: '2',src: '/img/desk.jpg',name: 'Desk' },
    { id: '3',src: '/img/papers.jpg',name: 'Papers' },
    { id: '4',src: '/img/laptop.jpg',name: 'Laptop' },
]

const imagesActivityThree: ImageItem[] = [
    { id: '1',src: '/img/calendar.jpg',name: 'Chair' },
    { id: '2',src: '/img/trash.jpg',name: 'Desk' },
    { id: '3',src: '/img/printer.jpg',name: 'Papers' },
    { id: '4',src: '/img/scissors.jpg',name: 'Laptop' },
]

export default function Page() {
    const [currentStep,setCurrentStep] = useState(0)
console.log('currentStep',currentStep)
    const handleNextStep = () => {
        console.log('handleNextStep')
        setCurrentStep((prevStep) => prevStep + 1)
    }
    const quizSlots = [0,1,2,3] 
  return (
    <>
          <div className="flex flex-col items-center justify-center  bg-blue-500/10 gap-3 p-5 ">
                <h1 className="text-3xl font-bold">Ejercicio: AUXILIAR DE OFICINA</h1>
                <h2 className="text-2xl font-semibold">Repertorio de palabras que una persona debe manejar</h2>
                {
                  quizSlots.includes(currentStep) && (
                    <div className="flex flex-col items-center justify-center gap-1">
                          <p className="text-lg">Nombra la imagen de cada recuadro y recuerda su ubicación</p>
                          <p className="text-lg">Organiza cada una de las imágenes siguiendo la secuencia</p>
                    </div>
                    )
                }
            </div>
    {
        currentStep === 0 ? 
        (<QuizSlots images={imagesActivityOne} onClick={handleNextStep} />) 
        : currentStep === 1 ? 
        ( <QuizSlots images={imagesActivityTwo} onClick={handleNextStep}/>)
        : currentStep === 2 ? 
        (<QuizSlots images={imagesActivityThree} onClick={handleNextStep}/>)
        : (
            <div className="flex items-center justify-center  bg-blue-500/10 ">
                <h1 className="text-3xl font-bold">¡Felicidades, has completado todas las actividades!</h1>
            </div>
        )
    }
      </>
  )
}