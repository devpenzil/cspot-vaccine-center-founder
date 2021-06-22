import React, { useState } from 'react'
import SearchByPin from './SearchByPin/SearchByPin'
import NavBar from './NavBar/NavBar'
import Footer from './Footer/Footer'
import './App.css'

function App() {
  

  return (
    <div>
      <NavBar></NavBar>
      <SearchByPin></SearchByPin>
      <Footer></Footer>
    </div>
  )
}

export default App
