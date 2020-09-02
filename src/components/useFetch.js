import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [confirmed, setConfirmed] = useState(null);
  const [deaths, setDeaths] = useState(null);
  const [recovered, setRecovered] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data); // <-<< Delete this
        setConfirmed(data.confirmed.value);
        setDeaths(data.deaths.value);
        setRecovered(data.recovered.value);
      } catch (error) {
        setError(`error message: ${error}`);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { confirmed, deaths, recovered, isLoading, error };
};

export default useFetch;
