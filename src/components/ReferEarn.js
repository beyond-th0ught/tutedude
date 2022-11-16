import React from 'react'
import TitleNav from './TitleNav'
import NavBottom from './NavBottom'
import WithdrawBal from './WithdrawBal'
import Work from './Work'

function ReferEarn() {
  return (
    <div className='w-full flex justify-center'>
        <div className='w-[90%] md:w-[70%]'>
            <div className="">
                <TitleNav/>
                <WithdrawBal/>
                <Work/>
                <NavBottom/>
            </div>
        </div>
    </div>
  )
}

export default ReferEarn