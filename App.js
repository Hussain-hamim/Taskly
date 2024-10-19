import React from "react";
import { Image, ScrollView, Text } from "react-native";

const logo = {
  uri: "https://reactnative.dev/img/tiny_logo.png",
  width: 64,
  height: 64,
};

const App = () => (
  <ScrollView pagingEnabled={true}>
    <Text style={{ fontSize: 80 }}>React Native</Text>
  </ScrollView>
);

export default App;
