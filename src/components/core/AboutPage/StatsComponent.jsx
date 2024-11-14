import React from "react";

const Stats = [
  { count: "5K", label: "Active Students" },
  { count: "10+", label: "Mentors" },
  { count: "200+", label: "Courses" },
  { count: "50+", label: "Awards" },
];
const StatsComponent = () => {
  return (
    <section className="bg-richblack-800 py-24 px-32 flex justify-center items-center border border-b-richblack-700">
      <div className="w-11/12 max-w-maxContent flex justify-between gap-2 items-center mx-auto">
        <div className="flex gap-x-5 justify-center items-center">
          {Stats.map((data, index) => {
            return (
              <div
                key={index}
                className="flex flex-col gap-3 justify-center items-center w-[296px]"
              >
                <h1 className="text-3xl font-bold text-richblack-5">
                  {data.count}
                </h1>
                <h2 className="text-base font-semibold text-richblack-500">
                  {data.label}
                </h2>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsComponent;
