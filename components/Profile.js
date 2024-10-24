import { Button, Text } from "react-native";

const Profile = ({ navigation }) => {
  return (
    <Button
      title="Go to Jane's profile"
      onPress={() => navigation.navigate("HomeScreen", { name: "Jane" })}
    />
  );
};
const ProfileScreen = ({ navigation, route }) => {
  return <Text>This is {route.params.name} s profile</Text>;
};

export default Profile;
