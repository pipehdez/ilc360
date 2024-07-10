"use client"

import Benefits from '@/components/benefits'
import PricingCard from '@/components/PricingCard'
import SectionTitle from '@/components/sectionTitle'
import Testimonials from '@/components/testimonials'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const benefitOneImg = '/img/description.jpg'
const benefitTwoImg = '/img/about.jpg'

const benefit = [
  {
    title: "",
    desc: "La inclusión laboral es un tema cada vez más relevante en nuestra sociedad, por ello, es importante reconocer el trabajo que empresas como SLIPERD están haciendo para promoverla. Esta plataforma en línea ofrece una oportunidad única para que personas con discapacidad puedan encontrar empleo en diferentes empresas, lo que les permitirá desarrollar sus habilidades y ser parte activa de la fuerza laboral dentro del país.",
    image: benefitOneImg,
    imgPos: 'right'
  },
  {
    title: "Quienes somos?",
    desc: "SLIPERD es una empresa legalmente constituida, capacitada en el área de la comunicación humana, el cual ofrece un espacio de interacción mediante su página web, donde permite establecer un vínculo sociolaboral entre una persona con discapacidad y diferentes empresas, generando así redes colaborativas para el trabajo, siendo sus principales atributos: generar una mayor empleabilidad mediante la bolsa de empleo y las capacitaciones referentes a temas de su interés como el desarrollo de habilidades comunicativas o la inclusión laboral. ",
    image: benefitTwoImg,
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
      <Testimonials />

      {/* pricing card content */}
      <div className="container mx-auto flex flex-row items-center justify-center py-10  ">
        <PricingCard
          title="Essential"
          price={selectMonthly ? "20.99" : "188.9"}
          storage="60 GB Storage"
          users="5"
          sendUp="5"
        />
        <PricingCard
          title="Premium"
          price={selectMonthly ? "40.99" : "388.9"}
          storage="120 GB Storage"
          users="10"
          sendUp="10"
        />
        <PricingCard
          title="Ultimate"
          price={selectMonthly ? "60.99" : "588.9"}
          storage="240 GB Storage"
          users="20"
          sendUp="20"
          />
      </div>
    </div>
  )
}