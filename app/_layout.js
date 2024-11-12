import { Stack } from "expo-router";

function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Shopping List" }} />
      <Stack.Screen
        name="counter"
        options={{
          title: "Counter",
          presentation: "modal",
          animation: "slide_from_bottom",
        }}
      />
      <Stack.Screen name="idea" options={{ title: "Idea" }} />
    </Stack>
  );
}

export default Layout;
