import React, { Component } from "react";
import { Text, TouchableOpacity, Image } from "react-native";
import styles from "./index.style";
import { ListRecipe } from "../../../types";

type RecipeCardProps = {
  recipe: ListRecipe;
  handleCardPress: (id: number) => void;
};

class HomeScreen extends Component<RecipeCardProps> {
  render() {
    const { recipe, handleCardPress } = this.props;
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => handleCardPress(recipe.id)}
      >
        <Image
          source={{
            uri: recipe.image,
          }}
          resizeMode="cover"
          style={styles.image}
        />
        <Text style={styles.title}>{recipe.title}</Text>
      </TouchableOpacity>
    );
  }
}

export default HomeScreen;
