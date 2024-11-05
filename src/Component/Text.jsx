import React, { useState } from "react";

function Text() {
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");
  const [timeoutId, setTimeoutId] = useState(null);

  const handleUcase = () => {
    setText("upeer case are applied");
    console.log("uppercase are applied");
    let newText = text.toUpperCase();
    setText(newText);
    showMessage("converted into uppercase");
  };
  const handleLcase = () => {
    setText("upeer case are applied");
    console.log("uppercase are applied");
    let newText = text.toLowerCase();
    setText(newText);
    showMessage("converted into lower case");
  };
  const Caps = (e) => {
    const capitailege = text
      .trim()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    setText(capitailege);
    showMessage("Capitalise");
  };
  const removeSpace = (e) => {
    const extraSpaceReamove = text.replace(/\s+/g, " ").trim();
    setText(extraSpaceReamove);
    showMessage(" Removed extra space");
  };
  const sentenceCase = () => {
    const sentences = text
      .toLowerCase()
      .split(/([.!?])\s*/) // Split by punctuation followed by optional whitespace
      .filter(sentence => sentence.length > 0) // Remove empty strings
      .map((sentence, index) => {
        if ([".", "!", "?"].includes(sentence)) {
          return sentence; // Keep punctuation as-is
        }
        // Capitalize the first letter of each sentence
        return sentence.charAt(0).toUpperCase() + sentence.slice(1);
      });
  
    // Join sentences with correct spacing after punctuation
    let formattedText = sentences
      .join("") // Join without extra spaces
      .replace(/([.!?])(?=[A-Za-z])/g, "$1 "); // Ensure single space after punctuation
  
    // Ensure text ends with a single period
    if (!/[.!?]$/.test(formattedText)) {
      formattedText += ".";
    }
  
    setText(formattedText);
  };
  
  const copyText = () => {
    navigator.clipboard.writeText(text);
    alert("text Copied");
    showMessage("Text copied");
  };
  const textClear = () => {
    setText("");
    alert("clear all the text");
    showMessage("Text cleared");
  };
  const showMessage = (msg) => {
    setMessage(msg);
    if (timeoutId) clearTimeout(timeoutId); // Clear previous timeout
    const id = setTimeout(() => setMessage(""), 1000); // Clear message after 1 seconds
    setTimeoutId(id);
  };
  const handleOnchange = (e) => {
    console.log("onchange");
    setText(e.target.value);
  };
  return (
    <div className="mx-auto w-[95%]">
      <div className="container mt-2 h-20  w-full">
        {" "}
        {message && (
          <div className="text-white text-start text-2xl bg-black h-12 px-2">
            {message}
          </div>
        )}
      </div>
      <div className=" flex  flex-col">
        <h1 className="font-bold text-2xl py-1">Enter your Text to Analyze</h1>

        <textarea
          className="border-2 border-gray-400 w-[80%] h-60 my-3 shadow rounded-lg px-1 form-control"
          id="text"
          onChange={handleOnchange}
          value={text}
        ></textarea>

        <div>
          <div className="flex flex-wrap justify-start items-center gap-2">
            <button
              disabled={text.length > 0 ? false : true}
              onClick={handleUcase}
              className="bg-blue-300 p-2 shadow-lg rounded text-sm md:text-base hover:bg-blue-400 transition"
            >
              Upper Case
            </button>
            <button
              disabled={text.length > 0 ? false : true}
              onClick={handleLcase}
              className="bg-blue-300 p-2 shadow-lg rounded text-sm md:text-base hover:bg-blue-400 transition"
            >
              Lower Case
            </button>
            <button
              disabled={text.length > 0 ? false : true}
              className="bg-blue-300 p-2 shadow-lg rounded text-sm md:text-base hover:bg-blue-400 transition"
              onClick={Caps}
            >
              Capitalize
            </button>
            <button
              disabled={text.length > 0 ? false : true}
              onClick={sentenceCase}
              className="bg-blue-300 p-2 shadow-lg rounded text-sm md:text-base hover:bg-blue-400 transition"
            >
              Sentence Case
            </button>
            <button
              disabled={text.length > 0 ? false : true}
              onClick={removeSpace}
              className="bg-blue-300 p-2 shadow-lg rounded text-sm md:text-base hover:bg-blue-400 transition"
            >
              Remove Space
            </button>
            <button
              disabled={text.length > 0 ? false : true}
              onClick={copyText}
              className="bg-blue-300 p-2 shadow-lg rounded text-sm md:text-base hover:bg-blue-400 transition"
            >
              Copy Text
            </button>
            <button
              disabled={text.length > 0 ? false : true}
              onClick={textClear}
              className="bg-blue-300 p-2 shadow-lg rounded text-sm md:text-base hover:bg-blue-400 transition"
            >
              Clear Text
            </button>
          </div>
        </div>

        <div className="py-5">
          <h1 className="text-xl text-start font-bold">Your Text Summary</h1>
          <p className="py-2">
            {text.split(" ").length}Words and {text.length}Characters
          </p>
        </div>
        <div className="py-1">
          <h1 className="text-xl font-bold">Your Preview</h1>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}

export default Text;
