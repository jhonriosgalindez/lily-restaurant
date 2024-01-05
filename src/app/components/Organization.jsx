import React from 'react'

import Image from 'next/image'

import banquetsImage from '../../../public/assets/images/organization-banquets.jpg'
import companiesImage from '../../../public/assets/images/organization-companies.jpg'
import cateringImage from '../../../public/assets/images/organization-catering.jpg'

const Organization = () => {
  return (
    <>
      <section id='organization' className='section'>
        <div className='mx-auto w-full max-w-[90%] xl:max-w-[1280px]'>
          <h2 className='title'>organization</h2>
          <p className='subtitle'>pleasant memories</p>
          <div className='pt-12 flex flex-wrap gap-8'>
            <article className='w-full md:flex md:flex-wrap'>
              <div className='card-text bg-white md:w-1/2 md:flex md:flex-col md:items-center md:justify-center md:px-20'>
                <h4 id='banquets' className='title-card'>banquets</h4>
                <p className='text-span md:text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi in, laborum nihil voluptatibus ipsum perferendis assumenda nemo enim? Culpa, omnis voluptate.</p>
                <p className='text-span mt-10 underline decoration-dashed underline-offset-8'>Fill out the form</p>
              </div>
              <div className='relative h-[400px] md:w-1/2'>
                <Image 
                  src={banquetsImage}
                  fill
                  objectFit='cover'
                  alt='image banquets'
                />
              </div>
            </article>
            <article className='w-full md:flex md:flex-wrap  md:flex-row-reverse'>
              <div className='card-text bg-white md:w-1/2 md:flex md:flex-col md:items-center md:justify-center md:px-20'>
                <h4 id='companies' className='title-card'>for companies</h4>
                <p className='text-span md:text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi in, laborum nihil voluptatibus ipsum perferendis assumenda nemo enim? Culpa, omnis voluptate.</p>
                <p className='text-span mt-10 underline decoration-dashed underline-offset-8'>Fill out the form</p>
              </div>
              <div className='relative h-[400px] md:w-1/2'>
                <Image 
                  src={companiesImage}
                  fill
                  objectFit='cover'
                  alt='image banquets'
                />
              </div>
            </article>
            <article className='w-full md:flex md:flex-wrap'>
              <div className='card-text bg-white md:w-1/2 md:flex md:flex-col md:items-center md:justify-center md:px-20'>
                <h4 id='catering' className='title-card'>catering</h4>
                <p className='text-span md:text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi in, laborum nihil voluptatibus ipsum perferendis assumenda nemo enim? Culpa, omnis voluptate.</p>
                <p className='text-span mt-10 underline decoration-dashed underline-offset-8'>Fill out the form</p>
              </div>
              <div className='relative h-[400px] md:w-1/2'>
                <Image 
                  src={cateringImage}
                  fill
                  objectFit='cover'
                  alt='image banquets'
                />
              </div>
            </article>
          </div>
        </div>
      </section> 
    </>
  )
}

export default Organization
