
'use client'

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Moonbami_Logo from '@public/assets/images/tsukiwa-logo.png';
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

  const handleHomeScroll = () => {
    const profileSection = document.querySelector('#profile');
    if(profileSection) profileSection.scrollIntoView({ behavior: 'smooth' })
  }
  const handleAboutScroll = () => {
    const aboutSection = document.querySelector('#about');
    if(aboutSection) aboutSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header id={ header } className="" >
        <Link href="/" className="logo text-white text-4xl tracking-[-0.4px] transition-all">
          <Image className="flex items-center w-[50px]" src={ Moonbami_Logo } alt="Moonbami Logo"/>
        </Link>
        <nav className="flex justify-evenly">
          <li className="nav-list" onClick={ handleHomeScroll }>Home</li>
          <li className="nav-list">About</li>
          <li className="nav-list">Stacks</li>
          <li className="nav-list">Projects</li>
          <li className="nav-list">Contact</li>
        </nav>
        <Link className="github" href="https://github.com/MoonbamiOfficial" target="_blank">
          <Image className="w-[50px] h-[50px]" src={ GitHub_Logo } alt="GitHub Logo" />
        </Link>
    </header>
  )
}

export default Header;