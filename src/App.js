import React from "react";
import reviews from './data';
import Testomonials from "./Components/Testomonials";

const App = () => {
  return (
      <div className=" flex flex-col w-[100vw] h-[100vh] items-center justify-center bg-slate-400 select-none">
        <div className=" text-center">  

          <h1 className=" font-bold text-4xl">Our Testomonials</h1>

          <div className="bg-violet-400 h-[4px] w-1/5 mx-auto mt-1"></div>
          
          <Testomonials reviews={reviews}/>
        </div>
       

      </div>
  )
};

export default App;
