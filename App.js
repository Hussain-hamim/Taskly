/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";

const windowDimensions = Dimensions.get("window");
const screenDimensions = Dimensions.get("screen");

const windowDimension2 = Dimensions.get("window");
const screenDimension2 = Dimensions.get("screen");

const App = () => {
  const [dimensions, setDimensions] = useState({
    window: windowDimensions,
    screen: screenDimensions,
  });

  const [dime, setdime] = useState({
    window: windowDimension2,
    screen: screenDimension2,
  });

  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      "change",
      ({ window, screen }) => {
        setDimensions({ window, screen });
      }
    );
    return () => subscription?.remove();
  });

  useEffect(() => {
    const sub = Dimensions.addEventListener("change", ({ window, screen }) => {
      setdime({ window, screen });
    });

    return () => {
      sub?.remove();
    };
  });

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Window Dimensions</Text>

      {Object.entries(dimensions.window).map(([key, value]) => (
        <Text>
          {key} - {value}
        </Text>
      ))}

      <Text style={styles.header}>Screen Dimensions</Text>
      {Object.entries(dimensions.screen).map(([key, value]) => (
        <Text>
          {key} - {value}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 16,
    marginVertical: 10,
  },
});

export default App;
