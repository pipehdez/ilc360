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
        <p className="text-3xl p-5">Haz que el aprendizaje sea divertido.</p>
      </div>
      <Container className="flex flex-wrap lg:gap-10 lg:flex-nowrap bg-white shadow-lg rounded-lg justify-center">
      <div className="flex grid-cols-3 flex-row items-center justify-center gap-10 m-10">
          <div className="flex flex-col items-center border-2 hover:border-gray-600/15 border-white">
          <Link href="/comunicacion/competencias/simples">
            <Image
              src="/img/ACTIVIDAD3.jpg"
              alt="Frases simples"
              width={200}
              height={100}
              className="h-50"
            />
            FRASES SIMPLES
          </Link>
        </div>
          <div className="flex flex-col items-center border-2 hover:border-gray-600/15 border-white">
          <Link href="/comunicacion/competencias/compuestas">
            <Image
              src="/img/ACTIVIDAD4.jpg"
              alt="COMPETENCIAS SOCIOLINGÜÍSTICAS"
              width={200}
              height={100}
              className="h-50"
            />
            COMPETENCIAS <br />
            SOCIOLINGÜÍSTICAS
          </Link>
          </div>
      </div>
      </Container>
      <Spacing />
    </div>
  )
}
