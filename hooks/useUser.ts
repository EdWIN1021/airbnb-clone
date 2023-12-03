"use client";

import { useQuery } from "@tanstack/react-query";
import { Dispatch, SetStateAction } from "react";

const useUser = (email: string, setStep: Dispatch<SetStateAction<number>>) => {
  const getUser = async (email: string) => {
    const res = await fetch(`/api/user?email=${email}`, { cache: "no-store" });
    const data = await res.json();

    if (res.status === 400) {
      setStep((step) => step + 2);
      return null;
    }

    setStep((step) => step + 1);
    return data.user;
  };

  const { isLoading, refetch } = useQuery({
    queryKey: ["user", { email }],
    queryFn: () => getUser(email),
    enabled: false,
  });

  return { isLoading, refetch };
};

export default useUser;
