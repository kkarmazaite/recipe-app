import React, { Component } from "react";
import { Text, TouchableOpacity, Image, View, Pressable } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import styles from "./index.style";
import { ListRecipe } from "../../../types";

type RecipeCardProps = {
  recipe: ListRecipe;
  favouriteRecipes: Number[];
  handleCardPress: (id: number) => void;
  handleFavouriteButtonPress: (id: number) => void;
};

class RecipeCard extends Component<RecipeCardProps> {
  render() {
    const {
      recipe,
      favouriteRecipes,
      handleCardPress,
      handleFavouriteButtonPress,
    } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => handleCardPress(recipe.id)}>
          <Image
            source={{
              uri: recipe.image,
            }}
            resizeMode="cover"
            style={styles.image}
          />
          <Text style={styles.title}>{recipe.title}</Text>
        </TouchableOpacity>
        <Pressable
          style={styles.favouriteButton}
          onPress={() => handleFavouriteButtonPress(recipe.id)}
        >
          {favouriteRecipes.includes(recipe.id) ? (
            <Icon name="heart" size={20} color="#000" />
          ) : (
            <Icon name="hearto" size={20} color="#000" />
          )}
        </Pressable>
      </View>
    );
  }
}

export default RecipeCard;
