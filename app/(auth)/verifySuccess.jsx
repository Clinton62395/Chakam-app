import { Image } from "expo-image";
import { useRouter } from "expo-router";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useResponsive } from "../../components/ui/media";

export default function VerifySuccess() {
  const router = useRouter();

  //   media query

  const { isSmall } = useResponsive();

  console.log(isSmall);
  return (
    <>
      <View style={styles.container}>
        {/* logo */}
        <Image
          source={require("../../assets/images/logo.png")}
          style={styles.logo}
          contentFit="contain"
        />
        {/* success  logo */}
        <Image
          source={require("../../assets/images/success.png")}
          style={styles.success}
          contentFit="contain"
        />

        {/* backround image */}
        <View style={styles.backroundImageContainer}>
          <ImageBackground
            source={require("../../assets/images/wecomepage.png")}
            style={styles.backroundImage}
            resizeMode="cover"
            imageStyle={{ resizeMode: "stretch" }}
          >
            {/* text */}
            <View style={styles.textContainer}>
              <Text
                style={[styles.accountText, { fontSize: isSmall ? 24 : 26 }]}
              >
                {" "}
                Account verified succesfully
              </Text>
              <Text style={styles.reportText}>Make your first report!</Text>

              {/* button */}
              <TouchableOpacity
                style={styles.button}
                onPress={() => router.push("submitReport")}
              >
                <Text style={styles.buttonText}>Make a report</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00FB8A",
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
    color: "#ffffff",
    marginTop: 20,
    padding: 10,
  },

  reportText: {
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 20,
    letterSpacing: 0.5,
    color: "#ffffff",
    marginTop: 5,
    marginBottom: 5,
  },
  button: {
    backgroundColor: "#00FB8A",
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
    color: "#000000",
  },
});
