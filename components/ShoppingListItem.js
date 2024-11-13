import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { theme } from "../theme";

import { AntDesign } from "@expo/vector-icons";

// the prop passed in as object so we have to destructure it
function ShoppingListItem({
  name,
  isCompleted,
  shoppingList,
  setShoppingList,
}) {
  const handleDelete = (id) => {
    Alert.alert(
      `Are you sure you want to delete ${name}?`,
      "it will be gone for good",
      [
        {
          text: "Cancel",
          onPress: () => null(),
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: () =>
            setShoppingList([
              ...shoppingList,
              shoppingList.filter((item) => id !== item.id),
            ]),
          style: "destructive",
        },
      ]
    );
  };

  return (
    <View
      style={[
        styles.itemContainer,
        isCompleted ? styles.completedContainer : undefined,
      ]}
    >
      <Text
        style={[
          styles.itemText,
          isCompleted ? styles.completedText : undefined,
        ]}
      >
        {name}
      </Text>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={handleDelete}
        style={[
          styles.button,
          isCompleted ? styles.completedButton : undefined,
        ]}
      >
        <AntDesign
          name="closecircle"
          color={isCompleted ? theme.colorGray : theme.colorRed}
          size={24}
        />
      </TouchableOpacity>
    </View>
  );
}

export default ShoppingListItem;

const styles = StyleSheet.create({
  itemContainer: {
    borderBottomColor: theme.colorCerulean,
    borderBottomWidth: 1,
    paddingHorizontal: 18,
    paddingVertical: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  completedContainer: {
    backgroundColor: theme.colorLightGray,
    borderBottomColor: theme.colorLightGray,
  },
  completedButton: {
    // backgroundColor: theme.colorGray,
  },
  completedText: {
    textDecorationLine: "line-through",
    textDecorationColor: theme.colorGray,
    color: theme.colorGray,
  },
  itemText: { fontSize: 18, fontWeight: "200" },
  button: {
    // backgroundColor: theme.colorBlack,
    padding: 8,
    borderRadius: 6,
  },
  buttonText: {
    color: theme.colorWhite,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
});
