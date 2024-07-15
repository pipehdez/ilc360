"use client";
import Link from "next/link";
import Image from "next/image";
import Container from '@/components/container'
import Spacing from '../components/spacing'

export default function Page() {

  return (
    // crea unos botones para ir a cada actividad con icons (AUXILIAR DE OFICINA, ASISTENTE DE PANADERÍA, MESERO)
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold p-5">Destrezas</h1>
        <p className="text-3xl p-5">Selecciona una actividad</p>
      </div>
      <Container className="flex flex-wrap lg:gap-10 lg:flex-nowrap bg-white shadow-lg rounded-lg justify-center">
              <div className="flex flex-col items-center border-2 hover:border-gray-600/15 border-white">
          <Link href="/comunicacion/destrezas/oficina">
            <Image
              src="/img/hablando.jpg"
              alt="Auxiliar de oficina"
              width={100}
              height={100}
              className="h-24 md:w-32 md:h-32 object-contain"
            />
            Auxiliar de oficina
          </Link>
        </div>
              <div className="flex flex-col items-center border-2 hover:border-gray-600/15 border-white">
          <Link href="/comunicacion/destrezas/panaderia">
            <Image
              src="/img/harina.jpg"
              alt="Asistente de panadería"
              width={100}
              height={100}
              className="h-24 md:w-32 md:h-32 object-contain"
            />
            Asistente de panadería
          </Link>
        </div>
        <div className="flex flex-col items-center border-2 hover:border-gray-600/15 border-white">
          <Link href="/comunicacion/destrezas/mesero">
            <Image
              src="/img/toalla.jpg"
              alt="Mesero"
              width={100}
              height={100}
              className="h-24 md:w-32 md:h-32 object-contain"
            />
            Mesero
          </Link>
        </div>
      </Container>
      <Spacing />
      </div>
  );
}
