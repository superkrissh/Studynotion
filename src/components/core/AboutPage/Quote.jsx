import React from "react";
import HighlightText from "../HomePage/HighlightText";
import GradientText from "./GradientText";
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";

const Quote = () => {
  return (
    <div className="w-11/12 max-w-maxContent mx-auto text-4xl font-semibold text-richblack-5">
      <p className="text-center">
        <span className="inline-block text-richblack-600">
          <RiDoubleQuotesL />
        </span>
        <span>
          We are passionate about revolutionizing the way we learn. Our
          innovative platform
        </span>

        <span>
          {" "}
          <HighlightText text={"combines technology"} />
        </span>
        <span>
          {" "}
          <GradientText text={"expertise"} />
        </span>
        <span> and community to create an</span>
        <span>
          {" "}
          <GradientText text={"unparalleled educational experience."} />
        </span>
        <span className="inline-block text-richblack-600">
          <RiDoubleQuotesR />
        </span>
      </p>
    </div>
  );
};

export default Quote;
