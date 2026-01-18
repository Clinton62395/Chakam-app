import { Image } from "expo-image";
import { useRouter } from "expo-router";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function RegisterScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View>
        {/* logo */}
        <Image
          source={require("../../assets/images/logo.png")}
          style={styles.logo}
        />
      </View>
      {/* image backround */}
      <ImageBackground
        source={require("../../assets/images/wecomepage.png")}
        style={styles.backroundImage}
        resizeMode="cover"
        imageStyle={{ resizeMode: "stretch" }}
      >
        {/* text Input */}
        <View style={styles.signUpContainer}>
          <Text style={styles.signUpText}>Sign-Up</Text>

          <View style={styles.googleIconeContainer}>
            {/* google icone */}
            <Image
              source={require("../../assets/images/google-logo.png")}
              style={styles.googleIcon}
              resizeMode="contain"
            />
            <Text style={styles.googleSignupText}>Sign Up width google</Text>
          </View>
        </View>

        <View style={styles.textInputContainer}>
          <Text style={styles.labelText}>Enter your email address</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter your email address"
            placeholderTextColor="#000000"
            autoCapitalize="none"
            keyboardType="email-address"
          />
          <Text style={styles.labelText}>Enter your password</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter your password"
            placeholderTextColor="#000000"
            autoCapitalize="none"
            secureTextEntry={true}
            keyboardType="email-address"
          />
        </View>

        {/* bouton */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("verification")}
          >
            <Text style={styles.buttonText}>Sign-up</Text>
          </TouchableOpacity>
          <View style={styles.existingAccount}>
            <Text style={styles.alreadyAccount}>Already have an account? </Text>
            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => router.push("login")}
            >
              <Text style={styles.logingText}>Log in</Text>
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

  logo: {
    width: 80,
    height: 88,
    marginTop: 60,
    marginRight: 40,
    alignSelf: "flex-end",
  },

  backroundImage: {
    flex: 1,
  },

  textInputContainer: {
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: 20,
  },
  textInput: {
    width: 358,
    height: 50,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    marginright: 13,
    marginleft: 13,
    borderWidth: 1,
    borderColor: "#000000",
    padding: 10,
    marginTop: 0,
  },
  buttonContainer: {
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: 20,
  },
  button: {
    backgroundColor: "#00FB8A",
    borderRadius: 33,
    padding: 10,
    width: 161,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 20,
    letterSpacing: 0.5,
    color: "#000000",
  },

  googleIcon: {
    width: 50,
    height: 50,
    marginRight: 3,
  },

  googleSignupText: {
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 20,
    letterSpacing: 0.5,
    color: "#ffffff",
  },
  signUpContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    marginTop: 80,
  },
  googleIconeContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 0,
  },
  signUpText: {
    fontSize: 32,
    fontWeight: "bold",
    lineHeight: 20,
    letterSpacing: 0.6,
    color: "#ffffff",
    marginTop: 20,
    padding: 10,
    marginLeft: 20,
  },
  existingAccount: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 0,
    marginTop: 5,
  },

  alreadyAccount: {
    color: "#ffffff",
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: 0.5,
  },

  // loginButton: {
  //   backgroundColor: "#00FB8A",
  //   borderRadius: 33,
  //   padding: 10,
  //   width: 161,
  //   height: 50,
  //   alignItems: "center",
  //   justifyContent: "center",
  // },

  logingText: {
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 20,
    letterSpacing: 0.5,
    color: "#00FB8A",
    textdecorationLine: "underline",
  },

  labelText: {
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 20,
    letterSpacing: 0.5,
    color: "#ffffff",
    alignSelf: "flex-start",
    marginTop: 20,
    marginBottom: 5,
  },
});
