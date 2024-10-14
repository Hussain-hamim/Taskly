import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  SafeAreaView,
  Button,
  Alert,
  Image,
} from "react-native";

const ClearableTextInput = () => {
  const [value, setValue] = useState("");

  return (
    <>
      <SafeAreaView>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            value={value}
            onChangeText={(text) => setValue(text)}
            placeholder="Enter some text"
          />
          {value.length > 0 && (
            <TouchableOpacity
              onPress={() => setValue("")}
              style={styles.clearButton}
            >
              <Text style={styles.clearButtonText}>X</Text>
            </TouchableOpacity>
          )}
        </View>
      </SafeAreaView>
      <Button
        title="real button"
        onPress={() => Alert.alert("button clicked")}
        //   color="secondary"
        style={styles.button}
      />
      <Image
        // source={{
        //   uri: "url",
        // }} // for images coming from internet
        // loadingIndicatorSource={() => (
        //   <Text>
        //     {" "}
        //     similarly to source, this property represents the resource used to
        //     render the loading indicator for the image, displayed until image is
        //     ready to be displayed, typically after when it got downloaded from
        //     network.
        //   </Text>
        // )}

        // eslint-disable-next-line no-undef
        source={require("../assets/hamim.png")}
        style={{
          width: 300,
          height: 100,
          resizeMode: "contain", // stretch, repeat, cover, center
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    padding: 50,
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: "pink",
    borderWidth: 1,
    borderColor: "yellow",
  },
  clearButton: {
    backgroundColor: "pink",
    borderWidth: 1,
    borderColor: "yellow",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  clearButtonText: {
    color: "gray",
    fontSize: 18,
  },
  button: {},
});

export default ClearableTextInput;
