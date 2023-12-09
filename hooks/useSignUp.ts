import { MutationFunction, useMutation } from "@tanstack/react-query";

interface SignUpData {
  name: string;
  email: string;
  password: string;
}

interface ApiResponse {
  status: string;
  message: string;
}

const signUp: MutationFunction<ApiResponse, SignUpData> = async ({
  name,
  email,
  password,
}) => {
  try {
    const res = await fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      return data;
    } else {
      throw new Error(data?.message);
    }
  } catch (error) {
    console.log(error);
    return { message: (error as ApiResponse).message };
  }
};

const useSignUp = () => {
  const { mutate, isPending } = useMutation<ApiResponse, Error, SignUpData>({
    mutationFn: signUp,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: () => {},
  });

  return { mutate, isPending };
};

export default useSignUp;
