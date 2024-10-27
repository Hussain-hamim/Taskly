import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const App = () => {
  return (
    <TouchableOpacity
      accessible={true}
      accessibilityLabel="Tap me!"
      onPress={() => null}
    >
      <View>
        <Text>Press me!</Text>
      </View>
    </TouchableOpacity>
  );
};

export default App;
