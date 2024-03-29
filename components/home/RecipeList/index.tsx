import React, { Component } from "react";
import { View, FlatList, Dimensions } from "react-native";
import { ListRecipe } from "../../../types";
import RecipeCard from "../RecipeCard";
import styles from "./index.style";

type RecipeListProps = {
  recipes: ListRecipe[];
  handleCardPress: (id: number) => void;
};

class HomeScreen extends Component<RecipeListProps> {
  render() {
    const { recipes, handleCardPress } = this.props;

    const screenWidth = Dimensions.get("window").width - 20;
    const numColumns = 2;
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
            <RecipeCard recipe={item} handleCardPress={handleCardPress} />
          </View>
        )}
        numColumns={numColumns}
        contentContainerStyle={styles.grid}
        columnWrapperStyle={{ gap }}
        keyExtractor={(item) => item.id.toString()}
      />
    );
  }
}

export default HomeScreen;
