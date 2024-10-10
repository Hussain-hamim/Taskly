const react = require("react");
const { View, ScrollView, Text } = require("react-native");

const green = "#495E57";
const yellow = "#F4CE14";

const menuItemsToDisplay = [
  "human \n human \n human \n human human \n human \n human \n human human \n human \n human \n human human \n human \n human \n human human \n human \n human \n human human \n human \n human \n human human \n human \n human \n human human \n human \n human \n human human \n human \n human \n human human \n human \n human \n human human \n human \n human \n human human \n human \n human \n human human \n human \n human \n human human \n human \n human \n human human \n human \n human \n human human \n human \n human \n human human \n human \n human \n human human \n human \n human \n human",
];

const MenuItems = () => {
  return (
    <View style={{ flex: 0.75 }}>
      <ScrollView
        horizontal={false}
        indicatorStyle={"white"}
        style={{ padding: 40, backgroundColor: "black" }}
      >
        <Text style={{ fontSize: 40, flexWrap: "wrap", color: "white" }}>
          View Menu
        </Text>
        <Text style={{ color: yellow, fontSize: 30 }}>
          {menuItemsToDisplay[0]}
        </Text>
      </ScrollView>
    </View>
  );
};

export default MenuItems;
