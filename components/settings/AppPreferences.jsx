import { useMode } from "@/components/theme/themeProvider";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { ArrowLeft, Check } from "lucide-react-native";
import { useEffect, useState } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScaledSheet } from "react-native-size-matters";
import { Text, TouchableOpacity, View } from "../theme/ModeHandler";

// Composant Checkbox Animé
function AnimatedCheckbox({ checked, themeMode }) {
  const scale = useSharedValue(checked ? 1 : 0);
  const opacity = useSharedValue(checked ? 1 : 0);
  const borderColor = useSharedValue(checked ? 1 : 0);

  useEffect(() => {
    scale.value = withSpring(checked ? 1 : 0, {
      damping: 12,
      stiffness: 200,
    });
    opacity.value = withTiming(checked ? 1 : 0, { duration: 200 });
    borderColor.value = withTiming(checked ? 1 : 0, { duration: 200 });
  }, [checked]);

  const animatedCheckboxStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
    opacity: opacity.value,
  }));

  const animatedBorderStyle = useAnimatedStyle(() => ({
    borderColor:
      borderColor.value === 1
        ? "#00FB8A"
        : themeMode === "dark"
          ? "#404040"
          : "#E0E0E0",
  }));

  return (
    <Animated.View style={[styles.checkbox, animatedBorderStyle]}>
      <Animated.View style={animatedCheckboxStyle}>
        <Check size={16} color="#00FB8A" strokeWidth={3} />
      </Animated.View>
    </Animated.View>
  );
}

export default function AppPreferencesComponent() {
  const { themeMode, systemTheme, setThemeMode } = useMode();

  const [selected, setSelected] = useState(
    themeMode === "system" ? systemTheme : themeMode,
  );

  const onPressRadio = (value) => {
    setSelected(value);
    setThemeMode(value);
  };

  const router = useRouter();

  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: themeMode === "dark" ? "#000000" : "#FFFFFF" },
      ]}
    >
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.back}>
          <ArrowLeft
            size={24}
            color={themeMode === "dark" ? "#FFFFFF" : "#000000"}
          />
        </TouchableOpacity>
        <Text style={[styles.title]}>App Preferences</Text>
      </View>

      {/* Images */}
      <View style={styles.imageContaner}>
        <Image
          source={require("@/assets/images/mode-light.png")}
          style={[styles.phone, { minHeight: 400 }]}
          contentFit="contain"
        />
        <Image
          source={require("@/assets/images/mode-dark.png")}
          style={styles.phone}
          contentFit="contain"
        />
      </View>

      <View style={styles.modeContainer}>
        {/* Light */}
        <TouchableOpacity
          style={[
            styles.modeItem,
            selected === "light" && styles.modeItemActive,
          ]}
          onPress={() => onPressRadio("light")}
          activeOpacity={0.8}
        >
          <Text style={[styles.modeLabel]}>Light mode</Text>
          <AnimatedCheckbox
            checked={selected === "light"}
            themeMode={themeMode}
          />
        </TouchableOpacity>

        {/* Dark */}
        <TouchableOpacity
          style={[
            styles.modeItem,
            selected === "dark" && styles.modeItemActive,
          ]}
          onPress={() => onPressRadio("dark")}
          activeOpacity={0.8}
        >
          <Text
            style={[
              styles.modeLabel,
              { color: themeMode === "dark" ? "#000000" : "" },
            ]}
          >
            Dark mode
          </Text>
          <AnimatedCheckbox
            checked={selected === "dark"}
            themeMode={themeMode}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    padding: "20@ms",
  },
  header: {
    marginBottom: "30@ms",
  },
  title: {
    fontSize: "32@ms",
    fontWeight: "700",
    letterSpacing: -0.5,
    marginTop: "10@ms",
  },
  back: {
    paddingHorizontal: "10@ms",
    alignSelf: "flex-start",
    marginLeft: "-10@ms",
  },
  imageContaner: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: "15",
  },
  phone: {
    width: 150,
    height: "300@ms",
  },
  modeContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: "20@ms",
    marginTop: "30@ms",
  },
  modeItem: {
    width: "120@ms",
    alignItems: "center",
    paddingVertical: "14@ms",
    borderRadius: "16@ms",
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  modeItemActive: {
    borderColor: "#00FB8A",
    backgroundColor: "#F0FFF8",
  },
  modeLabel: {
    fontSize: "14@ms",
    fontWeight: "600",
    marginBottom: "10@ms",
  },
  checkbox: {
    width: "22@ms",
    height: "22@ms",
    borderRadius: "6@ms",
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
});
