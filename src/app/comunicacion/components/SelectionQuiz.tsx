import React,{ useState } from 'react'
import Image from 'next/image'

interface Option {
    id: string
    src: string
    isCorrect: boolean
}

interface Question {
    id: string
    image: string
    options: Option[]
}

interface SelectionQuizProps {
    questions: Question[]
    onClick: () => void
}

const SelectionQuiz = ({ questions, onClick }: SelectionQuizProps) => {
    const [selectedOption,setSelectedOption] = useState<string | null>(null)
    const [isAnswerCorrect,setIsAnswerCorrect] = useState<boolean | null>(null)

    const handleOptionClick = (optionId: string,isCorrect: boolean) => {
        setSelectedOption(optionId)
        setIsAnswerCorrect(isCorrect)
    }

    const resetQuiz = () => {
        setSelectedOption(null)
        setIsAnswerCorrect(null)
    }

    return (
        <div className="bg-white shadow-lg rounded-lg items-center p-8 mx-auto  mb-10 max-w-screen-2xl">
            {questions.map((question) => (
                <div key={question.id}>
                    <div className="
                        flex items-center justify-center
                        bg-green-500/10 text-white text-2xl font-bold
                        p-4 rounded-lg mb-4
                    ">
                        <Image src={question.image} alt="Situation" width={600} height={400} className="border-4 border-green-500" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {question.options.map((option) => (
                            <div
                                key={option.id}
                                className={`flex items-center justify-center cursor-pointer ${selectedOption === option.id ? 'border-4 border-blue-500' : ''}`}
                                onClick={() => handleOptionClick(option.id,option.isCorrect)}
                            >
                                <Image src={option.src} alt={`Option ${option.id}`} width={300} height={200} />
                            </div>
                        ))}
                    </div>
                    {isAnswerCorrect !== null && (
                        <div className={`mt-4 p-4 ${isAnswerCorrect ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
                            {isAnswerCorrect ? 'Correcto!' : 'Incorrecto, intenta nuevamente.'}
                        </div>
                    )}
                    {isAnswerCorrect && (
                        <div className="mt-4">
                            <button onClick={onClick} className="bg-green-500 text-white px-4 py-2 rounded">Enviar</button>
                        </div>
                    )}

                    <div className="mt-4">
                        <button onClick={resetQuiz} className="bg-blue-500 text-white px-4 py-2 rounded">Reiniciar</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default SelectionQuiz
