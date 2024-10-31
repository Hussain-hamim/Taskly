import React, { useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  StatusBar,
  RefreshControl,
  Pressable,
  ScrollView,
  ScrollViewBase,
  TouchableOpacity,
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
    title: "Dessertsa",
    data: ["Cheese Cake", "Ice Cream"],
  },
  {
    title: "Drinksa",
    data: ["Water", "Coke", "Beer"],
  },
  {
    title: "Dessertsd",
    data: ["Cheese Cake", "Ice Cream"],
  },
  {
    title: "Drinksfg",
    data: ["Water", "Coke", "Beer"],
  },
  {
    title: "Dessertsfggf",
    data: ["Cheese Cake", "Ice Cream"],
  },
];

const App = () => {
  const [refreshing, setRefreshing] = React.useState(false);
  const topRef = useRef(null);
  let one = 1; // one should be included in the extraData prop

  const goToTop = () => {
    topRef.current.scrollTo({ y: 0, animated: true });
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <ScrollView ref={topRef}>
      <SafeAreaView style={styles.container}>
        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item, index, section, separators }) => (
            <View style={styles.item}>
              <Text style={styles.title}>{item}</Text>
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
            <Text
              style={[
                styles.title,
                { backgroundColor: "gray", padding: 5, marginVertical: 15 },
              ]}
            >
              this is list footer component
            </Text>
          )}
          ListHeaderComponent={() => (
            <Text
              style={[
                styles.title,
                { backgroundColor: "gray", padding: 3, marginVertical: 15 },
              ]}
            >
              this is list header component
            </Text>
          )}
          // refreshControl={
          //   <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          // } // this below two line of code is alternate to above
          refreshing={refreshing}
          onRefresh={onRefresh}
          onViewableItemsChanged={({ callback }) => null}
          renderSectionFooter={() => (
            <View style={{ borderWidth: 2, borderColor: "red" }}></View>
          )}
          SectionSeparatorComponent={() => (
            <View style={{ borderWidth: 2, borderColor: "blue" }} />
          )}
          stickySectionHeadersEnabled={true}
        />

        <TouchableOpacity style={styles.scrollToTopButton} onPress={goToTop}>
          <Text style={styles.scrollToTopText}> Top</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ScrollView>
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

  scrollToTopButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "yellow",
    padding: 10,
    borderRadius: 5,
  },
  scrollToTopText: {
    color: "black",
    fontWeight: "bold",
  },
});

export default App;
