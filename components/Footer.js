import React from "react";
import { Text, View } from "react-native";

export default function Footer() {
  return (
    <View
      style={{
        marginBottom: 5,
        backgroundColor: "#F4CE14",
      }}
    >
      <Text
        style={{
          fontSize: 18,
          color: "black",
          textAlign: "center",
        }}
      >
        All rights reserved by little lemon, 2024
      </Text>
    </View>
  );
}
