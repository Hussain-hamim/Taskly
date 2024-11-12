import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  PixelRatio,
  Pressable,
  TouchableOpacity,
  Alert,
} from "react-native";

import ShoppingListItem from "../components/ShoppingListItem";
import { Link } from "expo-router";

const App = () => {
  return (
    <View style={styles.container}>
      <Link href="/counter" style={{ fontSize: 24, textAlign: "center" }}>
        go to counter
      </Link>
      <ShoppingListItem name="Coffee" />
      <ShoppingListItem name="Tea" isCompleted />
      <ShoppingListItem name="Sugar" isCompleted />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});

export default App;
