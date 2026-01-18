import { BlurView } from "expo-blur";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { Bell, Check, Pen } from "lucide-react-native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function CompletedReportScreen() {
  const count = 3;
  const router = useRouter();

  const completedActions = [
    {
      text: "Leaking pipe ",
      date: "(Date : 13/03/2026)",
      icon: <Check size={20} color="#000000" />,
    },
    {
      text: "Leaking pipe ",
      date: "(Date : 13/03/2026)",
      icon: <Check size={20} color="#000000" />,
    },
    {
      text: "Leaking pipe ",
      date: "(Date : 13/03/2026)",
      icon: <Check size={20} color="#000000" />,
    },
    {
      text: "Leaking pipe ",
      date: "(Date : 13/03/2026)",
      icon: <Check size={20} color="#000000" />,
    },
  ];
  return (
    <>
      <View style={styles.container}>
        <View style={styles.staticContent}>
          {/* blur on header  content*/}
          <BlurView
            intensity={30}
            tint="light"
            style={styles.headerBlur}
          />{" "}
          <View style={styles.header}>
            <Image
              source={require("../../assets/images/dash-logo.png")}
              style={styles.logo}
              contentFit="contain"
            />

            <View style={styles.notificationWrapper}>
              <Bell size={22} color="#000000" />

              {count > 0 && (
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{count}</Text>
                </View>
              )}
            </View>
            {/* dashboard content */}
          </View>
          <View style={styles.dashboardContent}>
            <Text style={styles.title}>My Dashboard</Text>
            <Text style={styles.subtitle}>
              File reports. View ongoing and completed requests
            </Text>
          </View>
          {/* make a report button */}
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.buttonText}>Make a report</Text>
            <Pen size={20} color="#000000" />
          </TouchableOpacity>
        </View>

        {/* contents */}
        <View style={styles.dashboardContent}>
          <Text style={styles.title}>Completed Requests</Text>

          {completedActions.map((action, index) => (
            <View key={index} style={styles.actionCompleted}>
              <Text style={styles.buttonText}>{action.text}</Text>
              <Text style={styles.date}>{action.date}</Text>
              <Text style={styles.completIcone}> {action.icon}</Text>
            </View>
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
    alignSelf: "center",
    width: "100%",
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
    zIndex: 2,
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

  actionCompleted: {
    width: "100%",
    height: 65,
    backgroundColor: "#DADADA",
    borderRadius: 17,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 20,
  },

  date: {
    fontSize: 14,
    fontWeight: "bold",
    lineHeight: 20,
    letterSpacing: 0.5,
    color: "#000000",
    marginTop: 5,
    marginBottom: 5,
  },

  completIcone: {
    alignItems: "center",
    justifyContent: "center",
    width: 24,
    height: 24,
    // fontSize: 16,
    fontWeight: "bold",
    color: "#000000",
    backgroundColor: "#ffffff",
  },
  staticContent: {
    position: "relative",
  },
  headerBlur: {
    position: "absolute",
    top: 0,
      backgroundColor: "rgba(255,255,255,0.4)",
    left: 0,
    width: "100%",
    height: 120,
    zIndex: 1,
  },
});
