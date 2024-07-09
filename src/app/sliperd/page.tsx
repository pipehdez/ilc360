import Benefits from '@/components/benefits'
import SectionTitle from '@/components/sectionTitle'
import Subnavbar from '@/components/subnavbar'
import Testimonials from '@/components/testimonials'
import { title } from 'process'
import React from 'react'

const navigation = [
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
  return (
    <div className='w-full'>
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
      {
        benefit.map((item, index) => (
          <Benefits key={index} title={item.title} image={item.image} desc={item.desc} imgPos={item.imgPos} />
        ))
      }
      <Testimonials />
      {/* // footer Colombia, Cúcuta Norte de Santander, ig: @Sliperd, tel: 3016209944 */}
      <footer className="bg-gray-900 text-white text-center p-5">
        <p>Colombia, Cúcuta Norte de Santander, ig: @Sliperd, tel: 3016209944</p>
      </footer>

    </div>
  )
}