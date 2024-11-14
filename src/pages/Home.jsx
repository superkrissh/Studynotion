import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import HighlightText from "../components/core/HomePage/HighlightText";
import CTAButton from "../components/core/HomePage/Button";
import Banner from "../assets/Images/banner.mp4";
import CodeBlocks from "../components/core/HomePage/CodeBlocks";
import Timeline from "../components/core/HomePage/Timeline";
import LearningLanguage from "../components/core/HomePage/LearningLanguage";
import InstructorSection from "../components/core/HomePage/InstructorSection";
import Footer from "../components/common/Footer";
import PowerOfCode from "../components/core/HomePage/PowerOfCode";
import ReviewSlider from "../components/common/ReviewSlider";

const Home = () => {
  return (
    <div className="w-full">
      {/*Section1  */}
      <div
        className="relative mx-auto flex flex-col w-11/12 max-w-maxContent items-center 
      text-white justify-center mt-32 lg:mb-[450px] mb-[1090px] "
      >
        {/* button */}
        <Link to={"/signup"}>
          <div
            className="px-5 py-2  flex justify-center items-center gap-2  mx-auto rounded-full shadow-[inset_0px_-1px_0px_0px__#FFFFFF2E] bg-richblack-800 font-bold text-richblack-200
            transition-all duration-200 hover:scale-95 hover:bg-richblack-900 "
          >
            <p className="font-medium text-base">Become an Instructor</p>
            <FaArrowRight className="w-3 h-3" />
          </div>
        </Link>
        {/* text */}
        <div className="text-center text-3xl md:text-4xl font-semibold mt-7">
          Empower Your Future with
          <HighlightText text={"Coding Skills"} />
        </div>
        {/* description */}
        <div className=" mt-4 max-w-[913px] text-center text-base font-medium text-richblack-300">
          With our online coding courses, you can learn at your own pace, from
          anywhere in the world, and get access to a wealth of resources,
          including hands-on projects, quizzes, and personalized feedback from
          instructors.
        </div>
        {/* buttons */}
        <div className="flex flex-row justify-center items-center gap-7 mt-8 mb-6">
          <CTAButton active={true} linkto={"/signup"}>
            Learn More
          </CTAButton>

          <CTAButton active={false} linkto={"/login"}>
            Book a Demo
          </CTAButton>
        </div>
        {/* vidos */}
        <div className="mx-3 my-12  shadow-[10px_-5px_50px_-5px] shadow-blue-200">
          <video
            className="shadow-[20px_20px_0px_0px_#F5F5F5]"
            muted
            loop
            autoPlay
          >
            <source src={Banner} type="video/mp4" />
          </video>
        </div>

        {/* Code Section 1 */}

        <CodeBlocks
          position={"lg:flex-row flex-col"}
          heading={
            <div className="text-3xl lg:text-4xl font-semibold lg:w-[501px] ">
              Unlock Your
              <HighlightText text={"coding potential "} />
              with our online courses.
            </div>
          }
          subheading={
            "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
          }
          ctabtn1={{
            btnText: "try it yourself",
            linkto: "/signup",
            active: true,
          }}
          ctabtn2={{
            btnText: "learn more",
            linkto: "/login",
            active: false,
          }}
          codeblock={`<!DOCTYPE html>\n<html>\nhead><title>Example<\n/title><linkrel="stylesheet"href="styles.css">\n/head>\nbody>\nh1><ahref="/">Header</a>\n/h1>\nnav><ahref="one/">One</a><ahref="two/">Two</\na><ahref="three/">Three</a>\n/nav>`}
          codeColor={"text-yellow-25"}
          backgroudGradient={"codeblock1"}
        />

        {/* Code Section 2 */}

        <CodeBlocks
          position={"lg:flex-row-reverse flex-col"}
          heading={
            <div className="text-3xl md:text-4xl font-semibold w-[250px]">
              Start
              <HighlightText text={"coding in seconds"} />
            </div>
          }
          subheading={
            "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
          }
          ctabtn1={{
            btnText: "Continue Lesson",
            linkto: "/signup",
            active: true,
          }}
          ctabtn2={{
            btnText: "learn more",
            linkto: "/login",
            active: false,
          }}
          codeblock={`<!DOCTYPE html>\n<html>\nhead><title>Example<\n/title><linkrel="stylesheet"href="styles.css">\n/head>\nbody>\nh1><ahref="/">Header</a>\n/h1>\nnav><ahref="one/">One</a><ahref="two/">Two</\na><ahref="three/">Three</a>\n/nav>`}
          codeColor={"text-yellow-25"}
          backgroudGradient={"codeblock2"}
        />

        <PowerOfCode />
      </div>

      {/*Section 2  */}

      <div className="relative mx-auto w-full bg-pure-greys-5 h-full">
        <div className="timeline h-80 "></div>

        <div className="absolute w-[96%] justify-center items-center top-[5%] lg:top-[8%] lg:translate-y-[-6%] text-richblack-5 left-[50%] translate-x-[-50%] flex flex-row gap-6 ">
          <CTAButton active={true} linkto={"/signup"}>
            <div className="flex flex-row gap-2 justify-center items-center">
              Explore Full Catalog
              <FaArrowRight className="w-3 h-3" />
            </div>
          </CTAButton>

          <CTAButton active={false} linkto={"/signup"}>
            Learn More
          </CTAButton>
        </div>

        <Timeline />

        <LearningLanguage />
      </div>

      {/*Section 3 */}
      <InstructorSection />

      <ReviewSlider />

      {/*Footer */}
      <Footer />
    </div>
  );
};

export default Home;
