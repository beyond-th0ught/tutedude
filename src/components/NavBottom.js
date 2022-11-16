import React from 'react'

function NavBottom({stateChaange}) {
  return (
    <div className='font-[poppins] hover:cursor-pointer font-medium text-[#800080] text-md space-y-2  pt-6 pb-12 '>
        <h1 onClick={stateChaange} className="cursor-pointer">Friends Who Enrolled</h1>
        <h1> Terns & Conditions</h1>
    </div>
  )
}

export default NavBottom