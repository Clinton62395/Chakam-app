import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { ArrowLeft } from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScaledSheet } from "react-native-size-matters";

export default function AppPreferencesComponent() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.back}>
          <ArrowLeft size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>App Preferences</Text>
      </View>

      {/* Images - prend l'espace restant */}
      <View style={styles.imageContaner}>
        <Image
          source={require("../../assets/images/mode-light.png")}
          style={styles.phone}
          contentFit="contain"
        />
        <Image
          source={require("../../assets/images/mode-dark.png")}
          style={styles.phone}
          contentFit="contain"
        />
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonLight}>
          <Text style={styles.buttonLightText}>Light Mode</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonDark}>
          <Text style={styles.buttonDarkText}>Dark Mode</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: "20@ms",
  },
  header: {
    marginBottom: "30@ms",
  },
  title: {
    fontSize: "32@ms",
    fontWeight: "700",
    color: "#000000",
    letterSpacing: -0.5,
    marginTop: "10@ms",
  },
  back: {
    paddingHorizontal: "10@ms",
    alignSelf: "flex-start",
    marginLeft: "-10@ms",
  },
  imageContaner: {
    flex: 1,
    flexDirection: "row",
    gap: "15@ms",
    marginBottom: "30@ms",
  },
  phone: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: "10@ms",
    paddingBottom: "10@ms",
  },
  buttonLightText: {
    fontSize: "14@ms",
    fontWeight: "bold",
    color: "#000000",
  },
  buttonDarkText: {
    fontSize: "14@ms",
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  buttonLight: {
    backgroundColor: "#00FB8A",
    borderRadius: "33@ms",
    paddingVertical: "10@ms",
    paddingHorizontal: "20@ms",
    minWidth: "121@ms",
    height: "40@ms",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonDark: {
    backgroundColor: "#001A3D",
    borderRadius: "33@ms",
    paddingVertical: "10@ms",
    paddingHorizontal: "20@ms",
    minWidth: "121@ms",
    height: "40@ms",
    alignItems: "center",
    justifyContent: "center",
  },
});