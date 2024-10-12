import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import Header from "./components/Header";
import React from "react";
import Footer from "./components/Footer";
import WelcomeScreen from "./components/WelcomeScreen";
import MenuItems from "./components/MenuItems";
import FeedbackForm from "./components/FeedbackForm";
import LoginScreen from "./components/LoginScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      {/* <LoginScreen /> */}
      <FeedbackForm />
      {/* <MenuItems /> */}
      {/* <WelcomeScreen /> */}
      <Footer />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333333",
  },
});
