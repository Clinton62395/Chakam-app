import { useRouter } from "expo-router";
import { ArrowLeft, Eye, EyeOff, Pen } from "lucide-react-native";
import { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { ScaledSheet } from "react-native-size-matters";

export default function ProfilesComponent() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);

  const showPasswordInput = () => {
    setShowPassword((prev) => !prev);
  };
  const showConfPasswordInput = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View>
          {/* icone to go back */}
          <TouchableOpacity onPress={() => router.back()} style={styles.back}>
            <ArrowLeft size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.title}>Account & Profile</Text>
        </View>

        {/* inputs conents name and phone number */}
        <View style={{ marginTop: 20 }}>
          <Text style={styles.lable}>Name</Text>
          {/* input wiht pen icon */}
          <View style={styles.inputContainer}>
            <TextInput placeholder="Enter your name" style={styles.textInput} />
            <View style={{ position: "absolute", right: 20 }}>
              <Pen size={18} color="#000" />
            </View>
          </View>

          <Text style={styles.lable}>Phone Number</Text>
          {/* input wiht pen icon */}
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Enter your phone number"
              style={styles.textInput}
            />
            <View style={{ position: "absolute", right: 20 }}>
              <Pen size={18} color="#000" />
            </View>{" "}
          </View>
        </View>

        {/* eamil input */}
        <View style={{ alignItems: "center", marginTop: 20 }}>
          <Text style={styles.acoountSettings}>Account settings</Text>
          <Text style={styles.lable}>Change email address</Text>
          {/* input wiht pen icon */}
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="yourname@gmail.com"
              secureTextEntry={showPassword}
              style={styles.textInput}
            />
            <View style={{ position: "absolute", right: 20 }}>
              <Pen size={18} color="#000" />
            </View>{" "}
          </View>

          {/* button */}
          <TouchableOpacity style={styles.emailSaveBtn}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        </View>

        {/*  passowrd input */}
        <View style={styles.passwordContainer}>
          <Text style={styles.lable}>Change password</Text>
          {/* input wiht pen icon */}
          <View style={styles.inputContainer}>
            <TextInput
              placeholder=" password"
              style={styles.textInput}
              secureTextEntry={showPassword}
            />
            <TouchableOpacity
              onPress={showPasswordInput}
              style={{ position: "absolute", right: 20 }}
            >
              {showPassword ? (
                <EyeOff size={18} color="#000" />
              ) : (
                <Eye size={18} color="#000" />
              )}
            </TouchableOpacity>{" "}
          </View>
          {/* confirm password input */}
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="confirm password"
              secureTextEntry={showConfirmPassword}
              style={styles.textInput}
            />
            <TouchableOpacity
              onPress={showConfPasswordInput}
              style={{ position: "absolute", right: 20 }}
            >
              {showConfirmPassword ? (
                <EyeOff size={18} color="#000" />
              ) : (
                <Eye size={18} color="#000" />
              )}
            </TouchableOpacity>
          </View>

          {/* button */}
          <TouchableOpacity style={styles.passwordSaveBtn}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = ScaledSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#ffffff",
    padding: "20@ms",
  },

  title: {
    fontSize: "32@ms",
    fontWeight: "700",
    color: "#000000",
    letterSpacing: -0.5,
    alignSelf: "flex-start",
  },
  acoountSettings: {
    fontSize: "20@ms",
    fontWeight: "700",
    color: "#000000",
    letterSpacing: -0.5,
    alignSelf: "flex-start",
    marginTop: "10@ms",
  },

  back: {
    paddingHorizontal: "10@ms",
    alignSelf: "flex-start",
  },

  lable: {
    fontSize: "14@ms",
    fontWeight: "600",
    color: "#000000",
    letterSpacing: -0.5,
    alignSelf: "flex-start",
    marginTop: "10@ms",
    marginLeft: "10@ms",
  },
  inputContainer: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  textInput: {
    width: "100%",
    height: "51@vs",
    borderRadius: "18@ms",
    fontWeight: "bold",
    fontSize: "14@ms",
    color: "#000000",
    borderWidth: 1,
    borderColor: "#D9D9D957",
    backgroundColor: "#D9D9D957",
    padding: "10@ms",
    alignSelf: "center",
  },

  emailSaveBtn: {
    marginTop: "15@ms",
    backgroundColor: "#00FB8A",
    borderRadius: "33@ms",
    padding: "10@ms",
    width: "144@ms",
    height: "50@ms",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
  },

  buttonText: {
    fontSize: "16@ms",
    fontWeight: "bold",
    lineHeight: "20@ms",
    letterSpacing: 0.5,
    color: "#000000",
  },
  passwordContainer: {
    marginTop: "20@ms",
    gap: "8@ms",
  },

  passwordSaveBtn: {
    marginTop: "10@ms",
    backgroundColor: "#00FB8A",
    borderRadius: "33@ms",
    padding: "10@ms",
    width: "238@ms",
    height: "50@ms",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },

  scrollView: {
    flexGrow: 1,
  },
});
