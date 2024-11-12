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
import { theme } from "./theme";

const App = () => {
  const handleDelete = () => {
    Alert.alert(
      "Are you sure you want to delete this?",
      "it will be gone for good",
      [
        { text: "Cancel", onPress: () => null, style: "cancel" },
        { text: "Yes", onPress: () => null, style: "destructive" },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Text style={styles.itemText}>Coffee</Text>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={handleDelete}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemText: { fontSize: 18, fontWeight: "200" },
  button: {
    backgroundColor: theme.colorBlack,
    padding: 8,
    borderRadius: 6,
  },
  buttonText: {
    color: theme.colorWhite,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
});

export default App;
