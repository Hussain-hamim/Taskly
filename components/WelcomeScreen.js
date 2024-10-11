import react from "react";

const { Text, View, ScrollView } = require("react-native");

export default function WelcomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView indicatorStyle={"white"}>
        <Text
          style={{
            padding: 40,
            fontSize: 30,
            color: "#EDEFEE",
            textAlign: "center",
          }}
        >
          Welcome to Little Lemon
        </Text>
        <Text
          style={{
            fontSize: 24,
            color: "white",
            padding: 20,
            marginVertical: 8,
            textAlign: "center",
          }}
        >
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
