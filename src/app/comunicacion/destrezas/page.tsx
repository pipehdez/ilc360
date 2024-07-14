"use client";
import Link from "next/link";
import Image from "next/image";

export default function Page() {

  return (
    // crea unos botones para ir a cada actividad con icons (AUXILIAR DE OFICINA, ASISTENTE DE PANADERÍA, MESERO)
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold p-5">Destrezas</h1>
        <p className="text-3xl p-5">Selecciona una actividad</p>
      </div>
      <div className="flex grid-cols-3 flex-row items-center justify-center gap-10 m-10">
              <div className="flex flex-col mx-auto items-center text-xl font-bold text-center justify-center">
          <Link href="/comunicacion/destrezas/oficina">
            <Image
              src="/img/hablando.jpg"
              alt="Auxiliar de oficina"
              width={200}
              height={100}
              className="h-50"
            />
            Auxiliar de oficina
          </Link>
        </div>
              <div className="flex flex-col mx-auto items-center text-xl font-bold text-center justify-center">
          <Link href="/comunicacion/destrezas/panaderia">
            <Image
              src="/img/harina.jpg"
              alt="Asistente de panadería"
              width={200}
              height={100}
              className="h-50"
            />
            Asistente de panadería
          </Link>
        </div>
        <div className="flex flex-col mx-auto items-center text-xl font-bold text-center justify-center">
          <Link href="/comunicacion/destrezas/mesero">
            <Image
              src="/img/toalla.jpg"
              alt="Mesero"
              width={200}
              height={100}
              className="h-50"
            />
            Mesero
          </Link>
        </div>
      </div>
    </div>
  );
}
