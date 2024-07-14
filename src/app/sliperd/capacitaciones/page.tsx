import Benefits from '@/components/benefits'
import React from 'react'
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
  { id: 1,title: 'Curso de comunicación efectiva',image: '/img/1.png',url: '/sliperd/servicios' },
  { id: 2,title: 'Capacitación sobre comunicación y habilidades sociales',image: '/img/2.png',url: '/sliperd/curriculum' },
  { id: 3,title: 'Capacitación de Inclusión Laboral',image: '/img/3.png',url: '/sliperd/servicios' },
]

export default function Page() {
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
                <div className="flex flex-col items-center">
                  <Image src={service.image} alt={service.title} width={100} height={100} className="h-24 md:w-32 md:h-32 object-contain" />
                  <p className="mt-2 text-center bg-gray-500/75 p-2 text-balance text-white ">{service.title.toUpperCase()}</p>
                </div>
              ))
            }

          </div>
        </div>
      </div>
    </>
  )
}
