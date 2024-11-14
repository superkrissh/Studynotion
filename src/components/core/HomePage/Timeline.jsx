import React from "react";
import HighlightText from "./HighlightText";
import CTAButton from "../HomePage/Button";
import logo1 from "../../../assets/TimeLineLogo/Logo1.svg";
import logo2 from "../../../assets/TimeLineLogo/Logo2.svg";
import logo3 from "../../../assets/TimeLineLogo/Logo3.svg";
import logo4 from "../../../assets/TimeLineLogo/Logo4.svg";
import TimelineImg from "../../../assets/Images/TimelineImage.png";

const timelineData = [
  {
    logo: logo1,
    heading: "Leadership",
    description: "Fully committed to the success company",
  },
  {
    logo: logo2,
    heading: "Responsibility",
    description: "Students will always be our top priority",
  },
  {
    logo: logo3,
    heading: "Flexibility",
    description: "The ability to switch is an important skills",
  },
  {
    logo: logo4,
    heading: "Solve the problem",
    description: "Code your way to a solution",
  },
];

const Timeline = () => {
  return (
    <div className="w-11/12 max-w-maxContent mx-auto mb-20 flex flex-col justify-center items-center mt-14 gap-14  ">
      <div className="flex flex-col items-center  lg:flex-row gap-4">
        <div className="text-4xl font-semibold text-richblack-900  lg:w-[55%]">
          Get the skills you need for a
          <HighlightText text={"job that is in demand."} />
        </div>
        <div className="flex flex-col gap-8 lg:w-[48%]">
          <p className="text-base font-medium text-richblack-700">
            The modern StudyNotion is the dictates its own terms. Today, to be a
            competitive specialist requires more than professional skills.
          </p>
          <div className="w-fit ">
            <CTAButton active={true} linkto={"/signup"}>
              Learn More
            </CTAButton>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-20 items-center lg:items-center justify-between px-5">
        <div className="flex flex-col gap-8 max-w-">
          {timelineData.map((element, index) => (
            <div key={index} className="flex flex-row gap-6 py-4 px-3">
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-[0px_0px_62px_0px_#0000001F]">
                <img src={element.logo} alt="logo" />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-lg font-semibold capitalize ring-richblack-800">
                  {element.heading}
                </p>
                <p className="text-sm font-normal ring-richblack-700">
                  {element.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="max-w-[714px] h-[545px] relative  shadow-blue-200 shadow-[0px_0px_30px_0px]">
          <div className=" max-w-full h-full shadow-[20px_20px_0px_0px_#FFFFFF] ">
            <img
              src={TimelineImg}
              alt="timelinImg"
              className="w-full h-full object-cover bg-center "
            />
          </div>

          <div className="absolute w-[80%] md:left-[50%] md:translate-x-[-50%] md:bottom-[-10%] bottom-[3%] right-3 p-4 md:p-10 bg-caribbeangreen-700 flex flex-col md:flex-row gap-8 md:gap-14">
            <div className="flex flex-row w-40 gap-6 items-center">
              <p className="text-4xl font-bold text-white">10</p>
              <p className="text-sm font-medium text-caribbeangreen-300">
                YEARS EXPERIENCES
              </p>
            </div>
            <div className="border-r border-caribbeangreen-300"></div>
            <div className="flex flex-row w-44 gap-6 items-center">
              <p className="text-4xl font-bold text-white">250</p>
              <p className="text-sm font-medium text-caribbeangreen-300">
                TYPES OF COURSES
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
