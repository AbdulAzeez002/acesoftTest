import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url) => {
  useEffect(() => {
    fetchDatasWithDelay();
  }, []);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const fetchDatas = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      console.log(error, "error");
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const refresh = () => {
    fetchDatasWithDelay();
    // setTimeout(fetchDatas, 2000);
  };

  const fetchDatasWithDelay = () => {
    setLoading(true);
    setTimeout(() => fetchDatas(), 2000);
  };

  return { loading, data, error, refresh };
};

export default useFetch;
