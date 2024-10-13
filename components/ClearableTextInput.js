import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  SafeAreaView,
} from "react-native";

const ClearableTextInput = () => {
  const [value, setValue] = useState("");

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={(text) => setValue(text)}
          placeholder="Enter some text"
        />
        {value.length > 0 && (
          <TouchableOpacity
            onPress={() => setValue("")}
            style={styles.clearButton}
          >
            <Text style={styles.clearButtonText}>X</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    padding: 50,
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: "pink",
    borderWidth: 1,
    borderColor: "yellow",
  },
  clearButton: {
    backgroundColor: "pink",
    borderWidth: 1,
    borderColor: "yellow",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  clearButtonText: {
    color: "gray",
    fontSize: 18,
  },
});

export default ClearableTextInput;
