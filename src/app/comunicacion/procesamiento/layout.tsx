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
                        path === "/comunicacion/procesamiento" && (
                            <div className=" flex flex-col items-center justify-center p-10 text-white gap-5">
                                <h1 className="text-4xl font-bold p-5 bg-gray-500/30">{path === "/comunicacion/procesamiento" && "Procesamiento cognitivo".toUpperCase()}</h1>
                                <p className="text-xl p-5 mx-10 bg-gray-500/30 text-center">
                                    {
                                        path === "/comunicacion/procesamiento" && `Es la forma en que el cerebro recibe, entiende y usa la información. Con el procesamiento cognitivo se busca aprender nuevas estrategias adaptativas en donde el cliente se convierta en activo de sus propios avances mediante el uso de herramientas tecnológicas que ayuden a incrementar su desempeño laboral y social. Se puede utilizar el contenido de acuerdo con las necesidades según el trabajo que va a desempeñar.
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
