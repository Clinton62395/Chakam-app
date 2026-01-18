import { useRouter } from "expo-router";
import {
  Bell,
  ChevronLeft,
  ChevronRight,
  HelpCircle,
  Info,
  Pencil,
  User,
} from "lucide-react-native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function SettingsComponent() {
  const router = useRouter();

  const SettingItem = ({ icon: Icon, label, onPress }) => (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <View style={styles.itemLeft}>
        <Icon size={18} color="#0A2540" />
        <Text style={styles.itemText}>{label}</Text>
      </View>
      <ChevronRight size={18} color="#9CA3AF" />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <ChevronLeft size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Settings</Text>
      </View>

      {/* Settings section */}
      <Text style={styles.sectionTitle}>Settings</Text>
      <View style={styles.card}>
        <SettingItem
          icon={User}
          label="Account & Profile"
          onPress={() => router.push("profile")}
        />
        <SettingItem
          icon={Pencil}
          label="App preferences"
          onPress={() => router.push("preferences")}
        />
        <SettingItem
          icon={Bell}
          label="Notifications"
          onPress={() => router.push("notification")}
        />
      </View>

      {/* Support section */}
      <Text style={styles.sectionTitle}>Support</Text>
      <View style={styles.card}>
        <SettingItem
          icon={HelpCircle}
          label="For FAQ"
          onPress={() => router.push("FQA")}
        />
        <SettingItem
          icon={Info}
          label="About"
          onPress={() => router.push("about")}
        />
      </View>

      {/* Footer actions */}
      <View style={styles.footer}>
        <TouchableOpacity>
          <Text style={styles.logout}>Log out</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.delete}>Delete account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
    paddingTop: 50,
  },

  /* Header */
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#000",
  },

  /* Sections */
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 10,
    marginTop: 20,
    color: "#000",
  },

  /* Card */
  card: {
    backgroundColor: "#F3F4F6",
    borderRadius: 16,
    paddingVertical: 5,
  },

  /* Item */
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  itemText: {
    fontSize: 15,
    fontWeight: "500",
    color: "#0A2540",
  },

  /* Footer */
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 40,
  },
  logout: {
    fontSize: 14,
    color: "#FF0000",
    fontWeight: "500",
  },
  delete: {
    fontSize: 14,
    color: "#FF0000",
    fontWeight: "500",
  },
});
