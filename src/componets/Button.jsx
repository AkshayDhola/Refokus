import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

function Button({n="Get Started"}) {
  return (
    <div className='min-w-40 max-w-44 px-3 py-2 bg-zinc-100 rounded-full text-black flex items-center justify-between'>
        <span className='text-sm font-medium'>{n}</span>
        <FaArrowRight/>
    </div>
  )
}

export default Button