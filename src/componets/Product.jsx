import React from 'react'
import Button from './Button'

function Product({val}) {
  return (
    <div className='w-full py-20 text-white'>
        <div className='max-w-screen-lg mx-auto flex items-center justify-between'>
            <h1 className='text-6xl capitalize font-semibold '>{val.n}</h1>
            <div className='dets w-1/3'>
                <p className='mb-10'>{val.desc}</p>
                {val.live && <Button n={"Live Website"}/>}
            </div>
        </div>
    </div>
  )
}

export default Product