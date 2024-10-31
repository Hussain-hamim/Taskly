import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  StatusBar,
  RefreshControl,
} from "react-native";

const DATA = [
  {
    title: "Main dishes",
    data: ["Pizza", "Burger", "Risotto"],
  },
  {
    title: "Sides",
    data: ["French Fries", "Onion Rings", "Fried Shrimps"],
  },
  {
    title: "Drinks",
    data: ["Water", "Coke", "Beer"],
  },
  {
    title: "Desserts",
    data: ["Cheese Cake", "Ice Cream"],
  },
];

const App = () => {
  const [refreshing, setRefreshing] = React.useState(false);
  let one = 1; // one should be included in the extraData prop

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item, index, section, separators }) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item}</Text>
            <Text style={styles.title}>{index}</Text>
            <Text style={styles.title}>{section.title}</Text>
            <Text style={styles.title}>{section.data}</Text>
            <Text style={styles.title}>{one}</Text>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
        extraData={one} //If any of your data depend on anything outside of the data prop, stick it here and treat it immutably.
        initialNumToRender={3}
        inverted={false}
        ItemSeparatorComponent={() => (
          <View style={{ borderWidth: 2, borderColor: "green" }} />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.header}>the list is empty</Text>
        )}
        ListFooterComponent={() => (
          <Text style={styles.title}>this is list footer component</Text>
        )}
        ListHeaderComponent={() => (
          <Text style={styles.title}>this is list header component</Text>
        )}
        // refreshControl={
        //   <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        // } // this below two line of code is alternate to above
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
  },
});

export default App;
