import { useState, useEffect } from "react";
import axios from "axios";
import { RAPID_API_KEY } from "@env";

const rapidApiKey = RAPID_API_KEY;

const useFetch = <TData = any>(endpoint: string, query: any) => {
  const [data, setData] = useState<TData>([] as TData);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any | null>(null);
  const link = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com";
  const headers = {
    "X-RapidAPI-Key": rapidApiKey,
    "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
  };

  const fetchData = async () => {
    setIsLoading(true);

    const options = {
      method: "GET",
      url: `${link}/${endpoint}`,
      headers,
      params: { ...query },
    };

    try {
      const response = await axios.request(options);

      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  const fetchWithUrl = async (endpoint: string) => {
    let responseData = null;

    const options = {
      method: "GET",
      url: `${link}/${endpoint}`,
      headers,
    };

    try {
      const response = await axios.request(options);
      responseData = response.data;
    } catch (error) {
      console.log(error);
    }

    return responseData;
  };

  return { data, isLoading, error, refetch, fetchWithUrl };
};

export default useFetch;
