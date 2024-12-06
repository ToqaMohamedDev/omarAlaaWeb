'use client';
import useScrollprogress from "@/hooks/useScrollProgress";
import { motion } from "framer-motion";

const variants={
 hidden:{opacity:0},
 enter:{opacity:1},
};
interface TemplateProps{
    children:React.ReactNode
}
const Template=({children}:TemplateProps)=>{
    const completion= useScrollprogress();
    return <>
    <motion.main
     variants={variants}
      initial='hidden'
      animate='enter' 
      transition={{type:'liner',delay:0.2, duration:0.4}}>{children}
      </motion.main>
         <span style={{transform:`translateX(${completion - 100}%)`}} className='fixed z-50 bg-primary h-1 top-0 right-0
             left-0 transition-all duration-700'></span>
            {/* <div className="h-[4000px]"></div> */}
    </>
}
    
 export default Template;