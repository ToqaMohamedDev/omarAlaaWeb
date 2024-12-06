'use client'
import React, { useRef } from 'react'
import bag from '@/public/bag.png'
import book from '@/public/book.png'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger);

export default function BagAnimation() {
   const bagRef = useRef(null);
   const bagImgRef = useRef(null);
   const book1Ref = useRef(null);
   const book2Ref = useRef(null);
   const book3Ref = useRef(null);
   const booksRef = useRef(null);

   useGSAP(() => {
       const bag = bagRef.current;
       const bagImg = bagImgRef.current;
       const book1 = book1Ref.current;
       const book2 = book2Ref.current;
       const book3 = book3Ref.current;
       const books = booksRef.current;

       if (!bag || !bagImg || !book1 || !book2 || !book3 || !books) return;

       const mm = gsap.matchMedia(); // إنشاء Media Query
       
       mm.add("(min-width: 1024px)", () => {
           const tl = gsap.timeline({
               defaults: { duration: 1 },
               scrollTrigger: {
                   trigger: bag,
                   start: 'top center',
                   end: '+=300',
                   scrub: true,
               }
           });
           tl.to(bagImg, { rotate: 180 }, 0)
             .fromTo(book1, {width:0,height:0, scaleX: 0.3, y: 0, x: 0 }, {width:'50px', height:'150px', y: 300, x: -350, scaleX: 1 }, 1)
             .fromTo(book2, {width:0,height:0, scaleX: 0.3, y: 0, x: 0 }, { width:'50px', height:'150px',y: 300, x: 0, scaleX: 1 }, 1)
             .fromTo(book3, {width:0,height:0, scaleX: 0.3, y: 0, x: 0 }, {width:'50px', height:'150px', y: 300, x: 350, scaleX: 1 }, 1)
             .to(book1,{width:"250px"},2)
             .to(book2,{width:"250px"},2)
             .to(book3,{width:"250px"},2)
             .to(books,{text:'35px'});
       });

       mm.add("(max-width: 1024px)", () => {
           const tl = gsap.timeline({
               defaults: { duration: 1 },
               scrollTrigger: {
                   trigger: bag,
                   start: 'top center',
                   end: '+=300',
                   scrub: true,
               }
           });

           tl.to(bagImg, { rotate: 180 }, 0)
             .fromTo(book1, {width:0,height:0, scaleX: 0.3, y: 0, x: 0 }, {width:'50px', height:'150px',  y: 200, x: 0, scaleX: 1 }, 1)
             .fromTo(book2, {width:0,height:0, scaleX: 0.3, y: 0, x: 0 }, {width:'50px', height:'150px',  y: 400, x: 0, scaleX: 1 }, 1)
             .fromTo(book3, {width:0,height:0, scaleX: 0.3, y: 0, x: 0 }, {width:'50px', height:'150px',  y: 600, x: 0, scaleX: 1 }, 1)    
             .to(book1,{width:"300px"},2)
             .to(book2,{width:"300px"},2)
             .to(book3,{width:"300px"},2)
             .to(books,{text:'35px'});
       });
       return () => mm.revert();
   }, []);

   return (
       <div className='bag'>
           <div className='in-bag' ref={bagRef}>
               <Image src={bag} ref={bagImgRef} className='bag-img' alt='BAG' />
               <div ref={booksRef} className='books text-[0px]'>
                   <div  ref={book1Ref} className='book-1' ><p>الصف الاول</p></div>
                   <div  ref={book2Ref} className='book-2' ><p>الصف الاول</p></div>
                   <div  ref={book3Ref} className='book-3' ><p>الصف الاول</p></div>
               </div>
           </div>
       </div>
   );
}
