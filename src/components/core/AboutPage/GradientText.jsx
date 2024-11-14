import React from "react";

const GradentText = ({ text }) => {
  return (
    <span className="bg-custom-gradient  text-4xl font-semibold text-transparent bg-clip-text">
      {text}
    </span>
  );
};

export default GradentText;
