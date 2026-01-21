import {
  Card,
  Text,
  TouchableOpacity,
  View,
} from "@/components/theme/ModeHandler";
import { useMode } from "@/components/theme/themeProvider";
import { useResponsive } from "@/components/ui/media";
import { Image } from "expo-image";
import { useLocalSearchParams, useRouter } from "expo-router";
import { ScaledSheet } from "react-native-size-matters";

export default function ReviewReportScreen() {
  // media query

  const { image, description, location, severity, category } =
    useLocalSearchParams();

  const { isSmall } = useResponsive();
  const { themeMode, theme } = useMode();
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

        <Card style={[styles.reviewContent, { width: isSmall ? 330 : 355 }]}>
          <Card style={styles.col}>
            <Card style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.reviewCategory}>category: </Text>
              <Text> {category}</Text>
            </Card>
            <Card style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.reviewDescription}>Description :</Text>
              <Text> {description}</Text>
            </Card>
            <Card
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 50,
              }}
            >
              <Text style={styles.reviewText}> Severity level :</Text>
              <Text> {severity}</Text>
            </Card>
            <Card style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.reviewText}> Location :</Text>
              <Text> {location}</Text>
            </Card>
          </Card>

          {/* image */}
          <Card style={styles.col}>
            <Text style={styles.reviewTextImage}> Image (s)</Text>
            {image && (
              <Image
                source={{ uri: image }}
                style={styles.image}
                contentFit="cover"
              />
            )}
          </Card>
        </Card>

        {/* review button */}
        <TouchableOpacity
          style={[
            styles.reviewButton,
            { backgroundColor: themeMode === "dark" ? theme.background : theme.primary },
          ]}
          onPress={() => router.push("success")}
        >
          <Text style={styles.reviewButtonText}>Submit report</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: "20@ms",
  },

  reviewTitleContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "40@ms",
    marginBottom: "40@ms",
  },
  reviewTitle: {
    fontSize: "32@ms",
    width: "355@ms",
    fontWeight: "600",
    lineHeight: "20@ms",
    letterSpacing: 0.6,
    marginTop: "20@ms",
    padding: "10@ms",
    marginLeft: "20@ms",
  },

  doubleCheck: {
    width: "355@ms",
    fontSize: "14@ms",
    fontWeight: "400",
    lineHeight: "20@ms",
    letterSpacing: 0.5,
    marginTop: "5@ms",
    marginLeft: "20@ms",
  },
  reviewOption: {
    width: "355@ms",
    marginLeft: "20@ms",
    fontSize: "14@ms",
    fontWeight: "400",
    lineHeight: "20@ms",
    letterSpacing: 0.5,
    marginBottom: "5@ms",
  },
  reviewContent: {
    height: "200@ms",
    borderRadius: "9@ms",
    justifyContent: "space-between",
    flexDirection: "row",
    padding: "20@ms",
  },

  col: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },

  reviewText: {
    fontSize: 14,
    fontWeight: "bold",
    lineHeight: "20@ms",
    letterSpacing: 0.5,
    marginTop: "5@ms",
    marginBottom: "5@ms",
  },
  reviewTextImage: {
    fontSize: "16@ms",
    fontWeight: "bold",
    alignSelf: "flex-end",
    lineHeight: "20@ms",
    letterSpacing: 0.5,
  },
  reviewCategory: {
    fontSize: "14@ms",
    fontWeight: "bold",
    lineHeight: "20@ms",
    letterSpacing: 0.5,
    marginTop: "5@ms",
    marginBottom: "5@ms",
  },
  reviewDescription: {
    fontSize: "14@ms",

    fontWeight: "bold",
    lineHeight: "20@ms",
    letterSpacing: 0.5,
    marginTop: "5@ms",
    marginBottom: "5@ms",
  },

  imageContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: "15@ms",
    marginTop: "20@ms",
  },

  image: {
    width: "101@ms",
    height: "76@ms",
    borderRadius: "20@ms",
    borderWidth: "1@ms",

    marginTop: "10@ms",
    marginLeft: "50@ms",
  },

  reviewButton: {
    marginTop: "100@ms",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: "33@ms",
    padding: "10@ms",
    width: "206@ms",
    height: "50@ms",
    justifyContent: "center",
  },
  reviewButtonText: {
    fontSize: "16@ms",
    fontWeight: "bold",
    lineHeight: "20@ms",
    letterSpacing: 0.5,
  },
});
