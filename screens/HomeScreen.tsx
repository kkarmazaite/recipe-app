import React, { useEffect } from "react";
import { Text, View, ActivityIndicator } from "react-native";
import type { HomeScreenProps, ListRecipe } from "../types";
import useFetch from "../hooks/useFetch";
import RecipeList from "../components/home/RecipeList";
import { useOrientation } from "../hooks/useCheckOrientation";
import SearchBar from "../components/home/SearchBar";
import useFavouriteRecipes from "../hooks/useFavouriteRecipes";

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [searchText, setSearchText] = React.useState("");
  const { data, isLoading, error, refetch } = useFetch<{
    results: ListRecipe[];
  }>(`recipes/complexSearch?query=${encodeURIComponent(searchText)}`, {});
  const {
    data: favouriteRecipes,
    updateFavouriteRecipes: handleFavouriteButtonPress,
    getFavouriteRecipes,
  } = useFavouriteRecipes();
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

  useEffect(() => {
    return navigation.addListener("focus", () => {
      getFavouriteRecipes();
    });
  }, [navigation]);

  return (
    <View>
      <SearchBar
        searchText={searchText}
        handleSearchTextChange={handleSearchTextChange}
      />

      {error ? (
        <Text>Something went wrong</Text>
      ) : isLoading ? (
        <Text>Loading</Text>
      ) : (
        <RecipeList
          recipes={recipes}
          favouriteRecipes={favouriteRecipes}
          orientation={orientation}
          handleCardPress={handleCardPress}
          handleFavouriteButtonPress={handleFavouriteButtonPress}
        />
      )}
    </View>
  );
};

export default HomeScreen;
