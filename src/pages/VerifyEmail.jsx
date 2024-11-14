import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import OtpInput from "react-otp-input";
import { signUp, sendOtp } from "../services/operations/authAPI";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { RxCountdownTimer } from "react-icons/rx";

const VerifyEmail = () => {
  const [otp, setOtp] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { signupData, loading } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!signupData) {
      navigate("/signup");
    }
  }, []);

  const { accountType, firstName, lastName, email, password, confirmPassword } =
    signupData;

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(
      signUp(
        accountType,
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        otp,
        navigate
      )
    );
  };
  return (
    <div className="h-full w-full flex justify-center mt-32 items-center ">
      {loading ? (
        <div></div>
      ) : (
        <div className="flex max-w-lg flex-col justify-center gap-6 p-8">
          <h2 className="text-3xl font-semibold text-richblack-5">
            Verify Email
          </h2>
          <p className="text-lg font-normal text-richblack-100">
            A verification code has been sent to you. Enter the code below
          </p>
          <form
            onSubmit={handleOnSubmit}
            className="flex flex-col gap-8 w-full"
          >
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderSeparator={<span>-</span>}
              renderInput={(props) => (
                <input
                  {...props}
                  placeholder="-"
                  style={{
                    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                  }}
                  className="w-[48px] lg:w-[65px] border-0 bg-richblack-800 rounded-[0.5rem] text-richblack-5 aspect-square text-center focus:border-0 focus:outline-2 focus:outline-yellow-50"
                  containerStyle={{
                    justifyContent: "space-between",
                    gap: "0 6px",
                  }}
                />
              )}
            />
            <button
              type="submit"
              className="bg-yellow-50 text-richblack-900 font-medium w-[444px] p-3 rounded-md"
            >
              Verify Email
            </button>
          </form>
          <div className="flex justify-between items-center">
            <div className="flex text-base items-center justify-center text-richblack-5 font-medium">
              <Link to={"/login"} className="flex items-center gap-1">
                <FaArrowLeftLong className="w-5 h-4" />
                <p>Back to Login</p>
              </Link>
            </div>
            <button
              onClick={() => dispatch(sendOtp(signupData.email, navigate))}
              className=" text-base font-medium text-blue-100 shadow-[inset_-0.5px_-1.5px_0px_0px_#0000001F] flex gap-1 items-center"
            >
              <RxCountdownTimer />
              <p>resend it</p>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VerifyEmail;
