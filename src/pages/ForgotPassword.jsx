import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { getPasswordResetToken } from "../services/operations/authAPI";
const ForgotPassword = () => {
  const [emailSent, setEmailSent] = useState(false);
  const [email, setEmail] = useState("");
  const { loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(getPasswordResetToken(email, setEmailSent));
  };
  return (
    <div className="flex justify-center item-center mt-32 h-full">
      {loading ? (
        <div>loading...</div>
      ) : (
        <div className="flex flex-col max-w-lg justify-center gap-9 p-8">
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl font-semibold text-richblack-5">
              {!emailSent ? "Reset your password" : "Check email"}
            </h2>
            <p className="text-lg font-normal text-richblack-100">
              {!emailSent
                ? "Have no fear. We’ll email you instructions to reset your password. If you dont have access to your email  we can try account recovery"
                : `We have sent the reset email to ${email}`}
            </p>
          </div>
          <form
            onSubmit={handleOnSubmit}
            className="flex flex-col justify-center gap-5"
          >
            {!emailSent && (
              <label>
                <p className="text-sm font-normal mb-1 text-richblack-5">
                  Email Address<span className="text-pink-200">*</span>
                </p>
                <input
                  required
                  type="email"
                  name="email"
                  value={email}
                  placeholder="Enter your Email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-richblack-800 p-3 w-full text-richblack-5 shadow-[inset_0px_-1px_0px_0px_#FFFFFF2E] border-none rounded-md "
                />
              </label>
            )}
            <button
              type="submit"
              className="bg-yellow-50 p-3 rounded-lg shadow-[inset_-0.5px_-1.5px_0px_0px_#0000001F] min-w-fit text-base font-medium text-richblack-900"
            >
              {!emailSent ? "Reset Password" : "Resend Email"}
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

export default ForgotPassword;
