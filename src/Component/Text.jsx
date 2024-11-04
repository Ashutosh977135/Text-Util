import React, { useState } from "react";

function Text() {
  const [uppercase, setUpperCase] = useState(false);
  const [lowercase, setLowerCase] = useState(false);
  const [capitalized,setCapitalized]=useState(false)
   
  const handleUppecase = () => {
    setUpperCase(!uppercase);
    setLowerCase(false);
  };
  const handleLowercase = () => {
    setLowerCase(!lowercase);
    setUpperCase(false);
  };
  const Capitalizehandle=()=>{
    setCapitalized(!capitalized)
  }
  const CopyText=()=>{
    navigator.clipboard.writeText(text).them(()=>{
      alert("copied");
    }).catch((error)=>{
      console.error("Failed to copy text:",error);
    })
     
  }

  const textStyle = {
    textTransform: uppercase ? "uppercase" : lowercase ? "lowercase" : "none",
   
  };

  return (
    <div className="mx-auto w-[95%]">
      <div className=" flex  flex-col">
        <h1 className="font-bold text-2xl py-2">Enter your Text to Analyze</h1>

        <textarea
          style={textStyle}
          className="border-2 border-gray-400 w-[80%] h-60 my-6 shadow rounded-lg px-1"
        ></textarea>

        <div>
          <div className="flex flex-wrap justify-start items-center gap-2">
            <button
              onClick={handleUppecase}
              className="bg-blue-300 p-2 shadow-lg rounded text-sm md:text-base hover:bg-blue-400 transition"
            >
              Upper Case
            </button>
            <button
              className="bg-blue-300 p-2 shadow-lg rounded text-sm md:text-base hover:bg-blue-400 transition"
              onClick={handleLowercase}
            >
              Lower Case
            </button>
            <button className="bg-blue-300 p-2 shadow-lg rounded text-sm md:text-base hover:bg-blue-400 transition">
              Capitalize
            </button>
            <button className="bg-blue-300 p-2 shadow-lg rounded text-sm md:text-base hover:bg-blue-400 transition">
              Sentence Case
            </button>
            <button className="bg-blue-300 p-2 shadow-lg rounded text-sm md:text-base hover:bg-blue-400 transition">
              Remove Space
            </button>
            <button className="bg-blue-300 p-2 shadow-lg rounded text-sm md:text-base hover:bg-blue-400 transition">
              Copy Text
            </button>
            <button className="bg-blue-300 p-2 shadow-lg rounded text-sm md:text-base hover:bg-blue-400 transition">
              Clear Text
            </button>
          </div>
        </div>

        <div className="py-5">
          <h1 className="text-xl text-start font-bold">Your Text Summary</h1>
        </div>
        <div className="py-3">
          <h1 className="text-xl font-bold">Your Preview</h1>
        </div>
      </div>
    </div>
  );
}

export default Text;
