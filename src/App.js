import NavTop from "./components/NavTop";
import ReferEarn from "./components/ReferEarn";
import FrdsRefer from "./components/FrdsRefer";
function App() {
  return (
    <div className="w-screen">
      <div className="mx-[5%]">
          <NavTop/>
      </div> 
      <ReferEarn /> 
      <FrdsRefer/>
    </div>
  );
}

export default App;
