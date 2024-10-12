import react, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

export default function FeedbackForm() {
  const [firstName, onChangeFirstName] = useState("");
  const [lastName, onChangeLastName] = useState("");
  const [message, onChangeMessage] = useState("");
  console.log(firstName);

  return (
    <KeyboardAvoidingView
      style={formStyles.container}
      behavior={Platform.OS === "android" ? "padding" : "height"}
    >
      <ScrollView keyboardDismissMode="on-drag">
        <Text style={formStyles.headingSection}>
          How was your visit to little lemon?
        </Text>
        <Text style={formStyles.infoSection}>
          this is info about our business this is info about our business this
          is info about our business this is info about our business this is
          info about our business this is info about our business this is info
          about our business
        </Text>

        <TextInput
          value={firstName}
          onChangeText={onChangeFirstName}
          placeholder="firstName"
          style={formStyles.input}
        />
        <TextInput
          value={lastName}
          onChangeText={onChangeLastName}
          placeholder="lastName"
          style={formStyles.input}
        />
        <TextInput
          value={message}
          onChangeText={onChangeMessage}
          placeholder="message"
          style={formStyles.messageInput}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const formStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#495E57",
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
  messageInput: {
    height: 100,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    backgroundColor: "#F4CE14",
  },
  infoSection: {
    fontSize: 20,
    padding: 20,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
    backgroundColor: "#495E57",
  },
  headingSection: {
    fontSize: 28,
    padding: 30,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
    backgroundColor: "#495E57",
  },
});
