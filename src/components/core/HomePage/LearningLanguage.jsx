import React from "react";
import HighlightText from "./HighlightText";
import Know_your_progress from "../../../assets/Images/Know_your_progress.png";
import Plan_your_lessons from "../../../assets/Images/Plan_your_lessons.png";
import Compare_with_others from "../../../assets/Images/Compare_with_others.png";
import CTAButton from "../HomePage/Button";

const LearningLanguage = () => {
  return (
    <div className="w-11/12 max-w-maxContent flex justify-center items-center py-5 md:py-24 mx-auto ">
      <div className="w-11/12 max-w-maxContent flex flex-col gap-12 justify-center items-center ">
        <div className="flex flex-col justify-center items-center gap-3">
          <div className="text-4xl font-semibold text-richblack-900 text-center">
            Your swiss knife for
            <HighlightText text={"learning any language"} />
          </div>
          <div className="text-base font-medium text-richblack-700">
            <p className="max-w-[780px] text-center">
              Using spin making learning multiple languages easy. with 20+
              languages realistic voice-over,progress tracking, custom schedule
              and more.
            </p>
          </div>
        </div>

        <div className=" flex mx-auto flex-col lg:flex-row justify-center items-center  md:px-10 max-w-full">
          <img src={Know_your_progress} className="-mb-10 md:-mb-16 lg:ml-30" />
          <img
            src={Compare_with_others}
            className="-mb-14 md:-mb-24 lg:-ml-32"
          />
          <img src={Plan_your_lessons} className="lg:-ml-36" />
        </div>
        <div className="w-fit">
          <CTAButton active={true} linkto={"/signup"}>
            Learn More
          </CTAButton>
        </div>
      </div>
    </div>
  );
};

export default LearningLanguage;
