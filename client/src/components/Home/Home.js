import React from 'react'
import NNavbar from '../navbar/navbar'
import Carrousel from '../carrousel/carrousel'
import './Home.css'
import Footer from '../fotter/Fotter'

function Home() {
  return (
    <div className="imagback">
    <NNavbar/>
    <Carrousel/>
    <Footer/>

    </div>

  )
}

export default Home