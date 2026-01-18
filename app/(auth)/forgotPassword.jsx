import { Image } from "expo-image";

import { router } from "expo-router";
import { ArrowLeft } from "lucide-react-native";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useResponsive } from "../../components/ui/media";

export default function ForgotPasswordScreen() {
  const [email, setEmail] = useState("");
  const { isSmall } = useResponsive();

  // media query

  return (
    <View style={styles.container}>
      {/* logo */}

      <View style={styles.logoContainer}>
        {/* go back icone */}
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backIcone}
        >
          <ArrowLeft size={30} color="#000000" />
        </TouchableOpacity>
        <Image
          source={require("../../assets/images/dash-logo.png")}
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
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Request link</Text>
        </TouchableOpacity>
        <View style={styles.existingAccount}>
          <Text style={styles.alreadyAccount}>
            Didn’t get one? Request another
          </Text>
          <Text style={styles.time}>in 2:00</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 10,
  },

  logoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 40,
    marginHorizontal: 10,
  },

  logo: {
    width: 57.5,
    height: 58.5,
  },
  title: {
    padding: 10,
    fontWeight: "bold",
    lineHeight: 20,
    letterSpacing: 0.6,
    alignSelf: "center",
    color: "#000000",
    marginTop: 40,
  },

  subleTitle1: {
    fontSize: 14,
    fontWeight: "bold",
    lineHeight: 20,
    letterSpacing: 0.5,
    color: "#000000",
    marginLeft: 10,
    marginTop: 5,
  },
  subleTitle2: {
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 20,
    letterSpacing: 0.5,
    color: "#000000",
    marginLeft: 10,
    marginBottom: 5,
  },

  textInputContainer: {
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: 20,
  },
  textInput: {
    height: 51,
    backgroundColor: "#D9D9D957",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#D9D9D957",
    padding: 10,
  },

  button: {
    backgroundColor: "#00FB8A",
    borderRadius: 33,
    padding: 10,
    width: 149,
    height: 50,
    alignSelf: "center",
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

  existingAccount: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    gap: 4,
    marginTop: 5,
  },

  alreadyAccount: {
    color: "#000000",
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 20,
    letterSpacing: 0.5,
  },
  time: {
    color: "#01723F",
    fontSize: 14,
    fontWeight: "800",
    lineHeight: 20,
    letterSpacing: 0.5,
  },

  labelText: {
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 20,
    letterSpacing: 0.5,
    color: "#000000",
    alignSelf: "flex-start",
    marginTop: 20,
    marginLeft: 10,
  },
});
