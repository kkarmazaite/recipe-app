import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import type { HomeScreenProps, ListRecipe } from "../types";
import useFetch from "../hooks/useFetch";

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const { data, isLoading, error } = useFetch("recipes/complexSearch", {});
  const Recipes = data.results as ListRecipe[];

  const handleCardPress = (id: number) => {
    navigation.navigate("Recipe", {
      id,
    });
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : error ? (
        <Text>Something went wrong</Text>
      ) : (
        <FlatList
          data={Recipes}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleCardPress(item.id)}>
              <Text>{item.title}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;
