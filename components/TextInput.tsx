import clsx from "clsx";
import { InputHTMLAttributes, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  value: string;
  id: string;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  id,
  value,
  className,
  ...rest
}) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    value && setIsActive(true);
  }, [value]);

  return (
    <div
      className={twMerge(
        "relative h-[60px] w-full text-black border rounded-md p-1",
        className
      )}
    >
      <input
        {...rest}
        id={id}
        value={value}
        maxLength={50}
        className={"w-full h-full px-4 pb-1 pt-7 leading-normal outline-none"}
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
        {label}
      </label>
    </div>
  );
};

export default TextInput;
