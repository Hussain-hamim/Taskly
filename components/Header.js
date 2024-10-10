import { View, Text } from "react-native";
import react from "react";

export default function Header() {
  return (
    <View
      style={{
        flex: 0.15,
        backgroundColor: "#F4CE14",
      }}
    >
      <Text
        style={{
          paddingTop: 40,
          fontSize: 30,
          color: "black",
          textAlign: "center",
        }}
        // numberOfLines={1}
      >
        Little Lemon
      </Text>
    </View>
  );
}
