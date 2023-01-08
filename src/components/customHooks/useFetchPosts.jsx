import React, { useState, useEffect } from "react";
import { postsUrl } from "../../constants/Constants";
import axios from "axios";

export const useFetchPosts = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(postsUrl);
      console.log(response.data);
      setData(response.data);
    };

    fetchData();
  }, []);

  return data;
};
