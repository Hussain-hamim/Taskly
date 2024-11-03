import React from "react";
import { View, Text, StatusBar } from "react-native";

const ViewBoxesWithColorAndText = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        height: 100,
        padding: 20,
      }}
      collapsable
      focusable
      hitSlop={{ bottom: 10, right: 0, top: 10, left: 0 }}
      needsOffscreenAlphaCompositing
      // onMoveShouldSetResponder={{ nativeEvent: { pressEvent: true } }}
      // onResponderGrant={}
      // onResponderMove={}
    >
      <StatusBar barStyle="default" backgroundColor={"orchid"} />
      <View style={{ backgroundColor: "blue", flex: 0.3 }} />
      <View style={{ backgroundColor: "red", flex: 0.5 }} />
      <Text>Hello World!</Text>
    </View>
  );
};

export default ViewBoxesWithColorAndText;
