import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";


function Aboutus() {
  const [view, setView] = useState(false);

  const handleView = () => {
    setView(!view);
  };
  return (
    <div className="p-4">
      <button
        onClick={handleView}
        className="px-4 py-2 mb-4 font-semibold rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300"
      >
        {view ? <FaChevronDown/> : "Show"} 
      </button>

      {view && (
        <div className="p-4 bg-gray-100 rounded-lg shadow-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aperiam
          laborum facilis cupiditate delectus voluptatem aliquam veniam, hic
          blanditiis accusamus?
        </div>
      )}
    </div>
  );
}

export default Aboutus;
