import React from 'react'

import Link from 'next/link'

const SubMenu = () => {

  const [show, setShow] = React.useState(false)

  const handleShow = () => {
    setShow(!show)
  }

  return (
    <>
      <div className={`flex pl-[50px] w-full h-auto bg-[var(--color-primary)]`}>
        <ul className='w-full'>
          <li className='py-2 w-full text-sm'><Link href="/about" className='block'>sub menu #1</Link></li>
        </ul>
      </div> 
    </>
  )
}

export default SubMenu
