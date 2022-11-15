import React from 'react'
import Logo from '../assets/logo.png'
import Vector from '../assets/Vector.png'
import DownArrow from '../assets/VectorDownArr.png'

function NavTop() {
  return (
    <div className='flex justify-between items-center  p-1'>
        <div >
            <img src={Logo} className="h-16 w-40 hover:cursor-pointer" />
        </div>
        <div className='grid grid-cols-3 gap-5 font-[poppins] hover:cursor-pointer font-medium text-[#80008040]'>
            <h1>My Assignment</h1>
            <h1>Chat with Mentor</h1>
            <div className='flex text-[#800080] items-center'>
                <img src={Vector} className="w-5 h-5 mr-2"/>
                <h1 className='flex items-center '>
                    ProfileName
                    <img src={DownArrow} className="ml-1 w-2.5 h-2"/>
                </h1>
            </div>
        </div>
    </div>
  )
}

export default NavTop