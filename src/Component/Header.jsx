import React from "react";

function Header() {
  return (
    <div>
      <div className="bg-slate-300 w-full mx-auto py-5 px-2 flex">
        <h1 className="font-bold">TEXT ANALYZER</h1>
        <ol className="flex px-5">
          <li>Home</li>
          <li className="px-3">About_US</li>
        </ol>
      </div>
    </div>
  );
}

export default Header;
