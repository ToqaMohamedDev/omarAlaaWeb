import React from 'react'
import Container from '../Container'
import Image from 'next/image'
import logo from '@/public/logo.svg'
export default function Hero() {
  return (
    <Container>
        <div className='h-screen flex md:flex-row-reverse flex-col items-center justify-center'>
        <div  className='md:w-1/2'>asdasd</div>
          <Image
         src={logo}
         alt='Logo'
         className='md:w-1/2'
         /> 
        </div>
    </Container>
  )
}
