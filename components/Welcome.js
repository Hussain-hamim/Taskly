/* eslint-disable no-undef */
import {
  useAppState,
  useDeviceOrientation,
  useClipboard,
  useKeyboard,
} from "@react-native-community/hooks";
import React from "react";
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  useState,
  useColorScheme,
  useWindowDimensions,
  View,
} from "react-native";

// npm install @react-navigation/native
// npx expo install react-native-screen react-native-safe-area-context

/** react native hooks:
 * React Native APIs turned into React Hooks allowing you to access 
 * asynchronous APIs directly in your functional components.
 * 
useAccessibilityInfo
useAppState
useBackHandler
useImageDimensions
useKeyboard
useInteractionManager
useDeviceOrientation
useLayout
useRefresh
 */

const Welcome = () => {
  const colorScheme = useColorScheme();
  const { height, width, fontScale } = useWindowDimensions();
  const orientation = useDeviceOrientation();
  const appState = useAppState();
  //   const [data, setData] = useClipboard(); // i guess deprecated
  const keyboard = useKeyboard();

  return (
    <ScrollView
      style={[
        styles.container,
        colorScheme === "light"
          ? { backgroundColor: "#fff" }
          : { backgroundColor: "#333333" },
      ]}
    >
      <Image style={styles.logo} source={require("../assets/hamim.png")} />

      <Text style={styles.title}>Little Lemon, your local Watani bistro</Text>

      <Text style={styles.title}>color Scheme: {colorScheme}</Text>

      <Text>windows dimension:</Text>
      <Text style={styles.regular}>height: {height}</Text>
      <Text style={styles.regular}>width: {width}</Text>
      <Text style={styles.regular}>fontScale: {fontScale}</Text>

      <Text>orientation: {orientation}</Text>
      <Text>app state: {appState}</Text>
      {/* <Text>app clipboard data: {data}</Text> */}
      <Text>keyboard height: {keyboard.keyboardHeight}</Text>
      <Text>keyboard shown: {keyboard.keyboardShown}</Text>
    </ScrollView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    marginTop: 25,
    // backgroundColor: "#fff",
  },
  title: {
    marginTop: 16,
    paddingVertical: 10,
    color: "black",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
  logo: {
    height: 100,
    width: "100%",
    resizeMode: "stretch", // stretch, repeat, cover, center
    opacity: 0.5,
    borderRadius: 10,
  },
  image: {
    height: 250,
    width: 350,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "lightgray",
    resizeMode: "cover", // stretch, repeat, cover, center
    margin: 5,
  },
  bgImage: {
    flex: 1,
    justifyContent: "center",
    resizeMode: "contain",
    width: "100%",
    height: "100%",
  },
});
