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
    desc: "Se oferta este servicio a todas las empresas para asesorar la reducción de carga tributaria, a partir de la responsabilidad social, al contratar personas en condición de discapacidad.",
    image: benefitOneImg,
    imgPos: 'right'
  }
]

export default function Page() {

  return (
    <>
      {/* <Header title='Asesoramiento jurídico empresarial' description='Contratar servicio' /> */}
      <ResumeSection
        title="Asesoramiento jurídico empresarial"
        description=""
        image="url('/img/asesoramiento.jpg')" // capacitaciones-2.jpg
      // onClick={() => console.log('hola')}
      // textButton='Contratar servicio'
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
