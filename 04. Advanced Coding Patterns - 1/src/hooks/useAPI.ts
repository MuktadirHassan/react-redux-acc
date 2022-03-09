import { useEffect, useState } from "react";

type StatusType = "idle" | "pending" | "success" | "error";

const useAPI = <T>(service: () => Promise<T>, initialValue = null) => {
  const [data, setData] = useState<T | null>(initialValue);
  const [status, setStatus] = useState<StatusType>("idle");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setStatus("pending");
    setError(null);
    service()
      .then((res) => {
        setData(res);
        setStatus("success");
      })
      .catch((err) => {
        setError(err);
        setStatus("error");
        setData(null);
      });
  }, []);

  return {
    data,
    isLoading: status === "pending",
    isSuccess: status === "success",
    error: error,
  };
};
export default useAPI;
