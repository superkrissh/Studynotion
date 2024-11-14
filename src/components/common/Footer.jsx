import React from "react";
import studynotion from "../../assets/Logo/Logo-Full-Light.png";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillGoogleCircle } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { IoLogoYoutube } from "react-icons/io5";
import FooterLink2 from "../../data/footer-links";

const Footer = () => {
  return (
    <div className="bg-richblack-800 border-t border-richblack-600 py-12 px-5 flex justify-center items-center">
      <div className="w-11/12 max-w-maxContent flex flex-col gap-8 justify-center items-center mx-auto">
        <div className="w-full flex flex-col lg:flex-row gap-14 justify-between">
          <div className="flex flex-wrap md:flex-row gap-6 md:gap-10 ">
            <div className="flex flex-col gap-3 ">
              <img className="w-40 h-8" src={studynotion} />
              <p className="text-base font-semibold text-richblack-100">
                Company
              </p>
              {["Abouts", "Careers", "Affilates"].map((element, index) => (
                <a
                  className="text-sm font-normal text-richblack-400"
                  key={index}
                >
                  {element}
                </a>
              ))}
              <div className="flex flex-row gap-3 text-richblack-400 items-center">
                <FaInstagramSquare className="w-6 h-6" />
                <AiFillGoogleCircle className="w-6 h-6" />
                <AiFillTwitterCircle className="w-6 h-6" />
                <IoLogoYoutube className="w-6 h-6" />
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col justify-center gap-3">
                <p className="text-base font-semibold text-richblack-100">
                  Resources
                </p>
                {[
                  "Articles",
                  "Blog",
                  "Chart Sheet",
                  "Code challenges",
                  "Docs",
                  "Projects",
                  "Videos",
                  "Workspaces",
                ].map((element, index) => (
                  <a
                    className="text-sm font-normal text-richblack-400"
                    key={index}
                  >
                    {element}
                  </a>
                ))}
              </div>
              <div className="flex flex-col justify-center gap-3">
                <p className="text-base font-semibold text-richblack-100">
                  Support
                </p>
                <a className="text-sm font-normal text-richblack-400">
                  Help center
                </a>
              </div>
            </div>
            <div className="flex md:flex-col gap-14 md:gap-8">
              <div className="flex flex-col gap-3 justify-center">
                <p className="text-base font-semibold text-richblack-100">
                  Plans
                </p>
                {[
                  "Paid memberships",
                  "For students",
                  "Business solutions ",
                ].map((element, index) => (
                  <a
                    className="text-sm font-normal text-richblack-400"
                    key={index}
                  >
                    {element}
                  </a>
                ))}
              </div>
              <div className="flex flex-col gap-3 justify-center">
                <p className="text-base font-semibold text-richblack-100">
                  Community
                </p>
                {["Forums", "Chapters", "Events"].map((element, index) => (
                  <a
                    className="text-sm font-normal text-richblack-400"
                    key={index}
                  >
                    {element}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="border border-richblack-700"></div>

          <div className="flex flex-wrap md:flex-row gap-10 md:gap-20">
            {FooterLink2.map((element, index) => (
              <div key={index} className="flex flex-col gap-3">
                <div className="text-base font-semibold text-richblack-100">
                  {element.title}
                </div>
                {element.links.map((link, index) => (
                  <a
                    href={`${link.link}`}
                    className="text-sm font-normal text-richblack-400"
                    key={index}
                  >
                    {link.title}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="w-full border border-richblack-700"></div>
        <div className="w-full flex flex-col gap-3  md:flex-row justify-between items-center">
          <div className="flex flex-row gap-3">
            {["Privacy Policy", "Cookie Policy", "Terms"].map(
              (element, index) => (
                <a
                  key={index}
                  className="text-sm font-normal text-richblack-300 flex gap-2"
                >
                  {element}
                </a>
              )
            )}
          </div>
          <div className="text-sm font-normal">
            <p className="text-richblack-300 ">
              {" "}
              Made with <span className="font-medium text-pink-300">
                ♥
              </span>{" "}
              Ajay © 2024 Studynotion
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
