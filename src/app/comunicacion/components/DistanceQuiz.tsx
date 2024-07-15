import React,{ useState } from 'react'

interface DistanceQuizProps {
    onCLick: () => void
}

const DistanceQuiz = ({ onCLick }: DistanceQuizProps) => {
    const [selectedImage,setSelectedImage] = useState<string | null>(null)
    const [isAnswerCorrect,setIsAnswerCorrect] = useState<boolean | null>(null)

    const handleImageClick = (image: string) => {
        setSelectedImage(image)
        // Assuming 'work_conversation.jpg' is the correct image for work conversation distance
        setIsAnswerCorrect(image === 'work_conversation.jpg')
    }

    const resetQuiz = () => {
        setSelectedImage(null)
        setIsAnswerCorrect(null)
    }

    return (
        <div className="bg-white shadow-lg rounded-lg items-center p-8 mx-auto  mb-10 max-w-screen-2xl">
            <header className="mb-8">
                <h1 className="text-4xl font-bold mb-2">Distancia Adecuada</h1>
                <h2 className="text-2xl font-semibold mb-4">
                    ¿Cuál sería la distancia adecuada al mantener una conversación en el trabajo?
                </h2>
            </header>
            <div className="grid grid-cols-2 gap-4 mb-8">
                <img
                    src="/img/work_conversation.jpg" // Cambia por la ruta correcta de la imagen
                    alt="Conversación en el trabajo"
                    className={`cursor-pointer border-4 ${selectedImage === 'work_conversation.jpg' ? 'border-blue-500' : 'border-gray-300'}`}
                    onClick={() => handleImageClick('work_conversation.jpg')}
                />
                <img
                    src="/img/personal_conversation.jpg" // Cambia por la ruta correcta de la imagen
                    alt="Conversación personal"
                    className={`cursor-pointer border-4 ${selectedImage === 'personal_conversation.jpg' ? 'border-blue-500' : 'border-gray-300'}`}
                    onClick={() => handleImageClick('personal_conversation.jpg')}
                />
            </div>
            {isAnswerCorrect !== null && (
                <div className={`mt-4 p-4 ${isAnswerCorrect ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
                    {isAnswerCorrect ? 'Correcto!' : 'Incorrecto, intenta nuevamente.'}
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

export default DistanceQuiz
