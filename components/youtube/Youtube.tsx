'use client';
import Container from '../Container';
import image from '@/public/al-aqsa-mosque.png';
import palestine from '@/public/palestine.png';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';
import { Button } from '../ui/button';
import { IoEnter } from 'react-icons/io5';
export default function Youtube() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['0 1', '1 1'],
  });

  const image1Scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const image1Opacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const image1Y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const imgY = useTransform(scrollYProgress, [0, 1], [300, 0]);
  const image1Rotate = useTransform(scrollYProgress, [0, 1], [45, 0]);

  const image2Opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const imageypacity = useTransform(scrollYProgress, [0, 1], [0, 220]);

  return (
    <div className="overflow-hidden">
      <Container>
        <div ref={containerRef} className="relative w-full h-[500px]">
          <motion.div
            className="z-1 w-[200px] h-[250px] absolute top-[50px] left-10"
            style={{
              scale: image1Scale,
              rotate:image1Rotate,
              y: imgY,
              opacity: image1Opacity,
            }}
          >
            <Image
              src={palestine}
              alt="Image 1"
              className="w-[200px] h-[250px] rounded-3xl"
            />
          </motion.div>

      
          <motion.div
            className="z-1 w-[200px] h-[250px] absolute top-5 right-10"
            style={{
             
              opacity: image2Opacity,
              y:imageypacity,
            }}
          >
            <Image
              src={image}
              alt="Image 2"
              className="w-[200px] h-[250px] rounded-3xl"
            />
          </motion.div>

          <div className="absolute flex flex-col gap-3 items-center justify-center w-full h-full z-2">
            <div className='overflow-hidden'>
            <motion.h1 
             style={{
              y:image1Y,
             }}
             className=' md:text-[35px]  text-[25px] font-bold'>كورس النحو</motion.h1>
            </div>
            <div className='overflow-hidden'>
            <motion.p 
             style={{
              y:image1Y,
             }}
            className='text-gray-400 text-[20px] w-[350px]
             text-center'>أقوي كورس نحو في اللغه العربية للصف الثالث الثانوي مع حل قطع وامتحانات  سابقه</motion.p>
            </div>
            <div className='overflow-hidden'>
             <motion.div
              style={{
                y:image1Y,
               }}
             >
                <Button className="gap-x-2">
                أشترك
              <IoEnter size={18} />
            </Button> 
             </motion.div>
              </div> 
          </div>
        </div>
      </Container>
    </div>
  );
}
