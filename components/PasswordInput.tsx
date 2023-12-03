import clsx from "clsx";
import { InputHTMLAttributes, useEffect, useState } from "react";
import { RxEyeOpen } from "react-icons/rx";
import { GoEyeClosed } from "react-icons/go";
import { twMerge } from "tailwind-merge";

const PasswordInput: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({
  value,
  className,
  id,
  ...rest
}) => {
  const [isActive, setIsActive] = useState(false);
  const [show, toggle] = useState(false);

  useEffect(() => {
    value && setIsActive(true);
  }, [value]);

  return (
    <div className={twMerge("relative h-[60px] w-full ", className)}>
      <input
        {...rest}
        id={id}
        value={value}
        type={show ? "text" : "password"}
        className={
          "w-full rounded-md border px-4 pb-1 pt-7 leading-normal text-black outline-[#000] "
        }
        onFocus={() => setIsActive(true)}
        onBlur={() => !value && setIsActive(false)}
      />
      <label
        className={clsx(
          `absolute cursor-text duration-200 text-dark-gray`,
          {
            "left-[5%] top-1/2 -translate-y-1/2 ": !isActive,
          },
          {
            "left-[3%] top-[20%] text-xs": isActive,
          }
        )}
        htmlFor={id}
      >
        Password
      </label>

      <div
        className="absolute right-7 top-1/2 -translate-y-1/2 w-5 cursor-pointer"
        onClick={() => toggle((show) => !show)}
      >
        {show ? (
          <span className="hover:text-underline">hide</span>
        ) : (
          <span>show</span>
        )}
      </div>
    </div>
  );
};

export default PasswordInput;
