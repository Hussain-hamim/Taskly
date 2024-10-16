import React, { useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function LoginScreen({ route, navigation }) {
  const [email, onChangeEmail] = useState(route.params.name); // this name come from initial params which is defined in app for login screen
  const [password, onChangePassword] = useState("");
  // const [loggedIn, onLogin] = useState(false);

  // const { name } = route.params;

  return (
    <ScrollView style={loginStyles.container}>
      <Text style={loginStyles.headerText}>Welcome to Little Lemon</Text>

      <View>
        <Text style={loginStyles.regularText}>login to continue</Text>
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
            // onPress={() => (email.length >= 3 ? onLogin(!loggedIn) : null)}
            onPress={() =>
              email.length >= 3
                ? navigation.navigate("Welcome", {
                    /* 1. Navigate to the Details route with params */
                    email: email,
                    otherParams: "any else goes here...",
                  })
                : null
            }
            style={loginStyles.buttonText}
          >
            Log in
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
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
    backgroundColor: "white",
    borderRadius: 6,
  },
  button: {
    fontSize: 20,
    padding: 10,
    marginVertical: 8,
    margin: 100,
    backgroundColor: "#EE9972",
    borderColor: "#EE9972",
    borderWidth: 2,
    borderRadius: 50,
  },
  buttonText: {
    color: "black",
    textAlign: "center",
    fontSize: 25,
  },
});
