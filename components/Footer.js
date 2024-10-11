import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Footer() {
  return (
    <View style={footerStyles.container}>
      <Text style={footerStyles.footerText}>
        All rights reserved by little lemon, 2024
      </Text>
    </View>
  );
}

const footerStyles = StyleSheet.create({
  container: {
    marginBottom: 5,
    // backgroundColor: "#F4CE14",
    backgroundColor: "pink",
  },
  footerText: {
    fontSize: 18,
    color: "black",
    textAlign: "center",
    fontStyle: "italic",
  },
});
