"use client";
import Image from "next/image";
import Container from "./container";
import heroImg from "../../public/img/discapacidad.png";
import Separator from './separator'
import { useState } from 'react'

const visual = "/img/visual.png";
const multiple = "/img/multiple.png";
const auditiva = "/img/auditiva.png";
const fisica = "/img/fisica.png";
const psicosocial = "/img/psicosocial.png";
const intelectual = "/img/intelectual.png";
const sordoceguera = "/img/visual.png";

const data = [
  {
    src: visual,
    alt: "Visual",
    text: "SON LAS PERSONAS CON DIVERSAS CONDICIONES OCULARES Y CAPACIDADES VISUALES DISMINUIDAS",
    color: "bg-blue-500",
  },
  {
    src: multiple,
    alt: "Multiple",
    text: "INCLUYE PERSONAS QUE PRESENTAN UNA O MÁS DEFICIENCIAS PERMANENTES DE ORDEN FÍSICO, SENSORIA, MENTAL O INTELECTUAL Y QUE ACTUAN DE MANERA ASOCIADA. ",
    color: "bg-green-500",
  },
  {
    src: auditiva,
    alt: "Auditiva",
    text: "SON LAS PERSONAS QUE PRESENTAN DE FORMA PERMANENTE DISTINTOS TIPOS DE PÉRDIDA AUDITIVA. ",
    color: "bg-yellow-500",
  },
  {
    src: fisica,
    alt: "Fisica",
    text: "INCLUYE A LAS PERSONAS QUE PRESENTAN DEFICIENCIAS CORPORALES QUE LIMITAN LA MOVILIDAD DE FORMA PERMANENTE.",
    color: "bg-red-500",
  },
  {
    src: psicosocial,
    alt: "Psicosocial",
    text: "APARECE CUANDO LAS PERSONAS PRESENTAN TRASTORNOS Y PROBLEMAS MENTALES QUE IMPIDEN SU CONEXIÓN CON EL MEDIO.",
    color: "bg-purple-500",
  },
  {
    src: intelectual,
    alt: "Intelectual",
    text: "SE REFIERE A LAS PERSONAS CON DEFICIENCIAS EN LAS CAPACIDADES MENTALES GENERALES.",
    color: "bg-indigo-500",
  },
  {
    src: sordoceguera,
    alt: "Sordoceguera",
    text: "INCLUYE A LAS PERSONAS QUE PRESENTAN ALTERACIÓN SENSORIAL DE TIPO AUDITIVO Y VISUAL.",
    color: "bg-pink-500",
  }
];

interface ModalData {
  src: string;
  alt: string;
  text: string;
  color: string;
}

export default function Hero() {
  const [showModal, setShowModal] = useState(false);
  const [modalData,setModalData] = useState({ src: "",alt: "",text: "", color: ""});

  const handleModal = (item: ModalData) => {
    setModalData(item);
    setShowModal(true);
  }

  function Modal({ src,alt,text,color }: ModalData) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className={`relative z-50 w-1/2 ${color} p-10`}>
          {/*  cerrar modal */}
          <button
            onClick={() => setShowModal(false)}
            className="absolute top-0 right-0 p-5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-white dark:text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M2.293 2.293a1 1 0 011.414 0L10 8.586l6.293-6.293a1 1 0 111.414 1.414L11.414 10l6.293 6.293a1 1 0 01-1.414 1.414L10 11.414l-6.293 6.293a1 1 0 01-1.414-1.414L8.586 10 2.293 3.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <h1 className="text-4xl font-bold leading-snug tracking-tight text-white lg:text-3xl lg:leading-tight xl:text-4xl xl:leading-tight dark:text-white">
            {alt}
          </h1>
          <div className="w-20 h-0.5 bg-gray-300 dark:bg-gray-700/50 m-5" />
          <div className="flex flex-row items-center justify-between align-middle">
            <p className="py-5 text-xl leading-normal text-white lg:text-xl xl:text-2xl dark:text-white">
              {text}
            </p>
            <div className="relative w-full">
              <Image width={200} height={100} src={src} alt={alt} objectFit="contain" />
            </div>
            </div>
          </div>
        </div>
    )
  }
  
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-3xl lg:leading-tight xl:text-4xl xl:leading-tight dark:text-white">
              ¿Que es discapacidad?
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              De acuerdo con la OMS “Termino general que abarca las deficiencias, las limitaciones de la actividad y las restricciones de la participación en las personas” 
            </p>
            <Separator />
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-3xl lg:leading-tight xl:text-4xl xl:leading-tight dark:text-white">
              ¿Quienes son las personas con discapacidad?
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              De acuerdo con la OMS “Termino general que abarca las deficiencias, las limitaciones de la actividad y las restricciones de la participación en las personas”
            </p>
          
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="hidden lg:block">
            <Image
              src={heroImg}
              width="616"
              height="617"
              alt="Discapacidad"
              layout="intrinsic"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
      <Container>
        <div className="flex flex-col justify-center">
          {/* <div className="text-xl text-center text-gray-700 dark:text-white">
            Trusted by <span className="text-indigo-600">2000+</span> customers
            worldwide
          </div> */}

          <div className="flex flex-wrap justify-center gap-5 mt-10 md:justify-around">
            {
              data.map((item,index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center justify-center p-5 mt-5 bg-white rounded-lg shadow-lg dark:bg-gray-800 ${item.color}`}
                >
                  <button
                    onClick={() => handleModal(item as any)}
                    className={`flex items-center justify-center w-24 h-24 bg-${item.color} rounded-full dark:bg-gray-800`}
                  >
                    <Image src={item.src} alt={item.alt} width={100} height={100} />
                  </button>
                </div>
              ))
            }
          </div>
        </div>
      </Container>
      {showModal && (
        <Modal
          src={modalData.src}
          alt={modalData.alt}
          text={modalData.text}
          color={modalData.color}
        />
      )}
    </>
  );
}