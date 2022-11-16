import NavTop from "./components/NavTop";
import ReferEarn from "./components/ReferEarn";
import FrdsRefer from "./components/FrdsRefer";
import React, { useState } from 'react'

function App() {
  const [State, setState] = useState(true)
  return (
    <div className="w-screen">
      <div className="mx-[5%]">
          <NavTop state={State} setState={setState}/>
      </div> 
      {
         State ? (<ReferEarn />) : (<FrdsRefer />)
      }
    </div>
  );
}

export default App;
