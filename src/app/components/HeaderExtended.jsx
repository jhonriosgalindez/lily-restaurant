"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import SubMenu from './SubMenu'

import menuIcon from '../../../public/assets/icons/bx-menu.svg'
import xIcon from '../../../public/assets/icons/bx-x.svg'
import arrowIcon from '../../../public/assets/icons/bxs-down-arrow.svg'

const HeaderExtended = () => {

  const [showMenu, setShowMenu] = React.useState(false)

  const handleMenu = () => {
    setShowMenu(!showMenu)
  }

  const [subMenu, setSubMenu] = React.useState(true)

  const handleSubMenu = () => {
    setSubMenu(!subMenu)
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
    <>
      {/* Mobile Menu */}
      <div className={`fixed flex justify-between w-full lg:hidden ${changeColorNavbar ? 'active' : 'navbar'}`}>
        <div className={`flex items-center justify-between p-6 w-full`}>
          <Link 
            href="/"
            className='text-2xl font-semibold uppercase'
            >
              logo extended
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
        <div>
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
              <li className='py-8 w-full h-full text-left text-3xl font-semibold uppercase text-[#160e24] overflow-x-hidden'>
                <div className='flex items-center justify-between mb-4 px-6'>
                  <Link href="#" onClick={handleMenu}>Home</Link>
                  <Image src={arrowIcon} onClick={handleSubMenu} className={`cursor-pointer origin-center transition-all ${subMenu ? 'origin-center rotate-90 transition-all' : ''}`} width={20} />
                </div>
                <div className={`flex ${subMenu ? 'hidden' : ''}`}>
                  <div className={`w-full h-auto ${subMenu ? 'hidden' : ''}`} onClick={handleMenu}>
                    <SubMenu onClick={handleSubMenu} />
                  </div>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className={`fixed w-full max-lg:hidden ${changeColorNavbar ? 'active' : 'navbar'}`}>
        <div className='flex items-center justify-between py-6 max-w-[90%] mx-auto'>
          <Link 
            href="/"
            className='text-2xl font-semibold uppercase'
            >
              logo
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
    </>
  )
}

export default HeaderExtended