import { a } from 'framer-motion/client'
import Image from 'next/image'
import React from 'react'

export default function Logo() {
  return (
    <a href="/">
        <Image
    src='/mousq.png'
    alt='Logo'
    width={50}
    height={50}
    />
    </a>
  )
}
