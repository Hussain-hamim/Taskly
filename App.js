/* eslint-disable no-undef */
import { StatusBar } from "expo-status-bar";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

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
import HomeScreen, {
  CreatePostScreen,
  HomeStackScreen,
  SettingsStackScreen,
} from "./One";
import { Ionicons } from "@expo/vector-icons";
import App2 from "./One";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

// instantiate stack
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const BTab = createMaterialBottomTabNavigator();
const Top = createMaterialTopTabNavigator();

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
      <NavigationContainer>
        <Top.Navigator
          id="two"
          initialRouteName="HomeStack"
          screenOptions={{
            swipeEnabled: true,
            tabBarLabelStyle: { fontSize: 12 },
            tabBarItemStyle: {
              // borderWidth: 2,
              // borderColor: "orchid",
            },
            tabBarStyle: { backgroundColor: "powderblue" },
            // title: "Home",
            // tabBarLabel: () => {}, // return a react.node
            // tabBarIcon: () => <Ionicons name="home" />,
          }}
          backBehavior="history"
          tabBarPosition="top"
          keyboardDismissMode="on-drag"
          initialLayout={{ width: Dimensions.get("window").width }}
          sceneContainerStyle={{}}
          style={{}}
          // tabBar={() => {}} //callback fn that return a react element to display as the tab bar.
        >
          <Top.Screen
            name="SettingsStack"
            component={SettingsStackScreen}
            options={{}}
          />
          <Top.Screen name="HomeStack" component={SettingsStackScreen} />
        </Top.Navigator>
      </NavigationContainer>
      {/* <NavigationContainer>
        <BTab.Navigator
          screenOptions={{ headerShown: false }}
          id="one"
          initialRouteName="HomeStack"
          backBehavior="firstRoute" // initialRoute, history, order
          shifting={false}
          labeled={true}
          activeColor="#f0edf6"
          inactiveColor="#3e2465"
          barStyle={{ backgroundColor: "#694fad" }}
        >
          <BTab.Screen
            name="HomeStack"
            component={HomeStackScreen}
            options={{
              title: "Home",
              tabBarIcon: ({ focused, color }) => <Ionicons name="home" />,
              tabBarBadge: 3,
              // tabBarColor: "gray", // only work if shifting is true
            }}
          />
          <BTab.Screen name="SettingsStack" component={SettingsStackScreen} />
        </BTab.Navigator>
      </NavigationContainer> */}

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

      {/* <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "HomeScreen") {
                iconName = focused ? "time" : "time-outline";
              } else if (route.name === "CreatePostScreen") {
                iconName = "list";
              }
              return <Ionicons name={iconName} color={color} size={size} />;
            },
            tabBarActiveTintColor: "tomato",
            tabBarInActiveTintColor: "gray",
          })}
        >
          <Tab.Screen
            options={{
              tabBarIcon: () => <Ionicons name="book" />,
              tabBarBadge: 3,
            }}
            name="HomeScreen"
            component={HomeScreen}
          />
          <Tab.Screen name="CreatePostScreen" component={CreatePostScreen} />
        </Tab.Navigator>
      </NavigationContainer> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333333",
  },
});
