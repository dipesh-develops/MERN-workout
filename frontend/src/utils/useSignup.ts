import { useState } from "react";

interface Param {
  email: string;
  password: string;
}
interface Error {
  message: string;
}

const useSignup = () => {
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean | null>(null);

  const signup = async ({ email, password }: Param) => {
    setIsLoading(true);
    setError(null);
    const response = await fetch("/api/user/signup", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const json = await response.json();
    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      //save the user to local storage
      localStorage.setItem("user", JSON.stringify(json));
    }
  };
};
export default useSignup;
