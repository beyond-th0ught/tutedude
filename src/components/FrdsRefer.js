import React from 'react'
import TitleNav from './TitleNav'
import NavBottom from './NavBottom'
import ReferralCode from './ReferralCode'
import Enrolled from './Enrolled'
import WalletBal from './WalletBal'

function FrdsRefer({stateChaange}) {
  return (
    <div className='w-full flex justify-center'>
        <div className='w-[90%] md:w-[70%]'>
            <div className="">
                <TitleNav/>
                <div className='flex justify-between items-center'>
                    <ReferralCode/>
                    <WalletBal/>
                </div>
                <Enrolled/>
                <NavBottom stateChaange={stateChaange} />
            </div>
        </div>
    </div>
  )
}

export default FrdsRefer