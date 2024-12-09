'use client'
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaBookReader } from 'react-icons/fa';
import { Button } from '../ui/button';
import { IoEnter } from 'react-icons/io5';

interface LevelItemProps {
    text:string,
}
export default function LevelItem({text}:LevelItemProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['0 1', '1 1'],
      });
      const  scaleProgress=useTransform(scrollYProgress,[0,1],[0.8,1])
      const  opacityProgress=useTransform(scrollYProgress,[0,1],[0.6,1])
      const  yProgress=useTransform(scrollYProgress,[0,1],[200,0])
  return (
    <motion.div
    ref={ref}
    style={
        {
          scale:scaleProgress,
          opacity:opacityProgress,
          y:yProgress,
        }
      }
    className='flex flex-col gap-2 items-center justify-center bg-secondary  p-5 m-5 rounded-2xl  border-gray-800 hover:border-primary border-[1px] hover:scale-110 transition-all duration-75'
     >
    <FaBookReader className='text-white' />
    <h1 className='text-white text-center font-bold'>
        {text}
    </h1>
    <p className='text-gray-400 text-center w-[150]'>اختيار العميل يتلقى خدمات مكتشف حكيم ويعمى نفسه. ويخطئ من يمنع إنكار سبب التعلق.</p>
    <Button variant="secondary" className="gap-x-2 hover:text-primary">
         أشترك
        <IoEnter size={18} />
    </Button>
</motion.div>
  )
}
