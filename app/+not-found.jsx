import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withSpring,
} from "react-native-reanimated";

const { width } = Dimensions.get("window");

export default function NotFoundScreen() {
  const fadeAnim = useSharedValue(0);
  const scaleAnim = useSharedValue(0.5);
  const rotateAnim = useSharedValue(0);
  const slideAnim = useSharedValue(50);
  const bounceAnim = useSharedValue(0);

  useEffect(() => {
    // Animation d'apparition séquentielle
    fadeAnim.value = withSpring(1, { damping: 15 });
    scaleAnim.value = withSpring(1, { damping: 12 });
    slideAnim.value = withSpring(0, { damping: 15 });

    // Animation de rotation continue pour l'icône
    rotateAnim.value = withRepeat(
      withSequence(
        withSpring(10, { damping: 2 }),
        withSpring(-10, { damping: 2 })
      ),
      -1,
      true
    );

    // Animation de rebond
    bounceAnim.value = withDelay(
      600,
      withRepeat(
        withSequence(
          withSpring(-8, { damping: 2 }),
          withSpring(0, { damping: 2 })
        ),
        -1,
        false
      )
    );
  }, []);

  const containerStyle = useAnimatedStyle(() => ({
    opacity: fadeAnim.value,
    transform: [{ scale: scaleAnim.value }],
  }));

  const iconStyle = useAnimatedStyle(() => ({
    transform: [
      { rotate: `${rotateAnim.value}deg` },
      { translateY: bounceAnim.value },
    ],
  }));

  const textStyle = useAnimatedStyle(() => ({
    opacity: fadeAnim.value,
    transform: [{ translateY: slideAnim.value }],
  }));

  const router = useRouter();
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.content, containerStyle]}>
        {/* Icône 404 animée */}
        <Animated.View style={[styles.iconContainer, iconStyle]}>
          <Text style={styles.errorCode}>404</Text>
        </Animated.View>

        {/* Titre */}
        <Animated.View style={textStyle}>
          <Text style={styles.title}>Page introuvable</Text>
          <Text style={styles.description}>
            Oops ! La page que vous recherchez semble s'être égarée dans le
            cyberespace.
          </Text>
        </Animated.View>

        {/* Séparateur */}
        <View style={styles.separator} />

        {/* Message additionnel */}
        <Animated.View style={[textStyle, { marginTop: 20 }]}>
          <Text style={styles.suggestion}>
            Vérifiez l'URL ou retournez à la page d'accueil
          </Text>
        </Animated.View>

        {/* Bouton animé */}
        <Animated.View style={[textStyle, { marginTop: 30 }]}>
          <Pressable
            style={({ pressed }) => [
              styles.button,
              pressed && styles.buttonPressed,
            ]}
            onPress={() => router.push("index")}
          >
            <Text style={styles.buttonText}>← Retour à l'accueil</Text>
          </Pressable>
        </Animated.View>

        {/* Bouton secondaire */}
        <Pressable
          style={styles.linkButton}
          onPress={() => console.log("Aide")}
        >
          <Text style={styles.linkText}>Besoin d'aide ?</Text>
        </Pressable>
      </Animated.View>

      {/* Décoration de fond */}
      <View style={styles.backgroundDecoration}>
        <View style={[styles.circle, styles.circle1]} />
        <View style={[styles.circle, styles.circle2]} />
        <View style={[styles.circle, styles.circle3]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  content: {
    alignItems: "center",
    zIndex: 10,
    width: "100%",
    maxWidth: 400,
  },
  iconContainer: {
    marginBottom: 24,
  },
  errorCode: {
    fontSize: 96,
    fontWeight: "800",
    color: "#6366f1",
    textShadowColor: "rgba(99, 102, 241, 0.3)",
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 12,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#1f2937",
    textAlign: "center",
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: "#6b7280",
    textAlign: "center",
    lineHeight: 24,
    paddingHorizontal: 20,
  },
  separator: {
    marginTop: 30,
    height: 2,
    width: 60,
    backgroundColor: "#e5e7eb",
    borderRadius: 1,
  },
  suggestion: {
    fontSize: 14,
    color: "#9ca3af",
    textAlign: "center",
    fontStyle: "italic",
  },
  button: {
    backgroundColor: "#6366f1",
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 12,
    shadowColor: "#6366f1",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  buttonPressed: {
    backgroundColor: "#4f46e5",
    transform: [{ scale: 0.96 }],
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  linkButton: {
    marginTop: 16,
    paddingVertical: 8,
  },
  linkText: {
    color: "#6366f1",
    fontSize: 14,
    fontWeight: "500",
    textDecorationLine: "underline",
  },
  backgroundDecoration: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 1,
  },
  circle: {
    position: "absolute",
    borderRadius: 9999,
    opacity: 0.05,
  },
  circle1: {
    width: 300,
    height: 300,
    backgroundColor: "#6366f1",
    top: -100,
    right: -100,
  },
  circle2: {
    width: 200,
    height: 200,
    backgroundColor: "#8b5cf6",
    bottom: -50,
    left: -50,
  },
  circle3: {
    width: 150,
    height: 150,
    backgroundColor: "#ec4899",
    top: "50%",
    right: -75,
  },
});
