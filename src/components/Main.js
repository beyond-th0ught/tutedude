import React from 'react'
import Enrolled from './Enrolled'
import TitleNav from './TitleNav'
import NavBottom from './NavBottom'

function Main() {
  return (
    <div className='w-full flex justify-center'>
        <div className='w-[90%] md:w-[70%]'>
            <div className="pl-[10%] bg-pink-400">
                <TitleNav/>
                <NavBottom/>
            </div>
            <Enrolled />
        </div>
    </div>
  )
}

export default Main