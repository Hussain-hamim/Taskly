import React, { useRef } from "react";
import { View, TextInput, Button, Pressable, Text } from "react-native";

const MultilineTextInputExample = () => {
  const [value, onChangeText] = React.useState("Useless Multiline Placeholder");
  const [text, setText] = React.useState("");
  const [color, setColor] = React.useState("");
  const [clear, setClear] = React.useState("");
  const clearRef = useRef(null);

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
      <View>
        <TextInput
          style={{ padding: 20 }}
          value={text}
          onChangeText={(text) => setText(text)}
          onFocus={() => setColor("orchid")}
          onScroll={() => console.log("scrolling...")}
          onSelectionChange={() => console.log("selection changed")}
          placeholder="this is placeholder text"
          placeholderTextColor="red"
          // selection={{ start: 1, end: 5 }}
          selectionColor="lightgray"
          selection={true}
          // textAlign="center"
          underlineColorAndroid={"green"}
          autoFocus
          ref={clearRef}
        />
        <TextInput
          value={text}
          onChangeText={(text) => setText(text)}
          // readOnly
          backgroundColor="white"
          returnKeyLabel="name"
          returnKeyType="google"
          selection={{ start: 1, end: 5 }}
          selectionColor="lightgray"
        />
      </View>

      <Button title="submit" onPress={() => null} />
      <Button title="clear" onPress={() => clearRef.current.clear()} />
      <Text>{text}</Text>
    </View>
  );
};

export default MultilineTextInputExample;
