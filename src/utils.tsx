import { useState, useEffect } from "react";
import axios from "axios";

export function useAPI(attribute: String, searchQuery: String) {
  const [data, setData] = useState<any>();
  const [fetchStatus, setFetchStatus] = useState("");

  const baseUrl: String = "https://swapi.dev/api/";

  useEffect(() => {
    if (!searchQuery) {
      setData(null);
      setFetchStatus("loading");
      return;
    }
    const apiData = async () => {
      setFetchStatus("loading");

      let url: any = `${baseUrl}${attribute}/?search=${searchQuery}`;
      if (!attribute) url = searchQuery;

      const data = await axios.get(url).then((res) => res.data.results);

      if (data.length === 0) return false;

      setData(data[0]);
      setFetchStatus("loaded");
    };

    apiData();
  }, [searchQuery]);

  return { fetchStatus, data };
}
