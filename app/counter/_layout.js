import { MaterialIcons } from "@expo/vector-icons";
import { Link, Stack } from "expo-router";
import React from "react";
import { Pressable, Text } from "react-native";
import { theme } from "../../theme";

function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Counter",
          headerRight: () => (
            <Link href="/counter/history" asChild>
              <Pressable hitSlop={20}>
                <MaterialIcons
                  name="history"
                  color={theme.colorGray}
                  size={32}
                />
              </Pressable>
            </Link>
          ),
        }}
      />
    </Stack>
  );
}

export default Layout;
