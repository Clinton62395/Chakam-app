import { useRouter } from "expo-router";
import { ArrowLeft } from "lucide-react-native";
import { useState } from "react";
import {
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function NotificationsComponent() {
  const [pushNotifications, setPushNotifications] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(false);

  const router = useRouter();
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <ArrowLeft size={24} color="#000" strokeWidth={2} />
        </TouchableOpacity>
        <Text style={styles.title}>Notifications</Text>
      </View>

      {/* Notification Options */}
      <View style={styles.content}>
        <View style={styles.notificationItem}>
          <Text style={styles.notificationText}>
            Receive notifications outside the app
          </Text>
          <Switch
            value={pushNotifications}
            onValueChange={setPushNotifications}
            trackColor={{ false: "#e5e7eb", true: "#34d399" }}
            thumbColor="#ffffff"
            ios_backgroundColor="#e5e7eb"
          />
        </View>

        <View style={styles.notificationItem}>
          <Text style={styles.notificationText}>
            Receive notifications through email
          </Text>
          <Switch
            value={emailNotifications}
            onValueChange={setEmailNotifications}
            trackColor={{ false: "#e5e7eb", true: "#34d399" }}
            thumbColor="#ffffff"
            ios_backgroundColor="#e5e7eb"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
  },
  backButton: {
    marginRight: 12,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#000000",
    letterSpacing: -0.5,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  notificationItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#f3f4f6",
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
  },
  notificationText: {
    flex: 1,
    fontSize: 16,
    color: "#000000",
    marginRight: 16,
    lineHeight: 22,
  },
});
