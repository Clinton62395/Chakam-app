import { reports, stats } from "@/components/services/reportsContents";
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "@/components/theme/ModeHandler";
import { useMode } from "@/components/theme/themeProvider";
import { useRouter } from "expo-router";
import { ChevronLeft, ChevronRight } from "lucide-react-native";
import { useState } from "react";
import { Calendar } from "react-native-calendars";
import { ScaledSheet } from "react-native-size-matters";


export default function ReportComponent() {
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0],
  );
  const [showCalendar, setShowCalendar] = useState(false);
  const router = useRouter();
  const { themeMode, theme } = useMode();

  //   calender

  const CalendarComponent = () => (
    <Calendar
      onDayPress={(day) => setSelectedDate(day.dateString)}
      setShowCalendar={setShowCalendar}
      markedDates={{
        [selectedDate]: { selected: true, selectedColor: "#00FB8A" },
      }}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <ChevronLeft
            size={24}
            color={themeMode === "dark" ? theme.text : theme.backround}
            strokeWidth={2}
          />
        </TouchableOpacity>
      </View>

      {/* Stats */}
      <View style={styles.statsContainer}>
        {stats.map((item, index) => (
          <View
            key={index}
            style={[styles.statCard, item.active && styles.statCardActive]}
          >
            <Text
              style={[styles.statValue, item.active && styles.statValueActive]}
            >
              {item.value}
            </Text>
            <Text
              style={[styles.statLabel, item.active && styles.statLabelActive]}
            >
              {item.label}
            </Text>
          </View>
        ))}
      </View>

      {/* Calendar */}
      <View style={styles.calendarHeader}>
        <Text style={styles.sectionTitle}>Report calendar</Text>
        <TouchableOpacity>
          <Text style={styles.viewAllText}>View all</Text>
        </TouchableOpacity>
      </View>

      {/* view all */}
      <View style={styles.viewAll}>
        {/* icone */}
        <ChevronLeft
          size={24}
          color={themeMode === "dark" ? theme.text : theme.backround}
        />
        <TouchableOpacity onPress={() => setShowCalendar(!showCalendar)}>
          <Text style={styles.viewAllText}>
            {new Date(selectedDate).toLocaleDateString({
              month: "long",
              year: "numeric",
              day: "numeric",
            }) || "March"}
          </Text>
        </TouchableOpacity>
        <ChevronRight
          size={24}
          color={themeMode === "dark" ? theme.text : theme.backround}
        />
      </View>

      {/* calendar */}
      {showCalendar && (
        <View style={styles.calendarContainer}>
          <CalendarComponent />
        </View>
      )}

      {/* Reports list */}
      <View style={styles.list}>
        {reports.map((report, index) => {
          const Icon = report.icon;
          return (
            <View key={index} style={styles.listItem}>
              <View style={styles.listLeft}>
                <Icon
                  size={18}
                  color={themeMode === "dark" ? theme.text : theme.backround}
                />
                <View>
                  <Text style={styles.listTitle}>{report.title}</Text>
                  <Text style={styles.listSub}>
                    {report.time} · {report.date}
                  </Text>
                </View>
              </View>

              <Text style={styles.resolved}>{report.status}</Text>
            </View>
          );
        })}
      </View>
    </SafeAreaView>
  );
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: "20@s",
    paddingTop: "50@vs",
  },

  /* Header */
  header: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    gap: "10@ms",
    marginBottom: "20@vs",
    marginTop: "20@vs",
  },

  headerTitle: {
    fontSize: "22@ms",
    fontWeight: "700",
  },

  /* Stats */
  statsContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    gap: "4@ms",
    marginBottom: "25@vs",
  },

  statCard: {
    width: "117@s",
    height: "97@vs",
    borderRadius: "16@ms",
    paddingVertical: "20@vs",
    alignItems: "center",
  },

  statCardActive: {
    backgroundColor: "#00FB8A",
  },

  statValue: {
    fontSize: "20@ms",
    fontWeight: "700",
  },

  statValueActive: {},

  statLabel: {
    fontSize: "12@ms",
    marginTop: "4@vs",
    textAlign: "center",
  },

  statLabelActive: {
    color: "#000",
  },

  /* Calendar */
  calendarHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: "10@vs",
  },

  sectionTitle: {
    fontSize: "16@ms",
    fontWeight: "700",
  },

  viewAll: {
    flexDirection: "row",
    width: "100%",
    paddingVertical: "10@vs",
    paddingHorizontal: "16@s",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: "8@ms",
    marginBottom: "10@vs",
  },

  viewAllText: {
    fontSize: "16@ms",
    fontWeight: "500",
  },

  monthSelector: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: "20@ms",
    paddingHorizontal: "20@s",
    paddingVertical: "10@vs",
    marginBottom: "20@vs",
  },

  monthText: {
    fontSize: "14@ms",
    fontWeight: "600",
  },

  /* List */
  list: {
    gap: "16@ms",
  },

  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  listLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: "12@ms",
  },

  listTitle: {
    fontSize: "14@ms",
    fontWeight: "600",
  },

  listSub: {
    fontSize: "12@ms",
  },

  resolved: {
    fontSize: "12@ms",
    color: "#00A870",
    fontWeight: "600",
  },

  calendarContainer: {
    marginTop: "20@vs",
    marginBottom: "20@vs",
    paddingHorizontal: "20@s",
  },
});
