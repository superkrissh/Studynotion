import React, { useEffect, useState } from "react";
import logo from "../../assets/Logo/Logo-Full-Light.png";
import { NavbarLinks } from "../../data/navbar-links";
import { Link, useLocation } from "react-router-dom";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { IoCartOutline } from "react-icons/io5";
import ProfileDropDown from "../core/Auth/ProfileDropDown";
import { apiConnector } from "../../services/apiconnector";
import { categories } from "../../services/apis";
// const subLinks = [
//   {
//     title: "Python",
//     link: "/catalog/python",
//   },
//   {
//     title: "Web Development",
//     link: "/catalog/web-development",
//   },
// ];
const Navbar = () => {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const { totalItems } = useSelector((state) => state.cart);
  const location = useLocation();
  function navLinkSelected(path) {
    return path === location.pathname;
  }
  const [subLinks, setSubLinks] = useState([]);

  const fetchSubLinks = async () => {
    try {
      const response = await apiConnector("GET", categories.CATEGORIES_API);
      // console.log("All courses is there", response.data.data);
      setSubLinks(response.data.data);
    } catch (error) {
      console.log("Error in courses fetching", error);
    }
  };
  // console.log(subLinks);
  useEffect(() => {
    fetchSubLinks();
  }, []);
  return (
    <div className="flex bg-richblack-800  justify-center items-center h-16  border-b border-richblack-700">
      <div className="w-11/12 max-w-maxContent  flex items-center justify-between">
        {/* image */}
        <Link to={"/"}>
          <img src={logo} alt="logo" loading="lazy" width={160} height={32} />
        </Link>

        <div className="flex gap-x-5">
          {NavbarLinks.map((link, index) => (
            <div key={index}>
              {link.title === "Catalog" ? (
                <div className="relative flex items-center text-richblack-25 gap-2 group">
                  <p>{link.title}</p>
                  <IoIosArrowDropdownCircle />

                  <div
                    className={`"invisible absolute left-[50%]
                                    translate-x-[-50%] translate-y-[15%]
                                 ${subLinks.length?"top-[50%]":"top-[100%]"} z-10
                                flex flex-col rounded-lg bg-richblack-5 p-4 text-richblack-900
                                opacity-0 transition-all duration-200 group-hover:visible
                                group-hover:opacity-100 lg:w-[300px]"`}
                  >
                    <div
                      className="absolute left-[50%] top-0 z-0
                                translate-x-[80%]
                                translate-y-[-45%] h-6 w-6 rotate-45 rounded bg-richblack-5"
                    ></div>

                    {subLinks.length ? (
                      subLinks.map((link, index) => (
                        <Link
                          to={`/catalog/${link.name
                            .toLowerCase()
                            .split(" ")
                            .join("-")
                            .split("/")
                            .join("-")}`}
                          key={index}
                        >
                          <p className="w-full h-15 pl-3 mt-3 py-3 hover:bg-richblack-50 transition-all duration-200 rounded-lg">
                            {link.name}
                          </p>
                        </Link>
                      ))
                    ) : (
                      <div className="text-xl font-medium text-center animate-pulse">Loading...</div>
                    )}
                  </div>
                </div>
              ) : (
                <Link to={link?.path}>
                  <p
                    className={`${
                      navLinkSelected(link?.path)
                        ? "text-yellow-25"
                        : " text-richblack-25"
                    } text-base font-normal`}
                  >
                    {link.title}
                  </p>
                </Link>
              )}
            </div>
          ))}
        </div>
        {/* login,signup,dashboard */}
        <div className="flex items-center gap-4 text-base font-medium text-richblack-100">
          {user && user.accountType != "Instructor" && (
            <Link to={"/dashboard/cart"} className="relative mr-2">
              <IoCartOutline className="text-2xl text-richblack-100" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 grid h-5 w-5 place-items-center overflow-hidden rounded-full bg-richblack-600 text-center text-xs font-bold text-yellow-100">
                  {totalItems}
                </span>
              )}
            </Link>
          )}
          {token === null && (
            <Link to={"/login"}>
              <button className=" border border-richblack-700 px-3 py-2 rounded-lg">
                Login
              </button>
            </Link>
          )}
          {token === null && (
            <Link to={"/signup"}>
              <button className=" border border-richblack-700 px-3 py-2 rounded-lg">
                Sign Up
              </button>
            </Link>
          )}
          {token != null && <ProfileDropDown />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
