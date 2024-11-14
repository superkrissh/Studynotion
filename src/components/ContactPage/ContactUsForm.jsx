import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { apiConnector } from "../../services/apiconnector";
import { contactusEndpoint } from "../../services/apis";
import CountryCode from "../../data/countrycode.json";

const ContactUsForm = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const submitContactForm = async (data) => {
    // console.log("Logging Data", data);
    try {
      setLoading(true);
      const res = await apiConnector(
        "POST",
        contactusEndpoint.CONTACT_US_API,
        data
      );
      // console.log("Email Res - ", res);
      setLoading(false);
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        email: "",
        firstname: "",
        lastname: "",
        message: "",
        phoneNo: "",
      });
    }
  }, [reset, isSubmitSuccessful]);

  return (
    <form onSubmit={handleSubmit(submitContactForm)}>
      <div className="flex flex-col gap-9 p-8 justify-center w-full text-sm font-normal text-richblack-5">
        <div className="flex flex-col gap-5 justify-center">
          <div className="flex w-full gap-5 items-center">
            <div className="flex gap-5 items-baseline">
              {/* firstName */}
              <div className="flex w-full flex-col gap-1">
                <label htmlFor="firstname">First Name</label>
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  placeholder="Enter first name"
                  className="p-3 bg-richblack-800 rounded-lg shadow-[inset_0px_-1px_0px_0px_#FFFFFF2E]"
                  {...register("firstname", { required: true })}
                />
                {errors.firstname && (
                  <span className="-mt-1 text-[12px] text-yellow-100">
                    Please enter Your name
                  </span>
                )}
              </div>

              {/* lastName */}
              <div className="flex w-full flex-col gap-1">
                <label htmlFor="lastname">Last Name</label>
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  className="p-3 bg-richblack-800 rounded-lg shadow-[inset_0px_-1px_0px_0px_#FFFFFF2E]"
                  placeholder="Enter Last name"
                  {...register("lastname")}
                />
              </div>
            </div>
          </div>

          {/* email */}
          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              className="p-3 bg-richblack-800 rounded-lg shadow-[inset_0px_-1px_0px_0px_#FFFFFF2E]"
              placeholder="Enter email Address"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="-mt-1 text-[12px] text-yellow-100">
                Please enter your email address
              </span>
            )}
          </div>

          {/* phoneNo */}
          <div className="flex flex-col gap-1">
            <label htmlFor="phonenumber">Phone Number</label>

            <div className="flex flex-row gap-3">
              {/* dropdown */}

              <select
                name="dropdown"
                id="dropdown"
                className="bg-richblack-800 w-[80px] text-richblack-200 p-3 rounded-md shadow-[inset_0px_-1px_0px_0px_#FFFFFF2E]"
                {...register("countrycode", { required: true })}
              >
                {CountryCode.map((element, index) => {
                  return (
                    <option
                      key={index}
                      value={element.code}
                      className="bg-richblack-800"
                    >
                      {element.code} -{element.country}
                    </option>
                  );
                })}
              </select>

              <input
                type="number"
                name="phonenumber"
                id="phonenumber"
                placeholder="12345 67890"
                className="bg-richblack-800 rounded-md p-3 shadow-[inset_0px_-1px_0px_0px_#FFFFFF2E]  w-[calc(100%-90px)]"
                {...register("phoneNo", {
                  required: {
                    value: true,
                    message: "Please enter Phone Number",
                  },
                  maxLength: { value: 10, message: "Invalid Phone Number" },
                  minLength: { value: 8, message: "Invalid Phone Number" },
                })}
              />
            </div>
            {errors.phoneNo && (
              <span className="-mt-1 text-[12px] text-yellow-100">
                {errors.phoneNo.message}
              </span>
            )}
          </div>
        </div>
        {/* message */}
        <div className="flex flex-col gap-1">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="7"
            className="p-3 bg-richblack-800 rounded-lg shadow-[inset_0px_-1px_0px_0px_#FFFFFF2E]"
            placeholder="Enter Your message here"
            {...register("message", { required: true })}
          />
          {errors.message && (
            <span className="-mt-1 text-[12px] text-yellow-100">
              Please enter your message.
            </span>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`rounded-md bg-yellow-50 px-6 py-3 text-center text-[13px] font-bold text-black shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] 
         ${
           !loading &&
           "transition-all duration-200 hover:scale-95 hover:shadow-none"
         }  disabled:bg-richblack-500 sm:text-[16px] `}
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactUsForm;
