'use client';
import Benefits from '@/components/benefits'
import React, { useState } from 'react'
import Image from 'next/image'
import Header from '../components/Header'

const benefitOneImg = '/img/empleo.jpg'

const benefit = [
  {
    title: "",
    desc: "Se oferta servicio de capacitación a empresas y/o clientes que adquieran este servicio de forma individual o según el plan escogido. Donde su principal objetivo es potencializar las habilidades comunicativas e inclusivas en el ámbito laboral.",
    image: benefitOneImg,
    imgPos: 'right'
  }
]

const servicios = [
  { id: 1,title: 'Curso de comunicación efectiva',desription: 'En este curso obtendrás las habilidades necesarias para comunicarte de manera clara, concisa y persuasiva en cualquier situación, especialmente en el ámbito laboral. Conoce más información de este curso en el siguiente link https://edutin.com/curso-de-comunicacion-efectiva ', image: '/img/1.png',url: '/sliperd/servicios' },
  { id: 2,title: 'Capacitación sobre comunicación y habilidades sociales',desription: 'En esta capacitación obtendrás las herramientas necesarias para mejorar tus habilidades de comunicación y fortalecer tus relaciones interpersonales. Además, aprenderás a expresarte con claridad, escuchar activamente y establecer conexiones significativas con las demás personas.',image: '/img/2.png',url: '/sliperd/curriculum' },
  { id: 3,title: 'Capacitación de Inclusión Laboral',desription: 'Con esta capacitación aprenderás a aplicar los fundamentos teóricos de la disciplina, las leyes nacionales e internacionales vigentes, las estrategias para fomentarla y los beneficios que esta le aporta a las empresas. Además de identificar cómo desarrollar espacios inclusivos a favor del desarrollo humano y social.',image: '/img/3.png',url: '/sliperd/servicios' },
]

export default function Page() {
  const [showModal,setShowModal] = useState(false)
  const [modalData,setModalData] = useState({ id: "",title: "", desription: "",image: "",url: "" })

  const handleModal = (service: any) => {
    setModalData(service)
    setShowModal(true)
  }

  return (
    <>
      <Header title='Capacitaciones sobre las habilidades comunicativas e inclusión laboral' description='' />
      {
        benefit.map((item,index) => (
          <Benefits key={index} title={item.title} image={item.image} desc={item.desc} imgPos={item.imgPos} />
        ))
      }
      <div className="container mx-auto flex flex-col items-center justify-center py-10">
        <div className="flex flex-col items-center justify-center">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {
              servicios.map((service) => (
                <div className="flex flex-col items-center cursor-pointer border-2 hover:border-blue-500  " onClick={() => handleModal(service)}>
                  <Image src={service.image} alt={service.title} width={100} height={100} className="h-24 md:w-32 md:h-32 object-contain" />
                  <p className="mt-2 text-center bg-gray-500/75 p-2 text-balance text-white ">{service.title.toUpperCase()}</p>
                </div>
              ))
            }
          </div>
        </div>
      {
        showModal && (
          <Modal
            id={modalData.id}
            title={modalData.title}
            desription={modalData.desription}
            image={modalData.image}
            url={modalData.url}
            onClick={() => setShowModal(false)}
          />
        )
      }
      </div>
    </>
  )
}

interface ModalData {
  id: string
  title: string
  desription: string
  image: string
  url: string
  onClick: () => void
}

const Modal = ({ id,title,image,desription,onClick }: ModalData) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className={`relative z-50 bg-white w-1/2  p-10`}>
        {/*  cerrar modal */}
        <button
          onClick={onClick}
          className="absolute top-0 right-0 p-5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-black dark:text-white"
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
        <h1 className="text-4xl font-bold leading-snug tracking-tight text-black dark:text-white lg:text-3xl lg:leading-tight xl:text-4xl xl:leading-tight">
          {title}
        </h1>
        <div className="w-20 h-0.5 bg-gray-300 dark:bg-gray-700/50 m-5" />
        <div className="flex flex-row items-center justify-between align-middle">
          <p className="py-5 text-xl leading-normal text-black dark:text-whitelg:text-xl xl:text-2xl">
            {desription}
          </p>
          <div className="relative w-full">
            <Image width={200} height={100} src={image} alt={title} objectFit="contain" />
          </div>
        </div>
      </div>
    </div>
  )
}