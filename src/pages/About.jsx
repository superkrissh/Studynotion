import React from "react";
import HighlightText from "../components/core/HomePage/HighlightText";
import aboutus1 from "../assets/Images/aboutus1.webp";
import aboutus2 from "../assets/Images/aboutus2.webp";
import aboutus3 from "../assets/Images/aboutus3.webp";
import Quote from "../components/core/AboutPage/Quote";
import LearningSection from "../components/core/AboutPage/LearningSection";
import StatsComponent from "../components/core/AboutPage/StatsComponent";
import LearningGrid from "../components/core/AboutPage/LearningGrid";
import ContactFormSection from "../components/ContactPage/ContactFormSection";
import Footer from "../components/common/Footer";
import ReviewSlider from "../components/common/ReviewSlider";

const About = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center">
      {/* section 1 */}
      <section className="w-full bg-richblack-800 flex justify-center items-center z-10 h-[550px]">
        <div className="w-11/12 max-w-maxContent mx-auto flex flex-col items-center gap-14 mt-28">
          {/* heading */}
          <div className="flex flex-col gap-9 items-center">
            <p className="text-base font-medium text-richblack-200">About us</p>
            <div className="flex flex-col items-center text-4xl font-semibold text-richblack-5">
              <h2>Driving Innovation in Online Education for a </h2>
              <HighlightText text={"Brighter Future"} />
            </div>
            <p className="text-base font-medium text-richblack-300 w-[809px] text-center">
              Studynotion is at the forefront of driving innovation in online
              education. We're passionate about creating a brighter future by
              offering cutting-edge courses, leveraging emerging technologies,
              and nurturing a vibrant learning community.
            </p>
          </div>
          {/* images */}
          <div className="flex gap-5">
            <img src={aboutus1} alt="aboutus1" loading="lazy" />
            <img src={aboutus2} alt="aboutus2" loading="lazy" />
            <img src={aboutus3} alt="aboutus3" loading="lazy" />
          </div>
        </div>
      </section>
      {/* section  2 */}
      <section className="h-80 flex justify-center items-center mt-24 border border-b-richblack-700">
        <Quote />
      </section>
      {/* section 3 */}
      <LearningSection />
      {/* section 4 */}
      <StatsComponent />
      {/* section 5 */}
      <LearningGrid />
      {/* section 6 */}
      <ContactFormSection />
      {/* section 7 */}
      <ReviewSlider />
      <Footer />
    </div>
  );
};

export default About;
