import React from 'react'

import Link from 'next/link'
import Image from 'next/image'

import facebookIcon from '../../../public/assets/icons/bxl-facebook.svg'
import twitterIcon from '../../../public/assets/icons/bxl-twitter.svg'
import youtubeIcon from '../../../public/assets/icons/bxl-youtube.svg'

const Footer = () => {
  return (
    <>
      <div className='p-6 max-w-[1280px] mx-auto text-center md:flex'>
        <section className='w-full text-2xl font-semibold uppercase max-md:pb-6'>
          lily
        </section>
        <section className='title flex flex-col w-full capitalize max-md:pb-6'>
          <Link href="#menu" className='pb-4'>menu</Link>
          <Link href="#banquets" className='pb-4'>banquets</Link>
          <Link href="#catering" className='pb-4'>catering</Link>
          <Link href="#companies" className='pb-4'>for companies</Link>
          <Link href="#contact">book table</Link>
        </section>
        <section className='flex flex-col w-full capitalize'>
          <article>
            <p>amstel 102</p>
            <p>101542 FDR Amsterdam</p>
            <p>monday - friday 8:00 - 18:00</p>
          </article>
          <article className='pt-6'>
            <p className='normal-case'>lilycontact@lily.com</p>
            <div className='flex flex-wrap items-center justify-center'>
              <Link href='https://web.facebook.com/' target='blank'><Image className='m-3' src={facebookIcon} width={30} /></Link>
              <Link href='https://twitter.com/' target='blank'><Image className='m-3' src={twitterIcon} width={30} /></Link>
              <Link href='https://www.youtube.com/' target='blank'><Image className='m-3' src={youtubeIcon} width={30} /></Link>
            </div>
          </article>
        </section>
      </div>
    </>
  )
}

export default Footer