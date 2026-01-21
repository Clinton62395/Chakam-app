import { Text, TextInput, View } from "@/components/theme/ModeHandler";
import { useMode } from "@/components/theme/themeProvider";
import { useResponsive } from "@/components/ui/media";
import { useState } from "react";
import { Dropdown } from "react-native-element-dropdown";
import { ScaledSheet } from "react-native-size-matters";

import {
  data,
  dataLocation,
  dataSeverity,
} from "@/components/services/repportData";

export const FormInput = () => {
  const { themeMode, theme } = useMode();

  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [severity, setSeverity] = useState("");
  const { isSmall } = useResponsive();

  const categoryTextInput = (
    <View style={styles.dropdownContainer}>
      <Dropdown
        placeholder="Select category"
        data={data}
        placeholderTextColor="#ffffff"
        labelField="label"
        valueField="value"
        value={value}
        onChange={(item) => setValue(item.value)}
        defaultValue={data[0]}
        selectedTextStyle={{
          color: themeMode === "dark" ? "#FFFFFF" : "#000000",
          backgroundColor: themeMode === "dark" ? theme.card : theme.background,
          fontSize: 16,
          fontWeight: "bold",
          borderColor: themeMode === "dark" ? theme.border : theme.card,
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
          { color: themeMode === "dark" ? theme.text : theme.backround },
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
  );

  const locationTextInput = (
    <>
      <View>
        <Dropdown
          placeholder="Select location"
          placeholderTextColor="#d9d9d9"
          data={dataLocation}
          labelField="label"
          valueField="value"
          value={location}
          onChange={(item) => setLocation(item.value)}
          selectedTextStyle={{
            fontSize: 16,
            fontWeight: "bold",
            color: themeMode === "dark" ? theme.text : theme.background,
            borderColor: themeMode === "dark" ? theme.border : theme.card,
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
            { color: themeMode === "dark" ? theme.text : theme.background },
          ]}
          iconColor={themeMode === "dark" ? theme.text : theme.background}
        />
      </View>
    </>
  );

  const severityTextInput = (
    <>
      <View style={styles.severitySelectContainer}>
        <Dropdown
          placeholder="Select severity level"
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
            color: themeMode === "dark" ? theme.text : theme.backround,
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
            { color: themeMode === "dark" ? "#FFFFFF" : "#000000" },
          ]}
          itemTextStyle={[
            styles.dropdownText,
            { color: themeMode === "dark" ? theme.text : theme.backround },
          ]}
          iconColor={themeMode === "dark" ? theme.text : theme.backround}
        />
      </View>
    </>
  );

  return (
    <>
      {categoryTextInput}
      {locationTextInput}
      {severityTextInput}
    </>
  );
};

const styles = ScaledSheet.create({
  dropdownContainer: {
    marginTop: 20,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
  },

  dropdown: {
    height: 51,
    borderRadius: 7,
    borderWidth: 0.5,
    padding: 10,
  },

  dropdownText: {
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 20,
    letterSpacing: 0.5,
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

  severitySelectContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
  },
});
