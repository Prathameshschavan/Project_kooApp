import React from "react";
import { Route, Routes } from "react-router-dom";
import Feed from "./Feed";
import PostWriter from "./PostWriter";


function RouterDinesh(props) {
  return (
    <Routes>
      <Route path="/Feed" element={<Feed/>} />
      <Route path="/people" element={<Feed/>} />
      <Route path="/new" element={<Feed/>} />
      <Route path="/polls" element={<Feed/>}/>
      <Route path="/videos" element={<Feed/>}/>
      <Route path="/cricket" element={<Feed/>}/>
      <Route path="/following" element={<Feed/>}/>
      <Route path="/popular" element={<Feed/>}/>
    </Routes>
  );
}

export default RouterDinesh;