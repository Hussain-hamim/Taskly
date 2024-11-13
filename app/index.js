import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  PixelRatio,
  Pressable,
  TouchableOpacity,
  Alert,
  TextInput,
  ScrollView,
} from "react-native";

import ShoppingListItem from "../components/ShoppingListItem";
import { Link } from "expo-router";
import { theme } from "../theme";

const initialList = [
  { id: 1, name: "Coffee" },
  { id: 2, name: "Tea" },
  { id: 3, name: "Sugar" },
];

const App = () => {
  const [value, setValue] = useState("");
  const [shoppingList, setShoppingList] = useState(initialList);

  const handleSubmit = () => {
    if (value) {
      const newShoppingList = [
        { id: new Date().toTimeString(), name: value },
        ...shoppingList,
      ];
      setShoppingList(newShoppingList);
      setValue("");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder="E.g. Coffee"
        style={styles.textInput}
        keyboardType="default"
        onSubmitEditing={handleSubmit}
      />
      <ScrollView>
        {shoppingList.map((item) => (
          <ShoppingListItem name={item.name} key={item.id} />
        ))}
      </ScrollView>
    </View>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 12,
  },
  textInput: {
    backgroundColor: theme.colorLightGray,
    borderWidth: 2,
    padding: 12,
    marginHorizontal: 12,
    marginBottom: 12,
    fontSize: 18,
    borderRadius: 50,
    borderColor: theme.colorCerulean,
  },
});
