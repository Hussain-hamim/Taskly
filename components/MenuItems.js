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
      "Hummus",
      "Moutabal",
      "Falafel",
      "Kofta",
      "eggplant salad",
      "baryani",
    ],
  },
  {
    title: "Main dishes",
    data: [
      "Hummus",
      "Moutabal",
      "Falafel",
      "Kofta",
      "eggplant salad",
      "baryani",
    ],
  },
  {
    title: "Desserts",
    data: [
      "Hummus",
      "Moutabal",
      "Falafel",
      "Kofta",
      "eggplant salad",
      "baryani",
    ],
  },
  {
    title: "Watani",
    data: [
      "Hummus",
      "Moutabal",
      "Falafel",
      "Kofta",
      "eggplant salad",
      "baryani",
    ],
  },
];

function Item({ name, index, price }) {
  return (
    <View
      style={{
        justifyContent: "space-between",
        flexDirection: "row",
      }}
    >
      <Text style={menuStyles.itemText}>{name}</Text>
      {/* <Text style={menuStyles.itemText}>{price}</Text> */}
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
    return <Item name={item} />;
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
        ListFooterComponent={Footer}
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
    backgroundColor: "pink",
    textAlign: "center",
    fontSize: 20,
  },
});
