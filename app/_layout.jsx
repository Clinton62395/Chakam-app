import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        {/* Splash sans tabs */}
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen
          name="+not-found"
          options={{ headerShown: false, title: "Not Found" }}
        />

        {/* App principale avec tabs */}
        <Stack.Screen name="(tabs)" />

        {/* Modal */}
        <Stack.Screen
          name="modal"
          options={{ presentation: "modal", title: "Modal" }}
        />
      </Stack>

      <StatusBar style="auto" />
    </>
  );
}
