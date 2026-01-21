import { useMode } from "@/components/theme/themeProvider";
import { useRouter } from "expo-router";
import { ArrowLeft, Clock7 } from "lucide-react-native";
import { useEffect, useRef, useState } from "react";

import {
  Card,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "@/components/theme/ModeHandler";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScaledSheet } from "react-native-size-matters";

export default function Verification() {
  const [onfocus, setOnfocus] = useState(false);
  const [code, setCode] = useState(["1", "2", "3", "4", "", ""]);
  const [showResetButton, setShowResetButton] = useState(false);
  const [remainingTime, setRemainingTime] = useState(300); // en secondes (5 minutes)

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  const inputRef = useRef([]);

  const router = useRouter();

  // Autofocus sur le premier input au montage
  useEffect(() => {
    setTimeout(() => {
      inputRef.current[0]?.focus();
    }, 100);
  }, []);

  // Timer countdown
  useEffect(() => {
    if (remainingTime <= 0) {
      setShowResetButton(true);
      return;
    }

    const interval = setInterval(() => {
      setRemainingTime((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setShowResetButton(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [remainingTime]);

  const handleResetTimer = () => {
    setShowResetButton(false);
    setRemainingTime(300);
    setCode(Array([]));
    inputRef.current[0]?.focus();
  };

  const handleChangeText = (text, index) => {
    // Mise à jour du code
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    // Focus sur le prochain input si du texte est entré
    if (text && index < code.length - 1) {
      inputRef.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e, index) => {
    // Retour à l'input précédent si backspace et input vide
    if (e.nativeEvent.key === "Backspace" && !code[index] && index > 0) {
      inputRef.current[index - 1]?.focus();
    }
  };

  const { themeMode, theme } = useMode();
  return (
    <View style={styles.container}>
      <SafeAreaView>
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

        <View style={styles.verificationContainer}>
          <Text style={styles.verificationTitle}>Account Verification</Text>
          <Text style={styles.verificationText}>
            Verify your account to continue using CHAKAM features securely.
          </Text>
          <Text style={styles.verificationEmailText}>
            Enter the code sent to your email address
          </Text>

          {/* codes input */}
          <View style={styles.codesInputContainer}>
            {code.map((item, index) => {
              return (
                <TextInput
                  key={index}
                  value={item}
                  maxLength={1}
                  keyboardType="numeric"
                  ref={(el) => (inputRef.current[index] = el)}
                  style={[
                    styles.codeInput,
                    {
                      borderColor: onfocus ? "#E5E5E5" : theme.text,
                      backgroundColor: item ? "#00FB8A" : theme.text,
                    },
                  ]}
                  onFocus={() => setOnfocus(true)}
                  onBlur={() => setOnfocus(false)}
                  onChangeText={(text) => handleChangeText(text, index)}
                  onKeyPress={(e) => handleKeyPress(e, index)}
                />
              );
            })}
          </View>
        </View>

        {/* expiration time content */}
        <View style={styles.expirationTimeContainer}>
          <Text style={styles.expirationTimeText}>Code expires in :</Text>

          {/* expiration time */}
          <Card style={styles.expirationTime}>
            <Clock7
              size={20}
              color={themeMode === "dark" ? theme.text : theme.backround}
            />
            <Text style={styles.time}>{formatTime(remainingTime)}</Text>
          </Card>

          {/* reset button */}
          {showResetButton && (
            <TouchableOpacity
              style={styles.resetButton}
              onPress={handleResetTimer}
            >
              <Text style={styles.resetButtonText}>Resend Code</Text>
            </TouchableOpacity>
          )}
        </View>

        {/* verification button */}
        <View style={styles.verificationButtonContainer}>
          <TouchableOpacity
            style={[
              styles.verificationButton,
              {
                backgroundColor:
                  themeMode === "dark" ? theme.card : theme.primary,
              },
            ]}
            onPress={() => router.push("verifySuccess")}
          >
            <Text style={styles.verificationButtonText}>Verify</Text>
          </TouchableOpacity>

          {/* already verified */}
          <View style={styles.resetcodeContainer}>
            <Text style={styles.resetcode}>Didn't get a code?</Text>
            <TouchableOpacity onPress={handleResetTimer}>
              <Text style={styles.resetcodeText}>Resend code</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}
const styles = ScaledSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: "10@ms",
  },

  verificationContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "10@ms",
  },
  verificationTitle: {
    fontSize: "32@ms",
    width: "355@ms",
    fontWeight: "600",
    lineHeight: " 20@ms",
    letterSpacing: 0.6,
    marginTop: "20@ms",
    padding: "10@ms",
    marginLeft: "20@ms",
  },

  verificationText: {
    fontSize: "14@ms",
    fontWeight: "400",
    lineHeight: " 20@ms",
    letterSpacing: 0.5,
    marginTop: "15@ms",
    marginBottom: "5@ms",
  },

  verificationEmailText: {
    fontSize: "14@ms",
    fontWeight: "300",
    lineHeight: " 20@ms",
    letterSpacing: 0.5,
    marginTop: "5@ms",
    marginBottom: "5@ms",
  },
  codesInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: "8@ms",
    marginTop: "20@ms",
    marginLeft: "35@ms",
  },

  codeInput: {
    width: "49@ms",
    height: "47@ms",
    borderRadius: "16@ms",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "24@ms",
    color: "#000000",
    borderWidth: 1,
    borderColor: "#00FB8A",
    backgroundColor: "#00FB8A",
    padding: "10@ms",
  },
  disabledInput: {
    backgroundColor: "#D9D9D9",
  },

  expirationTimeContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: "20@ms",
    gap: "8@ms",
  },
  expirationTimeText: {
    fontSize: "16@ms",
    fontWeight: "bold",
    lineHeight: " 20@ms",
    letterSpacing: 0.5,
    marginBottom: "5@ms",
  },
  expirationTime: {
    flexDirection: "row",
    gap: "5@ms",
    fontSize: "16@ms",
    height: "27@ms",
    padding: "2@ms",
    width: "86@ms",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    borderRadius: "23@ms",
    lineHeight: " 20@ms",
    letterSpacing: 0.5,
  },

  time: {
    fontSize: "16@ms",
    fontWeight: "bold",
    lineHeight: " 20@ms",
    letterSpacing: 0.5,
  },

  verificationButtonContainer: {
    marginTop: "200@ms",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20@ms",
  },
  verificationButton: {
    backgroundColor: "#00FB8A",
    borderRadius: "33@ms",
    padding: "10@ms",
    width: "161@ms",
    height: "50@ms",
    alignItems: "center",
    justifyContent: "center",
  },
  verificationButtonText: {
    fontSize: "16@ms",
    fontWeight: "bold",
    lineHeight: "20@ms",
    letterSpacing: 0.5,
  },

  resetcodeContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: "8@ms",
    marginTop: "5@ms",
  },

  resetcode: {
    fontSize: "14@ms",
    fontWeight: "bold",
    lineHeight: "20@ms",
    letterSpacing: 0.5,
    marginTop: 5,
    marginBottom: "5@ms",
  },
  resetcodeText: {
    fontSize: "16@ms",
    fontWeight: "bold",
    lineHeight: "20@ms",
    letterSpacing: 0.5,
    color: "#01723F",
    textDecorationLine: "underline",
  },
  backIcone: {
    paddingHorizontal: "10@ms",
    alignSelf: "flex-start",
  },
});
