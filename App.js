import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";

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
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen, { CreatePostScreen } from "./One";

// instantiate stack
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function LogoTitle() {
  return (
    <Image
      style={{ width: 150, height: 50, borderRadius: 8 }}
      source={require("./assets/react_navigation_header.png")}
    />
  ); // this can a logo or an image
}

export default function App() {
  return (
    <>
      <Header />
      {/* <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerStyle: { backgroundColor: "#333333" },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }} // for all screens in the this navigator
        >
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={({ route }) => ({ title: route.params.name })}
          />

          <Stack.Screen name="CreatePostScreen" component={CreatePostScreen} />

          <Stack.Screen
            name="Login"
            component={LoginScreen}
            initialParams={{ name: "Hussain" }} //  They are also shallow merged with any params that you pass
            options={{
              title: "Login",
              headerStyle: {
                backgroundColor: "#f4511e",
              }, // use for full header style
              headerTintColor: "black", // use for the back button and the title color
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }} // for specific options for a screen
          />
          <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{
              title: "Welcome",
              headerTitle: (props) => <LogoTitle {...props} />, // you can pass to this call back a comp
            }} // for specific options for a screen
          />
          <Stack.Screen
            name="Menu"
            component={MenuItems}
            options={{ title: "Menu", headerTitle: "Menu" }} // for specific options for a screen
          />
        </Stack.Navigator>
      </NavigationContainer> */}

      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="HomeScreen" component={HomeScreen} />
          <Tab.Screen name="CreatePostScreen" component={CreatePostScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333333",
  },
});
