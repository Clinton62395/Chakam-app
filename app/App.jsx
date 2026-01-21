import { useMode } from "@/components/theme/themeProvider";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const { themeMode } = useMode();
  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen
          name="+not-found"
          options={{ headerShown: false, title: "Not Found" }}
        />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen
          name="modal"
          options={{ presentation: "modal", title: "Modal" }}
        />
      </Stack>
      <StatusBar barStyle={themeMode === "dark" ? "light" : "dark"} />
    </>
  );
}
