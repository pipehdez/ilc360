"use client"
import Link from "next/link"
import Image from "next/image"

export default function Page() {


  return (
    // crea unos botones para ir a cada actividad con icons (AUXILIAR DE OFICINA, ASISTENTE DE PANADERÍA, MESERO)
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <p className="text-3xl p-5">Haz que el aprendizaje sea divertido.</p>
      </div>
      <div className="flex grid-cols-3 flex-row items-center justify-center gap-10 m-10">
        <div className="flex flex-col mx-auto items-center text-xl font-bold text-center justify-center">
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
        <div className="flex flex-col mx-auto items-center text-xl font-bold text-center justify-center">
          <Link href="/comunicacion/competencias/compuestas">
            <Image
              src="/img/ACTIVIDAD4.jpg"
              alt="Frases compuestas"
              width={200}
              height={100}
              className="h-50"
            />
            COMPETENCIAS SOCIOLINGÜÍSTICAS
          </Link>
          </div>
      </div>
    </div>
  )
}
