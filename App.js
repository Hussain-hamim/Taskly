import React from "react";
import { View, TextInput, Button, Pressable, Text } from "react-native";

const MultilineTextInputExample = () => {
  const [value, onChangeText] = React.useState("Useless Multiline Placeholder");
  const [text, setText] = React.useState("");

  // If you type something in the text box that is a color, the background will change to that
  // color.
  return (
    <View
      style={{
        backgroundColor: value,
        borderBottomColor: "#000000",
        borderBottomWidth: 1,
        margin: 50,
        // backgroundColor: "pink",
      }}
    >
      <TextInput
        editable
        // multiline
        numberOfLines={4}
        maxLength={50}
        onChangeText={(text) => onChangeText(text)}
        value={value}
        style={{ padding: 10 }}
        underlineColorAndroid="transparent"
        allowFontScaling={true}
        // autoCapitalize="characters" // words, sentences, none
        autoComplete="additional-name"
        autoCorrect={true}
        autoFocus={true}
        blurOnSubmit={true}
        caretHidden={false}
        defaultValue="Hello world"
        cursorColor="red"
        disableFullscreenUI="false"
        enterKeyHint="next"
        importantForAutofill="auto"
        inputMode="text"
        keyboardType="default"
        onChange={({ nativeEvent: { eventCount, target, text } }) => {
          setText(text);
          console.log(target);
          console.log(eventCount);
        }}
      />
      <TextInput value="hello" onChangeText={() => null} />

      <Button title="submit" onPress={() => null} />
      <Text>{text}</Text>
    </View>
  );
};

export default MultilineTextInputExample;
