import { Text, View, StyleSheet, FlatList } from "react-native";
import { countdownStorageKey } from ".";
import { getFormStorage } from "../../utils/storage";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { theme } from "../../theme";

const fullDateFormat = `LLL d yyy, h:mm aaa`;

export default function HistoryScreen() {
  const [countdownState, setcountdownState] = useState();

  useEffect(() => {
    const init = async () => {
      const value = await getFormStorage(countdownStorageKey);
      setcountdownState(value);
    };
    init();
  });

  return (
    <FlatList
      style={styles.list}
      contentContainerStyle={styles.contentContainer}
      data={countdownState?.completedTimestamp}
      renderItem={({ item }) => (
        <View style={styles.listItem}>
          <Text style={styles.listItemText}>
            {format(item, fullDateFormat)}
          </Text>
        </View>
      )}
      ListEmptyComponent={
        <View style={styles.listEmptyContainer}>
          <Text style={styles.listEmptyContainerText}>No history</Text>
        </View>
      }
    />
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
  },
  list: {
    flex: 1,
    backgroundColor: theme.colorWhite,
  },
  contentContainer: {
    marginTop: 8,
  },
  listItem: {
    backgroundColor: theme.colorLightGray,
    marginHorizontal: 8,
    padding: 12,
    borderRadius: 6,
    marginBottom: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  listItemText: {
    fontSize: 18,
  },
  listEmptyContainer: {
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  listEmptyContainerText: {
    fontSize: 18,
  },
});
