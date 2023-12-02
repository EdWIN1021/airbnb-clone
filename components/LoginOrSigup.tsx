"use client";

import React, { useState } from "react";
import Modal from "./Modal";
import TextInput from "./TextInput";
import Image from "next/image";

const LoginOrSigup = () => {
  const [email, setEmail] = useState("");

  return (
    <Modal>
      <div className="bg-[#fff] p-6 rounded-lg">
        <h3 className="font-semibold text-[22px] mt-2 mb-6">
          Welcome to Airbnb
        </h3>

        <TextInput label="Email" id="email" value={email} type="email" />

        <p className="mt-2">
          We’ll call or text you to confirm your number. Standard message and
          data rates apply. Privacy Policy
        </p>

        <button className="my-4 p-4 bg-primary w-full rounded-xl text-[#fff] font-semibold">
          Continue
        </button>

        <div className="h-[28px]  relative flex items-center my-1">
          <div className="border-t-[1px] border-light-gray w-full"></div>
          <span className="absolute px-3 bg-[#fff] top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 ">
            or
          </span>
        </div>

        <button className="w-full text-[14px] border rounded-xl flex justify-center items-center gap-2 mb-4 p-4">
          <Image src="/google.svg" alt="google-logo" width={18} height={18} />
          <span className="font-medium text-[rgb(60,64,67)] flex-1">
            Sign up with Google
          </span>
        </button>

        <button className=" w-full text-[14px] border rounded-xl  flex justify-center items-center gap-2 mb-4 p-4">
          <Image src="/github.svg" alt="google-logo" width={18} height={18} />
          <span className="font-medium text-[rgb(60,64,67)] flex-1">
            Sign up with Github
          </span>
        </button>
      </div>
    </Modal>
  );
};

export default LoginOrSigup;
