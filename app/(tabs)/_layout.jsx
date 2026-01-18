import { Tabs } from "expo-router";
import { FileText, Home, Settings } from "lucide-react-native";
import React from "react";
import { Text, View } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#00FB8A",
        tabBarInactiveTintColor: "#00FB8A",
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
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View style={{ alignItems: "center" }}>
              <Home color={color} size={size} />
              {focused && (
                <View
                  style={{
                    marginTop: 4,
                    width: 24,
                    height: 2,
                    backgroundColor: color,
                    borderRadius: 1,
                  }}
                />
              )}
            </View>
          ),
          tabBarLabel: ({ focused, color }) => (
            <Text
              style={{
                color,
                fontSize: 12,
                fontWeight: focused ? "700" : "400",
                textAlign: "center",
              }}
            >
              Home
            </Text>
          ),
        }}
      />

      {/* Reports */}
      <Tabs.Screen
        name="reports"
        options={{
          headerShown: true,
          headerTransparent: true,
          headerTitle: "Reports",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: "bold",
            color: "#000000",
          },
          tabBarIcon: ({ focused, color, size }) => (
            <View style={{ alignItems: "center" }}>
              <FileText color={color} size={size} />
              {focused && (
                <View
                  style={{
                    marginTop: 4,
                    width: 24,
                    height: 2,
                    backgroundColor: color,
                    borderRadius: 1,
                  }}
                />
              )}
            </View>
          ),
          tabBarLabel: ({ focused, color }) => (
            <Text
              style={{
                color,
                fontSize: 12,
                fontWeight: focused ? "700" : "400",
                textAlign: "center",
              }}
            >
              My Reports
            </Text>
          ),
        }}
      />

      {/* Settings */}
      <Tabs.Screen
        name="settings"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View style={{ alignItems: "center" }}>
              <Settings color={color} size={size} />
              {focused && (
                <View
                  style={{
                    marginTop: 4,
                    width: 24,
                    height: 2,
                    backgroundColor: color,
                    borderRadius: 1,
                  }}
                />
              )}
            </View>
          ),
          tabBarLabel: ({ focused, color }) => (
            <Text
              style={{
                color,
                fontSize: 12,
                fontWeight: focused ? "700" : "400",
                textAlign: "center",
              }}
            >
              Settings
            </Text>
          ),
        }}
      />
    </Tabs>
  );
}
