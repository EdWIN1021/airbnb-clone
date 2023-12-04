import clsx from "clsx";
import { InputHTMLAttributes, useEffect, useMemo, useState } from "react";
import { twMerge } from "tailwind-merge";
import { MdError } from "react-icons/md";
import isEmail from "validator/lib/isEmail";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  value: string;
  id: string;
  message?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  id,
  value,
  className,
  message,
  disabled,
  type,
  ...rest
}) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    value && setIsActive(true);
  }, [value]);

  const validEmail = useMemo(
    () => value && !isEmail(value) && type === "email",
    [type, value]
  );

  return (
    <>
      <div
        className={twMerge(
          `relative h-[60px] w-full text-black border rounded-md p-1 ${
            validEmail && "border-primary"
          }`,
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
              "text-primary": validEmail,
            },
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

      {type === "email" && message && value && (
        <div className="flex items-center gap-1 mt-1">
          <MdError className="fill-primary" />
          <span className="text-[12px] text-primary">{message}</span>
        </div>
      )}
    </>
  );
};

export default TextInput;
