import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

const useFavouriteRecipes = () => {
  const [data, setData] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any | null>(null);

  const key = "favourite-recipes";

  const getFavouriteRecipes = async () => {
    setIsLoading(true);

    try {
      const jsonValue = await AsyncStorage.getItem(`${key}`);
      setData(jsonValue ? JSON.parse(jsonValue) : []);
    } catch (error) {
      setError(error);
    }

    setIsLoading(false);
  };

  const updateFavouriteRecipes = async (id: number) => {
    let updatedFavourites = data || [];

    if (updatedFavourites.includes(id)) {
      const index = updatedFavourites.indexOf(id);
      updatedFavourites.splice(index, 1);
    } else {
      updatedFavourites.push(id);
    }

    try {
      const jsonValue = JSON.stringify(updatedFavourites);
      await AsyncStorage.setItem(key, jsonValue);

      getFavouriteRecipes();
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    getFavouriteRecipes();
  }, []);

  return { data, isLoading, error, updateFavouriteRecipes };
};

export default useFavouriteRecipes;
