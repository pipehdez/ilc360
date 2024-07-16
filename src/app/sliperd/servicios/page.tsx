import Benefits from '@/components/benefits'
import React from 'react'
import Image from 'next/image'
import Header from '../components/Header'
import Container from '@/components/container'
import Spacing from '@/app/comunicacion/components/spacing'

const benefitOneImg = '/img/adaptativa.jpg'

const benefit = [
  {
    title: "Evaluación de habilidades adaptativas",
    desc: "Las habilidades adaptativas son las capacidades que le permiten a una persona desenvolverse de manera efectiva en su vida diaria y en su entorno social. Estas habilidades son esenciales para la independencia y la integración efectiva en la sociedad.",
    image: benefitOneImg,
    imgPos: 'right'
  }
]

const servicios = [
  { id: 1, title: 'Comunicación', image: '/img/1.png', url: '/sliperd/servicios' },
  { id: 2, title: 'Vida en el hogar', image: '/img/2.png', url: '/sliperd/curriculum' },
  { id: 3, title: 'Autocuidado', image: '/img/3.png', url: '/sliperd/servicios' },
  { id: 4, title: 'Habilidades sociales', image: '/img/4.png', url: '/sliperd/curriculum' },
  { id: 5, title: 'Uso de recursos comunitarios', image: '/img/5.png', url: '/sliperd/servicios' },
  { id: 6, title: 'Autodirección', image: '/img/6.png', url: '/sliperd/curriculum' },
  { id: 7, title: 'Habilidades académicas funcionales', image: '/img/7.png', url: '/sliperd/servicios' },
  { id: 8, title: 'Trabajo', image: '/img/8.png', url: '/sliperd/curriculum' },
  { id: 9, title: 'Seguridad', image: '/img/9.png', url: '/sliperd/servicios' },
]

export default function Page() {
  return (
    <>
      <Header title="UNIENDO TALENTOS, CREANDO OPORTUNIDADES" description='.' />
      <Spacing />
      {
        benefit.map((item,index) => (
          <Benefits key={index} title={item.title} image={item.image} desc={item.desc} imgPos={item.imgPos} />
        ))
      }
      <Spacing />
      <Container className="flex flex-wrap lg:gap-10 lg:flex-nowrap bg-white shadow-lg rounded-lg">
        <div className="container mx-auto flex flex-col items-center justify-center py-10">
          <div className="flex flex-col items-center justify-center">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {
                servicios.map((service) => (
                  <div key={service.id} className="flex flex-col items-center">
                    <Image src={service.image} alt={service.title} width={100} height={100} className="h-24 md:w-32 md:h-32 object-contain" />
                    <p className="mt-2 text-center bg-gray-500/75 p-2 text-balance text-white ">{service.title.toUpperCase()}</p>
                  </div>
                ))
              }
              
            </div>
          </div>
        </div>
      </Container>
      <Spacing />
      <Container className="flex flex-wrap lg:gap-10 lg:flex-nowrap bg-white shadow-lg rounded-lg">
      <div className="container mx-auto flex flex-col items-center justify-center px-10">
        <p className="text-xl text-justify">Estas habilidades se evalúan mediante el protocolo CALS (protocolo de habilidades adaptativas), el cual se encarga de medir las destrezas adaptativas de las personas con y sin discapacidad, evaluando 4 áreas específicas: destrezas de la vida personal, en el hogar, en la comunidad y en lo laboral. El profesional que se encargará de esta evaluación es un terapeuta ocupacional, quien al finalizar la prueba genera un informe que incluye el perfil ocupacional del cliente, el cual es enviado al director de talento humano quien aprueba los resultados. Posteriormente se contacta nuevamente al cliente y se le informan los resultados del perfil ocupacional al que podría aplicar.</p>
      </div>
      </Container>
      <Spacing />
    </>
  )
}
