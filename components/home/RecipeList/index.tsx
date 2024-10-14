import React, { Component } from "react";
import { View, FlatList, Dimensions } from "react-native";
import { ListRecipe, DeviceOrientation } from "../../../types";
import RecipeCard from "../RecipeCard";
import styles from "./index.style";

type RecipeListProps = {
  recipes: ListRecipe[];
  orientation: DeviceOrientation;
  favouriteRecipes: Number[];
  handleCardPress: (id: number) => void;
  handleFavouriteButtonPress: (id: number) => void;
  addNextPageData?: () => void;
};

class RecipeList extends Component<RecipeListProps> {
  render() {
    const {
      recipes,
      orientation,
      favouriteRecipes,
      handleCardPress,
      handleFavouriteButtonPress,
      addNextPageData,
    } = this.props;

    const screenWidth = Dimensions.get("window").width - 20;
    const numColumns = orientation == "LANDSCAPE" ? 4 : 2;
    const gap = styles.grid.gap;
    const availableSpace = screenWidth - (numColumns - 1) * gap;
    const itemSize = availableSpace / numColumns;

    return (
      <FlatList
        data={recipes}
        renderItem={({ item }) => (
          <View
            style={{
              width: itemSize,
            }}
          >
            <RecipeCard
              recipe={item}
              favouriteRecipes={favouriteRecipes}
              handleCardPress={handleCardPress}
              handleFavouriteButtonPress={handleFavouriteButtonPress}
            />
          </View>
        )}
        numColumns={numColumns}
        contentContainerStyle={styles.grid}
        columnWrapperStyle={{ gap }}
        key={orientation}
        onEndReached={addNextPageData}
        onEndReachedThreshold={1}
      />
    );
  }
}

export default RecipeList;
