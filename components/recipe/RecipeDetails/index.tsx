import React, { Component } from "react";
import { View, FlatList, Image, Text, ScrollView } from "react-native";
import { Recipe } from "../../../types";
import { removeHTMLTags } from "../../../utils";
import styles from "./index.style";

type RecipeDetailsProps = {
  recipe: Recipe;
};

class RecipeDetails extends Component<RecipeDetailsProps> {
  render() {
    const { recipe } = this.props;

    const recipeDescription = removeHTMLTags(recipe?.summary || "");

    return (
      <ScrollView>
        <Image
          source={{
            uri: recipe.image,
          }}
          resizeMode="cover"
          style={styles.image}
        />
        <View style={styles.content}>
          <Text style={styles.title}>{recipe.title}</Text>
          <Text style={styles.description}>{recipeDescription}</Text>

          <Text style={styles.title}>Ingredients</Text>
          <FlatList
            data={recipe.extendedIngredients}
            contentContainerStyle={styles.ingredientList}
            scrollEnabled={false}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <Text style={styles.ingredientName}>{item.name}</Text>
                <Text style={styles.ingredientUnit}>
                  {item.amount} {item.unit}
                </Text>
              </View>
            )}
            keyExtractor={(item) => item.id.toString()}
          />

          <Text style={styles.title}>Instructions</Text>
          <View style={styles.instructionContainer}>
            <Text style={styles.card}>{recipe.instructions}</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default RecipeDetails;
