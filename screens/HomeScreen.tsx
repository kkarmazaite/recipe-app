import React from "react";
import { Text, View, ActivityIndicator } from "react-native";
import type { HomeScreenProps, ListRecipe } from "../types";
import useFetch from "../hooks/useFetch";
import RecipeList from "../components/home/RecipeList";
import { useOrientation } from "../hooks/useCheckOrientation";
import SearchBar from "../components/home/SearchBar";

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [searchText, setSearchText] = React.useState("");
  const { data, isLoading, error, refetch } = useFetch<{
    results: ListRecipe[];
  }>(`recipes/complexSearch?query=${encodeURIComponent(searchText)}`, {});
  const recipes = data.results;
  const orientation = useOrientation();

  const handleCardPress = (id: number) => {
    navigation.navigate("Recipe", {
      id,
    });
  };

  const handleSearchTextChange = (text: string) => {
    setSearchText(text);
    refetch();
  };

  return (
    <View>
      <SearchBar
        searchText={searchText}
        handleSearchTextChange={handleSearchTextChange}
      />

      {error ? (
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
