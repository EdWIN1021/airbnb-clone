"use client";

import React, { useState } from "react";
import Modal from "./Modal";
import TextInput from "./TextInput";

const LoginOrSigup = () => {
  const [email, setEmail] = useState("");

  return (
    <Modal>
      <div className="bg-[#fff] p-6">
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
      </div>
    </Modal>
  );
};

export default LoginOrSigup;
