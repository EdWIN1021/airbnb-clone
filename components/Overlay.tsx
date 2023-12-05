import React, { Dispatch, SetStateAction } from "react";

const Overlay: React.FC<{ toggle: Dispatch<SetStateAction<boolean>> }> = ({
  toggle,
}) => {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0.3)] top-0 h-full w-full "
      onClick={() => toggle(false)}
    ></div>
  );
};

export default Overlay;
