import React from "react";
import CTAButton from "../HomePage/Button";
import HighlightText from "./HighlightText";
import { FaArrowRight } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const CodeBlocks = ({
  position,
  heading,
  subheading,
  ctabtn1,
  ctabtn2,
  codeblock,
  backgroudGradient,
  codeColor,
}) => {
  return (
    <div
      className={`max-w-full flex ${position} my-5 lg:my-20 lg:px-5 md:px-20 lg:gap-20 justify-center lg:justify-between lg:items-center`}
    >
      {/*Section 1*/}
      <div className="max-w-full lg:max-w-[40%] flex flex-col gap-3">
        {heading}
        <div className="text-richblack-300 font-medium text-base ">
          {subheading}
        </div>

        <div className="flex gap-7 mt-7">
          <CTAButton active={ctabtn1.active} linkto={ctabtn1.linkto}>
            <div className="flex gap-2 items-center">
              {ctabtn1.btnText}
              <FaArrowRight className="w-3 h-3 text-richblack-900" />
            </div>
          </CTAButton>

          <CTAButton active={ctabtn2.active} linkto={ctabtn2.linkto}>
            {ctabtn2.btnText}
          </CTAButton>
        </div>
      </div>

      {/*Section 2*/}
      <div className="md:max-w-[45%] p-3 md:p-8 justify-center items-center">
        <div className=" h-fit p-2 relative code-border bg-gradient-to-tr from-opacity-24 to-opacity-38  gap-1 flex flex-row text-[9px] md:text-sm font-bold font-mono  md:w-[470px] w-[100%] lg:w-[470px]">
          {/*HW -> BG gradient*/}
          <div className={`absolute ${backgroudGradient}`}></div>

          <div className="text-center flex flex-col w-[10%] text-richblack-400">
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>
            <p>7</p>
            <p>8</p>
            <p>9</p>
            <p>10</p>
            <p>11</p>
          </div>

          <div
            className={`max-w-[90%] flex flex-col  md:gap-2   ${codeColor} pr-2`}
          >
            <TypeAnimation
              sequence={[codeblock, 2000, ""]}
              repeat={Infinity}
              cursor={true}
              style={{
                whiteSpace: "pre-line",
                display: "block",
              }}
              omitDeletionAnimation={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeBlocks;
