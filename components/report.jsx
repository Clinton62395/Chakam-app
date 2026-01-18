import { useRouter } from "expo-router";
import {
  AlertCircle,
  ChevronLeft,
  ChevronRight,
  Droplet,
  FileText,
  Flame,
} from "lucide-react-native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ReportComponent() {
  const router = useRouter();

  const stats = [
    { label: "Total reports", value: 20, active: true },
    { label: "On-going reports", value: 5 },
    { label: "Resolved reports", value: 15 },
  ];

  const reports = [
    {
      title: "Road Escalation",
      time: "12:35 pm",
      date: "12/03/25",
      status: "Resolved",
      icon: FileText,
    },
    {
      title: "Damaged Wire",
      time: "10:24 am",
      date: "10/03/25",
      status: "Resolved",
      icon: AlertCircle,
    },
    {
      title: "Leaking Pipe",
      time: "14:24 pm",
      date: "04/03/25",
      status: "Resolved",
      icon: Droplet,
    },
    {
      title: "Flood",
      time: "09:24 am",
      date: "19/02/25",
      status: "Resolved",
      icon: Flame,
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <ChevronLeft size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Reports</Text>
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
          <Text style={styles.viewAll}>View all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.monthSelector}>
        <ChevronLeft size={18} color="#000" />
        <Text style={styles.monthText}>March</Text>
        <ChevronRight size={18} color="#000" />
      </View>

      {/* Reports list */}
      <View style={styles.list}>
        {reports.map((report, index) => {
          const Icon = report.icon;
          return (
            <View key={index} style={styles.listItem}>
              <View style={styles.listLeft}>
                <Icon size={18} color="#000" />
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

  /* Stats */
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 25,
  },
  statCard: {
    width: "30%",
    backgroundColor: "#F3F4F6",
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: "center",
  },
  statCardActive: {
    backgroundColor: "#00E58C",
  },
  statValue: {
    fontSize: 20,
    fontWeight: "700",
    color: "#000",
  },
  statValueActive: {
    color: "#000",
  },
  statLabel: {
    fontSize: 12,
    marginTop: 4,
    color: "#6B7280",
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
    color: "#000",
  },
  viewAll: {
    fontSize: 12,
    color: "#00A870",
    fontWeight: "500",
  },
  monthSelector: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#F3F4F6",
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
    color: "#000",
  },
  listSub: {
    fontSize: 12,
    color: "#6B7280",
  },
  resolved: {
    fontSize: 12,
    color: "#00A870",
    fontWeight: "600",
  },
});
