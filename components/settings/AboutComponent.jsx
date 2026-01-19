import { useRouter } from "expo-router";
import { ArrowLeft } from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScaledSheet } from "react-native-size-matters";

export default function AboutComponent() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <View>
        {/* icone to go back */}
        <TouchableOpacity onPress={() => router.back()} style={styles.back}>
          <ArrowLeft size={24} color="#000" />
        </TouchableOpacity>
      </View>
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
  );
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: "10@ms",
  },

  tile: {
    fontSize: "32@ms",
    fontWeight: "700",
    color: "#000000",
    letterSpacing: -0.5,
    alignSelf: "flex-start",
    marginTop: "10@ms",
  },

  back: {
    paddingHorizontal: "10@ms",
    alignSelf: "flex-start",
  },
  subtitle: {
    fontSize: "20@ms",
    fontWeight: "600",
    color: "#000000",
    letterSpacing: -0.5,
    alignSelf: "flex-start",
    marginVertical: "20@ms",
  },

  text: {
    fontSize: "14@ms",
    fontWeight: "400",
    color: "#000000",
    letterSpacing: -0.5,
    alignSelf: "flex-start",
  },
});
