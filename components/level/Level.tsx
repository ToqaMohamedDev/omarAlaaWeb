'use client'
import React from 'react'
import Container from '../Container'
import LevelItem from './LevelItem';


export default function Level() {

    const data = [
        {
            text: 'الصف الثالث'
        },

        {
            text: 'الصف الثاني'
        },
        {
            text: 'الصف الاول'
        },

    ];
    return (
        <Container>
            <div className="flex md:text-[35px] text-[25px] items-center justify-center  after:content-[''] after:bg-primary after:rounded-full after:text-[35px] after:m-2 after:p-1.5 pb-10">
                الصفوف الثانوية</div>
            <div className=' grid md:grid-cols-3 grid-cols-1'>
                {data.map((item, index) => {
                    return <LevelItem key={index} text={item.text}/>
                })}
            </div>
        </Container>
    )
}
