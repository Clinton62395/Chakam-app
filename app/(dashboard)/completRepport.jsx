import {
  Card,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "@/components/theme/ModeHandler";
import { BlurView } from "expo-blur";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { Bell, Check, Pen } from "lucide-react-native";

import { useMode } from "@/components/theme/themeProvider";
import { ScaledSheet } from "react-native-size-matters";
export default function CompletedReportScreen() {
  const { themeMode, theme } = useMode();
  const count = 3;
  const router = useRouter();

  const completedActions = [
    {
      text: "Leaking pipe ",
      date: "(Date : 13/03/2026)",
      icon: (
        <Check size={20} color={themeMode === "dark" ? "#FFFFFF" : "#000000"} />
      ),
    },
    {
      text: "Leaking pipe ",
      date: "(Date : 13/03/2026)",
      icon: (
        <Check size={20} color={themeMode === "dark" ? "#FFFFFF" : "#000000"} />
      ),
    },
    {
      text: "Leaking pipe ",
      date: "(Date : 13/03/2026)",
      icon: (
        <Check size={20} color={themeMode === "dark" ? "#FFFFFF" : "#000000"} />
      ),
    },
    {
      text: "Leaking pipe ",
      date: "(Date : 13/03/2026)",
      icon: (
        <Check size={20} color={themeMode === "dark" ? "#FFFFFF" : "#000000"} />
      ),
    },
  ];
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View
          style={[
            styles.staticContent,
            {
              backgroundColor:
                themeMode === "dark" ? theme.backround : theme.text,
            },
          ]}
        >
          {/* blur on header  content*/}
          <BlurView
            intensity={30}
            tint="light"
            style={styles.headerBlur}
          />{" "}
          <View style={styles.header}>
            <Image
              source={require("@/assets/images/dash-logo.png")}
              style={styles.logo}
              contentFit="contain"
            />

            <View style={styles.notificationWrapper}>
              <Bell
                size={22}
                color={themeMode === "dark" ? theme.text : theme.primary}
              />

              {count > 0 && (
                <View
                  style={[
                    styles.badge,
                    {
                      backgroundColor:
                        themeMode === "dark" ? theme.text : theme.primary,
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.badgeText,
                      {
                        color:
                          themeMode === "dark" ? theme.text : theme.backround,
                      },
                    ]}
                  >
                    {count}
                  </Text>
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
          <TouchableOpacity
            onpress={() => router.push("(auth)/submitReport")}
            style={[
              styles.actionButton,
              {
                backgroundColor:
                  themeMode === "dark" ? theme.card : theme.primary,
              },
            ]}
          >
            <Text style={styles.buttonText}>Make a report</Text>
            <Pen
              size={20}
              color={themeMode === "dark" ? theme.text : theme.backround}
            />
          </TouchableOpacity>
        </View>

        {/* contents */}
        <View style={styles.dashboardContent}>
          <Text style={styles.title}>Completed Requests</Text>

          {completedActions.map((action, index) => (
            <Card key={index} style={styles.actionCompleted}>
              <Text style={styles.buttonText}>{action.text}</Text>
              <Text style={styles.date}>{action.date}</Text>
              <View
                style={[
                  styles.completIcone,
                  {
                    backgroundColor:
                      themeMode === "dark" ? theme.card : theme.primary,
                  },
                ]}
              >
                {" "}
                {action.icon}
              </View>
            </Card>
          ))}
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    padding: "20@ms",
    position: "relative",
    zIndex: 2,
  },

  dashboardContent: {
    width: "100%",
    gap: "15@ms",
  },

  title: {
    width: "355@s",
    height: "51@vs",
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
    alignSelf: "center",
    width: "100%",
    height: "99@vs",
    borderRadius: "16@ms",
    paddingHorizontal: "20@ms",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  /* ---------- Header ---------- */

  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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

  actionCompleted: {
    width: "100%",
    borderRadius: "17@ms",
    padding: "10@ms",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: "10@ms",
  },

  date: {
    fontSize: "14@ms",
    fontWeight: "bold",
    lineHeight: "20@vs",
    letterSpacing: 0.5,
    marginBottom: "5@vs",
  },

  completIcone: {
    alignItems: "center",
    justifyContent: "center",
    width: "24@ms",
    height: "24@ms",
    fontWeight: "bold",
  },

  staticContent: {
    position: "relative",
  },

  headerBlur: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "120@vs",
    zIndex: 1,
  },
});
