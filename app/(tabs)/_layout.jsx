import { Tabs } from "expo-router";
import { FileText, Home, Settings } from "lucide-react-native";
import React from "react";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#00FB8A",
        tabBarInactiveTintColor: "#999",
        tabBarStyle: {
          height: 64,
          backgroundColor: "#001A3D",
          borderRadius: 17,
          width: "100%",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        title="Dashboard"
        options={{
          tabBarIcon: ({ color, size }) => <Home color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="reports"
        title="Reports"
        options={{
          tabBarIcon: ({ size, color }) => (
            <FileText color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        title="Settings"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Settings color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
