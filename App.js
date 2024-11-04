import React from "react";
import { View, StyleSheet, Button, Alert } from "react-native";

const App = () => {
  const createTwoButtonAlert = () =>
    Alert.alert("Alert Title", "My Alert Msg", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);

  const alertMe = () =>
    Alert.alert("Hey bro", "this the message", [
      { text: "Ok", onPress: () => Alert.alert("Done bro") },
      {
        text: "Cancel",
        onPress: () => Alert.alert("Canceled bro"),
        style: "cancel",
      },
    ]);

  const alertMe2 = () =>
    Alert.alert(
      "title of alert",
      "message of alert",
      [
        {
          text: "Cancel",
          onPress: () => console.log("canceled..."),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("done...") },
      ],
      { cancelable: true, onDismiss: () => console.log("dismissed...") }
    );

  const createThreeButtonAlert = () =>
    Alert.alert("Alert Title", "My Alert Msg", [
      {
        text: "Ask me later",
        onPress: () => console.log("Ask me later pressed"),
      },
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);

  const alertMe3 = () =>
    Alert.alert(
      "Title",
      "Message",
      [
        {
          text: "Cancel",
          onPress: () => Alert.alert("Processed", "operation canceled"),
          style: "cancel",
        },
        {
          text: "Proceed",
          onPress: () => Alert.alert("Processed", "operation completed"),
        },
      ],
      { cancelable: true, onDismiss: () => console.log("dismissed") }
    );

  return (
    <View style={styles.container}>
      <Button title={"2-Button Alert"} onPress={createTwoButtonAlert} />
      <Button title={"3-Button Alert"} onPress={createThreeButtonAlert} />
      <Button title={"4-Button Alert"} onPress={alertMe} />
      <Button title={"4-Button Alert"} onPress={alertMe2} />
      <Button title={"Final-Button Alert"} onPress={alertMe3} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
});

export default App;
