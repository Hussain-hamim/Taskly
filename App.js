import React from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";

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
          aria-valuemax={20}
        />
      </View>

      <View
        accessible={true}
        accessibilityActions={[
          { name: "cut", label: "cut" },
          { name: "copy", label: "copy" },
          { name: "paste", label: "paste" },
        ]}
        onAccessibilityAction={(event) => {
          switch (event.nativeEvent.actionName) {
            case "cut":
              Alert.alert("Alert", "cut action success");
              break;
            case "copy":
              Alert.alert("Alert", "copy action success");
              break;
            case "paste":
              Alert.alert("Alert", "paste action success");
              break;
          }
        }}
      />
    </>
  );
};

export default App;
