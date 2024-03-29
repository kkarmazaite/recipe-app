import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import RecipeScreen from "./screens/RecipeScreen";
import { RootStackParamList } from "./types";

const Stack = createNativeStackNavigator<RootStackParamList>();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: {
              backgroundColor: "#7BB241",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
              color: "#fff",
            },
            contentStyle: {
              backgroundColor: "#eff2e9",
              alignItems: "center",
              justifyContent: "center",
            },
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Recipe" component={RecipeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
