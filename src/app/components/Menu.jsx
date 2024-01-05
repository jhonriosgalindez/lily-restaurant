import React from 'react'

const Menu = () => {
  return (
    <>
      <section id='menu' className='section mt-[100px]'>
        <div className='mx-auto w-full max-w-[90%] xl:max-w-[1280px]'>
          <h2 className='title'>menu</h2>
          <p className='subtitle'>for enjoyment</p>
          <div className='flex flex-wrap gap-4 py-10 w-full md:grid md:grid-rows-3 md:grid-flow-col'>
            <article className="card bg-[url('/assets/images/menu-breakfast.jpg')]">
              <h3 className='absolute bottom-0'>breakfast</h3>
            </article>
            <article className="card bg-[url('/assets/images/menu-appetizer.jpg')]">
              <h3 className='absolute bottom-0'>appetizer</h3>
            </article>
            <article className="card bg-[url('/assets/images/menu-salads.jpg')]">
              <h3 className='absolute bottom-0'>salads</h3>
            </article>
            <article className="card bg-[url('/assets/images/menu-soups.jpg')]">
              <h3 className='absolute bottom-0'>soups</h3>
            </article>
            <article className="card bg-[url('/assets/images/menu-meat.jpg')]">
              <h3 className='absolute bottom-0'>meat</h3>
            </article>
            <article className="card bg-[url('/assets/images/menu-fish.jpg')]">
              <h3 className='absolute bottom-0'>fish</h3>
            </article>
            <article className="card bg-[url('/assets/images/menu-drinks.jpg')]">
              <h3 className='absolute bottom-0'>drinks</h3>
            </article>
            <article className="card bg-[url('/assets/images/menu-desserts.jpg')]">
              <h3 className='absolute bottom-0'>desserts</h3>
            </article>
            <article className="card bg-[url('/assets/images/menu-lunch.jpg')]">
              <h3 className='absolute bottom-0'>lunch</h3>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}

export default Menu