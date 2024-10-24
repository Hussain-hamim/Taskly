import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const RowGapAndColumnGap = () => {
  const [rowGap, setRowGap] = useState(10);
  const [columnGap, setColumnGap] = useState(10);

  return (
    <PreviewLayout
      columnGap={columnGap}
      handleColumnGapChange={setColumnGap}
      rowGap={rowGap}
      handleRowGapChange={setRowGap}
    >
      <View style={[styles.box, styles.box1]} />
      <View style={[styles.box, styles.box2]} />
      <View style={[styles.box, styles.box3]} />
      <View style={[styles.box, styles.box4]} />
      <View style={[styles.box, styles.box5]} />
    </PreviewLayout>
  );
};

const PreviewLayout = ({
  children,
  handleColumnGapChange,
  handleRowGapChange,
  rowGap,
  columnGap,
}) => (
  <View style={styles.previewContainer}>
    <View style={styles.inputContainer}>
      <View style={styles.itemsCenter}>
        <Text>Row Gap</Text>
        <TextInput
          style={styles.input}
          value={rowGap}
          onChangeText={(v) => handleRowGapChange(Number(v))}
        />
      </View>
      <View style={styles.itemsCenter}>
        <Text>Column Gap</Text>
        <TextInput
          style={styles.input}
          value={columnGap}
          onChangeText={(v) => handleColumnGapChange(Number(v))}
        />
      </View>
    </View>
    <View style={[styles.container, { rowGap, columnGap }]}>{children}</View>
  </View>
);

const styles = StyleSheet.create({
  itemsCenter: { alignItems: "center" },
  inputContainer: {
    gap: 4,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  previewContainer: { padding: 10, flex: 1, marginTop: 30 },
  input: {
    borderBottomWidth: 1,
    paddingVertical: 3,
    width: 50,
    textAlign: "center",
  },
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: "aliceblue",
    maxHeight: 400,
    flexWrap: "wrap",
    alignContent: "flex-start",
  },
  box: {
    width: 50,
    height: 80,
  },
  box1: {
    backgroundColor: "orangered",
  },
  box2: {
    backgroundColor: "orange",
  },
  box3: {
    backgroundColor: "mediumseagreen",
  },
  box4: {
    backgroundColor: "deepskyblue",
  },
  box5: {
    backgroundColor: "mediumturquoise",
  },
});

export default RowGapAndColumnGap;
