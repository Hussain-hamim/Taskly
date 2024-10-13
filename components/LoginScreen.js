import React, { useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function LoginScreen() {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const [login, setLogin] = useState(true);

  return (
    <ScrollView style={loginStyles.container}>
      <Text style={loginStyles.headerText}>Welcome to Little Lemon</Text>

      {!login && (
        <Text style={loginStyles.headerText}>
          You are logged in{" "}
          <Pressable style={loginStyles.button}>
            <Text style={login.buttonText} onPress={() => setLogin(!login)}>
              Go back
            </Text>
          </Pressable>
        </Text>
      )}

      {login && (
        <View>
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
          <Pressable style={loginStyles.button}>
            <Text
              // disabled={email.length >= 3}
              onPress={() => (email.length >= 3 ? setLogin(!login) : null)}
              style={loginStyles.buttonText}
            >
              Log in
            </Text>
          </Pressable>
        </View>
      )}
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
  button: {
    fontSize: 20,
    padding: 10,
    marginVertical: 8,
    margin: 80,
    backgroundColor: "#EE9972",
    borderColor: "#EE9972",
    borderWidth: 2,
    borderRadius: 30,
  },
  buttonText: {
    color: "black",
    textAlign: "center",
    fontSize: 25,
  },
});
