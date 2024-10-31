import React from "react";
import { Text, StyleSheet, View } from "react-native";

const BoldAndBeautiful = () => {
  return (
    <View style={styles.container}>
      <Text
        accessibilityHint="a text"
        accessibilityLanguage="english" // ios
        adjustsFontSizeToFit={true}
        allowFontScaling={true}
        android_hyphenationFrequency="none"
        aria-busy={true}
        aria-checked={true}
        style={styles.text}
        dataDetectorType="all" // "phoneNumber", "link", "email", "none"
      >
        First part and First part and First part and First part and First part
        and First part and First part and First part and First part and First
        part and First part and First part and First part and First part and
        First part and{" "}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0e0d0df1",
    paddingVertical: 30,
  },
  text: {
    color: "white",
    fontSize: 20,
  },
  innerText: {
    color: "red",
  },
});

export default BoldAndBeautiful;
