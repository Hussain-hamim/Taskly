import React from "react";
import { Text, View } from "react-native";

const App = () => {
  return (
    <View accessible={true}>
      <Text>text one</Text>
      <Text>text two</Text>
    </View>
  );
};

export default App;
