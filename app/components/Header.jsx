import React from 'react'
import Logo from './Logo'
const Header = () => {
  return (
    <div className='fixed inset-0 px-4 md:px-16 lg:px-10 py-4 z-10 bg-white h-fit '>
      <div className='w-full justify-between flex items-center'>
        <Logo />
        <button className='bg-black text-white px-8 py-2 rounded-md tracking-widest cursor-pointer active:scale-95 transition-all'>LOGIN</button>
      </div>
    </div>
  )
}

export default Header