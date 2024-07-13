"use client"
import Subnavbar from '@/components/subnavbar'
import { getSession } from 'next-auth/react'
import { usePathname,useRouter } from 'next/navigation'
import React,{ useEffect } from 'react'


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
                <div className="bg-sliperd-backgroud-image bg-no-repeat bg-cover bg-opacity-20 -z-10">

                    {
                        path === "/comunicacion/destrezas" && (
                            <div className=" flex flex-col items-center justify-center p-10 text-white gap-5">
                                <h1 className="text-4xl font-bold p-5 bg-gray-500/30">{path === "/comunicacion/destrezas" && "Destrezas comunicativas".toUpperCase()}</h1>
                                <p className="text-xl p-5 mx-10 bg-gray-500/30 text-center">
                                    {
                                        path === "/comunicacion/destrezas" && `Son aquellas habilidades que implican la capacidad de expresarse de manera clara, coherente y adecuada en todas las esferas de la comunicación, determinando el éxito de las relaciones interpersonales, siendo necesarias en el campo laboral. 
Es una herramienta multimedia destinada a las personas en condición de discapacidad intelectual para prepararlos en el proceso de inclusión laboral y social.
Son actividades que favorecen e incentivan su comunicación en diferentes ambientes, ofrece opciones para 4 ofertas laborales.
`
                                    }
                                </p>
                            </div>
                        )
                    }

                </div>
            </div>
            {children}
        </div>
    )
}
