import React from "react";
import { Alert, Button, Text, View } from "react-native";

const YourApp = () => {
  let x = 1;

  console.log("hello world");

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Hello world 🎉</Text>
      <Text>another day for uni test</Text>
      <Button title="login" onPress={() => Alert.alert("hello world")} />
    </View>
  );
};

export default YourApp;
