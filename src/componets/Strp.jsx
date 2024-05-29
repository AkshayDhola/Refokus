import React from 'react'

function Strp({val}) {
  return (
    <div className='w-1/6 px-4 py-3 border-[1.2px] border-zinc-600 flex justify-between items-center'>
        <img src={val.url} alt="" />
        <span className='font-semibold'>{val.n}</span>
    </div>
  )
}

export default Strp