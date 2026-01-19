import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        headerTitle: "",
        headerTransparent: true,
        headerBackTitleVisible: false,
        headerTintColor: "#001A3D",
      }}
    >
      <Stack.Screen name="login" />
      <Stack.Screen name="register" />
      <Stack.Screen name="verification" />
      <Stack.Screen name="verifySuccess" />
      <Stack.Screen name="submitReport" />
      <Stack.Screen name="reviewRepport" />
      <Stack.Screen name="success" />
      <Stack.Screen
        name="forgotPassword"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
