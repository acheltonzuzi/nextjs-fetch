import React from 'react'
import Navbar from './Navbar'

function Main({children}) {
  return (
    <div>
        <Navbar></Navbar>
        <div>{children}</div>
    </div>
  )
}

export default Main