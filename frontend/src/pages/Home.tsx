import React, { useState, useEffect } from "react";


import Sidebar from "../components/molecules/Sidebar";
import Topbar from "../components/molecules/Topbar";


const Home = () => {
  
  return (
    <div className="bg-white-100 h-screen w-screen flex ">
      
      <Sidebar />
      <Topbar />
    </div>
  );
};

export default Home;
