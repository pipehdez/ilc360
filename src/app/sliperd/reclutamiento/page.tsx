import Benefits from '@/components/benefits'
import React from 'react'
import Image from 'next/image'
import Header from '../components/Header'

const benefitOneImg = '/img/reclutamiento.jpg'

const benefit = [
  {
    title: "",
    desc: "Este servicio busca atraer y evaluar candidatos potenciales para cubrir vacantes de trabajo específicas. Todas las organizaciones requieren empleados con perfiles específicos, lo cual impacta directamente en la eficiencia,  productividad y éxito de la empresa.",
    image: benefitOneImg,
    imgPos: 'right'
  }
]

export default function Page() {
  return (
    <>
      <Header title='Reclutamiento y selección del personal' description='Contrata tu servicio' />
      {
        benefit.map((item,index) => (
          <Benefits key={index} title={item.title} image={item.image} desc={item.desc} imgPos={item.imgPos} />
        ))
      }
    </>
  )
}
