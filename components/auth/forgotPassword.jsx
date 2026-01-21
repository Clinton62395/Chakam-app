import { Image } from "expo-image";

import { router } from "expo-router";
import { ArrowLeft } from "lucide-react-native";
import { useState } from "react";

import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "@/components/theme/ModeHandler";
import { useMode } from "@/components/theme/themeProvider";
import { useResponsive } from "@/components/ui/media";
import { ScaledSheet } from "react-native-size-matters";

export default function ForgotPasswordComponent() {
  const [email, setEmail] = useState("");
  const { isSmall } = useResponsive();

  // media query
  const { themeMode, theme } = useMode();

  return (
    <SafeAreaView style={styles.container}>
      {/* logo */}

      <View style={styles.logoContainer}>
        {/* go back icone */}
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backIcone}
        >
          <ArrowLeft
            size={30}
            color={themeMode === "dark" ? theme.text : theme.backround}
          />
        </TouchableOpacity>
        <Image
          source={require("@/assets/images/dash-logo.png")}
          style={styles.logo}
        />
      </View>

      <Text style={[styles.title, { fontSize: isSmall ? 25 : 32 }]}>
        Forgot your password?{" "}
      </Text>
      <Text style={styles.subleTitle1}>
        Forgot your password? No worries! You can request another.
      </Text>
      <Text style={styles.subleTitle2}>
        Input your email address to get a link.
      </Text>

      {/* inputs */}
      <View style={styles.inputsContainer}>
        <Text style={styles.labelText}>Enter your email address</Text>
        <TextInput
          style={[styles.textInput, { width: isSmall ? "100%" : "358px" }]}
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email address"
          placeholderTextColor="#000000"
          autoCapitalize="none"
          keyboardType="email-address"
        />

        {/* bouton */}
        <TouchableOpacity
          style={[
            styles.button,
            {
              backgroundColor:
                themeMode === "dark" ? theme.card : theme.primary,
            },
          ]}
        >
          <Text style={styles.buttonText}>Request link</Text>
        </TouchableOpacity>
        <View style={styles.existingAccount}>
          <Text style={styles.alreadyAccount}>
            Didn’t get one? Request another
          </Text>
          <Text
            style={[
              [
                styles.time,
                { color: themeMode === "dark" ? theme.text : theme.primary },
              ],
            ]}
          >
            in 2:00
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    padding: "10@ms",
  },

  logoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "40@vs",
    marginHorizontal: "10@s",
  },

  logo: {
    width: "57.5@s",
    height: "58.5@vs",
  },

  title: {
    padding: "10@ms",
    fontWeight: "bold",
    lineHeight: "20@vs",
    letterSpacing: 0.6,
    alignSelf: "center",
    marginTop: "40@vs",
  },

  subleTitle1: {
    fontSize: "14@ms",
    fontWeight: "bold",
    lineHeight: "20@vs",
    letterSpacing: 0.5,
    marginLeft: "10@s",
    marginTop: "5@vs",
  },

  subleTitle2: {
    fontSize: "12@ms",
    fontWeight: "400",
    lineHeight: "20@vs",
    letterSpacing: 0.5,
    marginLeft: "10@s",
    marginBottom: "5@vs",
  },

  textInputContainer: {
    marginTop: "50@vs",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: "20@ms",
  },

  textInput: {
    height: "51@vs",
    borderRadius: "18@ms",
    borderWidth: 1,
    padding: "10@ms",
  },

  button: {
    borderRadius: "33@ms",
    padding: "10@ms",
    width: "149@s",
    height: "50@vs",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "100@vs",
  },

  buttonText: {
    fontSize: "16@ms",
    fontWeight: "bold",
    lineHeight: "20@vs",
    letterSpacing: 0.5,
  },

  existingAccount: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    gap: "4@ms",
    marginTop: "5@vs",
  },

  alreadyAccount: {
    fontSize: "14@ms",
    fontWeight: "600",
    lineHeight: "20@vs",
    letterSpacing: 0.5,
  },

  time: {
    fontSize: "14@ms",
    fontWeight: "800",
    lineHeight: "20@vs",
    letterSpacing: 0.5,
  },

  labelText: {
    fontSize: "14@ms",
    fontWeight: "600",
    lineHeight: "20@vs",
    letterSpacing: 0.5,
    alignSelf: "flex-start",
    marginTop: "20@vs",
    marginLeft: "10@s",
  },
});
