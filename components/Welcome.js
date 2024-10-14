/* eslint-disable no-undef */
import React from "react";
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";

const Welcome = () => {
  const colorScheme = useColorScheme();

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
