import React from "react";
import { Route, Routes } from "react-router-dom";
import Feed from "../Component/Feed";
import Explore from "./Explore";
// import Feed from "./";
import Koo from "./Koo";
import Language from "./Language";
import Search from "./Search";
import Signin from "./Signin";
import UserProfile from "./UserProfile";
function RoutesComp(props) {
  return (
    <Routes>
       {/* <Route path="/Feed" element={<Feed/>} /> */}
      {/* <Route path="/Explore" element={<Explore/>} />
      <Route path="/Userprofile" element={<UserProfile/>} />
      <Route path="/Search" element={<Search />} />
      <Route path="/Koo" element={<Koo/>}/>
      <Route path="/Signin" element={<Signin/>}/> */}
      {/* <Route path="*" element={<Feed/>}></Route> */}
    </Routes>
  );
}

export default RoutesComp;