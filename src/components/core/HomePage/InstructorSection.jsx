import React from "react";
import InstructorImg from "../../../assets/Images/Instructor.png";
import CTAButton from "../HomePage/Button";
import HighlightText from "./HighlightText";
import { FaArrowRight } from "react-icons/fa";

const InstructorSection = () => {
  return (
    <div className="bg-richblack-900 py-10 px-5 md:py-24 md:px-32 justify-center items-center">
      <div className="w-11/12 max-w-maxContent mx-auto flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-24">
        <div className="shadow-[-20px_-20px_0px_0px_#FFFFFF]">
          <img src={InstructorImg} />
        </div>
        <div className="flex flex-col gap-3 lg:max-w-[40%]">
          <div className="text-4xl font-semibold text-white w-[50%] lg:w-[40%] ">
            Become an
            <HighlightText text={"instructor"} />
          </div>
          <p className="text-base font-medium text-richblack-300">
            Instructors from around the world teach millions of students on
            StudyNotion. We provide the tools and skills to teach what you love.
          </p>
          <div className="w-fit mt-12">
            <CTAButton active={true} linkto={"/signup"}>
              <div className="flex gap-2 items-center">
                Start Teaching Today
                <FaArrowRight className="w-3 h-3" />
              </div>
            </CTAButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorSection;
