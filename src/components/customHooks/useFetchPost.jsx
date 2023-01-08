import React, { useState, useEffect } from "react";
import { postUrl } from "../../constants/Constants";
import axios from "axios";
import { useLocation } from "react-router-dom";
export const useFetchPost = () => {
  const [data, setData] = useState();

  const search = useLocation().search;
  const id = new URLSearchParams(search).get("id");

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(postUrl + id);
      console.log(response.data);
      setData(response.data);
    };

    fetchData();
  }, []);

  return data;
};
