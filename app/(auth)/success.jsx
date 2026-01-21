import { Text, TouchableOpacity, View } from "@/components/theme/ModeHandler";
import { useMode } from "@/components/theme/themeProvider";
import { useResponsive } from "@/components/ui/media";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { ScaledSheet } from "react-native-size-matters";

export default function SuccessScreen() {
  const { isSmall } = useResponsive();
  const router = useRouter();
  const { themeMode, theme } = useMode();
  return (
    <View style={styles.container}>
      {/* confirme logo */}
      <Image
        source={require("@/assets/images/confirmLogo.png")}
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
        style={[
          styles.submitButton,
          {
            backgroundColor:
              themeMode === "dark" ? theme.background : theme.primary,
          },
        ]}
        onPress={() => router.replace("/(tabs)/home")}
      >
        <Text style={styles.submitButtonText}>Submit report</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: "20@ms",
  },
  title: {
    fontSize: "32@ms",
    pading: "10@ms",
    alignSelf: "center",
    height: "51@ms",
    padding: "10@ms",
    fontWeight: "bold",
    lineHeight: "20@ms",
    letterSpacing: 0.6,
  },
  subtitle: {
    fontSize: "14@ms",
    fontWeight: "400",
    width: "343@ms",
    lineHeight: "20@ms",
    letterSpacing: 0.5,
    marginTop: "5@ms",
    marginBottom: "5@ms",
    alignSelf: "center",
  },

  content: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: "50@ms",
  },
  submitButton: {
    borderRadius: "33@ms",
    width: "206@ms",
    height: "50@ms",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "50@ms",
    overflow: "hidden",
  },
  submitButtonText: {
    fontSize: "16@ms",
    fontWeight: "bold",
    lineHeight: "20@ms",
    letterSpacing: 0.5,
  },
  image: {
    width: "100@ms",
    height: "100@ms",
    marginTop: "50@ms",
  },
});
