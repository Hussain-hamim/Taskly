import React from "react";
import { Alert, Button, Text, View } from "react-native";
import Hello from "./components/Hello";
import Styles from "./components/Styles";
import FixedDimensionsBasics from "./components/UI";

const YourApp = () => {
  let x = 1;

  console.log("hello world");

  return (
    <View
      style={{
        backgroundColor: "#2c2c2e",
        flex: 1,

        //   justifyContent: "center",
        //   alignItems: "center",
      }}
    >
      {/* <Hello name="Hussain" age={22} /> */}
      {/* <Styles /> */}
      <FixedDimensionsBasics />
    </View>
  );
};

export default YourApp;
