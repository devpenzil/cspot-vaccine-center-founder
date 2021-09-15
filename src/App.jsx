import React, { useState } from 'react'
import SearchByPin from './SearchByPin/SearchByPin'
import NavBar from './NavBar/NavBar'
import Footer from './Footer/Footer'

function App() {
  

  return (
    <div className="h-screen w-full bg-white">
      <NavBar></NavBar>
      <SearchByPin></SearchByPin>
      <Footer></Footer>
    </div>
  )
}

export default App
