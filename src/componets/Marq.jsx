import React from 'react'

function Marq({imgurl}) {
  return (
    <div className='flex w-full py-8 gap-20 whitespace-nowrap overflow-hidden'>
        {imgurl.map(url=><img src={url} className='w-24 flex-shrink-0'/>)}
        {imgurl.map(url=><img src={url} className='w-24 flex-shrink-0'/>)}
    </div>
  )
}

export default Marq