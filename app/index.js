import React, { useEffect, useState } from "react";
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
  FlatList,
} from "react-native";

import ShoppingListItem from "../components/ShoppingListItem";
import { Link } from "expo-router";
import { theme } from "../theme";
import { getFormStorage, saveToStorage } from "../utils/storage";

const initialList = [
  { id: 1, name: "Coffee" },
  { id: 2, name: "Tea" },
  { id: 3, name: "Sugar" },
];

const testData = new Array(100).fill(null).map((item, index) => ({
  id: String(index),
  name: String("item " + (index + 1)),
}));

console.log(testData);

const storageKey = "shopping-list";

const App = () => {
  const [value, setValue] = useState("");
  const [shoppingList, setShoppingList] = useState([]);

  console.log(shoppingList);

  useEffect(() => {
    const fetchInitial = async () => {
      const data = await getFormStorage(storageKey);
      if (data) {
        setShoppingList(data);
      }
    };
    fetchInitial();
  }, []);

  const handleSubmit = () => {
    if (value) {
      const newShoppingList = [
        {
          id: new Date().toTimeString(),
          name: value,
          lastUpdatedTimeStamp: Date.now(),
        },
        ...shoppingList,
      ];
      setShoppingList(newShoppingList);
      saveToStorage(storageKey, shoppingList);
      setValue("");
    }
  };

  const handleDelete = (id) => {
    const newShoppingList = shoppingList.filter((item) => item.id !== id);
    setShoppingList(newShoppingList);
    saveToStorage(storageKey, newShoppingList);
  };

  const handleToggleComplete = (id) => {
    const newShoppingList = shoppingList.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          lastUpdatedTimeStamp: Date.now(),
          completedAtTimeStamp: item.completedAtTimeStamp
            ? undefined
            : Date.now(),
        };
      }
      return item;
    });
    setShoppingList(newShoppingList);
    saveToStorage(storageKey, newShoppingList);
  };

  return (
    <FlatList
      data={orderShoppingList(shoppingList)}
      renderItem={({ item }) => (
        <ShoppingListItem
          name={item.name}
          onDelete={() => handleDelete(item.id)}
          onToggleComplete={() => handleToggleComplete(item.id)}
          isCompleted={Boolean(item.completedAtTimeStamp)}
        />
      )}
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      stickyHeaderIndices={[0]}
      ListEmptyComponent={
        <View style={styles.listEmptyContainer}>
          <Text>Your shopping list is empty</Text>
        </View>
      }
      ListHeaderComponent={
        <TextInput
          value={value}
          onChangeText={setValue}
          placeholder="E.g. Coffee"
          style={styles.textInput}
          keyboardType="default"
          onSubmitEditing={handleSubmit}
          clearButtonMode="always"
          returnKeyType="done"
        />
      }
    />
  );
};
export default App;

function orderShoppingList(shoppingList) {
  return shoppingList.sort((item1, item2) => {
    if (item1.completedAtTimeStamp && item2.completedAtTimeStamp) {
      return item2.completedAtTimeStamp - item1.completedAtTimeStamp;
    }

    if (item1.completedAtTimeStamp && !item2.completedAtTimeStamp) {
      return 1;
    }

    if (!item1.completedAtTimeStamp && item2.completedAtTimeStamp) {
      return -1;
    }

    if (!item1.completedAtTimeStamp && !item2.completedAtTimeStamp) {
      return item2.completedAtTimeStamp - item1.completedAtTimeStamp;
    }
    return 0;
  });
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 12,
  },
  textInput: {
    borderColor: theme.colorLightGray,
    borderWidth: 2,
    padding: 12,
    marginHorizontal: 12,
    marginBottom: 12,
    fontSize: 18,
    borderRadius: 50,
    backgroundColor: theme.colorWhite,
  },
  contentContainer: {
    paddingBottom: 24,
  },
  listEmptyContainer: {
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
