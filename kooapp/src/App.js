import './App.css';
import RoutesComp from './Components/RoutesComp';
import Navbar from './Components/Navbar';
import Feed from './Component/Feed';
import Nav from "./Component/Nav"
import RouterDinesh from './Component/RouterDinesh';
function App() {
  return (
    <div className="App">
      <div className='Koo'>
       <div>
       <RoutesComp/>
       <Navbar/>
       </div>
        <div> 
        <Nav/>
        <RouterDinesh/>
        <Feed/>
        </div>
      </div>
    </div>
  )
};

export default App;
