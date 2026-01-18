import { useRouter } from "expo-router";
import { Clock7 } from "lucide-react-native";
import { useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Verification() {
  const [onfocus, setOnfocus] = useState(false);

  const input_lenght = 6;
  const [code, setCode] = useState(Array(input_lenght).fill(""));
  const inputRef = useRef([]);

  const router = useRouter();

  return (
    <>
      {/* verification content */}
      <View style={styles.container}>
        <View style={styles.verificationContainer}>
          <Text style={styles.verificationTitle}>Account Verification</Text>
          <Text style={styles.verificationText}>
            Verify your account to continue using CHAKAM features securely.
          </Text>
          <Text style={styles.verificationEmailText}>
            {" "}
            Enter the code sent to your email address
          </Text>

          {/* codes input */}
          <View style={styles.codesInputContainer}>
            {code.map((item, index) => {
              const isDisabled = index >= code.length - 2;

              return (
                <TextInput
                  key={index}
                  value={isDisabled ? "" : item}
                  placeholder={isDisabled ? "" : index.toString()}
                  keyboardType="number-pad"
                  editable={!isDisabled}
                  ref={(el) => (inputRef.current[index] = el)}
                  style={[
                    styles.codeInput,
                    isDisabled && styles.disabledInput,
                    {
                      borderColor: onfocus ? "#00FB8A" : "#000000",
                    },
                  ]}
                  onFocus={() => setOnfocus(true)}
                  onBlur={() => setOnfocus(false)}
                  onChangeText={(text) => {
                    setCode((prev) =>
                      prev.map((item, i) => (i === index ? text : item))
                    );
                    if (text && index < input_lenght - 1) {
                      inputRef.current[index + 1]?.focus();
                    }
                  }}
                />
              );
            })}
          </View>
        </View>

        {/* expiration time content */}
        <View style={styles.expirationTimeContainer}>
          <Text style={styles.expirationTimeText}>Code expires in</Text>

          {/* expiration time */}
          <View style={styles.expirationTime}>
            <Clock7 size={20} color="#000000" />
            <Text style={styles.time}> 5:00</Text>
          </View>
        </View>

        {/* verification button */}
        <View style={styles.verificationButtonContainer}>
          <TouchableOpacity
            style={styles.verificationButton}
            onPress={() => router.push("verifySuccess")}
          >
            <Text style={styles.verificationButtonText}>Verify</Text>
          </TouchableOpacity>

          {/* already verified */}
          <View style={styles.resetcodeContainer}>
            <Text style={styles.resetcode}>Didn’t get a code?</Text>
            <Text style={styles.resetcodeText}>Reset code</Text>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 20,
  },

  verificationContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  verificationTitle: {
    fontSize: 32,
    width: 355,
    fontWeight: "600",
    lineHeight: 20,
    letterSpacing: 0.6,
    color: "#000000",
    marginTop: 20,
    padding: 10,
    marginLeft: 20,
  },

  verificationText: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 20,
    letterSpacing: 0.5,
    color: "#000000",
    marginTop: 15,
    marginBottom: 5,
  },

  verificationEmailText: {
    fontSize: 14,
    fontWeight: "300",
    lineHeight: 20,
    letterSpacing: 0.5,
    color: "#000000",
    marginTop: 5,
    marginBottom: 5,
  },
  codesInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    marginTop: 20,
    marginLeft: 35,
  },

  codeInput: {
    width: 49,
    height: 47,
    borderRadius: 16,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 24,
    color: "#000000",
    borderWidth: 1,
    borderColor: "#00FB8A",
    backgroundColor: "#00FB8A",
    padding: 10,
  },
  disabledInput: {
    backgroundColor: "#D9D9D9",
    color: "#000000",
    borderColor: "#D9D9D9",
  },

  expirationTimeContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    gap: 8,
  },
  expirationTimeText: {
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 20,
    letterSpacing: 0.5,
    color: "#000000",
    marginBottom: 5,
  },
  expirationTime: {
    flexDirection: "row",
    gap: 5,
    fontSize: 16,
    height: 27,
    padding: 2,
    width: 86,
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    backgroundColor: "#8A8A8A2E",
    borderRadius: 23,
    lineHeight: 20,
    letterSpacing: 0.5,
    color: "#000000",
  },

  time: {
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 20,
    letterSpacing: 0.5,
    color: "#000000",
  },

  verificationButtonContainer: {
    marginTop: 200,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  verificationButton: {
    backgroundColor: "#00FB8A",
    borderRadius: 33,
    padding: 10,
    width: 161,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  verificationButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 20,
    letterSpacing: 0.5,
    color: "#000000",
  },

  resetcodeContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    marginTop: 5,
  },

  resetcode: {
    fontSize: 14,
    fontWeight: "bold",
    lineHeight: 20,
    letterSpacing: 0.5,
    color: "#000000",
    marginTop: 5,
    marginBottom: 5,
  },
  resetcodeText: {
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 20,
    letterSpacing: 0.5,
    color: "#01723F",
    textDecorationLine: "underline",
  },
});
