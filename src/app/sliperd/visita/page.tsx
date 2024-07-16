'use client';
import Benefits from '@/components/benefits'
import React, { useState } from 'react'
import Image from 'next/image'
import Header from '../components/Header'
import Spacing from '@/app/comunicacion/components/spacing'
import ResumeSection from '../components/ResumeSection'

const benefitOneImg = '/img/asesoramiento.jpg'

const benefit = [
  {
    title: "",
    desc: "Servicio que oferta registro del desempeño laboral de las personas en condición de discapacidad en la ejecución del cargo asignado por la empresa. Si la empresa contrata este servicio, el profesional encargado asistirá una vez cada tres meses para realizar un seguimiento a través de un video del rendimiento laboral. ",
    image: benefitOneImg,
    imgPos: 'right'
  }
]

export default function Page() {

  return (
    <>
      {/* <Header title='Visita virtual' description='Contratar servicio' /> */}
      <ResumeSection
        title="Visita virtual"
        description=""
        image="url('/img/visita-virtual.jpg')" // bolsa-empleo.jpg
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
