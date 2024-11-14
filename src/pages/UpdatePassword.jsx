import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { resetPassword } from "../services/operations/authAPI";
import { FaArrowLeftLong } from "react-icons/fa6";

const UpdatePassword = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.auth);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmpassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  const { password, confirmPassword } = formData;
  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const token = location.pathname.split("/").at(-1);
    dispatch(resetPassword(password, confirmPassword, token, navigate));
  };
  return (
    <div className=" flex justify-center items-center mt-32 h-full ">
      {loading ? (
        <div></div>
      ) : (
        <div className="flex flex-col justify-center gap-6 w-[508px] p-8">
          <div className="flex flex-col gap-3 justify-center">
            <h2 className="text-3xl font-semibold text-richblack-5">
              Choose new password
            </h2>
            <p className="text-lg font-normal text-richblack-100">
              Almost done. Enter your new password and youre all set.
            </p>
          </div>

          <form
            onSubmit={handleOnSubmit}
            className="flex flex-col gap-5 justify-center"
          >
            <label className="relative">
              <p className="text-sm font-normal mb-1 text-richblack-5">
                New password<span className="text-pink-200">*</span>
              </p>

              <input
                required
                name="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={handleOnChange}
                placeholder="Enter new password"
                className="bg-richblack-800 relative p-3 w-full text-richblack-5 shadow-[inset_0px_-1px_0px_0px_#FFFFFF2E] border-none rounded-md "
              />
              <span
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute top-[50%] right-3  text-richblack-5"
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible className="w-5 h-5" />
                ) : (
                  <AiOutlineEye className="w-5 h-5" />
                )}
              </span>
            </label>
            <label className="relative">
              <p className="text-sm font-normal mb-1 text-richblack-5">
                Confirm new password<span className="text-pink-200">*</span>
              </p>
              <input
                required
                name="confirmPassword"
                type={showConfirmpassword ? "text" : "password"}
                value={confirmPassword}
                onChange={handleOnChange}
                placeholder="Enter Confirm password"
                className="bg-richblack-800 relative p-3 w-full text-richblack-5 shadow-[inset_0px_-1px_0px_0px_#FFFFFF2E] border-none rounded-md "
              />
              <span
                onClick={() => setShowConfirmPassword((prev) => !prev)}
                className="absolute top-[50%] right-3  text-richblack-5"
              >
                {showConfirmpassword ? (
                  <AiOutlineEyeInvisible className="w-5 h-5" />
                ) : (
                  <AiOutlineEye className="w-5 h-5" />
                )}
              </span>
            </label>
            <button
              type="submit"
              className="bg-yellow-50 p-3 rounded-lg shadow-[inset_-0.5px_-1.5px_0px_0px_#0000001F] min-w-fit text-base font-medium text-richblack-900"
            >
              Reset Password
            </button>
          </form>
          <div className="text-base font-medium text-richblack-5">
            <Link to={"/login"} className="flex gap-2 items-center">
              <FaArrowLeftLong />
              <p>Back to login</p>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdatePassword;
