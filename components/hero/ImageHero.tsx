'use client'
import Image from 'next/image'
import React from 'react'
import logo from '@/public/logo.svg'
import { motion } from 'framer-motion'

export default function ImageHero() {
  return (
   <motion.div
   initial={{ opacity: 0, x: -100 }} // بداية العنصر: شفاف ومتحرك للأعلى
   animate={{ opacity: 1, x: 0 }}  // الحالة النهائية: يظهر في مكانه
   exit={{ opacity: 0, x: -100 }}    // عند الخروج: يختفي للأسفل
   transition={{ duration: 1 }}
   className='md:w-1/2'>
     <Image
    src={logo}
    alt='Logo'

    /> 
   </motion.div>
  )
}
