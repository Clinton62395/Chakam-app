import { useMode } from "@/components/theme/themeProvider";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

import {
  data,
  dataLocation,
  dataSeverity,
} from "@/components/services/repportData";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "@/components/theme/ModeHandler";
import { useResponsive } from "@/components/ui/media";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { Plus } from "lucide-react-native";
import { Dropdown } from "react-native-element-dropdown";
import { ScaledSheet } from "react-native-size-matters";

export function ReportToSubmit() {
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [severity, setSeverity] = useState("");

  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const { isSmall } = useResponsive();

  // Image picker pour la première image
  const imagePicker1 = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (result.canceled) {
      console.log("User cancelled image picker");
      return;
    }
    setImage1(result.assets[0]);
  };

  // Image picker pour la deuxième image
  const imagePicker2 = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (result.canceled) {
      console.log("User cancelled image picker");
      return;
    }
    setImage2(result.assets[0]);
  };

  const { themeMode, theme } = useMode();
  const router = useRouter();

  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.content}>
            <Text style={styles.title}>Submit report</Text>
            <Text style={styles.subtitle}>
              Help us understand the situation clearly
            </Text>
            <Text style={styles.subtitle}>
              Fill in the details below and submit your report
            </Text>
          </View>

          <View style={styles.dropdownContainer}>
            <Dropdown
              placeholder="Select category"
              data={data}
              placeholderStyle={{
                color: "#d9d9d9",
                fontSize: 14,
              }}
              labelField="label"
              valueField="value"
              value={value}
              onChange={(item) => setValue(item.value)}
              defaultValue={data[0]}
              selectedTextStyle={{
                color: themeMode === "dark" ? "#FFFFFF" : "#000000",
                backgroundColor:
                  themeMode === "dark" ? theme.card : theme.background,
                fontSize: 16,
                fontWeight: "bold",
                borderColor: themeMode === "dark" ? "#000000" : "#FFFFFF",
              }}
              style={[
                styles.dropdown,
                {
                  width: isSmall ? 300 : 361,
                  backgroundColor:
                    themeMode === "dark" ? theme.card : theme.background,
                  borderColor: themeMode === "dark" ? theme.border : theme.card,
                  color: themeMode === "dark" ? theme.text : theme.background,
                },
              ]}
              textStyle={[
                styles.dropdownText,
                { color: themeMode === "dark" ? theme.text : theme.background },
              ]}
              itemTextStyle={[
                styles.dropdownText,
                { color: themeMode === "dark" ? "#000000" : "#000000" },
              ]}
              iconColor={themeMode === "dark" ? theme.text : theme.background}
            />

            {/* texteract input */}
            <Text style={styles.labelText}>Describe the problem</Text>
            <TextInput
              multiline={true}
              textAlignVertical="top"
              numberOfLines={10}
              value={description}
              onChangeText={setDescription}
              style={[
                styles.textInput,
                {
                  width: isSmall ? 300 : 361,
                  borderColor: themeMode === "dark" ? theme.border : theme.card,
                  backgroundColor:
                    themeMode === "dark" ? theme.card : theme.background,
                },
              ]}
              placeholder="Brifly describe the problem"
              placeholderTextColor="#8A8A8A"
              autoCapitalize="sentences"
              scrollEnabled
              blurOnSubmit={false}
              keyboardType="default"
              returnKeyType="default"
              maxLength={1000}
            />
          </View>

          {/* upload image contents */}
          <View style={styles.uploadImageContainer}>
            {/* upload image button */}
            <TouchableOpacity
              style={[
                styles.uploadImage,
                {
                  width: isSmall ? 300 : 361,
                  backgroundColor:
                    themeMode === "dark" ? theme.card : theme.background,
                  borderColor: themeMode === "dark" ? theme.border : theme.card,
                },
              ]}
              onPress={imagePicker1}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                  backgroundColor: themeMode === "dark" ? theme.card : "",
                  borderColor: themeMode === "dark" ? theme.border : "",
                }}
              >
                <Text style={styles.uploadImageText}>Upload image</Text>
                <Text>
                  <Plus
                    size={20}
                    color={themeMode === "dark" ? theme.text : theme.backround}
                  />
                </Text>
              </View>
            </TouchableOpacity>

            {/* Image previews en row */}
            <View style={styles.imagePreviewContainer}>
              <TouchableOpacity
                style={[
                  styles.imagePreview,
                  {
                    backgroundColor: image1 ? "transparent" : "#808080",
                  },
                ]}
                onPress={imagePicker1}
              >
                {image1 ? (
                  <Image
                    source={{ uri: image1.uri }}
                    style={styles.previewImage}
                    contentFit="cover"
                  />
                ) : (
                  <Plus
                    size={24}
                    color={themeMode === "dark" ? theme.text : "#FFFFFF"}
                  />
                )}
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.imagePreview,
                  {
                    backgroundColor: image2 ? "transparent" : "#808080",
                  },
                ]}
                onPress={imagePicker2}
              >
                {image2 ? (
                  <Image
                    source={{ uri: image2.uri }}
                    style={styles.previewImage}
                    contentFit="cover"
                  />
                ) : (
                  <Plus
                    size={24}
                    color={themeMode === "dark" ? theme.text : "#FFFFFF"}
                  />
                )}
              </TouchableOpacity>
            </View>

            {/* location select */}
            <View>
              <Dropdown
                placeholder="Select location"
                placeholderStyle={{
                  color: "#d9d9d9",
                  fontSize: 14,
                }}
                data={dataLocation}
                labelField="label"
                valueField="value"
                value={location}
                onChange={(item) => setLocation(item.value)}
                selectedTextStyle={{
                  fontSize: 16,
                  fontWeight: "bold",
                  color: themeMode === "dark" ? theme.text : theme.background,
                  borderColor:
                    themeMode === "dark" ? theme.text : theme.background,
                }}
                style={[
                  styles.dropdown,
                  {
                    width: isSmall ? 300 : 361,
                    backgroundColor:
                      themeMode === "dark" ? theme.card : theme.background,
                    borderColor:
                      themeMode === "dark" ? theme.border : theme.card,
                    color: themeMode === "dark" ? theme.text : theme.background,
                  },
                ]}
                textStyle={[
                  styles.dropdownText,
                  {
                    color: themeMode === "dark" ? theme.text : theme.background,
                  },
                ]}
                itemTextStyle={[
                  styles.dropdownText,
                  {
                    color: themeMode === "dark" ? theme.background : theme.text,
                  },
                ]}
                iconColor={themeMode === "dark" ? theme.text : theme.background}
              />
            </View>

            {/* select severity level */}
            <View style={styles.severitySelectContainer}>
              <Dropdown
                placeholder="Select severity level"
                placeholderStyle={{
                  color: "#d9d9d9",
                  fontSize: 14,
                }}
                data={dataSeverity}
                labelField="label"
                valueField="value"
                value={severity}
                onChange={(item) => setSeverity(item.value)}
                selectedTextStyle={{
                  fontSize: 16,
                  fontWeight: "bold",
                  backgroundColor:
                    themeMode === "dark" ? theme.card : theme.background,
                  color: themeMode === "dark" ? theme.text : theme.background,
                }}
                style={[
                  styles.dropdown,
                  {
                    width: isSmall ? 300 : 361,
                    backgroundColor:
                      themeMode === "dark" ? theme.card : theme.background,
                    borderColor:
                      themeMode === "dark" ? theme.border : theme.card,
                  },
                ]}
                textStyle={[
                  styles.dropdownText,
                  {
                    color: themeMode === "dark" ? theme.text : theme.background,
                  },
                ]}
                itemTextStyle={[
                  styles.dropdownText,
                  {
                    color: themeMode === "dark" ? theme.background : theme.text,
                  },
                ]}
                iconColor={themeMode === "dark" ? theme.text : theme.background}
              />
            </View>
          </View>

          {/* submit button */}
          <TouchableOpacity
            style={[
              styles.submitButton,
              {
                backgroundColor:
                  themeMode === "dark" ? theme.card : theme.primary,
                borderColor:
                  themeMode === "dark" ? theme.border : theme.primary,
              },
            ]}
            onPress={() =>
              router.push({
                pathname: "reviewRepport",
                params: {
                  image1: image1?.uri,
                  image2: image2?.uri,
                  description: description || "",
                  location: location || "",
                  severity: severity || "",
                  category: value || "",
                },
              })
            }
          >
            <Text style={styles.submitButtonText}>Submit report</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    padding: "20@ms",
  },

  content: {
    justifyContent: "center",
    marginTop: "20@ms",
  },

  title: {
    fontSize: "32@ms0.3",
    height: "51@vs",
    padding: "10@ms",
    fontWeight: "600",
    lineHeight: "20@vs",
    letterSpacing: 0.6,
  },

  subtitle: {
    fontSize: "14@ms0.3",
    fontWeight: "400",
    lineHeight: "20@vs",
    letterSpacing: 0.5,
    marginTop: "5@vs",
    marginBottom: "5@vs",
  },

  dropdownContainer: {
    marginTop: "20@vs",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  dropdown: {
    height: "51@vs",
    borderRadius: "7@ms",
    borderWidth: 0.5,
    padding: "10@ms",
  },

  uploadImage: {
    borderRadius: "7@ms",
    padding: "10@ms",
    width: "161@s",
    height: "36@vs",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "15@vs",
  },

  uploadImageText: {
    fontSize: "12@ms0.3",
    fontWeight: "400",
    lineHeight: "20@vs",
    letterSpacing: 0.5,
  },

  dropdownText: {
    fontSize: "14@ms0.3",
    fontWeight: "500",
    lineHeight: "20@vs",
    letterSpacing: 0.5,
  },

  textInputContainer: {
    marginTop: "50@vs",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: "20@ms",
  },

  labelText: {
    fontSize: "16@ms0.3",
    fontWeight: "bold",
    lineHeight: "20@vs",
    letterSpacing: 0.5,
    alignSelf: "flex-start",
    marginTop: "20@vs",
    marginBottom: "5@vs",
  },

  textInput: {
    height: "144@vs",
    borderRadius: "20@ms",
    marginRight: "13@s",
    marginLeft: "13@s",
    borderWidth: 0.5,
    padding: "10@ms",
  },

  uploadImageContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "15@vs",
  },

  imagePreviewContainer: {
    flexDirection: "row",
    gap: "15@s",
    marginTop: "10@vs",
  },

  imagePreview: {
    width: "109@s",
    height: "107@vs",
    borderRadius: "33@ms",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },

  previewImage: {
    width: "100%",
    height: "100%",
  },

  submitButton: {
    borderRadius: "33@ms",
    width: "206@s",
    height: "50@vs",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "50@vs",
    overflow: "hidden",
    alignSelf: "center",
  },

  submitButtonText: {
    fontSize: "16@ms0.3",
    fontWeight: "bold",
    lineHeight: "20@vs",
    letterSpacing: 0.5,
  },

  image: {
    width: "100%",
    height: "100%",
  },
});
