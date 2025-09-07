import React from "react";

const Button = ({ children, className, onClick, ...props }) => {
  return (
    <button
      className={`rounded-md text-white px-8 py-2 bg-gradient-to-r from-violet-500 to-orange-500  ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
