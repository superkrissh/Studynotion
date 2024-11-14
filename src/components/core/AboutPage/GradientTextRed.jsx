import React from "react";

const GradientTextRed = ({ text }) => {
  return (
    <span className="bg-custom-gradient-red text-4xl font-semibold text-transparent bg-clip-text">
      {text}
    </span>
  );
};

export default GradientTextRed;
