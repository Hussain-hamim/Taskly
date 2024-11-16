import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { theme } from "../theme";

import { AntDesign, Entypo } from "@expo/vector-icons";

// the prop passed in as object so we have to destructure it
function ShoppingListItem({
  name,
  isCompleted,
  onDelete,
  onToggleComplete,
  handleEdit,
}) {
  const handleDelete = () => {
    Alert.alert(
      `Are you sure you want to delete ${name}?`,
      "it will be gone for good",
      [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: () => onDelete(),
          style: "destructive",
        },
      ]
    );
  };

  return (
    <Pressable
      onPress={onToggleComplete}
      style={[
        styles.itemContainer,
        isCompleted ? styles.completedContainer : undefined,
      ]}
    >
      <View style={styles.row}>
        <Entypo
          name={isCompleted ? "check" : "circle"}
          size={24}
          color={isCompleted ? theme.colorGray : theme.colorCerulean}
        />
        <Text
          style={[
            styles.itemText,
            isCompleted ? styles.completedText : undefined,
          ]}
        >
          {name}
        </Text>
      </View>
      <TouchableOpacity onPress={handleEdit}>
        <AntDesign
          style={{ marginRight: 10 }}
          name="edit"
          color={isCompleted ? theme.colorGray : theme.colorCerulean}
          size={24}
        />
      </TouchableOpacity>
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
    </Pressable>
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
    borderRadius: 12,
  },
  completedButton: {
    // backgroundColor: theme.colorGray,
  },
  completedText: {
    textDecorationLine: "line-through",
    textDecorationColor: theme.colorGray,
    color: theme.colorGray,
  },
  itemText: { fontSize: 18, fontWeight: "200", flex: 1 },
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
  row: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    flex: 1,
  },
});
