import React from "react";
import { Alert, Button, Text, View } from "react-native";

const YourApp = () => {
  let x = 1;

  console.log("hello world");

  return (
    <View
      style={{
        backgroundColor: "gray",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Hello world 🎉</Text>
    </View>
  );
};

export default YourApp;
