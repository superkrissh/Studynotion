import React from "react";

const IconBtn = ({
  text,
  onclick,
  disabled,
  children,
  customClasses,
  outline = false,
  type,
}) => {
  return (
    <button
      onClick={onclick}
      disabled={disabled}
      type={type}
      className={`text-base  ${
        outline ? "border border-yellow-50 bg-transparent" : "bg-yellow-50"
      }  font-semibold text-richblue-900 px-4 py-2 rounded-lg ${customClasses}`}
    >
      {children ? (
        <div className="flex items-center gap-2">
          <span className={`${outline && "text-yellow-50"}`}>{text}</span>
          {children}
        </div>
      ) : (
        text
      )}
    </button>
  );
};

export default IconBtn;
