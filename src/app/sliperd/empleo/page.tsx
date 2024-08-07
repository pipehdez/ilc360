'use client'
import Benefits from '@/components/benefits'
import React from 'react'
import Image from 'next/image'
import Header from '../components/Header'
import Spacing from '@/app/comunicacion/components/spacing'
import ResumeSection from '../components/ResumeSection'

const benefitOneImg = '/img/empleo.jpg'

const benefit = [
  {
    title: "Postúlate",
    desc: "SLIPERD oferta este servicio de manera digital. Buscando conectar a los empleadores con las personas en condición de discapacidad, mediante la publicación de vacantes y la postulación de hojas de vida. Además de ofrecer herramientas como perfiles de candidatos, alertas de empleo, y recursos adicionales para facilitar el proceso de búsqueda de empleo y contratación. ",
    image: benefitOneImg,
    imgPos: 'right'
  }
]

export default function Page() {
  return (
    <>
      <ResumeSection
        title="Bolsa de empleo"
        description=""
        image="url('/img/bolsa-empleo-2.jpg')" // bolsa-empleo-2.jpg
        onClick={() => console.log('hola')}
        textButton='Postula tu vacante'
      />
      <Spacing />
      {
        benefit.map((item,index) => (
          <Benefits key={index} title={item.title} image={item.image} desc={item.desc} imgPos={item.imgPos} />
        ))
      }
      <Spacing />
    </>
  )
}
