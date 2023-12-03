"use client";

import React, { useState } from "react";
import Modal from "./Modal";
import TextInput from "./TextInput";
import Image from "next/image";
import Divider from "./Divider";
import Button from "./Button";
import { IoIosClose } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
import { signIn } from "next-auth/react";

const LoginOrSigup = () => {
  const [email, setEmail] = useState("");
  const [step, setStep] = useState(0);

  console.log(step);

  return (
    <Modal>
      {step === 0 && (
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-50 bg-[#fff] w-[568px] max-w-[568px] rounded-lg">
          <IoIosClose className="h-8 w-8 absolute top-4 left-3" />
          <div className="border-b border-light-gray flex items-center h-[64px]">
            <p className="text-[16px] mx-auto font-bold">Log in or sign up</p>
          </div>

          <div className="bg-[#fff] p-6 rounded-lg">
            <h3 className="font-semibold text-[22px] mt-2 mb-6">
              Welcome to Airbnb
            </h3>

            <TextInput
              label="Email"
              id="email"
              value={email}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />

            <p className="mt-2">
              We’ll call or text you to confirm your number. Standard message
              and data rates apply. Privacy Policy
            </p>

            <Button
              className="bg-primary-btn text-[#fff] my-4"
              title={"Continue"}
              onClick={() => setStep((step) => step + 1)}
            />

            <Divider />

            <Button
              className="mb-4"
              title={"Continue with Google"}
              icon={
                <Image
                  src="/google.svg"
                  alt="google-logo"
                  width={18}
                  height={18}
                />
              }
              onClick={() => signIn("google", { redirect: false })}
            />

            <Button
              title={"Continue with Github"}
              icon={
                <Image
                  src="/github.svg"
                  alt="github-logo"
                  width={18}
                  height={18}
                />
              }
            />
          </div>
        </div>
      )}

      {step === 1 && (
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-50 bg-[#fff] w-[568px] max-w-[568px] rounded-lg">
          <IoIosArrowRoundBack
            onClick={() => setStep((step) => step - 1)}
            className="h-8 w-8 absolute top-4 left-3 cursor-pointer"
          />
          <div className="border-b border-light-gray flex items-center h-[64px]">
            <p className="text-[16px] mx-auto font-bold">Finish signing up</p>
          </div>

          <div className="bg-[#fff] p-6 rounded-lg">
            <TextInput
              label="Email"
              id="email"
              value={email}
              type="email"
              disabled
            />

            <p>
              By selecting Agree and continue, I agree to Airbnb’s Terms of
              Service, Payments Terms of Service, and Nondiscrimination Policy
              and acknowledge the Privacy Policy.
            </p>
            <Button
              className="bg-primary-btn text-[#fff] my-4"
              title={"Agree and continue"}
            />
          </div>
        </div>
      )}
    </Modal>
  );
};

export default LoginOrSigup;
