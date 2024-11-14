import React, { useState } from "react";
import { HomePageExplore } from "../../../data/homepage-explore";
import HighlightText from "./HighlightText";
import { MdPeopleAlt } from "react-icons/md";
import { ImTree } from "react-icons/im";

const tabsName = [
  "Free",
  "New to coding",
  "Most popular",
  "Skills paths",
  "Career paths",
];

const PowerOfCode = () => {
  const [currentTab, setCurrentTab] = useState(tabsName[0]);
  const [courses, setCourses] = useState(HomePageExplore[0].courses);
  const [currentCard, setCurrentCard] = useState(
    HomePageExplore[0].courses[0].heading
  );

  function setMyCard(value) {
    setCurrentTab(value);
    const result = HomePageExplore.filter((course) => course.tag === value);
    setCourses(result[0].courses);
    setCurrentCard(result[0].courses[0].heading);
  }

  return (
    <div className="w-full absolute  z-10 top-[108%] md:top-[100%]   flex flex-col gap-9 justify-center items-center">
      <div className="flex flex-col gap-2 justify-center items-center">
        <div className="text-4xl font-semibold text-richblack-5">
          Unlock the
          <HighlightText text={"Power of Code"} />
        </div>
        <p className="text-base font-medium text-richblack-300">
          Learn to Build Anything You Can Imagine
        </p>
      </div>
      <div className="flex flex-row bg-richblack-800 p-1 rounded-full drop-shadow-[0_1.5px_rgba(255,255,255,0.25)]">
        {tabsName.map((tab, index) => (
          <div
            key={index}
            onClick={() => setMyCard(tab)}
            className={`text-sm md:text-base px-2 md:px-3 lg:px-7 py-1 flex flex-row items-center md:gap-2 ${
              tab === currentTab
                ? "bg-richblack-900 px-1 py-1 md:px-7 md:py-2 rounded-full text-richblack-5 font-medium"
                : "text-richblack-200 font-medium"
            } cursor-pointer transition-all duration-200 `}
          >
            {tab}
          </div>
        ))}
      </div>
      <div className="flex flex-col lg:flex-row gap-7 justify-between md:p-5 items-center mb-10">
        {courses.map((course, index) => (
          <div
            key={index}
            onClick={() => {
              setCurrentCard(course.heading);
            }}
            className={`flex max-w-sm lg:max-w-xs h-fit flex-col ${
              course.heading === currentCard
                ? "bg-richblack-5 shadow-[12px_12px_0px_0px_#FFD60A] text-richblack-800"
                : "bg-richblack-800 text-richblack-25"
            }`}
          >
            <div className="flex flex-col gap-3 pt-8 px-5 pb-6 md:pb-14 md:mb-10">
              <p className={`text-xl font-semibold`}>{course.heading}</p>
              <p className="text-base font-normal text-richblack-500">
                {course.description}
              </p>
            </div>
            <div
              className={`flex gap-4 justify-between items-center border-t-2 border-dashed   py-4 px-6 ${
                course.heading === currentCard
                  ? "text-blue-500  border-t-richblack-50"
                  : "text-richblack-300 border-t-richblack-600"
              }`}
            >
              <div className="flex gap-2 justify-center items-center">
                <MdPeopleAlt className="w-5 h-5 object-cover" />
                <p className="text-base font-medium"> {course.level}</p>
              </div>
              <div className="flex gap-2 justify-center items-center">
                <ImTree className="w-5 h-5 object-cover" />
                <p className="text-base font-medium ">
                  {course.lessionNumber} Lessons
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PowerOfCode;
