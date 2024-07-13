"use client";
import { useState } from "react";
import Quiz from "../../components/quiz";
import QuizSlots, { ImageItem } from "../../components/quizSlots";
import SelectionQuiz from "../../components/SelectionQuiz";
import Congrats from "../../components/congrats";


const imagesActivityOne: ImageItem[] = [
  { id: "1",src: "/img/azucar.jpg",name: "Azucar" },
  { id: "2",src: "/img/harina.jpg",name: "Harina" },
  { id: "3",src: "/img/mantequilla.jpg",name: "Mantequilla" },
  { id: "4",src: "/img/sal.jpg",name: "Sal" },
];

const imagesActivityTwo: ImageItem[] = [
  { id: "1",src: "/img/bandeja.jpg",name: "Bandeja" },
  { id: "2",src: "/img/horno.jpg",name: "Horno" },
  { id: "3",src: "/img/huevos.jpg",name: "Huevos" },
  { id: "4",src: "/img/rodillo.jpg",name: "Rodillo" },
];

const imagesActivityThree: ImageItem[] = [
  { id: "1", src: "/img/batidor.jpg", name: "Batidor" },
  { id: "2", src: "/img/cuchillo.jpg", name: "Cuchillo" },
  { id: "3", src: "/img/manga-pastel.jpg", name: "Manga Pastel" },
  { id: "4", src: "/img/molde.jpg", name: "Molde" },
];

const imagesActivityFour: ImageItem[] = [
  { id: "1", src: "/img/dotacion.jpg", name: "" },
  { id: "2", src: "/img/lavado-manos.jpg", name: "" },
  { id: "3", src: "/img/preparacion.jpg", name: "" },
  { id: "4", src: "/img/hornear.jpg", name: "" },
];

const questionsOne = [
  {
    id: "1",
    image: "/img/manos-sucias.jpg",
    options: [
      { id: "1",src: "/img/2-res-mala.webp", isCorrect: false },
      { id: "2",src: "/img/2-res-correcta.jpg", isCorrect: true },
    ],
  },
];

const questionsTwo = [
  {
    id: "1",
    image: "/img/platos-sucias.jpg",
    options: [
      { id: "1",src: "/img/3-res-mala.jpeg",isCorrect: false },
      { id: "2",src: "/img/3-res-correcta.jpg",isCorrect: true },
    ],
  },
];

export default function Page() {
  const [currentStep, setCurrentStep] = useState(5);

  const handleNextStep = () => {
    console.log("handleNextStep");
    setCurrentStep((prevStep) => prevStep + 1);
  };
  const quizSlots = [0, 1, 2, 3, 4];
  const quiz = [3];
  const questions = [4];

  return (
    <>
      <Header
        quizSlots={quizSlots}
        quiz={quiz}
        questions={questions}
        currentStep={currentStep}
      />
      {currentStep === 0 ? (
        <QuizSlots images={imagesActivityOne} onClick={handleNextStep} />
      ) : currentStep === 1 ? (
        <QuizSlots images={imagesActivityTwo} onClick={handleNextStep} />
      ) : currentStep === 2 ? (
        <QuizSlots images={imagesActivityThree} onClick={handleNextStep} />
      ) : currentStep === 3 ? (
        <Quiz images={imagesActivityFour} onClick={handleNextStep} />
      ) : currentStep === 4 ? (
        <SelectionQuiz questions={questionsOne} onClick={handleNextStep} />
      ) : currentStep === 5 ? (
        <SelectionQuiz questions={questionsTwo} onClick={handleNextStep} />
      ) :
      (
        <Congrats />
      )}
    </>
  );
}

interface HeaderProps {
  quizSlots: number[];
  quiz: number[];
  questions: number[];
  currentStep: number;
}

const Header = ({ quizSlots, quiz, questions, currentStep }: HeaderProps) => {
  return (
    <>
      {quizSlots.includes(currentStep) && (
        <div className="flex flex-col items-center justify-center  bg-blue-500/10 gap-3 p-5 bg-white shadow-lg rounded-lg mx-auto  mb-10 max-w-screen-2xl ">
          <h1 className="text-3xl font-bold">Ejercicio: AUXILIAR DE OFICINA</h1>
          <h2 className="text-2xl font-semibold">
            Repertorio de palabras que una persona debe manejar
          </h2>
          {quizSlots.includes(currentStep) && (
            <div className="flex flex-col items-center justify-center gap-1">
              {quiz.includes(currentStep) && (
                <>
                  <p className="text-lg">
                    Nombra la imagen de cada recuadro y recuerda su ubicación
                  </p>
                  <p className="text-lg">
                    {!quiz
                      ? "Organiza cada una de las imágenes siguiendo la secuencia"
                      : "Organiza cada una de las imágenes siguiendo la secuencia"}
                  </p>
                </>
              )}

              {questions.includes(currentStep) && (
                <p className="text-lg">
                  Selecciona la acción correcta que debe ir a continuación según
                  la situación presentada.
                </p>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
};
