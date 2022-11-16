import NavTop from "./components/NavTop";
import ReferEarn from "./components/ReferEarn";
import FrdsRefer from "./components/FrdsRefer";
import React, { useState } from 'react'

function App() {
  const [State, setState] = useState(true)
  const stateChaange = () => {
    setState(!State);
  }
  return (
    <div className="w-screen">
      <div className="px-[5%]">
          <NavTop state={State} setState={setState}/>
      </div> 
      {
         State ? (<ReferEarn stateChaange={stateChaange} />) : (<FrdsRefer stateChaange={stateChaange} />)
      }
    </div>
  );
}

export default App;
