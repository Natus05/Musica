import React from 'react'
import Appnav from './Appnav'
import Personal from './Personal'
import Topnav from './Topnav'

function Navbar() {
  return (
    <div>
        <div className=' ml-[27px] pt-[23.5px]'>
          <img className='w-[34px] h-[34px]' src="images/logo.png" alt="logo" />
        </div>
   <Topnav />
   <Appnav />
   <Personal />
    </div>
  )
}

export default Navbar