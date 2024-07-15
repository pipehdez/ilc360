import Image from 'next/image'
import React,{ useState } from 'react'

interface BrushRequestQuizProps {
    onCLick: () => void
}
const BrushRequestQuiz = ({ onCLick }: BrushRequestQuizProps) => {
    const [selectedOption,setSelectedOption] = useState<string | null>(null)
    const [isAnswerCorrect,setIsAnswerCorrect] = useState<boolean | null>(null)

    const handleOptionClick = (option: string) => {
        setSelectedOption(option)
        // Assuming 'please' is the correct answer
        setIsAnswerCorrect(option === 'please')
    }

    const resetQuiz = () => {
        setSelectedOption(null)
        setIsAnswerCorrect(null)
    }

    return (
        <div className="bg-white shadow-lg rounded-lg items-center p-8 mx-auto  mb-10 max-w-screen-2xl">
            <header className="mb-8">
                <h1 className="text-4xl font-bold mb-2">Pidiendo el Pincel</h1>
                <h2 className="text-2xl font-semibold mb-4">
                    ¿Cómo le pedirías el pincel a tu compañero?
                </h2>
            </header>
            <div className="mb-8">
              
                <Image src="/img/prestar.jpeg" alt="Pidiendo el pincel a un compañero" width={600} height={400} className="w-96 mb-4" />
            </div>
            <div className="grid grid-cols-1 gap-4 mb-8">
                <div
                    className={`cursor-pointer p-4 border-4 ${selectedOption === 'please' ? 'border-blue-500' : 'border-gray-300'}`}
                    onClick={() => handleOptionClick('please')}
                >
                    <p>Por favor préstame el pincel</p>
                </div>
                <div
                    className={`cursor-pointer p-4 border-4 ${selectedOption === 'demand' ? 'border-blue-500' : 'border-gray-300'}`}
                    onClick={() => handleOptionClick('demand')}
                >
                    <p>Dame el pincel</p>
                </div>
                <div
                    className={`cursor-pointer p-4 border-4 ${selectedOption === 'ask' ? 'border-blue-500' : 'border-gray-300'}`}
                    onClick={() => handleOptionClick('ask')}
                >
                    <p>¿Puedes darme eso?</p>
                </div>
            </div>
            {isAnswerCorrect !== null && (
                <div className={`mt-4 p-4 ${isAnswerCorrect ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
                    {isAnswerCorrect ? 'Correcto! La forma correcta es: Por favor préstame el pincel.' : 'Incorrecto, intenta nuevamente.'}
                </div>
            )}
            <div className="mt-4">
                {
                    isAnswerCorrect ? (
                        <button onClick={onCLick} className="bg-green-500 text-white px-4 py-2 rounded mr-4">
                            Siguiente
                        </button>
                    ) : null
                }
                <button onClick={resetQuiz} className="bg-blue-500 text-white px-4 py-2 rounded">
                    Reiniciar
                </button>
            </div>
        </div>
    )
}

export default BrushRequestQuiz
