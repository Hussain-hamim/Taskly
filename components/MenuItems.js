const react = require("react");
const { View, ScrollView, Text, StyleSheet } = require("react-native");

const green = "#495E57";
const yellow = "#F4CE14";

const menuItemsToDisplay = [
  "menu item \n menu item \n menu item \n menu item \n menu item \n menu item \n menu item \n menu item \n menu item \n menu item \n menu item \n menu item \n menu item \n menu item \n menu item \n menu item \n menu item \n menu item \n menu item \n menu item \n menu item \n menu item \n menu item \n menu item \n menu item \n menu item \n menu item \n menu item \n menu item \n menu item \n menu item \n menu item \n menu item \n menu item \n menu item \n menu item \n menu item \n menu item \n menu item \n menu item",
];

const MenuItems = () => {
  return (
    <View style={menuStyles.container}>
      <ScrollView
        horizontal={false}
        indicatorStyle={"white"}
        style={menuStyles.innerContainer}
      >
        <Text style={menuStyles.headerText}>View Menu</Text>
        <Text style={menuStyles.itemText}>{menuItemsToDisplay[0]}</Text>
      </ScrollView>
    </View>
  );
};

export default MenuItems;

const menuStyles = StyleSheet.create({
  container: {
    flex: 0.75,
  },
  innerContainer: {
    paddingHorizontal: 40,
    paddingVertical: 40,
    paddding: 40,
    backgroundColor: green,
  },
  headerText: { fontSize: 40, flexWrap: "wrap", color: "white" },
  itemText: { color: yellow, fontSize: 30 },
});
