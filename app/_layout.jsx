import ReactThemeProvider, { useMode } from "@/components/theme/themeProvider";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <ReactThemeProvider>
      <AppStack />
    </ReactThemeProvider>
  );
}

// AppStack peut utiliser le contexte
function AppStack() {
  const { themeMode } = useMode();

  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="modal" options={{ presentation: "modal" }} />
      </Stack>

      <StatusBar
        style={themeMode === "dark" ? "light" : "dark"}
        backgroundColor={themeMode === "dark" ? "#000000" : "#ffffff"}
        translucent={false}
      />
    </>
  );
}
