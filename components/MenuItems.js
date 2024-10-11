const react = require("react");
const {
  View,
  ScrollView,
  Text,
  StyleSheet,
  FlatList,
  SectionList,
} = require("react-native");

const green = "#495E57";
const yellow = "#F4CE14";

let one = 1;

const menuItemsToDisplay = [
  { name: "menu item", price: "Af3.15", id: one++ },
  { name: "menu item", price: "Af3.15", id: one++ },
  { name: "menu item", price: "Af3.15", id: one++ },
  { name: "menu item", price: "Af3.15", id: one++ },
  { name: "menu item", price: "Af3.15", id: one++ },
  { name: "menu item", price: "Af3.15", id: one++ },
  { name: "menu item", price: "Af3.15", id: one++ },
  { name: "menu item", price: "Af3.15", id: one++ },
  { name: "menu item", price: "Af3.15", id: one++ },
  { name: "menu item", price: "Af3.15", id: one++ },
  { name: "menu item", price: "Af3.15", id: one++ },
  { name: "menu item", price: "Af3.15", id: one++ },
  { name: "menu item", price: "Af3.15", id: one++ },
  { name: "menu item", price: "Af3.15", id: one++ },
  { name: "menu item", price: "Af3.15", id: one++ },
  { name: "menu item", price: "Af3.15", id: one++ },
  { name: "menu item", price: "Af3.15", id: one++ },
  { name: "menu item", price: "Af3.15", id: one++ },
  { name: "menu item", price: "Af3.15", id: one++ },
  { name: "menu item", price: "Af3.15", id: one++ },
  { name: "menu item", price: "Af3.15", id: one++ },
  { name: "menu item", price: "Af3.15", id: one++ },
  { name: "menu item", price: "Af3.15", id: one++ },
  { name: "menu item", price: "Af3.15", id: one++ },
  { name: "menu item", price: "Af3.15", id: one++ },
  { name: "menu item", price: "Af3.15", id: one++ },
  { name: "menu item", price: "Af3.15", id: one++ },
  { name: "menu item", price: "Af3.15", id: one++ },
];

const menuItemsToDisplay2 = [
  {
    title: "Appetizer",
    data: [
      { name: "Hummus", price: "Af3.15", id: one++ },
      { name: "Moutabal", price: "Af3.15", id: one++ },
      { name: "Kofta", price: "Af3.15", id: one++ },
      { name: "baryani", price: "Af3.15", id: one++ },
    ],
  },
  {
    title: "Main dishes",
    data: [
      { name: "meat rice", price: "Af3.15", id: one++ },
      { name: "soup", price: "Af3.15", id: one++ },
      { name: "Kofta", price: "Af3.15", id: one++ },
      { name: "cheeps", price: "Af3.15", id: one++ },
    ],
  },
  {
    title: "Desserts",
    data: [
      { name: "baklava", price: "Af3.15", id: one++ },
      { name: "tartufa", price: "Af3.15", id: one++ },
      { name: "Kofta", price: "Af3.15", id: one++ },
      { name: "baryani", price: "Af3.15", id: one++ },
    ],
  },
  {
    title: "Watani",
    data: [
      { name: "Hummus", price: "Af3.15", id: one++ },
      { name: "Moutabal", price: "Af3.15", id: one++ },
      { name: "Kofta", price: "Af3.15", id: one++ },
      { name: "baryani", price: "Af3.15", id: one++ },
      { name: "baryani", price: "Af3.15", id: one++ },
      { name: "baryani", price: "Af3.15", id: one++ },
    ],
  },
  {
    title: "Extras",
    data: [
      { name: "Hummus", price: "Af3.15", id: one++ },
      { name: "Moutabal", price: "Af3.15", id: one++ },
      { name: "Kofta", price: "Af3.15", id: one++ },
      { name: "baryani", price: "Af3.15", id: one++ },
      { name: "baryani", price: "Af3.15", id: one++ },
      { name: "baryani", price: "Af3.15", id: one++ },
    ],
  },
];

function Item({ name, price }) {
  return (
    <View
      style={{
        justifyContent: "space-between",
        flexDirection: "row",
      }}
    >
      <Text style={menuStyles.itemText}>{name}</Text>
      <Text style={menuStyles.itemText}>{price}</Text>
    </View>
  );
}

function Separator() {
  return <View style={menuStyles.separator} />;
}

function Header() {
  return <Text style={menuStyles.headerText}>View Menu</Text>;
}

function Footer() {
  return (
    <Text style={menuStyles.footerText}>
      All rights reserved by Hussain 2024
    </Text>
  );
}

const MenuItems = () => {
  function renderItem({ item, index, separator }) {
    return <Item name={item.name} price={item.price} />;
  }

  function renderSectionHeader({ section: { title } }) {
    return <Text style={menuStyles.sectionHeader}>{title}</Text>;
  }

  return (
    <View style={menuStyles.container}>
      {/* <FlatList
        data={menuItemsToDisplay}
        renderItem={renderItem}
        style={menuStyles.innerContainer}
        keyExtractor={(item) => item.id}

        ItemSeparatorComponent={Separator}
        ListHeaderComponent={Header}
        ListFooterComponent={Footer}
      /> */}

      <SectionList
        sections={menuItemsToDisplay2}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        ItemSeparatorComponent={Separator}
        ListHeaderComponent={Header}
        // ListFooterComponent={Footer}
      />
    </View>
  );
};

export default MenuItems;

const menuStyles = StyleSheet.create({
  container: {
    flex: 0.95,
  },
  innerContainer: {
    paddingHorizontal: 40,
    paddingVertical: 40,
    paddding: 40,
  },
  headerText: {
    fontSize: 40,
    textAlign: "center",
    flexWrap: "wrap",
    color: "white",
  },
  footerText: {
    fontSize: 20,
    textAlign: "center",
    flexWrap: "wrap",
    color: "#EDEFEE",
    paddingBottom: 40,
  },
  itemText: { color: yellow, fontSize: 20, padding: 10 },
  separator: {
    borderBottomWidth: 1,
    borderColor: "#EDEFEE",
  },
  sectionHeader: {
    backgroundColor: "#fbdabb",
    textAlign: "center",
    fontSize: 25,
    flexWrap: "wrap",
    color: "#333333",
  },
});
