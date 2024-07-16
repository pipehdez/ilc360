import Benefits from '@/components/benefits'
import React from 'react'
import Image from 'next/image'
import Header from '../components/Header'
import Container from '@/components/container'
import Spacing from '@/app/comunicacion/components/spacing'
import ResumeSection from '../components/ResumeSection'

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
    <ResumeSection 
      title="Evaluación de habilidades adaptativas" 
        description="Son documentos que recopilan y presentan de manera organizada la información personal, académica y profesional de una persona. Su propósito principal es proporcionar a los empleadores una visión clara y concisa de las cualificaciones, experiencias y habilidades de un candidato para un puesto de trabajo. Es por ello, que en el momento que decidimos postularnos para una oferta laboral, la hoja de vida entra a ser uno de los factores determinantes en los procesos de selección. El nivel de oportunidad para continuar avanzando en dichos procesos dependerá en gran medida de su correcta elaboración, ya que a través de este medio pueden presentarse y generar una primera impresión, además de resaltar aquellas habilidades, competencias y experiencias que puedan ubicar a la persona en una posición de ventaja frente a otras, para convertirse en un candidato atractivo para las empresas." 
        image="url('/img/habilidades.jpg')"
    />
      <Spacing />
      {
        benefit.map((item,index) => (
          <Benefits key={index} title={item.title} image={item.image} desc={item.desc} imgPos={item.imgPos} />
        ))
      }
      <Spacing />
      {/* boton descargar pdf ProtocoloHabilidadesAdaptativasAPAC.pdf */}
      <Container className="flex flex-wrap lg:gap-10 lg:flex-nowrap bg-white shadow-lg rounded-lg">
        <div className="container mx-auto flex flex-col items-center justify-center py-10">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-3xl font-bold mb-6">Protocolo de habilidades adaptativas</h2>
            <a href="/ProtocoloHabilidadesAdaptativasAPAC.pdf" download>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                Descargar
              </button>
            </a>
          </div>
        </div>
      </Container>
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
