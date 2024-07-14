'use client';
import Benefits from '@/components/benefits'
import React, { useState } from 'react'
import Image from 'next/image'
import Header from '../components/Header'

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
      <Header title='Asesoramiento jurídico empresarial' description='Contratar servicio' />
      {
        benefit.map((item,index) => (
          <Benefits key={index} title={item.title} image={item.image} desc={item.desc} imgPos={item.imgPos} />
        ))
      }
    </>
  )
}
