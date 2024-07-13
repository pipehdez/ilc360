import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface Option {
  id: string;
  word: string;
  isCorrect: boolean;
}

interface Question {
  id: string;
  category: string;
  options: Option[];
}

const questions: Question[] = [
  {
    id: '1',
    category: 'Aparatos eléctricos',
    options: [
      { id: '1', word: 'Botas', isCorrect: false },
      { id: '2', word: 'Teléfono', isCorrect: true },
      { id: '3', word: 'Casa', isCorrect: false },
      { id: '4', word: 'Guitarra', isCorrect: false },
      { id: '5', word: 'Computador', isCorrect: true },
      { id: '6', word: 'Cama', isCorrect: false },
      { id: '7', word: 'Silla', isCorrect: false },
      { id: '8', word: 'Gafas', isCorrect: false },
    ],
  },
];

const AgilityQuiz: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null);
  const [timeLeft, setTimeLeft] = useState(10);

  const currentQuestion = questions[currentQuestionIndex];

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime === 1) {
          clearInterval(timer);
          setIsAnswerCorrect(false);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleOptionClick = (optionId: string) => {
    setSelectedOptions((prevSelectedOptions) =>
      prevSelectedOptions.includes(optionId)
        ? prevSelectedOptions.filter((id) => id !== optionId)
        : [...prevSelectedOptions, optionId]
    );
  };

  const validateAnswers = () => {
    const correctAnswers = currentQuestion.options.filter((option) => option.isCorrect).map((option) => option.id);
    setIsAnswerCorrect(
      selectedOptions.length === correctAnswers.length && selectedOptions.every((id) => correctAnswers.includes(id))
    );
  };

  const resetQuiz = () => {
    setSelectedOptions([]);
    setIsAnswerCorrect(null);
    setTimeLeft(10);
  };

  return (
    <div className="p-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-2">AGILIDAD</h1>
        <h2 className="text-2xl font-semibold mb-4">La rapidez con la que una persona puede entender y responder o actuar según la información que recibe.</h2>
        <p className="text-lg mb-2">Elige la palabra de acuerdo a la categoría semántica dada.</p>
        <p className="text-lg">Tiempo restante: {timeLeft} segundos</p>
      </header>
      <div className="mb-4">
        <h3 className="text-xl font-bold">{currentQuestion.category}</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {currentQuestion.options.map((option) => (
          <div
            key={option.id}
            className={`cursor-pointer p-4 border-2 ${
              selectedOptions.includes(option.id) ? 'border-blue-500' : 'border-gray-300'
            }`}
            onClick={() => handleOptionClick(option.id)}
          >
            {option.word}
          </div>
        ))}
      </div>
      {isAnswerCorrect !== null && (
        <div className={`mt-4 p-4 ${isAnswerCorrect ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
          {isAnswerCorrect ? 'Correcto!' : 'Incorrecto, intenta nuevamente.'}
        </div>
      )}
      <div className="mt-4">
        <button onClick={validateAnswers} className="bg-green-500 text-white px-4 py-2 rounded mr-4">Validar</button>
        <button onClick={resetQuiz} className="bg-blue-500 text-white px-4 py-2 rounded">Reiniciar</button>
      </div>
    </div>
  );
};

export default AgilityQuiz;
