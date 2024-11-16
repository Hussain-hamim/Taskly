import { useRouter } from "expo-router";
import { Text, View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { theme } from "../../theme";
import { registerForPushNotificationsAsync } from "../../utils/registerForPushNotificationsAsync";
import * as Device from "expo-device";
import * as Notification from "expo-notifications";

export default function CounterScreen() {
  const router = useRouter();

  const scheduleNotification = async () => {
    const result = await registerForPushNotificationsAsync();
    if (result === "granted") {
      await Notification.scheduleNotificationAsync({
        content: {
          title: "I'm notification from Hussain's app",
        },
        trigger: {
          seconds: 5,
        },
      });
      console.log(result);
    } else {
      if (Device.isDevice) {
        Alert.alert(
          "Unable to schedule notification",
          "Enable the notification permission for expo go in settings"
        );
      }
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={scheduleNotification}
      >
        <Text style={styles.buttonText}>Schedule notification</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 24,
  },
  button: {
    backgroundColor: theme.colorBlack,
    padding: 12,
    borderRadius: 6,
  },
  buttonText: {
    color: theme.colorWhite,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
});
