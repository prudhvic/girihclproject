import { useEffect, useState } from "react";

export let useFetch = (url) => {
  let [data, setData] = useState();
  let [isPending, setIsPending] = useState(true);
  let [error, setIsError] = useState("");
  useEffect(() => {
    if (!url) {
      return;
    }
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("sorry could not fetch the data");
        }
        setIsPending(false);
        return res.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        setIsError(err.message);
        setIsPending(false);
      });
  }, [url]);
  return {
    data,
    isPending,
    error,
  };
};
