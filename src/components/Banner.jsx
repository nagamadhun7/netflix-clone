import React from 'react'
import '../styles/banner.css'
const Banner = () => {

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0,n-1) + '...' : string
  }

  return (
    <header style={{
        backgroundImage: `url('https://cdn.arstechnica.net/wp-content/uploads/2022/07/netflix.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
    }}>
        <div className="banner-container">
            <h1 className="banner-title">Movie name</h1>
            <div className="banner-buttons">
                <button className='banner-button'>Play</button>
                <button className='banner-button'>My List</button>
            </div>
            <h1 className="banner-description">{truncate(`Movie description`,150)}</h1>
        </div>

        <div className='banner-fadeBtm' />
    </header>
  )
}

export default Banner