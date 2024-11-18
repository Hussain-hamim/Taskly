import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  useWindowDimensions,
} from "react-native";
import { theme } from "../../theme";
import { registerForPushNotificationsAsync } from "../../utils/registerForPushNotificationsAsync";
import * as Device from "expo-device";
import * as Notification from "expo-notifications";
import { useEffect, useRef, useState } from "react";
import { isBefore, intervalToDuration } from "date-fns";
import { TimeSegment } from "../../components/TimeSegment";
import { getFormStorage, saveToStorage } from "../../utils/storage";
import ConfettiCannon from "react-native-confetti-cannon";
import * as Haptics from "expo-haptics";

const frequency = 14 * 24 * 60 * 60 * 1000;

export const countdownStorageKey = "taskly-countdown";

export default function CounterScreen() {
  const [status, setstatus] = useState({
    isOverdue: false,
    distance: {},
  });
  const [countdownState, setcountdownState] = useState();
  const [isLoading, setIslLoading] = useState(true);
  const confettiRef = useRef();
  const { width } = useWindowDimensions();

  const lastCompletedTimestamp = countdownState?.completedTimestamp[0];

  useEffect(() => {
    const init = async () => {
      const value = await getFormStorage(countdownStorageKey);
      setcountdownState(value);
    };
    init();
  });

  useEffect(() => {
    // const intervalId = setInterval(() => {
    const timestamp = lastCompletedTimestamp
      ? lastCompletedTimestamp + frequency
      : Date.now();
    if (lastCompletedTimestamp) {
      setIslLoading(false);
    }
    const isOverdue = isBefore(timestamp, Date.now()); // @summary — Is the first date before the second one?
    const distance = intervalToDuration(
      isOverdue
        ? { start: timestamp, end: Date.now() }
        : {
            start: Date.now(),
            end: timestamp,
          }
    );
    setstatus({ isOverdue, distance });
    // }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [lastCompletedTimestamp, frequency]);

  const scheduleNotification = async () => {
    confettiRef.current.start();
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    let pushNotificationId;
    const result = await registerForPushNotificationsAsync();
    if (result === "granted") {
      pushNotificationId = await Notification.scheduleNotificationAsync({
        content: {
          title: "time to wash the car!",
        },
        trigger: {
          seconds: frequency / 1000,
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
    if (countdownState?.currentNotificationId) {
      await Notification.cancelAllScheduledNotificationsAsync(
        countdownState?.currentNotificationId
      );
    }
    const newCountdownState = {
      currentNotificationId: pushNotificationId,
      completedTimestamp: countdownState
        ? [Date.now(), ...countdownState.completedTimestamp]
        : [Date.now()],
    };
    setcountdownState(newCountdownState);
    await saveToStorage(countdownStorageKey, newCountdownState);
  };

  if (isLoading) {
    return (
      <View style={styles.activityIndicatorContainer}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View
      style={[
        styles.container,
        status.isOverdue ? styles.containerLate : undefined,
      ]}
    >
      {status.isOverdue ? (
        <Text style={[styles.heading, styles.whiteText]}>
          car wash overdue by
        </Text>
      ) : (
        <Text style={styles.heading}>car wash due in...</Text>
      )}

      <View style={styles.row}>
        <TimeSegment
          unit="Days"
          number={status.distance.days ?? 0}
          textStyle={status.isOverdue ? styles.whiteText : undefined}
        />
        <TimeSegment
          unit="Hours"
          number={status.distance.hours ?? 0}
          textStyle={status.isOverdue ? styles.whiteText : undefined}
        />
        <TimeSegment
          unit="Minutes"
          number={status.distance.minutes ?? 0}
          textStyle={status.isOverdue ? styles.whiteText : undefined}
        />
        <TimeSegment
          unit="Seconds"
          number={status.distance.seconds ?? 0}
          textStyle={status.isOverdue ? styles.whiteText : undefined}
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={scheduleNotification}
      >
        <Text style={styles.buttonText}>I've washed the car!</Text>
      </TouchableOpacity>
      <ConfettiCannon
        ref={confettiRef}
        count={60}
        origin={{ x: width / 2, y: -20 }}
        fadeOut
        autoStart={false}
      />
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
  row: {
    flexDirection: "row",
    marginBottom: 24,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
  },
  containerLate: {
    backgroundColor: theme.colorRed,
  },
  whiteText: {
    color: theme.colorWhite,
  },
  activityIndicatorContainer: {
    flex: 1,
    backfaceVisibility: theme.colorWhite,
    justifyContent: "center",
    alignItems: "center",
  },
});
