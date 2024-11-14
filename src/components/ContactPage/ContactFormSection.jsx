import React from "react";
import ContactUsForm from "../ContactPage/ContactUsForm";

const ContactFormSection = () => {
  return (
    <div className="flex flex-col gap-8 justify-center items-center mt-28">
      <div className="flex flex-col gap-3 justify-center items-center">
        <h1 className="text-4xl font-semibold text-richblack-5">
          Get in Touch
        </h1>
        <p className="text-base font-medium text-richblack-300">
          We'd love to here for you, Please fill out this form.
        </p>
      </div>
      <div>
        <ContactUsForm />
      </div>
    </div>
  );
};

export default ContactFormSection;
