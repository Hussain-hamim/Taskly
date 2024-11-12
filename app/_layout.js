import { Stack } from "expo-router";

function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "shopping list" }} />
    </Stack>
  );
}

export default Layout;
