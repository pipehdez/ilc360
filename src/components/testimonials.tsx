import Image from "next/image";
import React from "react";
import Container from "./container";

export default function Testimonials() {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-start w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal py-5">
              <Mark>Misión</Mark>
            </p>
            <p className="text-xl leading-normal ">
              Proporcionar servicios de empleabilidad para personas con discapacidad, empleando un enfoque inclusivo que permita crear vínculos entre diversas empresas. Queremos romper los estándares de contratación e inclusión para que todos tengan la oportunidad de trabajar y demostrar sus habilidades en un ambiente inclusivo y colaborativo.
            </p>
          </div>
        </div>
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-start w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal py-5">
              <Mark>Visión</Mark>
            </p>
            <p className="text-xl leading-normal ">
              Para el año 2033 seremos una empresa que promueva una sociedad inclusiva, siendo los pioneros en la creación de redes colaborativas enfocándonos en la innovación que logre fomentar la inclusión laboral de Personas con Discapacidad. Nuestra meta será siempre establecer un entorno donde las empresas y las Personas con Discapacidad trabajen juntas, logrando un reconocimiento a nivel nacional e internacional por nuestras contribuciones en este campo.
            </p>
          </div>
        </div>
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-start w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal py-5">
              <Mark>Valores</Mark>
            </p>
            <p className="text-xl leading-normal ">
              Compromiso y confidencialidad: Protegemos la confidencialidad de la información de nuestros clientes, manejando todos los datos con máxima seguridad y privacidad.
              <br />
              <br />
              <strong>Honestidad:</strong> Actuamos con transparencia, integridad y ética, asegurando la confianza y el respeto de nuestros clientes.
              <br />
              <br />
              <strong>Calidad:</strong> Ofrecemos servicios de alta calidad, cumpliendo con los estándares más exigentes.
              <br />
              <br />
              <strong>Responsabilidad social:</strong> Generamos un impacto positivo en la comunidad con discapacidad, promoviendo bienestar social, inclusión laboral y desarrollo sostenible.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}



function Mark(props: any) {
  return (
    <>
      {" "}
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
}
