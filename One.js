import * as React from "react";
import { Button, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        onPress={() => navigation.navigate("Notifications")}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App2() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        id="three"
        initialRouteName="Home"
        screenOptions={{
          drawerPosition: "left",
          drawerActiveBackgroundColor: "orchid",
          drawerType: "slide", // front, back, slide, permanent
          // overlayColor: "red",
          swipeEnabled: true,
          swipeEdgeWidth: 10,
        }}
        backBehavior="history"
        defaultStatus="closed"
        // drawerContent={() => {}} // fn that return react element to render as the content of the drawer
      >
        <Drawer.Screen
          options={{
            title: "Home",
            drawerLabel: "Go Home",
            drawerIcon: () => <Ionicons name="home" />,
            drawerInactiveBackgroundColor: "powderblue",
            // drawerItemStyle:{},
            // drawerLabelStyle: {}
            // drawerContentContainerStyle: {}
          }}
          name="Home"
          component={HomeScreen}
        />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
