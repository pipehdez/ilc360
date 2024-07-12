'use client'
import Benefits from '@/components/benefits'
import Separator from '@/components/separator'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const benefitOneImg = '/img/comunicacion1.jpg'
const benefitTwoImg = '/img/comunicacion2.jpg'
const benefitThreeImg = '/img/comunicacion3.jpg'

const benefit = [
    {
        title: "",
        desc: "El mundo laboral es muy competitivo, se requieren de habilidades blandas como lingüística, auditivas, lectoras, escriturales y comunicativas",
        image: benefitOneImg,
        imgPos: 'left'
    },
    {
        title: "",
        desc: "Para las personas en condición de discapacidad cognitiva, este aspecto es sumamente difícil, lo que conlleva a que no se contrate laboralmente. ",
        image: benefitTwoImg,
        imgPos: 'right'
    },
    {
        title: "",
        desc: "Las habilidades comunicativas deben permitir la accesibilidad, facilitar la convivencia y el entendimiento entre las personas sobre todo en el ambiente laboral aún más si hay personas en condición de discapacidad. La mayor parte del tiempo estamos en interacción con los demás como seres sociales que somos, por lo que es muy importante manejar buenas herramientas para mejorar las habilidades y competencias comunicativas. ",
        image: benefitThreeImg,
        imgPos: 'left'
    },
]; 
export default function Page() {
    const { status } = useSession()
    const route = useRouter()

    if (status === 'unauthenticated') {
        route.push('/comunicacion/plans')
    }
    return (
        <div className='w-full'>
            <OurPrograms />
            {
                benefit.map((item, index) => (
                    <Benefits key={index} title={item.title} image={item.image} desc={item.desc} imgPos={item.imgPos} />
                ))
            }
            <MissionVision />
            <ValuesSection />
            
        </div>
    )
}

const services = [
    { id: 1,title: 'Destrezas comunicativas',image: '/img/destrezas-comunicativas.jpeg',url: '/comunicacion/destrezas' },
    { id: 2,title: 'Procesamiento cognitivo',image: '/img/procesamiento-cognitivo.jpeg',url: '/comunicacion/procesamiento' },
    { id: 3,title: 'Competencias comunicativas',image: '/img/competencias-comunicativas.jpeg',url: '/comunicacion/competencias' },
]

const OurPrograms = () => {
    return (
        // flex flex-col md:flex-row bg-white shadow-lg rounded-lg p-8 mx-auto mb-10 justify-center max-w-screen-2xl
        <div className="flex flex-col bg-white shadow-lg rounded-lg items-center p-8 mx-auto  mb-10 max-w-screen-2xl">
            <h2 className="text-3xl font-bold mb-6">NUESTROS PROGRAMAS</h2>
            <Separator />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 w-full mt-10 ">
                {services.map((service) => (
                    !service.url ? (
                        <div key={service.id} className="flex flex-col items-center">
                            <img src={service.image} alt={service.title} className="h-24 md:w-32 md:h-32 object-contain" />
                            <p className="mt-2 text-center bg-gray-500/75 p-2 text-balance ">{service?.title}</p>
                        </div>) : (
                            <Link href={service.url} key={service.id} className='flex flex-col items-center mx-auto'>
                                <img src={service.image} alt={service.title} className="h-24 md:w-32 md:h-32 object-cover" />
                                <p className="mt-2 text-center bg-gray-500/75 p-2 text-balance ">{service.title}</p>
                        </Link>
                    )
                ))}
            </div>
        </div>
    )
}

const MissionVision = () => {
    return (
        <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg p-8 mx-auto mb-10 justify-center max-w-screen-2xl">
            <div className="md:w-2/5 p-4">
                <h2 className="text-2xl font-bold mb-4">Misión</h2>
                <Separator />
                <p className='text-justify'>
                    Facilitar la inclusión laboral y social de personas con discapacidad cognitiva mediante el desarrollo de herramientas innovadoras que fortalezcan su capacidad de comunicación en entornos laborales, promoviendo la igualdad de oportunidades y el respeto a la diversidad.
                </p>
            </div>
            <div className="md:w-2/5 p-4">
                <h2 className="text-2xl font-bold mb-4">Visión</h2>
                <Separator />
                <p className='text-justify'>
                    Ser líderes en la creación de soluciones tecnológicas accesibles y efectivas que mejoren la comunicación y la integración de personas con discapacidad cognitiva en el ámbito laboral, contribuyendo a la construcción de una sociedad más inclusiva y justa donde todos puedan desarrollar su potencial al máximo.
                </p>
            </div>
        </div>
    )
}


const values = [
    {
        id: 1,
        title: 'Responsabilidad',
    },
    {
        id: 2,
        title: 'Humanización',
    },
    {
        id: 3,
        title: 'Inclusión',
    },
    {
        id: 4,
        title: 'Integridad y Calidad',
    },
]

const ValuesSection = () => {
    return (
        <div className="flex flex-col items-center p-8 mx-auto bg-white shadow-lg rounded-lg mb-10 max-w-screen-2xl">
            <h2 className="text-3xl font-bold mb-6">Valores</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                {values.map((value) => (
                    <div key={value.id} className="flex flex-col items-center text-center p-4">
                        <div className=" p-2 rounded-full flex flex-row-4 justify-center gap-5 ">
                            <h3 className="text-xl font-semibold text-justify ">{value.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
