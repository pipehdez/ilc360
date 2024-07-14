import React,{ useState,useEffect } from 'react'
import Image from 'next/image'

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

interface AgilityQuizProps {
  questions: Question[]
  onClick: () => void
}



const AgilityQuiz = ({ questions,onClick }: AgilityQuizProps) => {
  const [currentQuestionIndex,setCurrentQuestionIndex] = useState(0)
  const [selectedOptions,setSelectedOptions] = useState<string[]>([])
  const [isAnswerCorrect,setIsAnswerCorrect] = useState<boolean | null>(null)
  const [timeLeft,setTimeLeft] = useState(10)

  const currentQuestion = questions[currentQuestionIndex]

  console.log('selectedOptions',selectedOptions)
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime === 1) {
          clearInterval(timer)
          setIsAnswerCorrect(false)
          return 0
        }
        return prevTime - 1
      })
    },1000)

    return () => clearInterval(timer)
  },[])

  useEffect(() => {
    if (timeLeft === 0) {
      validateAnswers()
    }
  },[timeLeft])

  const handleOptionClick = (optionId: string) => {
    setSelectedOptions((prevSelectedOptions) =>
      prevSelectedOptions.includes(optionId)
        ? prevSelectedOptions.filter((id) => id !== optionId)
        : [...prevSelectedOptions,optionId]
    )
  }

  const validateAnswers = () => {
    const correctAnswers = currentQuestion.options.filter((option) => option.isCorrect).map((option) => option.id)
    setIsAnswerCorrect(
      selectedOptions.length === correctAnswers.length && selectedOptions.every((id) => correctAnswers.includes(id))
    )
  }

  const resetQuiz = () => {
    setSelectedOptions([])
    setIsAnswerCorrect(null)
    setTimeLeft(10)
  }

  return (
    <div className="bg-white shadow-lg rounded-lg items-center p-8 mx-auto  mb-10 max-w-screen-2xl">
      <header className="mb-8">
        <p className="text-lg">Tiempo restante: {timeLeft} segundos</p>
      </header>
      <div className="mb-4">
        <h3 className="text-xl font-bold">{currentQuestion.category}</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {currentQuestion.options.map((option) => (
          <div 
            key={option.id}
            onClick={() => handleOptionClick(option.id)} 
            className={`flex flex-col cursor-pointer border-2 ${selectedOptions.includes(option.id) ? 'border-blue-500' : 'border-gray-300'}`}>
            <div
              className={` p-4 text-center text-black font-bold border-b-2 ${isAnswerCorrect !== null && (option.isCorrect === true && selectedOptions.includes(option.id)) && 'border-green-500 bg-green-500 text-white'} ${isAnswerCorrect !== null && ( option.isCorrect === false && selectedOptions.includes(option.id)) && 'border-red-500 bg-red-500 text-white'}`}
            >
              {option.word}
            </div>
            <Image src={option.src} alt={option.word} width={200} height={200} className='object-content w-full h-52' />
          </div>
        ))}
      </div>
      {isAnswerCorrect !== null && (
        <div className={`mt-4 p-4 ${isAnswerCorrect ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
          {isAnswerCorrect ? 'Correcto!' : 'Incorrecto, intenta nuevamente.'}
        </div>
      )
      }
      <div className="mt-4">
        {isAnswerCorrect !== null && (
          isAnswerCorrect && <button onClick={onClick} className="bg-green-500 text-white px-4 py-2 rounded mr-4">Enviar</button>
        )}
        <button onClick={validateAnswers} className="bg-green-500 text-white px-4 py-2 rounded mr-4">Validar</button>
        <button onClick={resetQuiz} className="bg-blue-500 text-white px-4 py-2 rounded">Reiniciar</button>
      </div>
    </div>
  )
}

export default AgilityQuiz
