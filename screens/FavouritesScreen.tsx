import React, { useEffect } from "react";
import { Text, View } from "react-native";
import useFavouriteRecipes from "../hooks/useFavouriteRecipes";
import useFetch from "../hooks/useFetch";
import { FavouritesScreenProps, ListRecipe, Recipe } from "../types";
import RecipeList from "../components/home/RecipeList";
import { useOrientation } from "../hooks/useCheckOrientation";

const FavouritesScreen: React.FC<FavouritesScreenProps> = ({ navigation }) => {
  const [recipeIds, setRecipeIds] = React.useState("");
  const {
    data: favouriteRecipes,
    updateFavouriteRecipes,
    getFavouriteRecipes,
  } = useFavouriteRecipes();

  const { data, isLoading, error, refetch } = useFetch(
    `recipes/informationBulk?ids=${recipeIds}`,
    {}
  );

  const recipes: Recipe[] = data;
  const orientation = useOrientation();

  const handleFavouriteButtonPress = (id: number) => {
    updateFavouriteRecipes(id);
    updateRecipeIds();
  };

  const handleCardPress = (id: number) => {
    navigation.navigate("Recipe", {
      id,
    });
  };

  const formatIds = (IdList: number[]) => {
    return JSON.stringify(IdList).replace(/[\[\]']+/g, "");
  };

  const formatToListRecipes = (recipeArray: Recipe[]): ListRecipe[] => {
    const formattedRecipes = recipeArray.map((recipe) => {
      return {
        id: recipe.id,
        title: recipe.title,
        image: recipe.image,
        imageType: recipe.imageType,
        nutrition: { nutrients: [] },
      };
    });

    return formattedRecipes;
  };

  const updateRecipeIds = async () => {
    try {
      const Ids = await getFavouriteRecipes();
      setRecipeIds(formatIds(Ids));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    return navigation.addListener("focus", () => {
      updateRecipeIds();
    });
  }, [navigation]);

  useEffect(() => {
    refetch();
  }, [recipeIds]);

  return (
    <View>
      {error ? (
        <Text>Something went wrong</Text>
      ) : isLoading ? (
        <Text>Loading</Text>
      ) : (
        <RecipeList
          recipes={formatToListRecipes(recipes)}
          favouriteRecipes={favouriteRecipes}
          orientation={orientation}
          handleCardPress={handleCardPress}
          handleFavouriteButtonPress={handleFavouriteButtonPress}
        />
      )}
    </View>
  );
};

export default FavouritesScreen;
