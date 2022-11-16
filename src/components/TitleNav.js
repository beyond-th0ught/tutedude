import React, { useState } from 'react'

function TitleNav({State}) {
  // const [State, setState] = useState(true)
  return (
    <div className=' py-7'>
        <h1 className=' font-[poppins] hover:cursor-pointer font-medium text-sm '>UI/UX {'>'}{ State ? ('Refer & Earn') : ('  Friends Referred ')
      } </h1>
    </div>
  )
}

export default TitleNav