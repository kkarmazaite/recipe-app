import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import type { HomeScreenProps } from "../types";

class HomeScreen extends Component<HomeScreenProps> {
  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <Text>Home</Text>
        <Button
          title="Go to recipe"
          onPress={() =>
            navigation.navigate("Recipe", {
              id: "1",
            })
          }
        />
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

export default HomeScreen;
