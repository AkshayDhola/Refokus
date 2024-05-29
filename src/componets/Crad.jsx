import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

function Crad({width,start,info}) {
  return (
    <div className={`${width} bg-zinc-800 p-3 rounded-xl min-h-[20rem] flex flex-col justify-between hover:bg-violet-500`}>
        <div className='w-full'>
        <div className='w-full flex items-center justify-between'>
            <h5 className='text-zinc-600'>Up Next: News</h5>
            <FaArrowRight/>
        </div>
        <h1 className='text-xl font-medium'>Who We Are</h1>
        </div>
        <div className='w-full down mt-[13rem]'>
            {start && (<>
                <h1 className='text-7xl font-bold leading-none tracking-tighter'>Start Our Project</h1>
                <button className='rounded-full py-2 px-5 border-[1.5px] border-zinc-600 mt-5'>Contact us</button>
            </>)}
            {(info) && <h1 className='text-zinc-600'>Explore what drives our team</h1>}
        </div>
    </div>
  )
}

export default Crad