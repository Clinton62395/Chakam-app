import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "@/components/theme/ModeHandler";
import { useMode } from "@/components/theme/themeProvider";
import { useResponsive } from "@/components/ui/media";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { ImageBackground, StyleSheet } from "react-native";

export default function VerifySuccess() {
  const router = useRouter();

  //   media query

  const { isSmall } = useResponsive();
  const { themeMode, theme } = useMode();
  const content = (
    <>
      {/* text */}
      <View style={styles.textContainer}>
        <Text style={[styles.accountText, { fontSize: isSmall ? 24 : 26 }]}>
          {" "}
          Account verified succesfully
        </Text>
        <Text style={styles.reportText}>Make your first report!</Text>

        {/* button */}
        <TouchableOpacity
          style={[
            styles.button,
            {
              backgroundColor:
                themeMode === "dark" ? theme.card : theme.primary,
            },
          ]}
          onPress={() => router.push("submitReport")}
        >
          <Text style={styles.buttonText}>Make a report</Text>
        </TouchableOpacity>
      </View>
    </>
  );

  return (
    <>
      <SafeAreaView style={[styles.container]}>
        {/* logo */}
        <Image
          source={require("@/assets/images/logo.png")}
          style={styles.logo}
          contentFit="contain"
        />
        {/* success  logo */}
        <Image
          source={require("@/assets/images/success.png")}
          style={styles.success}
          contentFit="contain"
        />

        {/* backround image */}
        <View style={styles.backroundImageContainer}>
          {themeMode === "light" ? (
            <ImageBackground
              source={require("@/assets/images/wecomepage.png")}
              style={styles.backroundImage}
              resizeMode="cover"
              imageStyle={{ resizeMode: "stretch" }}
            >
              {content}
            </ImageBackground>
          ) : (
            <>{content}</>
          )}
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    width: 80,
    height: 88,
    marginRight: 40,
    position: "absolute",
    left: 20,
    top: 60,
  },
  success: {
    width: 154.59,
    height: 147,
    alignSelf: "center",
    marginTop: 100,
  },
  backroundImageContainer: {
    flex: 1,
  },
  backroundImage: {
    flex: 1,
  },
  textContainer: {
    marginTop: 170,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: 20,
  },

  accountText: {
    fontWeight: "bold",
    width: 352,
    lineHeight: 20,
    letterSpacing: 0.6,
    marginTop: 20,
    padding: 10,
  },

  reportText: {
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 20,
    letterSpacing: 0.5,
    marginTop: 5,
    marginBottom: 5,
  },
  button: {
    borderRadius: 33,
    width: 206,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 20,
    letterSpacing: 0.5,
  },
});
