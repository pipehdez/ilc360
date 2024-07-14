import Benefits from '@/components/benefits'
import React from 'react'
import Image from 'next/image'

const benefitOneImg = '/img/adaptativa.jpg'

const benefit = [
  {
    title: "Evaluación de habilidades adaptativas",
    desc: "Las habilidades adaptativas son las capacidades que le permiten a una persona desenvolverse de manera efectiva en su vida diaria y en su entorno social. Estas habilidades son esenciales para la independencia y la integración efectiva en la sociedad.",
    image: benefitOneImg,
    imgPos: 'right'
  }
]
export default function Page() {
  return (
    <>
      {
        benefit.map((item,index) => (
          <Benefits key={index} title={item.title} image={item.image} desc={item.desc} imgPos={item.imgPos} />
        ))
      }
      {/* seccion de titulo con icono */}
      <div className="container mx-auto flex flex-col items-center justify-center py-10">
        <div className="flex flex-col items-center justify-center">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="bg-white rounded-lg p-5 content-center ">
              <Image src="/img/1.png" alt="empleo" width={200} height={200} />
              <p className="py-5">Comunicación</p>
            </div>
            <div className="bg-white rounded-lg p-5 justify-center ">
              <Image src="/img/2.png" alt="hoja de vida" width={200} height={200} />
              <p className="py-5">Vida en el hogar</p>
              </div>
            <div className="bg-white rounded-lg p-5">
              <Image src="/img/3.png" alt="capacitaciones" width={200} height={200} />
              <p className="py-5">Autocuidado</p>
              </div>
            <div className="bg-white rounded-lg p-5">
              <Image src="/img/4.png" alt="empleo" width={200} height={200} />
              <p className="py-5">Habilidades sociales</p>
            </div>
            <div className="bg-white rounded-lg p-5">
              <Image src="/img/5.png" alt="hoja de vida" width={200} height={200} />
              <p className="py-5">Uso de recursos comunitarios</p>
            </div>
            <div className="bg-white rounded-lg p-5">
              <Image src="/img/6.png" alt="capacitaciones" width={200} height={200} />
              <p className="py-5">Autodirección</p>
            </div>
            <div className="bg-white rounded-lg p-5">
              <Image src="/img/7.png" alt="hoja de vida" width={200} height={200} />
              <p className="py-5">Habilidades académicas funcionales</p>
            </div>
            <div className="bg-white rounded-lg p-5">
              <Image src="/img/8.png" alt="capacitaciones" width={200} height={200} />
              <p className="py-5">Trabajo</p>
            </div>
            <div className="bg-white rounded-lg p-5">
              <Image src="/img/9.png" alt="capacitaciones" width={200} height={200} />
              <p className="py-5">Seguridad</p>
            </div>
          </div>
        </div>
      </div>
      {/* texto explicativo */}
      <div className="container mx-auto flex flex-col items-center justify-center py-10">
        <p className="text-xl text-center">Estas habilidades se evalúan mediante el protocolo CALS (protocolo de habilidades adaptativas), el cual se encarga de medir las destrezas adaptativas de las personas con y sin discapacidad, evaluando 4 áreas específicas: destrezas de la vida personal, en el hogar, en la comunidad y en lo laboral. El profesional que se encargará de esta evaluación es un terapeuta ocupacional, quien al finalizar la prueba genera un informe que incluye el perfil ocupacional del cliente, el cual es enviado al director de talento humano quien aprueba los resultados. Posteriormente se contacta nuevamente al cliente y se le informan los resultados del perfil ocupacional al que podría aplicar.</p>
      </div>
    </>
  )
}
