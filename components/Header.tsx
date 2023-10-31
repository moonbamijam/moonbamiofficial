
'use client'

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Moonbami_Logo from '@public/assets/images/logo-sample.png';
import GitHub_Logo from '@public/assets/images/github-mark-white.png';

const Header = () => {
  const [ header, setHeader ] = useState("header");
  const scrollEvent = () => {
    if(window.scrollY < 15) return setHeader("header");
    else if(window.scrollY > 15) return setHeader("header-changed");
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollEvent);
    return () => window.removeEventListener('scroll', scrollEvent);
  }, []);

  const handleProfileScroll = () => {
    const profileSection = document.querySelector('#profile');
    if(profileSection) profileSection.scrollIntoView({ behavior: 'smooth' })
  }
  const handleAboutScroll = () => {
    const aboutSection = document.querySelector('#about');
    if(aboutSection) aboutSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={ header } >
      <Link href="/" className="logo text-white flex items-center text-4xl tracking-[-0.4px] py-0 pl-[80px] pr-0 transition-all hover:text-electric-pink">
        <Image className="flex items-center py-0 pr-[80] pl-0 w-[50px] h-auto" src={ Moonbami_Logo } alt="Moonbami Logo"/>
      </Link>
      <nav className="pt-[47px] px-0 pb-0 flex justify-evenly w-[31.875rem]">
        <Link className="nav-link" href="/home" onClick={ handleProfileScroll }>Home</Link>
        <Link className="nav-link" href="/about" onClick={ handleAboutScroll }>About</Link>
        <Link className="nav-link" href="/stacks">Stacks</Link>
        <Link className="nav-link" href="/projects">Projects</Link>
        <Link className="nav-link" href="/contact">Contact</Link>
      </nav>
      <Link className="github flex items-center pl-[800px]" href="https://github.com/MoonbamiOfficial/MoonbamiOfficial" target="_blank">
        <Image className="w-[50px] h-auto" src={ GitHub_Logo } alt="GitHub Logo" />
      </Link>
    </header>
  )
}

export default Header;