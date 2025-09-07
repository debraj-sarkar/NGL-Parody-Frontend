import React from "react";

const GradientHeading = ({ children, className }) => {
  return (
    <div>
      <h1 className={`${className}`}>
        <span className="bg-gradient-to-r from-violet-500 to-orange-500 bg-clip-text text-transparent">
          {children}
        </span>
      </h1>
    </div>
  );
};

export default GradientHeading;
