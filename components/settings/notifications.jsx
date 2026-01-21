import { useRouter } from "expo-router";
import { ArrowLeft } from "lucide-react-native";
import { useState } from "react";
import { Switch } from "react-native";
import { scale, ScaledSheet } from "react-native-size-matters";
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "../theme/ModeHandler";
import { useMode } from "../theme/themeProvider";

export default function NotificationsComponent() {
  const [pushNotifications, setPushNotifications] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(false);
  const router = useRouter();
  const { theme, themeMode } = useMode();

  // Couleurs dynamiques pour les éléments qui ne sont pas dans Themed
  const iconColor = themeMode === "dark" ? "#FFFFFF" : "#000000";

  return (
    <SafeAreaView style={styles.container}>
      <View>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <ArrowLeft size={24} color={iconColor} strokeWidth={2} />
          </TouchableOpacity>
          <Text style={styles.title}>Notifications</Text>
        </View>

        {/* Notification Options */}
        <View style={styles.content}>
          <View
            style={[styles.notificationItem, { backgroundColor: theme.card }]}
          >
            <Text style={styles.notificationText}>
              Receive notifications outside the app
            </Text>
            <Switch
              value={pushNotifications}
              onValueChange={setPushNotifications}
              trackColor={{ false: theme.border, true: "#34d399" }}
              thumbColor="#ffffff"
              ios_backgroundColor={theme.border}
            />
          </View>

          <View
            style={[styles.notificationItem, { backgroundColor: theme.card }]}
          >
            <Text style={styles.notificationText}>
              Receive notifications through email
            </Text>
            <Switch
              value={emailNotifications}
              onValueChange={setEmailNotifications}
              trackColor={{ false: theme.border, true: "#34d399" }}
              thumbColor="#ffffff"
              ios_backgroundColor={theme.border}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    padding: "20@ms",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: "20@ms",
  },
  backButton: {
    marginBottom: "40@ms",
  },
  title: {
    fontSize: "32@ms",
    fontWeight: "700",
    letterSpacing: -0.5,
    marginTop: "50@ms",
    // ✅ Couleur supprimée - gérée par Themed
  },
  content: {
    paddingTop: "20@ms",
  },
  notificationItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: scale(16),
    padding: "16@ms",
    marginBottom: "16@ms",
  },
  notificationText: {
    flex: 1,
    fontSize: "14@ms",
    marginRight: "16@ms",
    lineHeight: 20,
  },
});
