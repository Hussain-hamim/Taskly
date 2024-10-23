import React from "react";
import { Alert, Button, Text, View } from "react-native";
import Hello from "./components/Hello";

const YourApp = () => {
  let x = 1;

  console.log("hello world");

  return (
    <View
      style={{
        backgroundColor: "gray",
        flex: 1,
        //   justifyContent: "center",
        //   alignItems: "center",
      }}
    >
      <Hello name="Hussain" age={22} />
    </View>
  );
};

export default YourApp;
