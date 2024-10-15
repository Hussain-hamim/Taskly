import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import Header from "./components/Header";
import React from "react";
import Footer from "./components/Footer";
import WelcomeScreen from "./components/WelcomeScreen";
import MenuItems from "./components/MenuItems";
import FeedbackForm from "./components/FeedbackForm";
import LoginScreen from "./components/LoginScreen";
import ClearableTextInput from "./components/ClearableTextInput";
import Welcome from "./components/Welcome";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// instantiate stack
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerStyle: { backgroundColor: "#FBDABB" } }} // for all screens in the this navigator
      >
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ title: "Home" }} // for specific options for a screen
        />
        <Stack.Screen name="Menu" component={MenuItems} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333333",
  },
});
