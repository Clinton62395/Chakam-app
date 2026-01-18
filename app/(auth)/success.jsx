import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useResponsive } from "../../components/ui/media";

export default function SuccessScreen() {
  const { isSmall } = useResponsive();
  const router = useRouter();
  return (
    <View style={styles.container}>
      {/* confirme logo */}
      <Image
        source={require("../../assets/images/confirmLogo.png")}
        style={styles.image}
      />
      {/* titile */}
      <Text style={styles.title}>Success</Text>
      {/* title and subtitle */}
      <View style={[styles.content, { width: isSmall ? 320 : 346 }]}>
        <Text style={styles.subtitle}>
          Your report has been submitted. You will be provided
        </Text>
        <Text style={styles.subtitle}>with help soon.</Text>
      </View>

      {/* submit button */}
      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => router.replace("/(tabs)/home")}
      >
        <Text style={styles.submitButtonText}>Submit report</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 32,
    pading: 10,
    alignSelf: "center",
    height: 51,
    padding: 10,
    fontWeight: "bold",
    lineHeight: 20,
    letterSpacing: 0.6,
    color: "#000000",
  },
  subtitle: {
    fontSize: 14,
    alignSelf: "center",
    fontWeight: "600",
    lineHeight: 20,
    letterSpacing: 0.5,
    color: "#000000",
  },

  content: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  submitButton: {
    backgroundColor: "#00FB8A",
    borderRadius: 33,
    width: 171,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 200,
    overflow: "hidden",
  },
  submitButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 20,
    letterSpacing: 0.5,
    color: "#000000",
  },
  image: {
    width: 128.75,
    height: 132,
    marginTop: 50,
  },
});
