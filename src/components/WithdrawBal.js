import React from 'react'
import ReferralCode from './ReferralCode'

function WithdrawBal() {
  return (
    <div className='grid lg:grid-cols-2 gap-9 h-[17.5%] '>
    <div className='flex lg:flex-col items-center md:h-full font-[Poppins] space-y-3  border-2 rounded-xl shadow-[#000000] shadow-lg'>
        <div className='grid lg:grid-cols-3 grid-cols-2  gap-14 text-center pb-[12%] pt-2 '>
            <div>
                <h1 className='text-[#800080] text-sm'>Referral Earning</h1>
                <h1 className=' text-3xl font-bold'>₹ 2,500</h1>
            </div>
            <div>
                <h1 className='text-[#800080] text-sm'>Total Referrals</h1>
                <h1 className=' text-3xl font-bold'>7</h1>
            </div>
            <div>
                <h1 className='text-[#800080] text-sm'>Wallet Balance</h1>
                <h1 className=' text-3xl font-bold'>₹ 500</h1>
            </div>
        </div>
        <div className='text-white bg-[#800080] w-[35%] rounded-3xl text-center text-base p-2'>Withdraw Balance</div>
    </div>
    <div>
        <ReferralCode/>
    </div>
    </div>
  )
}

export default WithdrawBal