'use client'
import React,{ useState } from 'react'
import Image from 'next/image'
import { DndProvider,useDrag,useDrop } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

interface Option {
    id: string
    text: string
    category: string
}

interface Question {
    id: string
    image: string
    prompt: string
    categories: string[]
    options: Option[]
}

const questions: Question[] = [
    {
        id: '1',
        image: '/img/SALUDO.jpg',
        prompt: '¿Cómo saludarías a un compañero considerando la hora del día?',
        categories: ['Mañana','Tarde','Noche'],
        options: [
            { id: '1',text: 'Hola, buenos días',category: 'Mañana' },
            { id: '2',text: 'Hola, buenas tardes',category: 'Tarde' },
            { id: '3',text: 'Hola, buenas noches',category: 'Noche' },
        ],
    },
]

const MatchingQuiz: React.FC = () => {
    const [answers,setAnswers] = useState<{ [key: string]: string }>({})
    const [isAnswerCorrect,setIsAnswerCorrect] = useState<boolean | null>(null)
    const ref = React.useRef<HTMLDivElement>(null)

    const currentQuestion = questions[0]

    const [{ isOver },drop] = useDrop({
        accept: 'option',
        drop: (item: Option,monitor) => {
            const category = monitor.getItem().category
            setAnswers((prevAnswers) => ({
                ...prevAnswers,
                [category]: item.text,
            }))
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        }),
    })

    const validateAnswers = () => {
        const correct = currentQuestion.options.every(
            (option) => answers[option.category] === option.text
        )
        setIsAnswerCorrect(correct)
    }

    const resetQuiz = () => {
        setAnswers({})
        setIsAnswerCorrect(null)
    }

    return (
        <DndProvider backend={HTML5Backend}>
            <div className="p-8">
                <header className="mb-8">
                    <h1 className="text-4xl font-bold mb-2">Unir Palabras</h1>
                    <h2 className="text-2xl font-semibold mb-4">
                        De acuerdo a las imágenes y situaciones presentadas a continuación selecciona la opción correcta en cada pregunta
                    </h2>
                </header>
                <div className="mb-4">
                    <Image src={currentQuestion.image} alt="Situación" width={600} height={400} className="border-4 border-green-500" />
                </div>
                <div className="mb-4">
                    <h3 className="text-xl font-bold">{currentQuestion.prompt}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    {currentQuestion.categories.map((category) => (
                        <div key={category} className="flex flex-col items-center">
                            <div className="p-4 border-2 border-gray-300 mb-2">{category}</div>
                            <div
                                ref={drop}
                                className={`p-4 border-2 ${isOver ? 'border-blue-500' : 'border-gray-300'} min-h-[50px]`}
                            >
                                {answers[category] || 'Suelta aquí'}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex flex-wrap gap-4 mb-8">
                    {currentQuestion.options.map((option) => (
                        <DraggableOption key={option.id} option={option} />
                    ))}
                </div>
                {isAnswerCorrect !== null && (
                    <div className={`mt-4 p-4 ${isAnswerCorrect ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
                        {isAnswerCorrect ? 'Correcto!' : 'Incorrecto, intenta nuevamente.'}
                    </div>
                )}
                <div className="mt-4">
                    <button onClick={validateAnswers} className="bg-green-500 text-white px-4 py-2 rounded mr-4">
                        Validar
                    </button>
                    <button onClick={resetQuiz} className="bg-blue-500 text-white px-4 py-2 rounded">
                        Reiniciar
                    </button>
                </div>
            </div>
        </DndProvider>
    )
}

const DraggableOption: React.FC<{ option: Option }> = ({ option }) => {
    const [{ isDragging },drag] = useDrag({
        type: 'option',
        item: option,
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    })

    return (
        <div
            ref={drag}
            className={`cursor-pointer p-4 border-2 ${isDragging ? 'border-blue-500' : 'border-gray-300'}`}
        >
            {option.text}
        </div>
    )
}

export default MatchingQuiz
