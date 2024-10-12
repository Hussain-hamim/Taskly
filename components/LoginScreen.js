import react, { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput } from "react-native";
react;
export default function LoginScreen() {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");

  return (
    <ScrollView style={loginStyles.container}>
      <Text style={loginStyles.headerText}>Welcome to Little Lemon</Text>
      <Text style={loginStyles.regularText}>login to continoue</Text>
      <TextInput
        value={email}
        onChangeText={onChangeEmail}
        style={loginStyles.input}
        placeholder="email"
        keyboardType="email-address"
      />
      <TextInput
        value={password}
        onChangeText={onChangePassword}
        style={loginStyles.input}
        placeholder="password"
        secureTextEntry={true}
      />
    </ScrollView>
  );
}

const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: "#EDEFEE",
    textAlign: "center",
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: "#EDEFEE",
    backgroundColor: "#F4CE14",
  },
});
