"use client"
import Link from "next/link"
import Image from "next/image"
import Container from '@/components/container'
import Spacing from '../components/spacing'

export default function Page() {


  return (
    // crea unos botones para ir a cada actividad con icons (AUXILIAR DE OFICINA, ASISTENTE DE PANADERÍA, MESERO)
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold p-5">Agilidad</h1>
        <p className="text-3xl p-5">Haz que el aprendizaje sea divertido.</p>
      </div>
      <Container className="flex flex-wrap lg:gap-10 lg:flex-nowrap bg-white shadow-lg rounded-lg justify-center">
        <div className="flex flex-col items-center border-2 hover:border-gray-600/15 border-white">
        <div className="flex flex-col mx-auto items-center text-xl font-bold text-center justify-center">
          <Link href="/comunicacion/procesamiento/agilidad">
            <Image
              src="/img/computador.jpg"
              alt="Auxiliar de oficina"
              width={200}
              height={100}
              className="h-50"
            />
            AGILIDAD
          </Link>
        </div>
      </div>
      </Container>
      <Spacing />
    </div>
  )
}
