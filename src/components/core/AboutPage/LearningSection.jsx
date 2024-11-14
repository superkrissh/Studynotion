import React from "react";
import FoundingStory from "../../../assets/Images/FoundingStory.png";
import GradientTextRed from "./GradientTextRed";
import GradientText from "./GradientText";
import HighlightText from "../HomePage/HighlightText";

const LearningSection = () => {
  return (
    <section className="w-11/12 max-w-maxContent mx-auto flex flex-col gap-24 justify-between mt-20 items-center mb-20">
      {/* first div */}
      <div className="flex gap-24 justify-between items-center ">
        <div className="flex flex-col gap-6 justify-center w-[486px]">
          <GradientTextRed text={"Our Founding Story"} />
          <div className="flex flex-col gap-4 text-base font-medium text-richblack-300">
            <p>
              Our e-learning platform was born out of a shared vision and
              passion for transforming education. It all began with a group of
              educators, technologists, and lifelong learners who recognized the
              need for accessible, flexible, and high-quality learning
              opportunities in a rapidly evolving digital world.
            </p>
            <p>
              As experienced educators ourselves, we witnessed firsthand the
              limitations and challenges of traditional education systems. We
              believed that education should not be confined to the walls of a
              classroom or restricted by geographical boundaries. We envisioned
              a platform that could bridge these gaps and empower individuals
              from all walks of life to unlock their full potential.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center p-8">
          <img
            src={FoundingStory}
            alt="FoundingStory"
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      {/* second div */}
      <div className="flex gap-24 justify-between items-center ">
        <div className="flex flex-col gap-4 justify-center w-[486px]">
          <GradientText text={"Our Vision "} />

          <p className="flex flex-col gap-4 text-base font-medium text-richblack-300">
            With this vision in mind, we set out on a journey to create an
            e-learning platform that would revolutionize the way people learn.
            Our team of dedicated experts worked tirelessly to develop a robust
            and intuitive platform that combines cutting-edge technology with
            engaging content, fostering a dynamic and interactive learning
            experience.
          </p>
        </div>
        <div className="flex flex-col gap-4 justify-center w-[486px]">
          <HighlightText text={"Our Mission"} />

          <p className="flex flex-col gap-4 text-base font-medium text-richblack-300">
            our mission goes beyond just delivering courses online. We wanted to
            create a vibrant community of learners, where individuals can
            connect, collaborate, and learn from one another. We believe that
            knowledge thrives in an environment of sharing and dialogue, and we
            foster this spirit of collaboration through forums, live sessions,
            and networking opportunities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LearningSection;
