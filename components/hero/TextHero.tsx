import React from 'react'
import Social from '../footer/socials'
import Link from 'next/link'
import { Button } from '../ui/button'
import { Download, Send } from 'lucide-react'

export default function TextHero() {
  return (
    <div  className='md:w-1/2 md:text-right text-center flex flex-col md:items-end items-center'>
    <h1 className='text-[22px] font-bold text-primary'>اللــغـه الـعــربية</h1>
    <h2 className='text-[55px] font-bold '>عــمـر عــرفة</h2>
    <p className='text-muted-foreground text-lg  font-light text-base  max-w-[550px]'> سيكون العميل  الاختيار، أن يتحمل مسؤوليات مزايا مخترعه الحكيم وأن يعميه. وفيه الخطأ الذي يمنع رد إنكارهم .</p>
    <div className="flex flex-col gap-y-3 md:flex-row gap-x-3  my-6">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact Me
                  <Send size={18} />
                </Button>
              </Link>
              <Link href="https://www.mediafire.com/file/okjzop08zocf2s8/alaataha.apk/file">
                <Button variant="secondary" className="gap-x-2">
                  Download
                  <Download size={18} />
                </Button>
              </Link>
            </div>
    <Social
     containerStyles="flex gap-x-6"
    iconStyles="text-foreground text-[22px] hover:text-primary transition-all"
    />
    </div>
  )
}
