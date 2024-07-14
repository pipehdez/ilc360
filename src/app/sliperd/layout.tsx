"use client"
import { usePathname } from 'next/navigation'
import React from 'react'
import Footer from './components/Footer'


export default function SliperdLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const path = usePathname()

  return (
    <div className='p-0 w-full'>
      { children }
        <Footer />
    </div>
  )
}
