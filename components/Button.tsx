import React, { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  title: string;
}

const Button: React.FC<ButtonProps> = ({ icon, title, className, ...rest }) => {
  return (
    <button
      {...rest}
      className={twMerge(
        "w-full border rounded-xl flex justify-center items-center gap-2 p-3",
        className
      )}
    >
      {icon}
      <span className="font-medium text-white flex-1">{title}</span>
    </button>
  );
};

export default Button;
