import { Text, View } from "react-native";

const MyAppHeaderText = ({ children }) => {
  return (
    <View>
      <Text style={{ fontSize: 20 }}>{children}</Text>
    </View>
  );
};
