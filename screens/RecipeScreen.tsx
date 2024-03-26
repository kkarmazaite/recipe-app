import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import type { RecipeScreenProps } from "../types";

class RecipeScreen extends Component<RecipeScreenProps> {
  render() {
    const { route } = this.props;
    const { id } = route.params;

    return (
      <View style={styles.container}>
        <Text>Recipe Screen {id}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default RecipeScreen;
