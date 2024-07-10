"use client"
import Subnavbar from '@/components/subnavbar'
import { getSession } from 'next-auth/react'
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect } from 'react'


const navigation = [
    {
        name: "Servicios".toUpperCase(),
        href: "/sliperd/servicios",
    },
    {
        name: "Hoja de Vida".toUpperCase(),
        href: "/sliperd/curriculum",
    },
    {
        name: "Empleo".toUpperCase(),
        href: "/sliperd/empleo",
    },
    // {
    //     name: "Habilidades",
    //     href: "/sliperd/habilidades",
    // },
    // {
    //     name: "Capacitaciones",
    //     href: "/sliperd/capacitaciones",
    // },
]
const imageBackground = '/img/image-background.jpg'
const imageBackground2 = '/img/curriculum.jpg'

export default function SliperdLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const path = usePathname()

  return (
    <div className='p-0 w-full'>
    <div className="relative bg-white">
        {/* <div className="absolute inset-0">
                  <img className="object-cover w-full h-72" src={
                      path === "/sliperd/curriculum" ? imageBackground2 :
                    imageBackground
                    } alt="image-background" />
            <div className="absolute inset-0 bg-gray-900 bg-opacity-75"></div>
        </div> */}
              <div className="bg-sliperd-backgroud-image bg-no-repeat bg-cover bg-opacity-20 -z-10">
            {/* <Subnavbar
                navigation={navigation}
            /> */}
            <div className=" flex flex-col items-center justify-center  text-white">
                      <h1 className="text-8xl font-bold p-5">{path !== "/sliperd/curriculum" && "SLIPERD" }</h1>
                <p className="text-3xl p-5 mx-10 text-center">
                    {
                              path === "/sliperd/curriculum" ? `Son documentos que recopilan y presentan de manera organizada la información personal, académica y profesional de una persona. Su propósito principal es proporcionar a los empleadores una visión clara y concisa de las cualificaciones, experiencias y habilidades de un candidato para un puesto de trabajo. 
                              Es por ello, que en el momento que decidimos postularnos para una oferta laboral, la hoja de vida entra a ser uno de los factores determinantes en los procesos de selección. El nivel de oportunidad para continuar avanzando en dichos procesos dependerá en gran medida de su correcta elaboración, ya que a través de este medio pueden presentarse y generar una primera impresión, además de resaltar aquellas habilidades, competencias y experiencias que puedan ubicar a la persona en una posición de ventaja frente a otras, para convertirse en un candidato atractivo para las empresas.` : "Uniendo talentos, creando oportunidades"
                    }
                </p>
            </div>
        </div>
    </div>
      { children }
        <footer className="bg-gray-900 text-white text-center p-5">
            <p>Colombia, Cúcuta Norte de Santander, ig: @Sliperd, tel: 3016209944</p>
        </footer>
    </div>
  )
}
