import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import Header from "./components/Header";
import react from "react";
import Footer from "./components/Footer";
import WelcomeScreen from "./components/WelcomeScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <WelcomeScreen />
      <Footer />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#495E57",
    // justifyContent: "space-between",
  },
});
