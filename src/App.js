import NavTop from "./components/NavTop";
import TitleNav from "./components/TitleNav";
import NavBottom from "./components/NavBottom";

function App() {
  return (
    <div className="w-screen bg-gray-300">
    <div className="mx-[5%]">
        <NavTop/>
        <div className="pl-[10%] bg-pink-400">
            <TitleNav/>
            <NavBottom/>
        </div>
    </div>
  
    </div>
  );
}

export default App;
