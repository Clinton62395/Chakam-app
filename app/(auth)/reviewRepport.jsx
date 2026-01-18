import { Image } from "expo-image";
import { useLocalSearchParams, useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useResponsive } from "../../components/ui/media";

export default function ReviewReportScreen() {
  // media query

  const { image, description, location, severity, category } =
    useLocalSearchParams();

  const { isSmall } = useResponsive();
  const router = useRouter();
  return (
    <>
      <View style={styles.container}>
        {/* review title */}
        <View style={styles.reviewTitleContainer}>
          <Text style={styles.reviewTitle}>Review Report</Text>
          <Text style={styles.doubleCheck}>Double check for accuracy</Text>
          <Text style={styles.reviewOption}>
            You can review your options here{" "}
          </Text>
        </View>
        {/*  reiview report content */}

        <View style={[styles.reviewContent, { width: isSmall ? 330 : 355 }]}>
          <View style={styles.col}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.reviewCategory}>category: </Text>
              <Text> {category}</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.reviewDescription}>Description :</Text>
              <Text> {description}</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 50,
              }}
            >
              <Text style={styles.reviewText}> Severity level :</Text>
              <Text> {severity}</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.reviewText}> Location :</Text>
              <Text> {location}</Text>
            </View>
          </View>

          {/* image */}
          <View style={styles.col}>
            <Text style={styles.reviewTextImage}> Image (s)</Text>
            {image && (
              <Image
                source={{ uri: image }}
                style={styles.image}
                contentFit="cover"
              />
            )}
          </View>
        </View>

        {/* review button */}
        <TouchableOpacity
          style={styles.reviewButton}
          onPress={() => router.push("success")}
        >
          <Text style={styles.reviewButtonText}>Submit report</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 20,
  },

  reviewTitleContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 40,
  },
  reviewTitle: {
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

  doubleCheck: {
    width: 355,
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 20,
    letterSpacing: 0.5,
    color: "#000000",
    marginTop: 5,
    marginLeft: 20,
  },
  reviewOption: {
    width: 355,
    marginLeft: 20,
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 20,
    letterSpacing: 0.5,
    color: "#000000",
    marginBottom: 5,
  },
  reviewContent: {
    height: 200,
    borderRadius: 9,
    justifyContent: "space-between",
    backgroundColor: "#D9D9D957",
    flexDirection: "row",
    padding: 20,
  },

  col: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },

  reviewText: {
    fontSize: 14,
    fontWeight: "bold",
    lineHeight: 20,
    letterSpacing: 0.5,
    color: "#000000",
    marginTop: 5,
    marginBottom: 5,
  },
  reviewTextImage: {
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: "flex-end",
    lineHeight: 20,
    letterSpacing: 0.5,
    color: "#000000",
  },
  reviewCategory: {
    fontSize: 14,
    fontWeight: "bold",
    lineHeight: 20,
    letterSpacing: 0.5,
    color: "#000000",
    marginTop: 5,
    marginBottom: 5,
  },
  reviewDescription: {
    fontSize: 14,

    fontWeight: "bold",
    lineHeight: 20,
    letterSpacing: 0.5,
    color: "#000000",
    marginTop: 5,
    marginBottom: 5,
  },

  imageContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
    marginTop: 20,
  },

  image: {
    width: 101,
    height: 76,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#000000",
    marginTop: 10,
    marginLeft: 50,
  },

  reviewButton: {
    marginTop: 100,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#00FB8A",
    borderRadius: 33,
    padding: 10,
    width: 206,
    height: 50,
    justifyContent: "center",
  },
  reviewButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 20,
    letterSpacing: 0.5,
    color: "#000000",
  },
});
