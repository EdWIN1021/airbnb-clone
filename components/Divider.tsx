import React from "react";

const Divider = () => {
  return (
    <div className="h-[28px]  relative flex items-center my-1">
      <div className="border-t-[1px] border-light-gray w-full"></div>
      <span className="absolute px-3 bg-[#fff] top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 ">
        or
      </span>
    </div>
  );
};

export default Divider;
