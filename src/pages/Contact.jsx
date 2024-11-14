import React from "react";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { IoEarth } from "react-icons/io5";
import { PiPhoneCallFill } from "react-icons/pi";
import ContactUsForm from "../components/ContactPage/ContactUsForm";
import Footer from "../components/common/Footer";
import ReviewSlider from "../components/common/ReviewSlider";

const data = [
  {
    icon: <HiOutlineChatBubbleLeftRight />,
    heading: "Chat with us",
    description:
      "Our friendly team is here to help. ajaypratapsingh8958a@gmail.com",
  },
  {
    icon: <IoEarth />,
    heading: "Visit us",
    description:
      "Come and say hello at our office HQ. Here is the location/ address",
  },
  {
    icon: <PiPhoneCallFill />,
    heading: "Call us",
    description: "Mon - Fri From 8am to 5pm. +123 456 7890",
  },
];

const Contact = () => {
  return (
    <>
      <div className="w-11/12 max-w-maxContent py-24 flex justify-between mx-auto gap-10">
        <div className="bg-richblack-800 flex flex-col items-center p-14 gap-6 h-[450px] rounded-xl">
          {data.map((element, index) => (
            <div key={index} className="flex flex-col justify-center gap-2 p-3">
              <div className="text-richblack-100 text-4xl flex gap-2 items-center">
                {element.icon}
                <h2 className="text-lg font-semibold text-richblack-5">
                  {element.heading}
                </h2>
              </div>

              <p className="text-sm font-medium text-richblack-200 w-[345px]">
                {element.description}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center gap-8 py-14 rounded-xl border border-richblack-600">
          <div className="flex gap-3 flex-col px-10 w-[698px]">
            <h2 className="text-4xl font-semibold text-richblack-5">
              Got a Idea? We’ve got the skills. Let’s team up
            </h2>
            <p className="text-base font-medium text-richblack-300">
              Tall us more about yourself and what you’re got in mind.
            </p>
          </div>

          <ContactUsForm />
        </div>
      </div>
      <ReviewSlider />
      <Footer />
    </>
  );
};

export default Contact;
