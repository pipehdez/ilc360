"use client"
import Subnavbar from '@/components/subnavbar'
import { getSession } from 'next-auth/react'
import { usePathname,useRouter } from 'next/navigation'
import React,{ useEffect } from 'react'


const navigation = [
    {
        name: "about".toUpperCase(),
        href: "/comunicacion/about",
    },
    // {
    //     name: "Hoja de Vida".toUpperCase(),
    //     href: "/comunicacion/curriculum",
    // },
    // {
    //     name: "Empleo".toUpperCase(),
    //     href: "/comunicacion/empleo",
    // },
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
        <div className='p-0 w-full bg-gray-600/15'>
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
                    {
                        path === "/comunicacion" && (
                            <div className=" flex flex-col items-center justify-center p-10 text-white gap-3">
                                <h1 className="text-4xl font-bold p-5 bg-gray-500/30">{path === "/comunicacion" && "COMUNICACIÓN DIGITAL"}</h1>
                                <p className="text-xl p-5 mx-10 text-center bg-gray-500/30">
                                    {
                                        path === "/comunicacion" ? `SIN SIGNOS NO HAY SUJETO, SENTENCIA UMBERTO ECO. EN ESA DIRECCIÓN SE DESPLIEGA UNA IDEA QUE ES ARROLLADORA; “LA CONSCIENCIA TIENE UN ORIGEN SEMIÓTICO. HELLEN NO SOLO NECESITA LOS SIGNOS PARA PEDIR, SINO TAMBIÉN PARA DECIR, PARA CONTAR, PARA COMENTAR, PARA DIRIGIRSE A OTROS, PARA OPINAR…¡PERO SOBRE TODO NECESITA LOS SIGNOS PARA INTERRELACIONARSE O COMUNICARSE!.

COMO DECÍA LEV VIGOTSKY “LA INTERNALIZACIÓN DEL LENGUAJE REORGANIZA TODAS LAS DEMÁS FUNCIONES COGNITIVAS, ES UNA HERRAMIENTA PARA INFLUIR SOBRE EL MUNDO, PARA CAMBIAR EL MUNDO Y AFECTAR EL PROPIO”
` : "Uniendo talentos, creando oportunidades"
                                    }
                                </p>
                            </div>
                        )
                    }

                </div>
            </div>
            {children}
            <footer className="bg-gray-900 text-white text-center p-5">
                <p>Colombia, Cúcuta Norte de Santander, ig: @Sliperd, tel: 3016209944</p>
            </footer>
        </div>
    )
}
