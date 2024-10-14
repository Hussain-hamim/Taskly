import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/hamim.png")} />
      <Text style={styles.title}>Little Lemon, your local Watani bistro</Text>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    marginTop: 25,
    backgroundColor: "#fff",
  },
  title: {
    marginTop: 16,
    paddingVertical: 10,
    color: "#333333",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  logo: {
    height: 100,
    width: 300,
    resizeMode: "contain", // stretch, repeat, cover, center
  },
});
