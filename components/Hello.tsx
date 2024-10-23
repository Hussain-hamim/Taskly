import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export type Props = {
  name: string;
  age: number;
  baseEnthusiasmLevel?: number;
};

// FC: function component
// Represents the type of a function component. Can optionally receive a
//type argument that represents the props the component receives.
const Hello: React.FC<Props> = ({ name, age, baseEnthusiasmLevel = 0 }) => {
  const [enthusiasmLevel, setEnthusiasmLevel] =
    React.useState(baseEnthusiasmLevel);

  const onIncrement = () => setEnthusiasmLevel(enthusiasmLevel + 1);
  const onDecrement = () =>
    setEnthusiasmLevel(enthusiasmLevel > 0 ? enthusiasmLevel - 1 : 0);

  const getExclamationMarks = (numChars: number) =>
    numChars > 0 ? Array(numChars + 1).join("!") : "";
  console.log(Array(3));
  console.log(Array(3).join("!"));

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>
        Hello {name}, {age}
        {getExclamationMarks(enthusiasmLevel)}
      </Text>

      <Button
        title="Increase enthusiasm"
        accessibilityLabel="increment"
        onPress={onIncrement}
        color="blue"
      />
      <Button
        title="Decrease enthusiasm"
        accessibilityLabel="decrement"
        onPress={onDecrement}
        color="red"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  greeting: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 16,
  },
});

export default Hello;
