import React, { useState } from "react";

 function RandomColor() {
  const [RGB,setRGB]=useState(false);
  const [Hex,setHex]=useState(false);
  const [hexValue,setHexValue]=useState("");
  const [rgbValue,setRgbValue]=useState("");

  function handleHex(){
     setHex(true);
     setRGB(false);
    
  }
  function handleRgb(){
    setRGB(true);
    setHex(false);
  }
  
  function handleColor(){
     if(RGB){
       const r=Math.floor(Math.random() * 100);
       const g=Math.floor(Math.random() * 100);
       const b=Math.floor(Math.random() * 100);

       setRgbValue(r+","+g+","+b);

     }
     if(Hex){
      const hexCode=Math.floor(Math.random() * 1000000)
      setHexValue("#"+hexCode);
     }
  }
  return (
  <div >


    <button onClick={handleHex}>HexColor</button>
    <button onClick={handleRgb}>RGB Color</button>
    <button onClick={handleColor}>Random Color</button>
    <div style={{
      backgroundColor:Hex?hexValue:`rgb(${rgbValue})`,
      width:'100vw',
      height:'100vh'
    }}>
      <h1 className="title">
        {Hex?"Hex Color"+hexValue:"RGB Color"+rgbValue}
      </h1>
    </div>


  </div>
  );
}

export default RandomColor;
