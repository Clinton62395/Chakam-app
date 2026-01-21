import { useRouter } from "expo-router";
import { ChevronLeft } from "lucide-react-native";
import { ScrollView } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import { Text, TouchableOpacity, View } from "../theme/ModeHandler";

export default function FAQComponent() {
  const router = useRouter();
  const faqs = [
    {
      question: "What is CHAKAM?",
      answer:
        "CHAKAM is a reporting platform that allows users to submit issues, track responses and follow progress until resolution.",
    },
    {
      question: "Who can use CHAKAM?",
      answer:
        "Anyone. Individuals, property agents, and maintenance or repair organizations can all use CHAKAM.",
    },
    {
      question: "What kind of issues can I report?",
      answer:
        "Infrastructure problems, property-related issues, public concerns and maintenance needs requiring action and attention.",
    },
    {
      question: "How do I report an issue?",
      answer:
        "You can report issues by filling out a form on the home page. You can also report issues from the property page.",
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.back}>
          <ChevronLeft size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>FAQ</Text>
      </View>

      <ScrollView style={styles.content}>
        {faqs.map((faq, index) => (
          <View key={index} style={styles.faq}>
            <Text style={styles.question}>{faq.question}</Text>
            <Text style={styles.answer}>{faq.answer}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    paddingTop: "10@ms",
  },
  header: {
    flexDirection: "column",
    alignItems: "center",
    paddingHorizontal: "20@ms",
    paddingTop: "60@ms",
    paddingBottom: "20@ms",
  },
  title: {
    fontSize: "32@ms",
    fontWeight: "700",
    letterSpacing: -0.5,
    alignSelf: "flex-start",
    marginTop: "10@ms",
  },
  back: {
    paddingHorizontal: "10@ms",
    alignSelf: "flex-start",
  },
  content: {
    paddingHorizontal: "20@ms",
    paddingTop: "10@sm",
  },
  faq: {
    marginBottom: "20@ms",
    borderRadius: "9@ms",
    height: "135@ms",
    padding: "10@ms",
  },
  question: {
    fontSize: "20@ms",
    textDecorationLine: "underline",
    fontWeight: "600",
    marginBottom: "5@ms",
  },
  answer: {
    fontSize: "14@ms",
    fontWeight: "400",
    marginBottom: "20@ms",
  },
});
