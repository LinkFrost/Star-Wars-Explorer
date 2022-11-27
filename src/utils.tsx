import { useState, useEffect } from "react";
import axios from "axios";

export function useSWAPI(attribute: String, searchQuery: String) {
  const [data, setData] = useState<any>();
  const [fetchStatus, setFetchStatus] = useState("");

  const baseUrl: String = "https://swapi.dev/api/";

  useEffect(() => {
    if (!searchQuery) {
      setData(null);
      setFetchStatus("field empty");

      return;
    }

    const apiData = async () => {
      setFetchStatus("loading");

      if (attribute.length === 0) {
        let url: any = searchQuery;
        let data = await axios.get(url).then((res) => res.data);

        setData(data);
      } else {
        let url: any = `${baseUrl}${attribute}/?search=${searchQuery}`;
        let data = await axios.get(url).then((res) => res.data.results);

        if (data.length === 0) return false;

        setData(data[0]);
      }

      setFetchStatus("loaded");
    };

    apiData();
  }, [attribute, searchQuery]);

  return { fetchStatus, data };
}

export function useImageAPI(searchQuery: String) {
  const [data, setData] = useState<any>();
  const [fetchStatus, setFetchStatus] = useState("");

  useEffect(() => {
    if (!searchQuery) {
      setData(null);
      setFetchStatus("field empty");

      return;
    }

    const apiData = async () => {
      setFetchStatus("loading");

      const options = {
        method: "get",
        url: `https://api.bing.microsoft.com/v7.0/images/search/`,
        params: { q: searchQuery },
        headers: {
          "Ocp-Apim-Subscription-Key": process.env.REACT_APP_BING_API || "",
        },
      };

      axios
        .request(options)
        .then((res) => {
          console.log(res.data);
          setData(res.data);
          setFetchStatus("loaded");
        })
        .catch((err) => {
          console.error(err);
        });
    };

    apiData();
  }, [searchQuery]);

  return { fetchStatus, data };
}
