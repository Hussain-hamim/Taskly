import React from "react";
import { Image } from "react-native";

export const App = () => {
  return (
    <Image
      source={{
        uri: "https://reactjs.org/logo-og.png",
        method: "POST",
        headers: {
          Pragma: "no-cache",
        },
        body: "Your Body goes here",
      }}
      style={{ width: 400, height: 400 }}
    />
  );
};
