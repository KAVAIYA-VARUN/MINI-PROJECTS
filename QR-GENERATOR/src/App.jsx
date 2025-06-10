import React, { useState,useRef } from "react";
import QRCode from "react-qr-code";

function App() {

  const [text,setText] = useState("");
  const [visibility,setVisibility] = useState(false);
  const prevTextRef = useRef("");

  function handleChange(e)
  {
    const value = e.target.value;

    // Detect if backspace occurred (text got shorter)
    if (value.length < prevTextRef.current.length) 
    {
      setVisibility(false);
    }

    setText(value);
    prevTextRef.current = value; // update previous text
  }

  function displayQR()
  {
    if(text.trim() !== "")
    {
      setVisibility(true);
    }
  }

  return (
    <>
     <div className="flex items-center justify-center h-screen">
      <div className="bg-blue-700 text-white font-bold w-72 h-72 rounded-xl border-black">
       <div className="flex flex-col h-full">
       <h1 className="text-2xl font-bold text-center">QR-Generator</h1>
       <input className="w-[70%] ml-10 mt-10 text-center text-black" type="text" value={text} onChange={handleChange} placeholder="Enter your text here"/>
       {visibility && (<QRCode className="mt-5 mb-5 ml-2" value={text} />)}
       <button onClick={displayQR} className="bg-green-600 w-[70%] ml-10 mt-2 rounded-xl mb-2">Generate</button>
       </div>
      </div>
     </div>
    </>
  );
}

export default App
