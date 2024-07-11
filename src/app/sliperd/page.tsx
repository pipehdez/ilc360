"use client"

import Benefits from '@/components/benefits'
import PricingCard from '@/components/PricingCard'
import SectionTitle from '@/components/sectionTitle'
import Separator from '@/components/separator'
import Testimonials from '@/components/testimonials'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { url } from 'inspector'
import Link from 'next/link'

const benefitOneImg = '/img/description.jpg'
const benefitTwoImg = '/img/about.jpg'

const benefit = [
  // {
  //   title: "",
  //   desc: "La inclusión laboral es un tema cada vez más relevante en nuestra sociedad, por ello, es importante reconocer el trabajo que empresas como SLIPERD están haciendo para promoverla. Esta plataforma en línea ofrece una oportunidad única para que personas con discapacidad puedan encontrar empleo en diferentes empresas, lo que les permitirá desarrollar sus habilidades y ser parte activa de la fuerza laboral dentro del país.",
  //   image: benefitOneImg,
  //   imgPos: 'right'
  // },
  {
    title: "Quienes somos?".toUpperCase(),
    desc: "SLIPERD es una empresa legalmente constituida, capacitada en el área de la comunicación humana, el cual ofrece un espacio de interacción mediante su página web, donde permite establecer un vínculo sociolaboral entre una persona con discapacidad y diferentes empresas, generando así redes colaborativas para el trabajo, siendo sus principales atributos: generar una mayor empleabilidad mediante la bolsa de empleo y las capacitaciones referentes a temas de su interés como el desarrollo de habilidades comunicativas o la inclusión laboral. ",
    image: benefitOneImg,
    imgPos: 'left'
  }
];

export default function Page() {
  const [selectMonthly, setSelectMonthly] = useState(true)
  const { status } = useSession()
  const route = useRouter()

  if (status === 'loading') return <div>Loading...</div>

  if (status === 'unauthenticated') {
    route.push('/plans')
  }

  return (
    <div className='w-full'>
      
      {
        benefit.map((item, index) => (
          <Benefits key={index} title={item.title} image={item.image} desc={item.desc} imgPos={item.imgPos} />
        ))
      }
      <OurServices />
      
      <MissionVision />
      <ValuesSection />
    </div>
  )
}

const services = [
  { id: 1,title: 'Evaluación de habilidades adaptivas',image: '/img/certainty.png',url: '/sliperd/servicios'},
  { id: 2,title: 'Hoja de vida',image: '/img/cv.png', url: '/sliperd/curriculum'},
  { id: 3,title: 'Capacitaciones',image: '/img/conversation.png' },
  { id: 4,title: 'Bolsa de empleo',image: '/img/work.png' },
]

const OurServices = () => {
  return (
    // flex flex-col md:flex-row bg-white shadow-lg rounded-lg p-8 mx-auto mb-10 justify-center max-w-screen-2xl
    <div className="flex flex-col bg-white shadow-lg rounded-lg items-center p-8 mx-auto  mb-10 max-w-screen-2xl">
      <h2 className="text-3xl font-bold mb-6">Nuestros servicios</h2>
      <Separator />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full mt-10">
        {services.map((service) => (
          !service.url ?(
          <div key={service.id} className="flex flex-col items-center">
            <img src={service.image} alt={service.title} className="h-24 md:w-32 md:h-32 object-contain" />
            <p className="mt-2 text-center bg-gray-500/75 p-2 text-balance ">{service.title}</p>
          </div>) : (
            <Link href={service.url} key={service.id}>
              <p className="flex flex-col items-center">
                <img src={service.image} alt={service.title} className="h-24 md:w-32 md:h-32 object-contain" />
                <p className="mt-2 text-center bg-gray-500/75 p-2 text-balance ">{service.title}</p>
              </p>
            </Link>
          )
        ))}
      </div>
    </div>
  )
}

const MissionVision = () => {
  return (
    <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg p-8 mx-auto mb-10 justify-center max-w-screen-2xl">
      <div className="md:w-2/5 p-4">
        <h2 className="text-2xl font-bold mb-4">Misión</h2>
        <Separator />
        <p className='text-justify'>
          Proporcionar servicios de empleabilidad para personas con discapacidad, empleando un enfoque inclusivo que permita crear vínculos entre diversas empresas. Queremos romper los estándares de contratación e inclusión para que todos tengan la oportunidad de trabajar y demostrar sus habilidades en un ambiente inclusivo y colaborativo.
        </p>
      </div>
      <div className="md:w-2/5 p-4">
        <h2 className="text-2xl font-bold mb-4">Visión</h2>
        <Separator />
        <p className='text-justify'>
          Para el año 2033 seremos una empresa que promueva una sociedad inclusiva, siendo los pioneros en la creación de redes colaborativas enfocándonos en la innovación que logre fomentar la inclusión laboral de Personas con Discapacidad. Nuestra meta será siempre establecer un entorno donde las empresas y las Personas con Discapacidad trabajen juntas, logrando un reconocimiento a nivel nacional e internacional por nuestras contribuciones en este campo.
        </p>
      </div>
    </div>
  )
}

const values = [
  {
    id: 1,
    title: 'Compromiso y confidencialidad',
    description: 'Nos comprometemos a proteger la confidencialidad de la información de nuestros clientes, garantizando que todos los datos sean manejados con el más alto nivel de seguridad y privacidad.',
    icon: '/img/commitment.png',
  },
  {
    id: 2,
    title: 'Honestidad',
    description: 'En nuestra empresa, actuaremos con transparencia, integridad y ética en todas nuestras operaciones, asegurando la confianza y el respeto de nuestros clientes.',
    icon: '/img/honesty.png'
  },
  {
    id: 3,
    title: 'Calidad',
    description: 'Nos dedicamos a ofrecer servicios de la más alta calidad, asegurando que cada aspecto de nuestro trabajo cumpla con los estándares más exigentes.',
    icon: '/img/badge.png'
  },
  {
    id: 4,
    title: 'Responsabilidad social',
    description: 'Trabajamos para generar un impacto positivo en la comunidad con discapacidad, promoviendo el bienestar social, la inclusión socio laboral y el desarrollo sostenible.',
    icon: '/img/user.png'
  },
]

const ValuesSection = () => {
  return (
    <div className="flex flex-col items-center p-8 mx-auto bg-white shadow-lg rounded-lg mb-10 max-w-screen-2xl">
      <h2 className="text-3xl font-bold mb-6">Valores</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {values.map((value) => (
          <div key={value.id} className="flex flex-col items-center text-center p-4">
            <div className=" p-2 rounded-full flex flex-row justify-center gap-5 ">
              <Image src={value.icon} alt={value.title} width={30} height={30} />
              <h3 className="text-xl font-semibold text-justify ">{value.title}</h3>
            </div>
            <div className="flex flex-col items-center">
              <p className='text-justify'>{value.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

