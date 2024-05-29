import React from 'react'
import Crad from './Crad'

function Cards() {
  return (
    <div className='w-full'>
    <div className='max-w-screen-lg m-auto py-20 flex gap-3'>
        <Crad width={"basis-1/3"} start={false} info={true}/>
        <Crad width={"basis-2/3"} start={true} info={false}/>

    </div>
    </div>
  )
}

export default Cards