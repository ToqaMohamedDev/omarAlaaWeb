import React from 'react'
import Container from '../Container'
import Image from 'next/image'
import ImageHero from './ImageHero'
import TextHero from './TextHero'
export default function Hero() {
  return (
    <Container>
        <div className='min-h-screen flex md:flex-row-reverse flex-col items-center justify-evenly overflow-x-hidden'>
         <TextHero/>
        <ImageHero/>
        </div>
    </Container>
  )
}
