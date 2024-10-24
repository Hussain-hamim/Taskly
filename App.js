import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";

const App = () => {
  const [powderblue, setPowderblue] = useState({
    flexBasis: "auto",
    flexShrink: 1,
    flexGrow: 0,
  });
  const [skyblue, setSkyblue] = useState({
    flexBasis: 100,
    flexShrink: 0,
    flexGrow: 1,
  });
  const [steelblue, setSteelblue] = useState({
    flexBasis: 220,
    flexShrink: 1,
    flexGrow: 1,
  });

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.container,
          {
            flexDirection: "row",
            alignContent: "space-between",
          },
        ]}
      >
        <BoxInfo color="powderblue" {...powderblue} setStyle={setPowderblue} />
        <BoxInfo color="skyblue" {...skyblue} setStyle={setSkyblue} />
        <BoxInfo color="steelblue" {...steelblue} setStyle={setSteelblue} />
      </View>

      <View style={styles.previewContainer}>
        <View
          style={[
            styles.box,
            {
              flexBasis: powderblue.flexBasis,
              flexGrow: powderblue.flexGrow,
              flexShrink: powderblue.flexShrink,
              backgroundColor: "powderblue",
            },
          ]}
        />

        <View
          style={[
            styles.box,
            {
              flexBasis: skyblue.flexBasis,
              flexGrow: skyblue.flexGrow,
              flexShrink: skyblue.flexShrink,
              backgroundColor: "skyblue",
            },
          ]}
        />
        <View
          style={[
            styles.box,
            {
              flexBasis: steelblue.flexBasis,
              flexGrow: steelblue.flexGrow,
              flexShrink: steelblue.flexShrink,
              backgroundColor: "steelblue",
            },
          ]}
        />
      </View>
    </View>
  );
};

const BoxInfo = ({ color, flexBasis, flexShrink, setStyle, flexGrow }) => (
  <View style={[styles.row, { flexDirection: "column" }]}>
    <View
      style={[
        styles.boxLabel,
        {
          backgroundColor: color,
        },
      ]}
    >
      <Text
        style={{
          color: "#fff",
          fontWeight: "500",
          textAlign: "center",
        }}
      >
        Box
      </Text>
    </View>

    <Text style={styles.label}>flexBasis</Text>
    <TextInput
      value={flexBasis}
      style={styles.input}
      onChangeText={(fB) =>
        setStyle((value) => ({
          ...value,
          flexBasis: isNaN(parseInt(fB, 10)) ? "auto" : parseInt(fB, 10),
        }))
      }
    />

    <Text style={styles.label}>flexShrink</Text>
    <TextInput
      value={flexShrink}
      style={styles.input}
      onChangeText={(fS) =>
        setStyle((value) => ({
          ...value,
          flexShrink: isNaN(parseInt(fS, 10)) ? undefined : parseInt(fS, 10),
        }))
      }
    />
    <Text style={styles.label}>flexGrow</Text>
    <TextInput
      value={flexGrow}
      style={styles.input}
      onChangeText={(fG) =>
        setStyle((value) => ({
          ...value,
          flexGrow: isNaN(parseInt(fG, 10)) ? undefined : parseInt(fG, 10),
        }))
      }
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    marginTop: 20,
  },
  box: {
    flex: 1,
    height: 50,
    width: 50,
  },
  boxLabel: {
    minWidth: 80,
    padding: 8,
    borderRadius: 4,
    marginTop: 8,
  },
  label: {
    marginTop: 6,
    fontSize: 16,
    fontWeight: "100",
  },
  previewContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "aliceblue",
    // marginTop: 100,
  },
  row: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    marginBottom: 10,
  },
  input: {
    borderBottomWidth: 1,
    paddingVertical: 3,
    width: 50,
    textAlign: "center",
  },
});

export default App;
