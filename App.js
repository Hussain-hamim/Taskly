import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import Header from "./components/Header";
import react from "react";
import Footer from "./components/Footer";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Footer />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#495E57",
  },
});
