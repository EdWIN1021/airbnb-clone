import React from "react";

const Tab = ({
  tab,
  onClick,
}: {
  tab: { title: string; icon: React.ReactNode };
  onClick: () => void;
}) => {
  return (
    <div
      className="flex flex-col justify-center items-center cursor-pointer"
      onClick={onClick}
    >
      <div>{tab.icon}</div>
      <span className="text-[12px] text-dark-gray mt-1">{tab.title}</span>
    </div>
  );
};

export default Tab;
