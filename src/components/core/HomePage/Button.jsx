import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, active, linkto }) => {
  return (
    <Link to={linkto}>
      <div
        className={`text-center text-base px-3 md:px-5 py-3 rounded-lg font-bold 
        ${
          active
            ? "bg-yellow-50 hover:bg-yellow-100 text-black shadow-[inset_-2px_-2px_0px_0px_#FFFFFF82]"
            : " bg-richblack-800 hover:bg-richblack-900 shadow-[inset_-2px_-2px_0px_0px_#FFFFFF2E]"
        }
        hover:scale-95 transition-all duration-200
        `}
      >
        {children}
      </div>
    </Link>
  );
};

export default Button;
