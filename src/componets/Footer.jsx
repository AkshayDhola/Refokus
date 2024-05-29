import React from 'react'

function Footer() {
  return (
    <div className='w-full'>
        <div className='max-w-screen-lg mx-auto py-10 flex gap-32'>
            <div className='basis-1/2'>
                <h1 className='text-white text-9xl leading-none tracking-tight font-semibold'>refokus.</h1> 
            </div>
            <div className='basis-1/2 gap-4 flex'>
                <div className='basis-1/3'>
                    <h4 className='mb-10 text-zinc-500 capitalize'>Socials</h4>
                    {["Instagram","Twitter","Linkedin"].map((e,i)=><a className='block capitalize mt-3 text-zinc-600' key={i}>{e}</a>)}
                </div>
                <div className='basis-1/3'>
                    <h4 className='mb-10 text-zinc-500 capitalize'>Socials</h4>
                    {["Instagram","Twitter","Linkedin"].map((e,i)=><a className='block capitalize mt-3 text-zinc-600' key={i}>{e}</a>)}
                </div>
                <div className='basis-1/2'>
                    <p>Refokus is a pioneering digital agency driven by design and empowered by technology.</p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Footer