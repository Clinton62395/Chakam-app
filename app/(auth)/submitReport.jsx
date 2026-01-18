import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { Plus } from "lucide-react-native";
import { Dropdown } from "react-native-element-dropdown";
import { useResponsive } from "../../components/ui/media";
export default function SubmitReportScreen() {
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [severity, setSeverity] = useState("");

  const [image, setImage] = useState(null);
  const { isSmall } = useResponsive();
  // categroy of report
  const data = [
    { label: "Animal", value: "animal" },
    { label: "Human", value: "human" },
    { label: "Plant", value: "plant" },
    { label: "Other", value: "other" },
  ];
  //   location data Nigeria state
  const dataLocation = [
    { label: "Abia", value: "abia" },
    { label: "Adamawa", value: "adamawa" },
    { label: "Akwa Ibom", value: "akwa-ibom" },
    { label: "Anambra", value: "anambra" },
    { label: "Bauchi", value: "bauchi" },
    { label: "Bayelsa", value: "bayelsa" },
    { label: "Benue", value: "benue" },
    { label: "Borno", value: "borno" },
    { label: "Cross River", value: "cross-river" },
  ];
  //   severity data
  const dataSeverity = [
    { label: "Severe", value: "height" },
    { label: "Moderate", value: "midium" },
    { label: "Minor", value: "low" },
  ];

  //   imaage picker

  const imagePicker = async () => {
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
    setImage(result.assets[0]);
  };

  const router = useRouter();
  return (
    <>
      <View style={styles.container}>
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
            labelField="label"
            valueField="value"
            value={value}
            onChange={(item) => setValue(item.value)}
            defaultValue={data[0]}
            selectedTextStyle={{
              color: "#000009",
              fontSize: 16,
              fontWeight: "bold",
            }}
            style={[styles.dropdown, { width: isSmall ? 300 : 361 }]}
            textStyle={styles.dropdownText}
            itemTextStyle={styles.dropdownText}
          />

          {/* texteract input */}
          <Text style={styles.labelText}>Describe the problem</Text>
          <TextInput
            multiline={true}
            textAlignVertical="top"
            numberOfLines={10}
            value={description}
            onChangeText={setDescription}
            style={[styles.textInput, { width: isSmall ? 300 : 361 }]}
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

        {/* upoad image  contents*/}

        <View style={styles.uploadImageContainer}>
          {/* uplod image */}

          <TouchableOpacity
            style={[styles.uploadImage, { width: isSmall ? 300 : 361 }]}
            onPress={imagePicker}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Text style={styles.uploadImageText}>Upload image</Text>
              <Plus size={20} color="#000000" />
            </View>
          </TouchableOpacity>

          {/* location select */}
          <View style={styles.locationSelectContainer}>
            <Dropdown
              placeholder="Select location"
              data={dataLocation}
              labelField="label"
              valueField="value"
              value={location}
              onChange={(item) => setLocation(item.value)}
              selectedTextStyle={{
                color: "#000009",
                fontSize: 16,
                fontWeight: "bold",
              }}
              style={[styles.dropdown, { width: isSmall ? 300 : 361 }]}
              textStyle={styles.dropdownText}
              itemTextStyle={styles.dropdownText}
            />
          </View>

          {/* select severity  level */}
          <View style={styles.severitySelectContainer}>
            <Dropdown
              placeholder="Select severity level"
              data={dataSeverity}
              labelField="label"
              valueField="value"
              value={severity}
              onChange={(item) => setSeverity(item.value)}
              selectedTextStyle={{
                color: "#000009",
                fontSize: 16,
                fontWeight: "bold",
              }}
              style={[styles.dropdown, { width: isSmall ? 300 : 361 }]}
              textStyle={styles.dropdownText}
              itemTextStyle={styles.dropdownText}
            />
          </View>
        </View>
        {/* submit button */}
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() =>
            router.push({
              pathname: "reviewRepport",
              params: {
                image: image?.uri,
                description: description || "",
                location: location || "",
                severity: severity || "",
                category: value || "",
              },
            })
          }
        >
          {image ? (
            <Image
              source={{ uri: image.uri }}
              style={styles.image}
              contentFit="cover"
            />
          ) : (
            <Text style={styles.submitButtonText}>Submit report</Text>
          )}
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    padding: 20,
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  title: {
    fontSize: 32,
    height: 51,
    width: 355,
    padding: 10,
    fontWeight: "600",
    lineHeight: 20,
    letterSpacing: 0.6,
    color: "#000000",
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "400",
    width: 343,
    lineHeight: 20,
    letterSpacing: 0.5,
    color: "#000000",
    marginTop: 5,
    marginBottom: 5,
  },
  dropdownContainer: {
    marginTop: 20,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  dropdown: {
    height: 51,
    backgroundColor: "#D9D9D957",
    borderRadius: 7,
    borderWidth: 0.5,
    borderColor: "#D9D9D957",
    padding: 10,
  },
  uploadImage: {
    backgroundColor: "#D9D9D9",
    borderRadius: 7,
    padding: 10,
    width: 161,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },
  uploadImageText: {
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 20,
    letterSpacing: 0.5,
    color: "#000000",
  },
  dropdownText: {
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 20,
    letterSpacing: 0.5,
    color: "#000000",
  },
  textInputContainer: {
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: 20,
  },
  labelText: {
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 20,
    letterSpacing: 0.5,
    color: "#ffffff",
    alignSelf: "flex-start",
    marginTop: 20,
    marginBottom: 5,
  },
  textInput: {
    height: 144,
    backgroundColor: "#D9D9D957",
    borderRadius: 20,
    marginright: 13,
    marginleft: 13,
    borderWidth: 0.5,
    borderColor: "#D9D9D957",
    padding: 10,
  },

  uploadImageContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
  },

  submitButton: {
    backgroundColor: "#00FB8A",
    borderRadius: 33,
    width: 206,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    overflow: "hidden",
  },
  submitButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 20,
    letterSpacing: 0.5,
    color: "#000000",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
