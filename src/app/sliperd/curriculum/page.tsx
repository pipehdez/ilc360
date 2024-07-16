'use client'
import Spacing from '@/app/comunicacion/components/spacing'
import Container from '@/components/container'
import Resume from '@/components/resume'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import ResumeSection from '../components/ResumeSection'

export default function Page() {
  const { status } = useSession()
  const route = useRouter()
  if (status === 'unauthenticated') {
    route.push('/plans')
  }

  return (
    <>
      <ResumeSection
        title="Hoja de Vida"
        description="Son documentos que recopilan y presentan de manera organizada la información personal, académica y profesional de una persona. Su propósito principal es proporcionar a los empleadores una visión clara y concisa de las cualificaciones, experiencias y habilidades de un candidato para un puesto de trabajo."
        image="url('/img/empleo.jpg')" 
        
        />

      <Spacing />
      <Container className="flex flex-col flex-wrap lg:gap-10 lg:flex-nowrap bg-white shadow-lg rounded-lg">
        <p className="text-2xl font-bold py-5 text-center">Tipos de hojas de vida que asesoramos:</p>
        <div className="grid grid-cols-1 gap-4 py-3 px-10">
          <p className="text-2xl font-bold ">• Cronológica:</p>
          <p className="text-2xl">Este tipo de hoja de vida incluirá la información académica y  laboral,ordenándose de lo más reciente a lo más antiguo.</p>
        </div>
        <div className="grid grid-cols-1 gap-4 py-3 px-10">
          <p className="text-2xl font-bold ">• Funcional:</p>
          <p className="text-2xl">Este tipo de hoja de vida  resalta  las habilidades que han desarrollado en temas específicos.</p>
        </div>
        <div className="grid grid-cols-1 gap-4 py-3 px-10">
          <p className="text-2xl font-bold ">• Combinada:</p>
          <p className="text-2xl">Este formato,enlaza la información laboral y académica de manera cronológica y destaca las habilidades adquiridas o desarrolladas por temas específicos.</p>
        </div>
      </Container>
      <Spacing />
      <Container className="flex flex-col flex-wrap lg:gap-10 lg:flex-nowrap bg-white shadow-lg rounded-lg">
        <Resume />
      </Container>
      <Spacing />
      <Container className="flex flex-col flex-wrap lg:gap-10 lg:flex-nowrap bg-white shadow-lg rounded-lg">
        <div className="container mx-auto flex flex-col  justify-center py-10 p-5 my-10">
          <p className="text-2xl font-bold py-5 text-center">“Crea tu propia hoja de vida o contrata un asesor quien guíe tu proceso de creación. Descárgala y súbela a tu perfil, para que puedas disfrutar del proceso de empleabilidad.”</p>
        </div>
      </Container>
      <Spacing />
    </>
  )
}







