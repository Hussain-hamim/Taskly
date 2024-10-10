import { View, Text } from "react-native";
import react from "react";

export default function Header() {
  return (
    <View style={{ flex: 0.2, backgroundColor: "#F4CE14" }}>
      <Text
        style={{
          numberOfLines: 1,
          padding: 40,
          //   textAlign: "center",
          fontSize: 30,
          color: "black",
        }}
      >
        this is header
        <Text>this is nested text</Text>
      </Text>
    </View>
  );
}
