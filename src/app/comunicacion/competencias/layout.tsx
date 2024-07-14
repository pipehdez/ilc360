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

                            <div className=" flex flex-col items-center justify-center p-10 text-white gap-5">
                                <h1 className="text-4xl font-bold p-5 bg-gray-500/30"> {"Competencias comunicativas".toUpperCase()}</h1>
                                <p className="text-xl p-5 mx-10 bg-gray-500/30 text-center">
                                    {
                                        `Es la capacidad de entender y usar bien una lengua/idioma, teniendo en cuenta, gramática, vocabulario y pronunciación, para comunicarse de manera efectiva en diferentes contextos sociales; las competencias son un conocimiento indispensable para el perfeccionamiento del proceso comunicativo al interior de la inclusión laboral convirtiéndose en una herramienta básica dentro del trabajo y exigencia profesional.
Es una herramienta digital que permite incorporar habilidades para el trabajo desde las competencias.
`
                                    }
                                </p>
                            </div>
           

                </div>
            </div>
            {children}
        </div>
    )
}
