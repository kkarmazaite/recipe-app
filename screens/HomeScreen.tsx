import React, { useEffect } from "react";
import { Text, View, ActivityIndicator } from "react-native";
import type { HomeScreenProps, ListRecipe } from "../types";
import useFetch from "../hooks/useFetch";
import RecipeList from "../components/home/RecipeList";
import { useOrientation } from "../hooks/useCheckOrientation";
import SearchBar from "../components/home/SearchBar";
import useFavouriteRecipes from "../hooks/useFavouriteRecipes";

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const steps = 10;
  const [recipes, setRecipes] = React.useState<ListRecipe[]>([]);
  const [offset, setOffset] = React.useState(0);
  const [overallResults, setOverallResults] = React.useState(steps);

  const [searchText, setSearchText] = React.useState("");
  const { data, isLoading, error, refetch, fetchWithUrl } = useFetch<{
    results: ListRecipe[];
  }>(`recipes/complexSearch?query=${encodeURIComponent(searchText)}`, {});
  const {
    data: favouriteRecipes,
    updateFavouriteRecipes: handleFavouriteButtonPress,
    getFavouriteRecipes,
  } = useFavouriteRecipes();
  const orientation = useOrientation();

  const getNextPageData = async () => {
    let nextPageData = null;

    const nextOffset = offset + steps;
    const nextOverallResults = overallResults + steps;

    try {
      nextPageData = await fetchWithUrl(
        `recipes/complexSearch?query=${encodeURIComponent(
          searchText
        )}&offset=${nextOffset}&number=${nextOverallResults}`
      );

      if (nextPageData) {
        setRecipes([...recipes, ...nextPageData.results]);
        setOffset(nextOffset);
        setOverallResults(nextOverallResults);
      }
    } catch (e) {}
  };

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

  useEffect(() => {
    setRecipes(data.results);
    setOffset(0);
    setOverallResults(steps);
  }, [data]);

  useEffect(() => {
    refetch();
  }, [searchText]);

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
          addNextPageData={getNextPageData}
        />
      )}
    </View>
  );
};

export default HomeScreen;
