import { Stack, Tabs } from "expo-router";

function Layout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "Shopping List" }} />
      <Tabs.Screen name="counter" options={{ title: "Counter" }} />
      <Tabs.Screen name="idea" options={{ title: "Idea" }} />
    </Tabs>
  );
}

export default Layout;
