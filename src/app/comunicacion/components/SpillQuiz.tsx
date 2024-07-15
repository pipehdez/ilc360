import React,{ useState } from 'react'

const SpillQuiz: React.FC = () => {
    const [selectedOption,setSelectedOption] = useState<string | null>(null)
    const [isAnswerCorrect,setIsAnswerCorrect] = useState<boolean | null>(null)

    const handleOptionClick = (option: string) => {
        setSelectedOption(option)
        // Assuming 'clean' is the correct answer
        setIsAnswerCorrect(option === 'clean')
    }

    const resetQuiz = () => {
        setSelectedOption(null)
        setIsAnswerCorrect(null)
    }

    return (
        <div className="bg-white shadow-lg rounded-lg items-center p-8 mx-auto  mb-10 max-w-screen-2xl">
            <header className="mb-8">
                <h1 className="text-4xl font-bold mb-2">Derrame de Café</h1>
                <h2 className="text-2xl font-semibold mb-4">
                    ¿Qué puedo hacer si en la oficina de trabajo se me riega el café?
                </h2>
            </header>
            <div className="mb-8">
                <img
                    src="coffee_spill.jpg" // Cambia por la ruta correcta de la imagen
                    alt="Derrame de café en la oficina"
                    className="w-full mb-4"
                />
            </div>
            <div className="grid grid-cols-3 gap-4 mb-8">
                <div
                    className={`cursor-pointer p-4 border-4 ${selectedOption === 'do_nothing' ? 'border-blue-500' : 'border-gray-300'}`}
                    onClick={() => handleOptionClick('do_nothing')}
                >
                    <img src="do_nothing.jpg" alt="No hacer nada" className="mb-2" />
                    <p>Me quedo mirando el desastre y no hago nada</p>
                </div>
                <div
                    className={`cursor-pointer p-4 border-4 ${selectedOption === 'clean' ? 'border-blue-500' : 'border-gray-300'}`}
                    onClick={() => handleOptionClick('clean')}
                >
                    <img src="clean.jpg" alt="Limpiar el desorden" className="mb-2" />
                    <p>Limpio el desorden que ocasioné</p>
                </div>
                <div
                    className={`cursor-pointer p-4 border-4 ${selectedOption === 'blame' ? 'border-blue-500' : 'border-gray-300'}`}
                    onClick={() => handleOptionClick('blame')}
                >
                    <img src="blame.jpg" alt="Echarse la culpa" className="mb-2" />
                    <p>Me sigo echando la culpa sin buscar una solución</p>
                </div>
            </div>
            {isAnswerCorrect !== null && (
                <div className={`mt-4 p-4 ${isAnswerCorrect ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
                    {isAnswerCorrect ? 'Correcto! Es importante limpiar el desorden.' : 'Incorrecto, intenta nuevamente.'}
                </div>
            )}
            <div className="mt-4">
                <button onClick={resetQuiz} className="bg-blue-500 text-white px-4 py-2 rounded">
                    Reiniciar
                </button>
            </div>
        </div>
    )
}

export default SpillQuiz
