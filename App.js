import React, { useState } from "react";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";

const App = () => {
  const [timesPressed, setTimesPressed] = useState(0);

  let textLog = "";
  if (timesPressed > 1) {
    textLog = timesPressed + "x onPress";
  } else if (timesPressed > 0) {
    textLog = "onPress";
  }

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          setTimesPressed((current) => current + 1);
        }}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "rgb(128, 152, 182)" : "#d6a2a2",
          },
          styles.wrapperCustom,
        ]}
        android_disableSound={false}
        android_ripple={{
          color: "#6cabb8",
          // borderless: true,
          // radius: 30,
          // foreground: true,
        }}
        // unstable_pressDelay={2}
        disabled={false}
        delayLongPress={4}
        // hitSlop={{
        //   // rectangular area
        //   bottom: 20,
        //   left: null,
        //   right: undefined,
        //   top: 50,
        // }}
        hitSlop={30}
        onHoverIn={(mouseEvent) => Alert.alert("hovered in")}
        onLongPress={}
      >
        {({ pressed }) => (
          <Text style={styles.text}>{pressed ? "Pressed!" : "Press Me"}</Text>
        )}
      </Pressable>
      <View style={styles.logBox}>
        <Text testID="pressable_press_console">{textLog}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6,
    // marginLeft: 150,
    // width: 200,
  },
  logBox: {
    padding: 20,
    margin: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#f0f0f0",
    backgroundColor: "#8a7878",
  },
});

export default App;
