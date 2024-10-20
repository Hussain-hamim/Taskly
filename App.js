import React from "react";
import { Alert, Button, Text, View } from "react-native";

const YourApp = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Hello world 🎉</Text>
      <Button title="login" onPress={() => Alert.alert("hello world")} />
    </View>
  );
};

export default YourApp;
