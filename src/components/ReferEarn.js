import React from 'react'
import TitleNav from './TitleNav'
import NavBottom from './NavBottom'
import WithdrawBal from './WithdrawBal'
import Work from './Work'

function ReferEarn({stateChaange, State}) {
  return (
    <div className='w-full flex justify-center'>
        <div className='w-[90%] md:w-[70%]'>
            <div className="">
                <TitleNav State={State}/>
                <WithdrawBal/>
                <Work/>
                <NavBottom stateChaange={stateChaange}/>
            </div>
        </div>
    </div>
  )
}

export default ReferEarn