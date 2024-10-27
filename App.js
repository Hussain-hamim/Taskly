import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

const App = () => {
  return (
    <>
      <TouchableOpacity
        accessible={true}
        accessibilityLabel="Tap me!"
        onPress={() => null}
      >
        <View>
          <Text>Press me!</Text>
        </View>
      </TouchableOpacity>
      <View>
        <Text nativeID="formLabel">Label for Input Field</Text>
        <TextInput
          accessibilityLabel="input"
          accessibilityLabelledBy="formLabel"
        />
      </View>
    </>
  );
};

export default App;
