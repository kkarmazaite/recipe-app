import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import useFetch from "../hooks/useFetch";
import type { RecipeScreenProps, Recipe } from "../types";

const RecipeScreen: React.FC<RecipeScreenProps> = ({ route }) => {
  const { id } = route.params;

  const { data, isLoading, error } = useFetch(`recipes/${id}/information`, {});
  const recipe = data as Recipe;

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : error ? (
        <Text>Something went wrong</Text>
      ) : (
        <Text>{recipe.title}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default RecipeScreen;
