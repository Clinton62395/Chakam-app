import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      {/* Partie haute */}
      <View style={styles.top}>
        <Image
          source={require("../assets/images/logo.png")}
          style={styles.logo}
        />
      </View>

      {/* Partie basse */}
      <ImageBackground
        source={require("../assets/images/wecomepage.png")}
        style={styles.bottom}
        resizeMode="cover"
        imageStyle={{ resizeMode: "stretch" }}
        
      >
        <View>
          {/* <Image
            source={require("../assets/images/wecomepage.png")}
            style={styles.bottomImage}
          /> */}
          <View style={styles.bottomImageTextContainer}>
            <Text style={styles.welcomTexte}>Welcome to Chakam </Text>
            <Text style={styles.reportText}>Report • Share • Stay Safe</Text>
            <TouchableOpacity
              onPress={() => router.push("register")}
              style={styles.continuBtn}
            >
              <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00FB8A",
  },

  top: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  bottom: {
    flex: 2,
    
    position: "relative",
    width: "100%",
  },

  logo: {
    width: 80,
    height: 88,
  },

  bottomImage: {
    position: "absolute",
    left: 0,
    width: "100%",
    height: "100%",
  },

  bottomImageTextContainer: {
    marginTop: 200,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: 20,
  },

  welcomTexte: {
    fontSize: 30,
    letterSpacing: 0.5,
    lineHeight: 20,
    fontWeight: "800",
    color: "#FFFFFF",
  },

  reportText: {
    fontSize: 16,
    color: "#ffffff",
    letterSpacing: 0.5,
    lineHeight: 20,
    fontWeight: "400",
  },

  continuBtn: {
    marginTop: 60,
    backgroundColor: "#00FB8A",
    borderRadius: 33,
    padding: 10,
    width: 171,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },

//   button: {
//     alignItems: "center",
//     justifyContent: "center",
//   },

  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 20,
    letterSpacing: 0.5,
    color: "#000000",
  },

  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    padding: 20,
  },
});
