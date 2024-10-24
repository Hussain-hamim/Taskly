import React, { Component } from "react";
import { TouchableOpacity } from "react-native";
import {
  Text,
  TouchableHighlight,
  TouchableNativeFeedback,
} from "react-native";
import { Alert, Button, StyleSheet, View } from "react-native";

export default class ButtonBasics extends Component {
  _onPressButton() {
    Alert.alert("You tapped the button!");
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button onPress={this._onPressButton} title="Press Me" />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Press Me"
            color="#841584"
          />
        </View>
        <View style={styles.alternativeLayoutButtonContainer}>
          <Button onPress={this._onPressButton} title="This looks great!" />
          <Button onPress={this._onPressButton} title="OK!" color="#841584" />
        </View>

        {/* TouchableHighlight */}
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#e2ef99"
          onPress={() => alert("Pressed!")}
          style={{ width: "35%" }}
        >
          <Text style={{ backgroundColor: "dimgray", padding: 10 }}>
            TouchableHighlight
          </Text>
        </TouchableHighlight>

        <View>
          <TouchableNativeFeedback
            onPress={() => {
              //
            }}
          >
            <View>
              <Text>TouchableNativeFeedback</Text>
            </View>
          </TouchableNativeFeedback>
        </View>

        <TouchableOpacity onPress={{}}>
          <Text>Press Here</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  buttonContainer: {
    margin: 20,
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
