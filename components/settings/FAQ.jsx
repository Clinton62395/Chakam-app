import { useRouter } from "expo-router";
import { ChevronLeft } from "lucide-react-native";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

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
  ];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <ChevronLeft size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Frequently Asked Questions</Text>
      </View>

      <ScrollView style={styles.content}>
        {faqs.map((faq, index) => (
          <View key={index} style={styles.faq}>
            <Text style={styles.question}>{faq.question}</Text>
            <Text style={styles.answer}>{faq.answer}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity>
          <Text style={styles.footerText}>Back to top</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#000000",
    letterSpacing: -0.5,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  faq: {
    marginBottom: 20,
  },
  question: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000000",
    marginBottom: 5,
  },
  answer: {
    fontSize: 14,
    fontWeight: "400",
    color: "#000000",
    marginBottom: 20,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 40,
  },
  footerText: {
    fontSize: 14,
    color: "#FF0000",
    fontWeight: "500",
  },
});
