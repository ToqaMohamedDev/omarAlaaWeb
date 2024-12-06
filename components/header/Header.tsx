'use client';

import React, { useEffect, useRef } from 'react';
import Container from '../Container'; // تأكد من أن هذا المكون يعمل بشكل صحيح
import gsap from 'gsap';
import ThemeSwitcher from '../switch/ThemeSwitcher';
import Logo from './Logo';
import Nav from './Nav';


export default function Header() {
    return (
        <Container>
            <div className='flex h-[70px] items-center justify-between'>
                <div className='flex gap-5'>
                    <Logo />
                    <ThemeSwitcher />
                </div>
                <Nav
                    containerstyles="hidden md:flex gap-x-8 items-center"
                    linkStyle="relative hover:text-primary transition-all"
                    underlinkStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
                />
            </div>
        </Container>
    );
}
