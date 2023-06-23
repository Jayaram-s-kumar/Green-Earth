import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './Home.scss'

function Home() {
  return (
    <>
      <Navbar active={'home'} />
      <div className='homecontainer'>Home</div>
    </>
  )
}

export default Home