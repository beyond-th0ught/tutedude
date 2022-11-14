import NavTop from "./components/NavTop";
import TitleNav from "./components/TitleNav";
import NavBottom from "./components/NavBottom";
import Main from './components/Main';

function App() {
  return (
    <div className="w-screen">
      <div className="mx-[5%]">
          <NavTop/>
      </div> 
      <Main /> 
    </div>
  );
}

export default App;
