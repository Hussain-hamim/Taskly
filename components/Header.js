import { View, Text } from "react-native";
import react from "react";

export default function Header() {
  return (
    <View style={{ flex: 0.2, backgroundColor: "#F4CE14" }}>
      <Text
        style={{
          padding: 40,
          fontSize: 30,
          color: "black",
        }}
        numberOfLines={1}
      >
        Welcome to
        <Text style={{ fontWeight: "bold" }}> Little lemon</Text>
      </Text>
    </View>
  );
}
