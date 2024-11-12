/* eslint-disable react/jsx-key */
import React from "react";
import { View, StyleSheet, Text, Dimensions, PixelRatio } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Text style={styles.itemText}>Coffee</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  itemContainer: {
    borderBottomColor: "#1a759f",
    borderBottomWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 16,
  },
  itemText: { fontSize: 18, fontWeight: "200" },
});

export default App;
