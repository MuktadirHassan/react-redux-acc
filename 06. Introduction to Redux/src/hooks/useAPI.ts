import { useEffect, useState } from "react";

type StatusType = "idle" | "pending" | "success" | "error";

// For Home Product T -> IProduct[]
const useAPI = <T>(asyncService: () => Promise<T>) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [status, setStaus] = useState<StatusType>("idle");

  useEffect(() => {
    setStaus("pending");
    setError(null);
    asyncService()
      .then((data) => {
        setData(data);
        setStaus("success");
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
      });
  }, []);

  return {
    data,
    isLoading: status === "pending",
    isSuccess: status === "success",
    error,
  };
};

export default useAPI;
