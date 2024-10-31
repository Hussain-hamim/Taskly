import React from "react";
import { Text, StyleSheet, View } from "react-native";

const BoldAndBeautiful = () => {
  return (
    <>
      <Text>
        <Text>First part and </Text>
        <Text>second part</Text>
      </Text>
      {/* // Text container: the text will be inline if the space allowed it //
      |First part and second part| // otherwise, the text will flow as if it was
      one // |First part | // |and second | // |part | */}
      <View>
        <Text>First part and </Text>
        <Text>second part</Text>
      </View>
    </>
    // View container: each text is its own block
    // |First part and|
    // |second part   |

    // otherwise, the text will flow in its own block
    // |First part |
    // |and        |
    // |second part|
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontWeight: "bold",
  },
  innerText: {
    color: "red",
  },
});

export default BoldAndBeautiful;
