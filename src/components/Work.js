import React from 'react'
import People from '../assets/people.png'
import referral from '../assets/referral.png'
import Wallet from '../assets/Wallet.png'
import discount from '../assets/discount.png'
import rupees from '../assets/rupees.png'

function Work() {
    const data = [
        {
            img:People,
            Title:"Invite your Friends",
            Discription:"Share the link tutedude.com with your friends"
        },
        {
            img:referral,
            Title:"Friend purchases any course",
            Discription:"Using your REFERRAL CODE in the payments page"
            
        },
        {
            img:rupees,
            Title:"You get ₹ 200 as referral money",
            Discription:"On total purchase the friend makes, into your wallet"
        },
        {
            img:discount,
            Title:"Your Friend gets ₹ 200 Off ",
            Discription:"On his overall fee on successful purchase using your referral code "   
        },
        {
            img:Wallet,
            Title:"Transfer money from wallet",
            Discription:"When the wallet balance reaches ₹200 or more, you can withdraw it"
        },
    ]
  return (
    <div className='py-[8%]'>
        <div className='font-[Poppin] text-[#800080] text-2xl font-semibold leading-9'>How does it work ?</div>
        <div className='md:flex md:flex-wrap md:h-[30%] px-4'>
            {data.map((val,index)=>{
                return(
                    <div className='flex items-center font-[Poppin] py-3 box-content md:w-[40%] '>
                        <div className='mr-6 rounded-full p-4 bg-[#D9D9D940]'><img src={val.img} className=" h-4 w-5"/></div>
                        <div className=' text-base leading-6'>
                            <h1 className='font-semibold '>{val.Title}</h1>
                            <h1 className=''>{val.Discription}</h1>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Work