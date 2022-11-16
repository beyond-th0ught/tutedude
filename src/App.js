import NavTop from "./components/NavTop";
import ReferEarn from "./components/ReferEarn";
import FrdsRefer from "./components/FrdsRefer";
import React, { useState } from 'react'
import './App.css'

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
         State ? (<ReferEarn stateChaange={stateChaange} State={State} />) : (<FrdsRefer stateChaange={stateChaange}  State={State}  />)
      }
    </div>
  );
}

export default App