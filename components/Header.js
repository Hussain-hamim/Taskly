import { View, Text, StyleSheet } from "react-native";
import react from "react";

export default function Header() {
  return (
    <View style={headerStyles.container}>
      <Text
        style={headerStyles.headerText}
        // numberOfLines={1}
      >
        Little Lemon
      </Text>
    </View>
  );
}

const headerStyles = StyleSheet.create({
  container: {
    flex: 0.15,
    backgroundColor: "#F4CE14",
    // backgroundColor: "pink", // "#333333" "#EDEFEE"
  },
  headerText: {
    paddingTop: 40,
    fontSize: 30,
    color: "black",
    textAlign: "center",
  },
});
