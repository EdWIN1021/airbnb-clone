import clsx from "clsx";
import { InputHTMLAttributes, useEffect, useMemo, useState } from "react";
import { twMerge } from "tailwind-merge";
import { VscError } from "react-icons/vsc";
import { TbCircleCheck } from "react-icons/tb";
import isStrongPassword from "validator/lib/isStrongPassword";

interface PasswordInputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  username?: string;
  email?: string;
  showValidator?: boolean;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  value,
  className,
  username,
  email,
  showValidator = false,
  ...rest
}) => {
  const [isActive, setIsActive] = useState(false);
  const [show, toggle] = useState(false);

  useEffect(() => {
    value && setIsActive(true);
  }, [value]);

  const isValidLength = useMemo(() => (value as string).length >= 8, [value]);
  const isWeakPassword = useMemo(
    () => !isStrongPassword(value as string),
    [value]
  );

  const isContainsNumberOrSymbol = useMemo(() => {
    const regex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?0-9]/;
    return regex.test(value as string);
  }, [value]);

  const isContainsNameOrEmail = useMemo(() => {
    return (
      value.includes(email as string) || value.includes(username as string)
    );
  }, [value, email, username]);

  return (
    <>
      <div className={twMerge("relative h-[60px] w-full ", className)}>
        <input
          {...rest}
          id={"password"}
          value={value}
          type={show ? "text" : "password"}
          className={
            "w-full rounded-md border px-4 pb-1 pt-7 leading-normal text-black outline-none"
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
          htmlFor={"password"}
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

      {showValidator && (
        <ul className="text-[12px] ">
          <li
            className={`flex items-center gap-1 text-primary ${
              !isWeakPassword && "text-[green]"
            }`}
          >
            {isWeakPassword ? <VscError /> : <TbCircleCheck />}
            <span>Password strength: weak</span>
          </li>
          <li
            className={`flex items-center gap-1 text-primary ${
              !isContainsNameOrEmail && "text-[green]"
            }`}
          >
            {isContainsNameOrEmail ? <VscError /> : <TbCircleCheck />}

            <span>Can&apos;t contain your name or email address</span>
          </li>
          <li
            className={`flex items-center gap-1 text-primary ${
              isValidLength && "text-[green]"
            }`}
          >
            {isValidLength ? <TbCircleCheck /> : <VscError />}

            <span>At least 8 characters</span>
          </li>
          <li
            className={`flex items-center gap-1 text-primary ${
              isContainsNumberOrSymbol && "text-[green]"
            }`}
          >
            {isContainsNumberOrSymbol ? <TbCircleCheck /> : <VscError />}
            <span>Contains a number or symbol</span>
          </li>
        </ul>
      )}
    </>
  );
};

export default PasswordInput;
