import React, { useRef } from 'react'
import {Data} from './Data'
import '../assets/Style/hideScroll.css'

export default function Enrolled() {
  const ref = useRef();
  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };

  const Pills = (text) => {
    return (
      <div className="border border-white px-2 min-w-16 m-1 rounded-xl">{text}</div>
    )
  }

  const Caintaner = (val) => {
        
        return (
            <div className='bg-gradient-to-r mb-5 md:mb-0  from-[#FF864C] to-[#800080] min-w-[99%] m-1 md:mx-2 p-5 rounded-xl md:min-w-[25rem] xl:min-w-[25rem] md:max-w-[25rem] xl:max-w-[20rem] text-white'>
                <div className='flex justify-between'>
                  <div className='font-bold'>{val.Name}</div>
                  <div className='font-normal'>{val["Date"]}</div>
                </div>
                <div className='text-left my-2 mb-3'>Coures Enrolled ({val.Pills.length})</div>
                <div className='px-3  flex flex-wrap h-16 overflow-auto mb-7'>
                  {
                    val.Pills.map((val) => Pills(val))
                  }
                </div>
                <div className='flex items-center'>
                  <div className='text-md'>Referral Amount</div>
                  <div className='text-xl  ml-1 price-style'>₹{val.Price}</div>
                </div>
            </div>
        )
  }

  // const Data = [1, 2, 3, 4, 5, 6];
  return (
      <div className='relative w-full'>
          <div className='text-[#800080] text-left md:ml-3 text-xl font-bold my-5'>Friends who enrolled ({Data.length})</div>
        
          <div className=' rounded-3xl overflow-hidden w-full '>
            <div ref={ref} className='w-full md:flex md:overflow-x-auto scroll-smooth '>
                
                {
                    Data.map((val, index) => (Caintaner(val)))
                }
                
            </div>
          </div>

          <div className='p-1 hidden absolute z-40 left-[-1.5rem] top-[50%] bg-white text-black rounded-full w-12 h-12 font-extrabold md:flex justify-center items-center hover:border cursor-pointer' onClick={()=> scroll(-500)}> {"<"} </div>
          <div className='absolute hidden z-40 right-[-1.5rem] top-[50%] bg-white text-black rounded-full w-12 h-12 font-extrabold md:flex justify-center items-center hover:border cursor-pointer' onClick={()=> scroll(+500)}> {">"} </div>
      </div>
  )
}
