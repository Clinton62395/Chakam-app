import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "@/components/theme/ModeHandler";
import { useMode } from "@/components/theme/themeProvider";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { ImageBackground } from "react-native";
import { ScaledSheet } from "react-native-size-matters";

export default function RegisterComponent() {
  const { themeMode, theme } = useMode();

  const content = (
    <>
      {/* text Input */}
      <View style={styles.signUpContainer}>
        <Text
          style={[
            styles.signUpText,
            { color: themeMode === "dark" ? theme.text : theme.primary },
          ]}
        >
          Sign-Up
        </Text>

        <View style={styles.googleIconeContainer}>
          {/* google icone */}
          <Image
            source={require("@/assets/images/google-logo.png")}
            style={styles.googleIcon}
            contentFit="contain"
          />
          <Text style={styles.googleSignupText}>Sign Up width google</Text>
        </View>
      </View>

      <View style={styles.textInputContainer}>
        <Text style={styles.labelText}>Enter your email address</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Enter your email address"
          placeholderTextColor={
            themeMode === "dark" ? theme.text : theme.backround
          }
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <Text style={styles.labelText}>Enter your password</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Enter your password"
          placeholderTextColor={
            themeMode === "dark" ? theme.text : theme.backround
          }
          autoCapitalize="none"
          secureTextEntry={true}
          keyboardType="email-address"
        />
      </View>

      {/* bouton */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            {
              backgroundColor:
                themeMode === "dark" ? theme.card : theme.primary,
            },
          ]}
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
    </>
  );
  const router = useRouter();
  return (
    <SafeAreaView style={[styles.container]}>
      <View>
        {/* logo */}
        <Image
          source={require("@/assets/images/logo.png")}
          style={styles.logo}
        />
      </View>
      {/* image backround */}
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
    </SafeAreaView>
  );
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    padding: "20@ms",
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
  },
  textInput: {
    width: 358,
    height: 50,
    borderRadius: 20,
    marginright: 13,
    marginleft: 13,
    borderWidth: 1,
    padding: 10,
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: 20,
  },
  button: {
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
  },
  signUpContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    marginTop: 70,
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
    textdecorationLine: "underline",
  },

  labelText: {
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 20,
    letterSpacing: 0.5,
    alignSelf: "flex-start",
    marginTop: 20,
    marginBottom: 5,
  },
});
