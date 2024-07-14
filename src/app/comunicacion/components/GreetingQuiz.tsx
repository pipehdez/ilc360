import React,{ useState } from 'react'
import Image from 'next/image'

interface Option {
    id: string
    text: string
    isCorrect: boolean
}

interface Question {
    id: string
    image: string
    prompt: string
    options: Option[]
}

const questions: Question[] = [
    {
        id: '1',
        image: '/IMG/SALUDO.jpg',
        prompt: '¿Cómo saludarías a un compañero considerando la hora del día?',
        options: [
            { id: '1',text: 'Hola, buenas noches',isCorrect: false },
            { id: '2',text: 'Hola, buenos días',isCorrect: true },
            { id: '3',text: 'Hola, buenas tardes',isCorrect: false },
        ],
    },
]

const GreetingQuiz: React.FC = () => {
    const [currentQuestionIndex,setCurrentQuestionIndex] = useState(0)
    const [selectedOption,setSelectedOption] = useState<string | null>(null)
    const [isAnswerCorrect,setIsAnswerCorrect] = useState<boolean | null>(null)

    const currentQuestion = questions[currentQuestionIndex]

    const handleOptionClick = (optionId: string,isCorrect: boolean) => {
        setSelectedOption(optionId)
        setIsAnswerCorrect(isCorrect)
    }

    const resetQuiz = () => {
        setSelectedOption(null)
        setIsAnswerCorrect(null)
    }

    return (
        <div className="p-8">
            <header className="mb-8">
                <h1 className="text-4xl font-bold mb-2">Saludos según la hora del día</h1>
                <h2 className="text-2xl font-semibold mb-4">De acuerdo a las imágenes y situaciones presentadas a continuación selecciona la opción correcta en cada pregunta</h2>
            </header>
            <div className="mb-4">
                <Image src={currentQuestion.image} alt="Situación" width={600} height={400} className="border-4 border-green-500" />
            </div>
            <div className="mb-4">
                <h3 className="text-xl font-bold">{currentQuestion.prompt}</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {currentQuestion.options.map((option) => (
                    <div
                        key={option.id}
                        className={`cursor-pointer p-4 border-2 ${selectedOption === option.id ? (option.isCorrect ? 'border-green-500' : 'border-red-500') : 'border-gray-300'
                            }`}
                        onClick={() => handleOptionClick(option.id,option.isCorrect)}
                    >
                        {option.text}
                    </div>
                ))}
            </div>
            {isAnswerCorrect !== null && (
                <div className={`mt-4 p-4 ${isAnswerCorrect ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
                    {isAnswerCorrect ? 'Correcto!' : 'Incorrecto, intenta nuevamente.'}
                </div>
            )}
            <div className="mt-4">
                <button onClick={resetQuiz} className="bg-blue-500 text-white px-4 py-2 rounded">Reiniciar</button>
            </div>
        </div>
    )
}

export default GreetingQuiz
