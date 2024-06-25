import React from "react";
import { Text, View, ActivityIndicator } from "react-native";
import type { HomeScreenProps, ListRecipe } from "../types";
import useFetch from "../hooks/useFetch";
import RecipeList from "../components/home/RecipeList";
import { useOrientation } from "../hooks/useCheckOrientation";

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const { data, isLoading, error } = useFetch<{ results: ListRecipe[] }>(
    "recipes/complexSearch",
    {}
  );
  const recipes = data.results;
  const orientation = useOrientation();

  const handleCardPress = (id: number) => {
    navigation.navigate("Recipe", {
      id,
    });
  };

  return (
    <View>
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : error ? (
        <Text>Something went wrong</Text>
      ) : (
        <RecipeList
          recipes={recipes}
          orientation={orientation}
          handleCardPress={handleCardPress}
        />
      )}
    </View>
  );
};

export default HomeScreen;
