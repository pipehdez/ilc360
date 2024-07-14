'use client'
import React,{ useState } from 'react'
import Image from 'next/image'
import Congrats from './congrats'

interface Activity {
    id: string
    image: string
    words: string[]
    correctSentence: string
}

const activities: Activity[] = [
    {
        id: '1',
        image: '/img/ACTIVIDAD1.jpg',
        words: ['Teléfono','El','Suena'],
        correctSentence: 'El teléfono suena',
    },
    {
        id: '2',
        image: '/img/ACTIVIDAD2.jpg',
        words: ['Están','Compañeros','Los','En', 'Reunión'],
        correctSentence: 'Los compañeros están en reunión',
    },
    {
        id: '3',
        image: '/img/ACTIVIDAD3.jpg',
        words: ['Jefe','Explica','Mi','Tareas','Las'],
        correctSentence: 'Mi jefe explica las tareas',
    },
    {
        id: '4',
        image: '/img/ACTIVIDAD4.jpg',
        words: ['Puerta', 'La', 'Cierre'],
        correctSentence: 'Cierre la puerta',
    }
]

const SentenceQuiz: React.FC = () => {
    const [currentActivityIndex,setCurrentActivityIndex] = useState(0)
    const [selectedWords,setSelectedWords] = useState<string[]>([])
    const [isAnswerCorrect,setIsAnswerCorrect] = useState<boolean | null>(null)

    const currentActivity = activities[currentActivityIndex]

    const handleWordClick = (word: string) => {
        setSelectedWords((prevSelectedWords) => [...prevSelectedWords,word])
    }

    const handleReset = () => {
        setSelectedWords([])
        setIsAnswerCorrect(null)
    }

    const handleValidate = () => {
        const formedSentence = selectedWords.join(' ')
        setIsAnswerCorrect(formedSentence.toLocaleLowerCase() === currentActivity.correctSentence.toLocaleLowerCase())
    }

    const handleNextActivity = () => {
        if (currentActivityIndex < activities.length - 1) {
            setCurrentActivityIndex((prevIndex) => prevIndex + 1)
            handleReset()
        } else {
            setCurrentActivityIndex(5)
        }
    }
    if (currentActivityIndex === 5) {
        return <Congrats />
    }

    return (
        <div className="bg-white shadow-lg rounded-lg items-center p-8 mx-auto  mb-10 max-w-screen-2xl">
            <div className="mb-4">
                <Image src={currentActivity.image} alt="Actividad" width={600} height={400} className="border-4 border-green-500" />
            </div>
            <div className="flex flex-wrap gap-4 mb-8">
                {currentActivity.words.map((word,index) => (
                    <button
                        key={index}
                        onClick={() => handleWordClick(word)}
                        className={`px-4 py-2 border-2 ${selectedWords.includes(word) ? 'border-blue-500' : 'border-gray-300'}`}
                        disabled={selectedWords.includes(word)}
                    >
                        {word}
                    </button>
                ))}
            </div>
            <div className="mb-4">
                <p className="text-lg">Frase formada:</p>
                <div className="p-4 border-2 border-gray-300">
                    {selectedWords.join(' ')}
                </div>
            </div>
            {isAnswerCorrect !== null && (
                <div className={`mt-4 p-4 ${isAnswerCorrect ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
                    {isAnswerCorrect ? 'Correcto!' : 'Incorrecto, intenta nuevamente.'}
                </div>
            )}
            <div className="mt-4">
                <button onClick={handleValidate} className="bg-green-500 text-white px-4 py-2 rounded mr-4">Validar</button>
                <button onClick={handleReset} className="bg-blue-500 text-white px-4 py-2 rounded mr-4">Reiniciar</button>
                {
                    isAnswerCorrect && (
                        <button onClick={handleNextActivity} className="bg-green-500 text-white px-4 py-2 rounded mr-4">Siguiente</button>
                    )
                }
                {/* <button onClick={handleNextActivity} className="bg-gray-500 text-white px-4 py-2 rounded">Siguiente</button> */}
             
            </div>
        </div>
    )
}

export default SentenceQuiz
