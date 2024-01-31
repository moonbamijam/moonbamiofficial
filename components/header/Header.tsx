'use client'

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

// Assets
import Moonbami_Logo from '@public/tsukiwa-logo.png'
import Button from "./Button";
import SubButton from "./SubButton";

// Components
import Anchor from "./Anchor";
import SubAnchor from "./SubAnchor";
import ThemeSwitchBtn from "@components/ThemeSwitchBtn";

// Fontawesome
import { FaBars } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaCaretRight } from "react-icons/fa"
import { FaCaretDown } from "react-icons/fa";

const Header = () => {
  const [ isMenuActive, setIsMenuActive ] = useState(false)
  const [ isHomeDropdownActive, setIsHomeDropdownActive ] = useState(false)
  const [ isAnimeDropdownActive, setIsAnimeDropdownActive ] = useState(false)
  const [ isGamesDropdownActive, setIsGamesDropdownActive ] = useState(false)
  const [ isHobbiesDropdownActive, setIsHobbiesDropdownActive ] = useState(false)
  const [ isMusicDropdownActive, seetIsMusicDropdowenActive ] = useState(false)
  const [ scrollHeaderBg, setScrollHeaderBg ] = useState("unscrolled-header-bg")
  const [ scrollHeader, setScrollHeader ] = useState("unscrolled-header")

  const handleScrollHeader = () => {
    if(window.scrollY < 100) return setScrollHeader("unscrolled-header")
    else if(window.scrollY > 100) return setScrollHeader("scrolled-header")
  }
  const handleScrollHeaderBg = () => {
    if(window.scrollY < 100) return setScrollHeaderBg("unscrolled-header-bg")
    else if(window.scrollY > 100) return setScrollHeaderBg("scrolled-header-bg")
  }

  const handleScrollIntoView = (scrollInto: string) => {
    const section = document.querySelector(scrollInto)
    if(section) section.scrollIntoView({ behavior: 'smooth' })
  }

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive)
  }
  const toggleHomeDropdown = () => {
    setIsHomeDropdownActive(!isHomeDropdownActive)
    setIsAnimeDropdownActive(false)
    setIsGamesDropdownActive(false)
    setIsHobbiesDropdownActive(false)
    seetIsMusicDropdowenActive(false)
  }
  const toggleAnimeDropdown = () => {
    setIsHomeDropdownActive(false)
    setIsAnimeDropdownActive(!isAnimeDropdownActive)
    setIsGamesDropdownActive(false)
    setIsHobbiesDropdownActive(false)
    seetIsMusicDropdowenActive(false)
  }
  const toggleGamesDropdown = () => {
    setIsHomeDropdownActive(false)
    setIsAnimeDropdownActive(false)
    setIsGamesDropdownActive(!isGamesDropdownActive)
    setIsHobbiesDropdownActive(false)
    seetIsMusicDropdowenActive(false)
  }
  const toggleHobbiesDropdown = () => {
    setIsHomeDropdownActive(false)
    setIsAnimeDropdownActive(false)
    setIsGamesDropdownActive(false)
    setIsHobbiesDropdownActive(!isHobbiesDropdownActive)
    seetIsMusicDropdowenActive(false)
  }
  const toggleMusicDropdown = () => {
    setIsHomeDropdownActive(false)
    setIsAnimeDropdownActive(false)
    setIsGamesDropdownActive(false)
    setIsHobbiesDropdownActive(false)
    seetIsMusicDropdowenActive(!isMusicDropdownActive)
  }

  const dropdown = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    const handleDropdowns = ({ target }: Event) => {
      if(!dropdown.current?.contains(target as Node)) {
        setIsMenuActive(false)
        setIsHomeDropdownActive(false)
        setIsAnimeDropdownActive(false)
        setIsGamesDropdownActive(false)
        setIsHobbiesDropdownActive(false)
        seetIsMusicDropdowenActive(false)
      }
    }
    document.addEventListener('mousedown', handleDropdowns)
    document.addEventListener('scroll', handleScrollHeader)
    document.addEventListener('scroll', handleScrollHeaderBg)
    return () => {
      document.removeEventListener('mousedown', handleDropdowns)
      document.removeEventListener('scroll', handleScrollHeader)
      document.removeEventListener('scroll', handleScrollHeaderBg)
    }
  }, []);

  return (
    <>
      <div className={`header-bg w-full h-[60px] z-[100] fixed top-0 ${ scrollHeaderBg } `}></div>
      <header ref={ dropdown } className={`${ scrollHeader } container h-[60px] w-full z-[100] fixed top-0 left-[50%] translate-x-[-50%] px-[30px] md:px-[50px] xl:px-[100px] 2xl:px-[200px] flex justify-between items-center `}>
        <Link href="/" id="brand" className="flex items-center gap-4 [&>img]:hover:animate-pulse ">
          <Image priority src={ Moonbami_Logo } alt="" className="rounded-full p-1 bg-black dark:bg-transparent w-[40px] " />
          <h1 className="hidden md:block font-bold text-sm">Moonbami</h1>
        </Link>
        <div className="user-options flex items-center gap-2">
          <button onClick={ toggleMenu } id="menu" className={` w-[40px] h-[40px] flex lg:hidden justify-center items-center text-xl rounded-full hover:bg-electric-pink dark:hover:bg-electric-pink ${ isMenuActive? 'bg-electric-pink' : 'dark:bg-transparent' } ${ isMenuActive? 'bg-electric-pink' : 'bg-rich-black' } `}>
            {isMenuActive? <FaBarsStaggered /> : <FaBars /> }
          </button>
          <div className="lg:hidden">
            <ThemeSwitchBtn />
          </div>
        </div>
        <nav className="hidden lg:flex items-center h-full ">
          <Anchor state={ isHomeDropdownActive } onClick={ toggleHomeDropdown } href={"/"} name={"home"} >
          {isHomeDropdownActive && (
            <>
              <SubAnchor onClick={ () => handleScrollIntoView('#about') } name={"about"} />
              <SubAnchor onClick={ () => handleScrollIntoView('#stack') } name={"stack"} />
              <SubAnchor onClick={ () => handleScrollIntoView('#project') } name={"project"} />
              <SubAnchor onClick={ () => handleScrollIntoView('#contact') } name={"contact"} />
            </>)}
          </Anchor>
          <Anchor state={ isAnimeDropdownActive } onClick={ toggleAnimeDropdown } href={"/anime"} name={"anime"} >
          {isAnimeDropdownActive && (
            <>
              <SubAnchor onClick={ () => handleScrollIntoView('#favorites') } name={"favorites"} />
              <SubAnchor onClick={ () => handleScrollIntoView('#watching') } name={"watching"} />
              <SubAnchor onClick={ () => handleScrollIntoView('#waifus') } name={"waifus"} />
            </>)}
          </Anchor>
          <Anchor state={ isGamesDropdownActive } onClick={ toggleGamesDropdown } href={"/games"} name={"games"} >
          {isGamesDropdownActive && (
            <>
              <SubAnchor onClick={ () => handleScrollIntoView('#profiles') } name={"profiles"} />
              <SubAnchor onClick={ () => handleScrollIntoView('#playing') } name={"playing"} />
              <SubAnchor onClick={ () => handleScrollIntoView('#favorites') } name={"favorites"} />
            </>)}
          </Anchor>
          <Anchor state={ isHobbiesDropdownActive } onClick={ toggleHobbiesDropdown } href={"/hobbies"} name={"hobbies"} >
          {isHobbiesDropdownActive && (
            <>
              <SubAnchor onClick={ () => handleScrollIntoView('#current') } name={"current"} />
            </>)}
          </Anchor>
          <Anchor state={ isMusicDropdownActive } onClick={ toggleMusicDropdown } href={"/music"} name={"music"} >
          {isMusicDropdownActive && (
            <>
              <SubAnchor onClick={ () => handleScrollIntoView('#spotify') } name={"spotify"} />
              <SubAnchor onClick={ () => handleScrollIntoView('#favorites') } name={"favorites"} />
            </>)}
          </Anchor>
          <ThemeSwitchBtn />
        </nav>
      </header>
      {isMenuActive && (
        <>
          <nav ref={ dropdown } id="main" className={` fixed  top-[60px] w-full z-[100] flex lg:hidden flex-col  px-[30px] md:px-[50px] xl:px-[100px] 2xl:px-[200px] pt-[20px] pb-[40px] gap-2 ${ scrollHeaderBg } `}>
            <Button href={"/"} state={ isHomeDropdownActive } onClick={ toggleHomeDropdown } icon={ isHomeDropdownActive? <FaCaretDown /> : <FaCaretRight /> } name={"home"} />
            {isHomeDropdownActive && (
              <>
                <SubButton onClick={ () => handleScrollIntoView('#about') } name={"about"} />
                <SubButton onClick={ () => handleScrollIntoView('#stack') } name={"stack"} />
                <SubButton onClick={ () => handleScrollIntoView('#project') } name={"projects"} />
                <SubButton onClick={ () => handleScrollIntoView('#contact') } name={"contact"} />
              </>)}
            <Button href={"anime"} state={ isAnimeDropdownActive } onClick={ toggleAnimeDropdown } icon={ isAnimeDropdownActive? <FaCaretDown /> : <FaCaretRight /> } name={"anime"} />
            {isAnimeDropdownActive && (
              <>
                <SubButton onClick={ () => handleScrollIntoView('#favorites') } name={"favorites"} />
                <SubButton onClick={ () => handleScrollIntoView('#watching') } name={"watching"} />
                <SubButton onClick={ () => handleScrollIntoView('#waifus') } name={"waifus"} />
              </>)}
            <Button href={"games"} state={ isGamesDropdownActive } onClick={ toggleGamesDropdown } icon={ isGamesDropdownActive? <FaCaretDown /> : <FaCaretRight /> } name={"games"} />
            {isGamesDropdownActive && (
              <>
                <SubButton onClick={ () => handleScrollIntoView('#profiles') } name={"profiles"} />
                <SubButton onClick={ () => handleScrollIntoView('#playing') } name={"playing"} />
                <SubButton onClick={ () => handleScrollIntoView('#favorites') } name={"favorites"} />
              </>)}
            <Button href={"hobbies"} state={ isHobbiesDropdownActive } onClick={ toggleHobbiesDropdown } icon={ isHobbiesDropdownActive? <FaCaretDown /> : <FaCaretRight /> } name={"hobbies"} />
            {isHobbiesDropdownActive && (
              <>
                <SubButton onClick={ () => handleScrollIntoView('#current') } name={"current"} />
              </>)}
            <Button href={"music"} state={ isMusicDropdownActive } onClick={ toggleMusicDropdown } icon={ isMusicDropdownActive? <FaCaretDown /> : <FaCaretRight /> } name={"music"} />
            {isMusicDropdownActive && (
              <>
                <SubButton onClick={ () => handleScrollIntoView('#spotify') } name={"current"} />
                <SubButton onClick={ () => handleScrollIntoView('#favorites') } name={"current"} />
              </>)}
          </nav>
          <div className="screen-dim w-screen h-screen fixed z-[99] bg-black opacity-70 dark:opacity-50 backdrop-blur-sm  "></div>
        </>
      )}
    </>
  )
}

export default Header;