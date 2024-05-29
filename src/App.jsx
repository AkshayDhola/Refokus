import React from 'react'
import Navbar from './componets/Navbar'
import Work from './componets/Work'
import Strapes from './componets/Strapes'
import Products from './componets/Products'
import Marques from './componets/Marques'
import Cards from './componets/Cards'
import Footer from './componets/Footer'

function App() {
  return (
    <div className='w-full  bg-zinc-900 text-white'>
      <Navbar/>
      <Work/>
      <Strapes/>
      <Products/>
      <Marques/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default App