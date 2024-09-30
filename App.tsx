import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import RecipeScreen from "./screens/RecipeScreen";
import { RootStackParamList, RootTabParamList } from "./types";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FavouritesScreen from "./screens/FavouritesScreen";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator<RootTabParamList>();

const HomeStack = createNativeStackNavigator<RootStackParamList>();
const FavouritesStack = createNativeStackNavigator<RootStackParamList>();

const screenOptions: NativeStackNavigationOptions = {
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
};

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Favourites" component={FavouritesScreen} />
      <HomeStack.Screen name="Recipe" component={RecipeScreen} />
    </HomeStack.Navigator>
  );
};

const FavouritesStackScreen = () => {
  return (
    <FavouritesStack.Navigator
      initialRouteName="Favourites"
      screenOptions={screenOptions}
    >
      <FavouritesStack.Screen name="Home" component={HomeScreen} />
      <FavouritesStack.Screen name="Favourites" component={FavouritesScreen} />
      <FavouritesStack.Screen name="Recipe" component={RecipeScreen} />
    </FavouritesStack.Navigator>
  );
};

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={() => ({
            tabBarActiveTintColor: "#7BB241",
            tabBarInactiveTintColor: "gray",
          })}
        >
          <Tab.Screen
            name="HomeTab"
            component={HomeStackScreen}
            options={{
              tabBarLabel: "Home",
              tabBarIcon: ({ focused }) => (
                <Ionicons
                  name="home"
                  color={focused ? "#7BB241" : "gray"}
                  size={25}
                />
              ),
              headerShown: false,
            }}
          />
          <Tab.Screen
            name="FavouritesTab"
            component={FavouritesStackScreen}
            options={{
              tabBarLabel: "Favourites",
              tabBarIcon: ({ focused }) => (
                <Ionicons
                  name="heart"
                  color={focused ? "#7BB241" : "gray"}
                  size={25}
                />
              ),
              headerShown: false,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
