import React from 'react'
import Container from '../Container'
import Social from './socials'

export default function Footer() {
  return (
    <footer className="bg-secondary py-12 ">
    <Container>
       <div className="flex flex-col items-center justify-between">
          <Social
            containerStyles="flex gap-x-6 mx-auto xl:mx-0 mb-4"
            iconStyles="text-primary dark:text-white/70 text-[20px] hover:text-white dark:hover:text-primary transition-all"
          />
          <div className="text-muted-foreground">
            Copyright &copy; Alaa Taha. All rights reserved.
          </div>
        </div>
    </Container>
    </footer>
  )
}
