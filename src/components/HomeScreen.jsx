import React from 'react'

import '../styles/homeScreen.css'
import Navbar from './Navbar'
import Banner from './Banner'

const HomeScreen = () => {
  return (
    <div className='homeScreen'>
        <Navbar />
        <Banner />
    </div>
  )
}

export default HomeScreen