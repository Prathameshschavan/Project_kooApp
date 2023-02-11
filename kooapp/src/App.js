import './App.css';
import RoutesComp from './Components/RoutesComp';
import Navbar from './Components/Navbar';
import Feed from './Component/Feed';
import Nav from "./Component/Nav"
import RouterDinesh from './Component/RouterDinesh';
import PostWriter from './Component/PostWriter';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import {ChakraProvider} from "@chakra-ui/react"


function App() {
  const data =useSelector((store)=>{
    return store.writer;
 })






  return (
    <div className="App">
      <div className='Koo'>
       <div style={{ width: "100%", }}>
       <RoutesComp/>
       <Navbar/>
       </div>
        <div style={{width:"140%",margin: "0 0 0 0%" }} > 
        <Nav/>
        <RouterDinesh/>
        <Feed/>
        </div>
        <div style={{width:"100%"}} > 
        lksndvlkndsvlknsdlvnslvnldvnlsss
       </div>
      </div>
    </div>
  )
};

export default App;
