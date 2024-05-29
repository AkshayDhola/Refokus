import React from 'react'
import Product from './Product';

function Products() {
    var products=[
        {n:"Arqitel",desc:"With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",live:true},
        {n:"Cula",desc:"We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",live:true},
        {n:"YIR 2021",desc:"We celebrated our first year with a Showcase Website that reflects on a year of growth, building an awesome team & culture, defining our brand, and more.",live:true},
        {n:"Weglot",desc:"We made a fun and engaging showcase website for our friends from Weglot to promote their no-code translation solution in Germany.",live:true},
        {n:"Candid Health",desc:"A complete redesign of a health-startup website, followed by cutting edge development.",live:true},
        {n:"Showcase",desc:"Our OMR22 Masterclass teaches how to create a showcase website, and we made a showcase website about showcase websites to promote the art of showcasing.",live:true}
    ];
  return (
    <div className='mt-32'>
        {products.map((e,index)=><Product val={e}/>)}
        
    </div>
  )
}

export default Products