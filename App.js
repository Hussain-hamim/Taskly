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
        disabled={false}
        ellipsizeMode="tail" // enum('head', 'middle', 'tail', 'clip') // On Android, when numberOfLines is set to a value higher than 1, only tail value will work correctly.
        id="one"
        nativeID="two"
        onPress={() => null}
        onLongPress={() => null}
        onResponderMove={() => null}
        onResponderGrant={() => null}
        selectable={true}
        selectionColor="orchid" // android
      >
        this is some text this is some text this is someeeeee text this is some
        text this is some text this is some text this is some text this is some
        text this is some text this is some text this is some text this is some
        text this is some text this is some text this is some text this is some
        text, study for exam so skipped the day, study for exam so skipped the
        day
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
