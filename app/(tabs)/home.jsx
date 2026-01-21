import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "@/components/theme/ModeHandler";
import { useMode } from "@/components/theme/themeProvider";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { Bell, ChevronRight } from "lucide-react-native";
import { ScaledSheet } from "react-native-size-matters";
export default function HomeScreen() {
  // buttons to array object
  const router = useRouter();

  const { themeMode, theme } = useMode();
  const buttons = [
    {
      text: "Make a report",
      onPress: () => router.push("/(auth)/submitReport"),
      icon: (
        <ChevronRight
          size={40}
          color={themeMode === "dark" ? theme.text : theme.primary}
        />
      ),
    },
    {
      text: "View on-going reports",
      onPress: () => console.log("View on-going reports"),
      icon: (
        <ChevronRight
          size={40}
          color={themeMode === "dark" ? theme.text : theme.primary}
        />
      ),
    },
    {
      text: "View completed reports",
      onPress: () => router.push("/(dashboard)/completRepport"),
      icon: (
        <ChevronRight
          size={40}
          color={themeMode === "dark" ? theme.text : theme.primary}
        />
      ),
    },
  ];
  const count = 3;

  return (
    <>
      <SafeAreaView style={styles.container}>
        {/* logo and notification */}

        <View style={styles.header}>
          <Image
            source={require("@/assets/images/dash-logo.png")}
            style={styles.logo}
          />

          <View style={styles.notificationWrapper}>
            <Bell
              size={22}
              color={themeMode === "dark" ? theme.text : theme.primary}
            />

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
              style={[
                styles.actionButton,
                {
                  backgroundColor:
                    themeMode === "dark" ? theme.card : theme.primary,
                },
              ]}
              onPress={button.onPress}
            >
              <Text style={styles.buttonText}>{button.text}</Text>

              {button.icon}
            </TouchableOpacity>
          ))}
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: "20@ms",
  },

  dashboardContent: {
    width: "100%",
    gap: "15@ms",
  },

  dashboardButonsContainer: {
    width: "100%",
    justifyContent: "space-between",
    marginTop: "50@vs",
    gap: "20@ms",
  },

  title: {
    width: "355@s",
    fontSize: "32@ms",
    fontWeight: "bold",
    lineHeight: "20@vs",
    letterSpacing: 0.6,
    marginTop: "20@vs",
    padding: "10@ms",
  },

  subtitle: {
    fontSize: "14@ms",
    fontWeight: "bold",
    lineHeight: "20@vs",
    letterSpacing: 0.5,
    marginTop: "5@vs",
    marginBottom: "5@vs",
  },

  logo: {
    width: "58@s",
    height: "67@vs",
  },

  actionButton: {
    height: "99@vs",
    borderRadius: "16@ms",
    paddingHorizontal: "20@s",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  /* Header */
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "40@vs",
  },

  notificationWrapper: {
    position: "relative",
  },

  badge: {
    position: "absolute",
    top: "-6@vs",
    right: "-6@s",
    width: "18@ms",
    height: "18@ms",
    borderRadius: "9@ms",
    alignItems: "center",
    justifyContent: "center",
  },

  badgeText: {
    fontSize: "10@ms",
    fontWeight: "bold",
  },

  buttonText: {
    fontSize: "16@ms",
    fontWeight: "bold",
    lineHeight: "20@vs",
    letterSpacing: 0.5,
    marginLeft: "10@s",
  },
});
