import React from 'react'
import TitleNav from './TitleNav'
import NavBottom from './NavBottom'
import ReferralCode from './ReferralCode'
import Enrolled from './Enrolled'

function FrdsRefer() {
  return (
    <div className='w-full flex justify-center'>
        <div className='w-[90%] md:w-[70%]'>
            <div className="">
                <TitleNav/>
                <ReferralCode/>
                <Enrolled/>
                <NavBottom/>
            </div>
        </div>
    </div>
  )
}

export default FrdsRefer