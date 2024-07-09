import Subnavbar from '@/components/subnavbar'
import React from 'react'


const navigation = [
    {
        name: "Servicios",
        href: "sliperd/servicios",
    },
    {
        name: "Hoja de Vida",
        href: "sliperd/curriculum",
    },
    {
        name: "Empleo",
        href: "sliperd/empleo",
    },
    {
        name: "Habilidades",
        href: "sliperd/habilidades",
    },
    {
        name: "Capacitaciones",
        href: "sliperd/capacitaciones",
    },
]
const imageBackground = '/img/image-background.jpg'
export default function SliperdLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
  return (
    <div className='p-0 w-full'>
    <div className="relative bg-white">
        <div className="absolute inset-0">
            <img className="object-cover w-full h-full" src={imageBackground} alt="image-background" />
            <div className="absolute inset-0 bg-gray-900 bg-opacity-75"></div>
        </div>
        <div className="h-scren">
            <Subnavbar
                navigation={navigation}
            />
            <div className="relative flex flex-col items-center justify-center h-screen text-white">
                <h1 className="text-8xl font-bold p-5">SLIPERD</h1>
                <p className="text-3xl p-5">Uniendo talentos, creando oportunidades</p>
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
