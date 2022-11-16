import React from 'react'
import Logo from '../assets/logo.png'
import Vector from '../assets/Vector.png'
import DownArrow from '../assets/VectorDownArr.png'

function NavTop() {
  return (
    <nav className='flex justify-between items-center  p-1'>
        <div >
            <img src={Logo} className="md:h-16 h-12 w-30 md:w-40 hover:cursor-pointer" />
        </div>
        <ul className='md:grid md:grid-cols-3  md:gap-5 font-[poppins] bg-slate-300 md:bg-white hover:cursor-pointer font-medium text-[#80008040]'>
            <li className='my-6 md:my-0'><a>My Assignment</a></li>
            <li className='my-6 md:my-0'><a>Chat with Mentor</a></li>
            <div className='flex my-6 md:my-0 text-[#800080] items-center'>
                <img src={Vector} className="w-5 h-5 mr-2"/>
                <li className='flex items-center '>
                    <a>ProfileName</a>
                    <img src={DownArrow} className="ml-1 w-2.5 h-2"/>
                </li>
            </div>
        </ul>
        <div className='bg-blue-700 p-2 px-3  h-[100%] font-medium md:hidden flex text-white rounded-lg items-center'>
            <a>ProfileName</a>
            <img src={DownArrow} className=" ml-1 w-2.5 h-2"/>
        </div>
    </nav>
  )
}

export default NavTop