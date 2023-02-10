import Alerts from './Components/Alert';
import './App.css';
import Navbar from './Components/Navbar';
import RoutesComp from './Components/RoutesComp';
import Feed from './Components/Feed';
function App() {
  return (
    <div className="App">
      <RoutesComp/>
       <Navbar/>
       <div>
       <Feed/>
       </div>
    </div>
   
  )
}
export default App;