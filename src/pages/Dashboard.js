import React from 'react'
import Navbar from '../components/Navbar'
import Content from '../components/Content'

function Dashboard() {
  return (
    <>
    <Navbar />
    <div className='pt-2'>
    <Content />
    </div>
    </>
  )
}

export default Dashboard