import React from "react";
import { ActivityIndicator, Text, View } from "react-native";
import useFetch from "../hooks/useFetch";
import type { RecipeScreenProps, Recipe } from "../types";
import RecipeDetails from "../components/recipe/RecipeDetails";

const RecipeScreen: React.FC<RecipeScreenProps> = ({ route }) => {
  const { id } = route.params;

  const { data, isLoading, error } = useFetch<Recipe>(
    `recipes/${id}/information`,
    {}
  );
  const recipe = data;

  return (
    <View>
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : error ? (
        <Text>Something went wrong</Text>
      ) : (
        <RecipeDetails recipe={recipe} />
      )}
    </View>
  );
};

export default RecipeScreen;
