const react = require("react");
const {
  View,
  ScrollView,
  Text,
  StyleSheet,
  FlatList,
} = require("react-native");

const green = "#495E57";
const yellow = "#F4CE14";

let one = 1;

const menuItemsToDisplay = [
  { name: "menu item", id: one++ },
  { name: "menu item", id: one++ },
  { name: "menu item", id: one++ },
  { name: "menu item", id: one++ },
  { name: "menu item", id: one++ },
  { name: "menu item", id: one++ },
  { name: "menu item", id: one++ },
  { name: "menu item", id: one++ },
  { name: "menu item", id: one++ },
  { name: "menu item", id: one++ },
  { name: "menu item", id: one++ },
  { name: "menu item", id: one++ },
  { name: "menu item", id: one++ },
  { name: "menu item", id: one++ },
  { name: "menu item", id: one++ },
  { name: "menu item", id: one++ },
  { name: "menu item", id: one++ },
  { name: "menu item", id: one++ },
  { name: "menu item", id: one++ },
  { name: "menu item", id: one++ },
  { name: "menu item", id: one++ },
  { name: "menu item", id: one++ },
  { name: "menu item", id: one++ },
  { name: "menu item", id: one++ },
  { name: "menu item", id: one++ },
  { name: "menu item", id: one++ },
  { name: "menu item", id: one++ },
  { name: "menu item", id: one++ },
];

function Item({ name }) {
  return (
    <View style={menuStyles.container}>
      <Text style={menuStyles.itemText}>{name}</Text>
    </View>
  );
}

const MenuItems = () => {
  function renderItem({ item, index, separator }) {
    console.log(item);
    return <Item name={item.name} />;
  }

  return (
    <View style={menuStyles.container}>
      <Text style={menuStyles.headerText}>View Menu</Text>
      {/* <Text style={menuStyles.itemText}>{menuItemsToDisplay[0]}</Text> */}
      <FlatList
        style={menuStyles.innerContainer}
        data={menuItemsToDisplay}
        renderItem={({ item, index, sep }) => (
          <Text style={menuStyles.itemText}>
            {item.name + " " + (1 + index)}
          </Text>
        )}
      />
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
