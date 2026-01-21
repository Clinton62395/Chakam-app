import { useMode } from "@/components/theme/themeProvider";
import { useRouter } from "expo-router";
import { ArrowLeft } from "lucide-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScaledSheet } from "react-native-size-matters";
import { Text, TouchableOpacity, View } from "../theme/ModeHandler";

export default function AboutComponent() {
  const { themeMode } = useMode();
  const router = useRouter();
  return (
    <View style={styles.container}>
      <SafeAreaView>
        {/* icone to go back */}
        <TouchableOpacity onPress={() => router.back()} style={styles.back}>
          <ArrowLeft
            size={24}
            color={themeMode === "dark" ? "#FFFFFF" : "#000000"}
          />
        </TouchableOpacity>

        <View>
          <Text style={styles.tile}>About App</Text>
          <Text style={styles.subtitle}>Built to make reporting easier.</Text>
          <Text style={styles.text}>
            CHAKAM is a simple platform that helps people report issues, track
            progress, and get things fixed faster.
          </Text>
          <Text style={styles.text}>
            From small neighborhood problems to larger public concerns, CHAKAM
            connects reports to the right hands—clearly and efficiently.
          </Text>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },

  tile: {
    fontSize: "32@ms",
    fontWeight: "700",
    letterSpacing: -0.5,
    alignSelf: "flex-start",
    marginTop: "20@ms",
  },

  back: {
    paddingHorizontal: "10@ms",
    alignSelf: "flex-start",
    marginTop: "40@ms",
  },
  subtitle: {
    fontSize: "20@ms",
    fontWeight: "600",
    letterSpacing: -0.5,
    alignSelf: "flex-start",
    marginVertical: "20@ms",
  },

  text: {
    fontSize: "14@ms",
    fontWeight: "400",
    letterSpacing: -0.5,
    alignSelf: "flex-start",
  },
});
