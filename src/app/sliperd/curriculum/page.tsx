'use client'
import Resume from '@/components/resume'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function Page() {
  const { status } = useSession()
  const route = useRouter()
  if (status === 'unauthenticated') {
    route.push('/plans')
  }
  
  return (
    <>
      <ResumeSection />
    <div className="container mx-auto flex flex-col  justify-center py-10">
        <p className="text-2xl font-bold py-5 text-center">Tipos de hojas de vida que asesoramos:</p>
        <div className="grid grid-cols-1 gap-4 py-3">
          <p className="text-2xl font-bold ">• Cronológica:</p>
          <p className="text-2xl">Este tipo de hoja de vida incluirá la información académica y  laboral,ordenándose de lo más reciente a lo más antiguo.</p>
        </div>
      <div className="grid grid-cols-1 gap-4 py-3">
        <p className="text-2xl font-bold ">• Funcional:</p>
        <p className="text-2xl">Este tipo de hoja de vida  resalta  las habilidades que han desarrollado en temas específicos.</p>
      </div>
      <div className="grid grid-cols-1 gap-4 py-3">
        <p className="text-2xl font-bold ">• Combinada:</p>
        <p className="text-2xl">Este formato,enlaza la información laboral y académica de manera cronológica y destaca las habilidades adquiridas o desarrolladas por temas específicos.</p>
      </div>
    </div>
    
  
      <Resume />

      
    
    {/* lema final  */}
    <div className="container mx-auto flex flex-col  justify-center py-10 p-5 my-10">
        <p className="text-2xl font-bold py-5 text-center">“Crea tu propia hoja de vida o contrata un asesor quien guíe tu proceso de creación. Descárgala y súbela a tu perfil, para que puedas disfrutar del proceso de empleabilidad.”</p>
    </div>
    </>
  )
}

const ResumeSection = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/img/empleo.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center text-white p-8 max-w-2xl bg-black bg-opacity-50 rounded-lg">
        <h1 className="text-4xl font-bold mb-6">Hoja de vida</h1>
        <p className="mb-6">
          Son documentos que recopilan y presentan de manera organizada la información personal, académica y profesional de una persona. Su propósito principal es proporcionar a los empleadores una visión clara y concisa de las cualificaciones, experiencias y habilidades de un candidato para un puesto de trabajo.
        </p>
        <button className="mt-4 px-6 py-3 bg-gray-800 bg-opacity-70 rounded-lg hover:bg-opacity-90 transition duration-300" 
          // llamar al id
          // @ts-ignore
          onClick={() => document.getElementById('resume').scrollIntoView({ behavior: 'smooth' })}
        >
          Iniciar
        </button>
      </div>
    </div>
  )
}





