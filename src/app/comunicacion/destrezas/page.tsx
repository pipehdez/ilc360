"use client";
import { useState } from "react";
import Quiz from "../components/quiz";
import QuizSlots, { ImageItem } from "../components/quizSlots";
import SelectionQuiz from "../components/SelectionQuiz";
import Congrats from "../components/congrats";
import Link from "next/link";
import Image from "next/image";

const imagesActivityTwo: ImageItem[] = [
  { id: "1", src: "/img/phone.jpg", name: "Telefono" },
  { id: "2", src: "/img/clock.jpg", name: "Reloj" },
  { id: "3", src: "/img/pen.jpg", name: "Lapicero" },
  { id: "4", src: "/img/stapler.jpg", name: "Grapadora" },
];

const imagesActivityOne: ImageItem[] = [
  { id: "1", src: "/img/chair.jpg", name: "Silla" },
  { id: "2", src: "/img/desk.jpg", name: "Escritorio" },
  { id: "3", src: "/img/papers.jpg", name: "Periodico" },
  { id: "4", src: "/img/laptop.jpg", name: "Portatil" },
];

const imagesActivityThree: ImageItem[] = [
  { id: "1", src: "/img/calendar.jpg", name: "Colendario" },
  { id: "2", src: "/img/trash.jpg", name: "Papelera" },
  { id: "3", src: "/img/printer.jpg", name: "Impresora" },
  { id: "4", src: "/img/scissors.jpg", name: "Tijera" },
];

const imagesActivityFour: ImageItem[] = [
  { id: "1", src: "/img/abrir.jpg", name: "" },
  { id: "2", src: "/img/encender.jpg", name: "" },
  { id: "3", src: "/img/saludar.jpg", name: "" },
  { id: "4", src: "/img/trabajar.jpg", name: "" },
];

const questionsOne = [
  {
    id: "1",
    image: "/img/hablando.jpg",
    options: [
      { id: "1", src: "/img/1-res-correcta.jpg", isCorrect: true },
      { id: "2", src: "/img/1-res-mala.jpg", isCorrect: false },
    ],
  },
];

export default function Page() {
  const [currentStep, setCurrentStep] = useState(4);

  const handleNextStep = () => {
    console.log("handleNextStep");
    setCurrentStep((prevStep) => prevStep + 1);
  };
  const quizSlots = [0, 1, 2, 3, 4];
  const quiz = [3];
  const questions = [4];

  return (
    // crea unos botones para ir a cada actividad con icons (AUXILIAR DE OFICINA, ASISTENTE DE PANADERÍA, MESERO)
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold p-5">Destrezas</h1>
        <p className="text-3xl p-5">Selecciona una actividad</p>
      </div>
      <div className="flex grid-cols-3 flex-row items-center justify-center gap-10 m-10">
              <div className="flex flex-col mx-auto items-center text-xl font-bold text-center justify-center">
          <Link href="/comunicacion/destrezas/oficina">
            <Image
              src="/img/hablando.jpg"
              alt="Auxiliar de oficina"
              width={200}
              height={100}
              className="h-50"
            />
            Auxiliar de oficina
          </Link>
        </div>
              <div className="flex flex-col mx-auto items-center text-xl font-bold text-center justify-center">
          <Link href="/comunicacion/destrezas/panaderia">
            <Image
              src="/img/harina.jpg"
              alt="Asistente de panadería"
              width={200}
              height={100}
              className="h-50"
            />
            Asistente de panadería
          </Link>
        </div>
        <div className="flex flex-col mx-auto items-center text-xl font-bold text-center justify-center">
          <Link href="/comunicacion/destrezas/mesero">
            <Image
              src="/img/toalla.jpg"
              alt="Mesero"
              width={200}
              height={100}
              className="h-50"
            />
            Mesero
          </Link>
        </div>
      </div>
    </div>
  );
}
