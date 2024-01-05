"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import menuIcon from '../../../public/assets/icons/bx-menu.svg'
import xIcon from '../../../public/assets/icons/bx-x.svg'

const Header = () => {

  const [showMenu, setShowMenu] = React.useState(false)

  const handleMenu = () => {
    setShowMenu(!showMenu)
  }

  const [changeColorNavbar, setChangeColorNavbar] = React.useState(false)

  const changeBgNavbar = () => {
    if (window.scrollY >= 90) {
      setChangeColorNavbar(true)
    } else {
      setChangeColorNavbar(false)
    }
  }

  window.addEventListener('scroll', changeBgNavbar)

  return (
    <div id='home'>
      {/* Mobile Menu */}
      <div className='fixed flex justify-between w-full lg:hidden'>
        <div className={`flex items-center justify-between p-6 w-full ${changeColorNavbar ? 'active' : 'navbar'}`}>
          <Link 
            href="/"
            className='text-2xl font-semibold uppercase'
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
          <ul className="fixed w-full h-screen bg-white">
            <div className='flex justify-end p-6 cursor-pointer'>
              <Image 
                onClick={handleMenu}
                src={xIcon} 
                width={40}
                height={40}
                alt='close icon' 
              />
            </div>
            <li onClick={handleMenu} className='py-8 text-center text-3xl font-semibold uppercase text-[#160e24]'><Link href="#">Home</Link></li>
            <li onClick={handleMenu} className='py-8 text-center text-3xl font-semibold uppercase text-[#160e24]'><Link href="#about">About</Link></li>
            <li onClick={handleMenu} className='py-8 text-center text-3xl font-semibold uppercase text-[#160e24]'><Link href="#contact">Contact Us</Link></li>
          </ul>
        </nav>
      </div>

      {/* Desktop Menu */}
      <div className={`fixed w-full max-lg:hidden ${changeColorNavbar ? 'active' : 'navbar'}`}>
        <div className='flex items-center justify-between py-6 max-w-[90%] mx-auto w-full'>
          <Link 
            href="/"
            className='text-2xl font-semibold uppercase'
            >
              lily
          </Link>
          <nav>
            <ul className="flex w-full">
              <li className='text-center text-xl font-semibold uppercase text-[#160e24]'><Link href="#">Home</Link></li>
              <li className='pl-7 text-center text-xl font-semibold uppercase text-[#160e24]'><Link href="#about">About</Link></li>
              <li className='pl-7 text-center text-xl font-semibold uppercase text-[#160e24]'><Link href="#contact">Contact Us</Link></li>
            </ul>
          </nav>
        </div>

      </div>
    </div>
  )
}

export default Header