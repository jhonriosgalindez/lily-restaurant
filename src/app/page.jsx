"use client"

import React from 'react'
import useIntersection from './components/useIntersection'

import Image from 'next/image'
import Link from 'next/link'
import HeaderSlider from './components/HeaderSlider'
import Menu from './components/Menu'
import Organization from './components/Organization'
import Carousel from './components/Carousel'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

import formImage from '../../public/assets/images/find-a-table.jpg'


const copyright = new Date();

const update = copyright.getFullYear();

export default function Home() {

  // const [elementRef, isIntersecting] = useIntersection({
  //   threshold: 0.5
  // })

  return (
    <>
      <header>
        <HeaderSlider />
      </header>

      <main>
        <Menu />
        <Organization />
        <Carousel />
        <div id='contact' className='flex flex-col items-center justify-center max-w-[90%] my-[100px] mx-auto w-full h-[500px] overflow-hidden md:flex-row xl:max-w-[1280px]'>
          <div className='md:w-1/2'>
            <ContactForm />
          </div>
          <div className='relative h-[500px] md:w-1/2 max-md:hidden'>
            <Image 
              src={formImage}
              alt='reserve image'
              fill
              objectFit='cover'
            />
          </div>
        </div>
      </main>

      <footer className='section bg-[#e9dfd940]'>
        <Footer />
      </footer>

      <div className='text-span py-2 max-w-[90%] mx-auto max-md:flex max-md:flex-row max-md:gap-2 max-md:items-center md:flex justify-between md:gap-20 lg:max-w-[90%] lg:mx-auto xl:max-w-[1280px] capitalize'>
        {"copyright©" + update}
        <Link href="#">privacy police</Link>
        <Link href="#">user agreement</Link>
      </div>

      {/* <footer ref={elementRef} className={`${isIntersecting ? 'bg-white' : ''}`}>
        <Footer />
      </footer> */}
    </>
  )
}
