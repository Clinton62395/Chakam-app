import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "@/components/theme/ModeHandler";
import { useMode } from "@/components/theme/themeProvider";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { ImageBackground } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
export default function Index() {
  const router = useRouter();

  const { themeMode, theme } = useMode();

  const content = (
    <>
      <View>
        <View style={styles.bottomImageTextContainer}>
          <Text style={styles.title}>Welcome to Chakam </Text>
          <Text style={styles.reportText}>Report • Share • Stay Safe</Text>
          <TouchableOpacity
            onPress={() => router.push("register")}
            style={[
              styles.continuBtn,
              {
                backgroundColor:
                  themeMode === "dark" ? theme.card : theme.primary,
              },
            ]}
          >
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );

  return (
    <SafeAreaView style={[styles.container]}>
      {/* Partie haute */}
      <View style={styles.top}>
        <Image
          source={require("@/assets/images/logo.png")}
          style={styles.logo}
        />
      </View>

      {/* Partie basse */}
      {themeMode === "light" ? (
        <>
          <ImageBackground
            source={require("@/assets/images/wecomepage.png")}
            style={styles.bottom}
            resizeMode="cover"
            imageStyle={{ resizeMode: "stretch" }}
          >
            {content}
          </ImageBackground>
        </>
      ) : (
        <>{content}</>
      )}
    </SafeAreaView>
  );
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    padding: "20@ms",
    justifyContent: "center",
    alignItems: "center",
  },

  top: {
    justifyContent: "center",
    alignItems: "center",
  },

  bottom: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },

  logo: {
    width: "80@ms",
    height: "88@ms",
  },

  bottomImageTextContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },

  title: {
    fontSize: "32@ms",
    height: "30@vs",
    alignSelf: "center",
    paddingTop: "10@ms",
    letterSpacing: "-0.5@ms",
    lineHeight: "20@ms",
    fontWeight: "700",
    marginTop: "100@vs",
  },

  reportText: {
    fontSize: "16@ms",
    letterSpacing: "0.5@ms",
    lineHeight: "20@ms",
    fontWeight: "400",
    marginTop: "5@vs",
  },

  continuBtn: {
    marginTop: "60@vs",
    borderRadius: "33@ms",
    padding: "10@ms",
    width: "171@ms",
    height: "50@vs",
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    fontSize: "16@ms",
    fontWeight: "bold",
    lineHeight: "20@ms",
    letterSpacing: "0.5@ms",
  },

  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    padding: "20@ms",
  },
});
