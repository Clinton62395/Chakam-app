import { reports, stats } from "@/components/services/reportsContents";
import { useMode } from "@/components/theme/themeProvider";
import { useRouter } from "expo-router";
import { ChevronLeft, ChevronRight } from "lucide-react-native";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { Calendar } from "react-native-calendars";
import { Text, TouchableOpacity, View } from "./theme/ModeHandler";

export default function ReportComponent() {
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0],
  );
  const [showCalendar, setShowCalendar] = useState(false);
  const router = useRouter();
  const { themeMode } = useMode();

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
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <ChevronLeft
            size={24}
            color={themeMode === "dark" ? "#FFFFFF" : "#000000"}
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
          color={themeMode === "dark" ? "#FFFFFF" : "#000000"}
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
          color={themeMode === "dark" ? "#FFFFFF" : "#000000"}
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
                  color={themeMode === "dark" ? "#FFFFFF" : "#000000"}
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
  },

  /* Header */
  header: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    gap: 10,
    marginBottom: 20,
    marginTop: 20,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "700",
  },

  /* Stats */
  statsContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    gap: 4,
    marginBottom: 25,
  },
  statCard: {
    width: 117,
    height: 97,
    borderRadius: 16,
    paddingVertical: 20,
    alignItems: "center",
  },
  statCardActive: {
    backgroundColor: "#00FB8A",
  },
  statValue: {
    fontSize: 20,
    fontWeight: "700",
  },
  statValueActive: {},
  statLabel: {
    fontSize: 12,
    marginTop: 4,
    textAlign: "center",
  },
  statLabelActive: {
    color: "#000",
  },

  /* Calendar */
  calendarHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
  },
  viewAll: {
    flexDirection: "row",
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 16,
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 8,
    marginBottom: 10,
  },
  viewAllText: {
    fontSize: 16,
    fontWeight: "500",
  },
  monthSelector: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 20,
  },
  monthText: {
    fontSize: 14,
    fontWeight: "600",
  },

  /* List */
  list: {
    gap: 16,
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  listLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  listTitle: {
    fontSize: 14,
    fontWeight: "600",
  },
  listSub: {
    fontSize: 12,
  },
  resolved: {
    fontSize: 12,
    color: "#00A870",
    fontWeight: "600",
  },

  calendarContainer: {
    marginTop: 20,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
});
