import React, { useState } from "react";
import { StyleSheet, Switch, View } from "react-native";

const App = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <View style={styles.container}>
      <Switch
        value={isEnabled}
        onValueChange={() => setIsEnabled((prev) => !prev)}
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        disabled={false}
        // onChange={}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
