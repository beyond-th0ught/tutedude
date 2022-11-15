import React from 'react'
import Enrolled from './Enrolled'
import TitleNav from './TitleNav'
import NavBottom from './NavBottom'
import WithdrawBal from './WithdrawBal'
import Work from './Work'

function Main() {
  return (
    <div className='w-full flex justify-center'>
        <div className='w-[90%] md:w-[70%]'>
            <div className="">
                <TitleNav/>
                <NavBottom/>
            </div>
            <Enrolled />
            <WithdrawBal/>
            <Work/>
        </div>
    </div>
  )
}

export default Main