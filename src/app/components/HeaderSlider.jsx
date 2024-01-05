"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import menuIcon from '../../../public/assets/icons/bx-menu.svg'
import xIcon from '../../../public/assets/icons/bx-x.svg'

const HeaderSlider = () => {

  const [showMenu, setShowMenu] = React.useState(false)

  const handleMenu = () => {
    setShowMenu(!showMenu)
  }

  const [changeColorNavbar, setChangeColorNavbar] = React.useState(false)

  const changeBgNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY >= 550) {
        setChangeColorNavbar(true)
      } else {
        setChangeColorNavbar(false)
      }
    }
  }

  window.addEventListener('scroll', changeBgNavbar)

  return (
    <div id='home'>
      {/* Mobile Menu */}
      <div className="relative flex flex-col justify-between w-full h-[600px] bg-[url('/assets/images/slide.jpg')] bg-cover bg-center z-10 lg:hidden">
        <div>
          <div className={`fixed flex items-center justify-between p-6 w-full ${changeColorNavbar ? 'active' : 'navbar'}`}>
            <Link 
              href="/"
              className='text-2xl font-semibold uppercase text-[var(--color-primary)]'
              >
                lily
            </Link>
            <Image 
              onClick={handleMenu}
              className="cursor-pointer"
              src={menuIcon} 
              width={40}
              height={40}
              alt="menu icon" 
            />
          </div>
          <nav className={`absolute left-[-1000px] w-full h-screen transition-all delay-300 bg-white ${showMenu ? 'left-[0px]' : ''}`}>
            <ul className="fixed w-full h-screen bg-black">
              <div className='flex justify-end p-6 cursor-pointer'>
                <Image 
                  onClick={handleMenu}
                  src={xIcon} 
                  width={40}
                  height={40}
                  alt='close icon' 
                />
              </div>
              <li onClick={handleMenu} className='py-8 text-center text-base font-semibold uppercase text-[--color-primary]'><Link href="#home">Home</Link></li>
              <li onClick={handleMenu} className='py-8 text-center text-base font-semibold uppercase text-[--color-primary]'><Link href="#menu">Menu</Link></li>
              <li onClick={handleMenu} className='py-8 text-center text-base font-semibold uppercase text-[--color-primary]'><Link href="#organization">Organization</Link></li>
              <li onClick={handleMenu} className='py-8 text-center text-base font-semibold uppercase text-[--color-primary]'><Link href="#contact">Contact Us</Link></li>
            </ul>
          </nav>
        </div>
        <div className='flex flex-col mb-[250px] w-full'>
          <h2 className='w-full text-7xl text-center italic text-white capitalize'>lily</h2>
          <p className='text-4xl text-center text-white uppercase'>restaurant</p>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className={`relative max-lg:hidden h-[600px] bg-[url('/assets/images/slide.jpg')] bg-cover bg-center z-10`}>
        <div className=''>
          <div className={`fixed w-full flex items-center justify-between py-6 px-20 ${changeColorNavbar ? 'active' : 'navbar'}`}>
            <Link 
              href="/"
              className='text-2xl font-semibold uppercase text-[var(--color-primary)]'
              >
                lily
            </Link>
            <nav>
              <ul className="flex w-full">
                <li className='text-center text-base font-semibold uppercase text-[var(--color-primary)]'><Link href="#home">Home</Link></li>
                <li className='pl-7 text-center text-base font-semibold uppercase text-[var(--color-primary)]'><Link href="#menu">Menu</Link></li>
                <li className='pl-7 text-center text-base font-semibold uppercase text-[var(--color-primary)]'><Link href="#organization">Organization</Link></li>
                <li className='pl-7 text-center text-base font-semibold uppercase text-[var(--color-primary)]'><Link href="#contact">Contact Us</Link></li>
              </ul>
            </nav>
          </div>
          <div className='flex flex-col justify-center pt-[240px] w-full'>
            <h2 className='w-full text-7xl text-center italic text-white capitalize'>lily</h2>
            <p className='text-4xl text-center text-white uppercase'>restaurant</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderSlider