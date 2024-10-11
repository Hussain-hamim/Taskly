import react from "react";

const { Text, View, ScrollView, StyleSheet } = require("react-native");

export default function WelcomeScreen() {
  return (
    <View style={welcomeStyles.container}>
      <ScrollView style={{ flex: 1 }} indicatorStyle={"white"}>
        <Text style={welcomeStyles.headerText}>Welcome to Little Lemon</Text>
        <Text style={welcomeStyles.text}>
          Little Lemon is a charming neibhorhood bistro that serves simple food
          and classic food in a lively but casual environment. we would love to
          hear more about your experience with us! Little Lemon is a charming
          neibhorhood bistro that serves simple food and classic food in a
          lively but casual environment. we would love to hear more about your
          experience with us! Little Lemon is a charming neibhorhood bistro that
          serves simple food and classic food in a lively but casual
          environment. we would love to hear more about your experience with us!
          Little Lemon is a charming neibhorhood bistro that serves simple food
          and classic food in a lively but casual environment. we would love to
          hear more about your experience with us! Little Lemon is a charming
          neibhorhood bistro that serves simple food and classic food in a
          lively but casual environment. we would love to hear more about your
          experience with us!
        </Text>
      </ScrollView>
    </View>
  );
}

const welcomeStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: "#EDEFEE",
    textAlign: "center",
  },
  text: {
    fontSize: 24,
    color: "white",
    padding: 20,
    marginVertical: 8,
    textAlign: "center",
  },
});
