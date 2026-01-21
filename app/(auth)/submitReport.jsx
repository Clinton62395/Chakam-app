import { useMode } from "@/components/theme/themeProvider";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { StyleSheet } from "react-native";

import {
  data,
  dataLocation,
  dataSeverity,
} from "@/components/services/repportData";
import {
  Scroolview,
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
export default function SubmitReportScreen() {
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [severity, setSeverity] = useState("");

  const [image, setImage] = useState(null);
  const { isSmall } = useResponsive();
  // categroy of report

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
  const { themeMode, theme } = useMode();
  const router = useRouter();
  return (
    <>
      <Scroolview style={styles.container} showsVerticalScrollIndicator={false}>
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

        {/* upoad image  contents*/}

        <View style={styles.uploadImageContainer}>
          {/* uplod image */}

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
            onPress={imagePicker}
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
                {
                  color: themeMode === "dark" ? theme.background : theme.text,
                },
              ]}
              iconColor={themeMode === "dark" ? theme.text : theme.background}
            />
          </View>

          {/* select severity  level */}
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
                  borderColor: themeMode === "dark" ? theme.border : theme.card,
                },
              ]}
              textStyle={[
                styles.dropdownText,
                { color: themeMode === "dark" ? theme.text : theme.background },
              ]}
              itemTextStyle={[
                styles.dropdownText,
                { color: themeMode === "dark" ? theme.background : theme.text },
              ]}
              iconColor={themeMode === "dark" ? theme.text : theme.background}
            />
          </View>
        </View>
        {/* submit button  backround color gray*/}
        <TouchableOpacity
          style={[
            styles.submitButton,
            {
              backgroundColor:
                themeMode === "dark" ? theme.card : theme.primary,
              borderColor: themeMode === "dark" ? theme.border : theme.primary,
            },
          ]}
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
      </Scroolview>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "400",
    width: 343,
    lineHeight: 20,
    letterSpacing: 0.5,
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
    borderRadius: 7,
    borderWidth: 0.5,
    padding: 10,
  },
  uploadImage: {
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
  },
  dropdownText: {
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 20,
    letterSpacing: 0.5,
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
    alignSelf: "flex-start",
    marginTop: 20,
    marginBottom: 5,
  },
  textInput: {
    height: 144,
    borderRadius: 20,
    marginright: 13,
    marginleft: 13,
    borderWidth: 0.5,
    padding: 10,
  },

  uploadImageContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
  },

  submitButton: {
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
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
