import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { Bell, ChevronRight } from "lucide-react-native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
export default function HomeScreen() {
  // buttons to array object
  const router = useRouter();

  const buttons = [
    {
      text: "Make a report",
      onPress: () => router.push("/(auth)/submitReport"),
      icon: <ChevronRight size={40} color="#000000" />,
    },
    {
      text: "View on-going reports",
      onPress: () => console.log("View on-going reports"),
      icon: <ChevronRight size={40} color="#000000" />,
    },
    {
      text: "View completed reports",
      onPress: () => router.push("/(dashboard)/completRepport"),
      icon: <ChevronRight size={40} color="#000000" />,
    },
  ];
  const count = 3;

  return (
    <>
      <View style={styles.container}>
        {/* logo and notification */}

        <View style={styles.header}>
          <Image
            source={require("../../assets/images/dash-logo.png")}
            style={styles.logo}
          />

          <View style={styles.notificationWrapper}>
            <Bell size={22} color="#000000" />

            {count > 0 && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{count}</Text>
              </View>
            )}
          </View>
        </View>

        {/* dashboard content */}
        <View style={styles.dashboardContent}>
          <Text style={styles.title}>My Dashboard</Text>
          <Text style={styles.subtitle}>
            File reports. View ongoing and completed requests
          </Text>
        </View>

        {/* dashboard content */}
        <View style={styles.dashboardButonsContainer}>
          {buttons.map((button, index) => (
            <TouchableOpacity
              key={index}
              style={styles.actionButton}
              onPress={button.onPress}
            >
              <Text style={styles.buttonText}>{button.text}</Text>

              {button.icon}
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    padding: 20,
  },
  dashboardContent: {
    width: "100%",
    gap: 15,
  },
  dashboardButonsContainer: {
    width: "100%",
    justifyContent: "space-between",
    marginTop: 50,
    gap: 20,
  },
  title: {
    width: 355,
    fontSize: 32,
    fontWeight: "bold",
    lineHeight: 20,
    letterSpacing: 0.6,
    color: "#000000",
    marginTop: 20,
    padding: 10,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "bold",
    lineHeight: 20,
    letterSpacing: 0.5,
    color: "#000000",
    marginTop: 5,
    marginBottom: 5,
  },

  logo: {
    width: 58,
    height: 67,
  },

  actionButton: {
    height: 99,
    backgroundColor: "#00FF8C",
    borderRadius: 16,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  // header

  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 40,
  },

  notificationWrapper: {
    position: "relative",
  },

  badge: {
    position: "absolute",
    top: -6,
    right: -6,
    backgroundColor: "#00FB8A",
    width: 18,
    height: 18,
    borderRadius: 9,
    alignItems: "center",
    justifyContent: "center",
  },

  badgeText: {
    color: "#000",
    fontSize: 10,
    fontWeight: "bold",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 20,
    letterSpacing: 0.5,
    color: "#000000",
    marginLeft: 10,
  },
});
