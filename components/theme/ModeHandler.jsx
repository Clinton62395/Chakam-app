import { useMode } from "@/components/theme/themeProvider";
import {
  SafeAreaView as RNSafeAreaView,
  ScrollView as RNScrollView,
  Text as RNText,
  TextInput as RNTextInput,
  TouchableOpacity as RNTouchableOpacity,
  View as RNView,
} from "react-native";

// Text avec thème automatique
export function Text({ style, ...props }) {
  const { theme } = useMode();
  return <RNText style={[{ color: theme.text }, style]} {...props} />;
}

// View avec thème automatique
export function View({ style, ...props }) {
  const { theme } = useMode();
  return (
    <RNView style={[{ backgroundColor: theme.background }, style]} {...props} />
  );
}

// SafeAreaView avec thème automatique
export function SafeAreaView({ style, ...props }) {
  const { theme } = useMode();
  return (
    <RNSafeAreaView
      style={[{ backgroundColor: theme.background }, style]}
      {...props}
    />
  );
}

// TouchableOpacity (pas de style par défaut, mais disponible si besoin)
export function TouchableOpacity({ style, ...props }) {
  return <RNTouchableOpacity style={style} {...props} />;
}

// TextInput avec thème automatique
export function TextInput({ style, placeholderTextColor, ...props }) {
  const { theme } = useMode();
  return (
    <RNTextInput
      style={[{ color: theme.text, borderColor: theme.border }, style]}
      placeholderTextColor={placeholderTextColor || theme.text + "80"} // 80 = opacity 50%
      {...props}
    />
  );
}

// ScrollView avec thème automatique
export function ScrollView({ style, ...props }) {
  const { theme } = useMode();
  return (
    <RNScrollView
      style={[{ backgroundColor: theme.background }, style]}
      {...props}
    />
  );
}

// Card avec thème automatique
export function Card({ style, ...props }) {
  const { theme } = useMode();
  return <RNView style={[{ backgroundColor: theme.card }, style]} {...props} />;
}
