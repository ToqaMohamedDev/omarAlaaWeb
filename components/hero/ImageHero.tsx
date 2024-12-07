import Image from 'next/image'
import React from 'react'
import logo from '@/public/logo.svg'

export default function ImageHero() {
  return (
   <div  className='md:w-1/2'>
     <Image
    src={logo}
    alt='Logo'

    /> 
   </div>
  )
}
