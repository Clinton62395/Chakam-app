import { createContext, useContext, useState } from "react";
import { useColorScheme } from "react-native";
import { Colors } from "./theme";

const ThemeContext = createContext(undefined);

export default function ReactThemeProvider({ children }) {
  const systemTheme = useColorScheme();
  const [themeMode, setThemeMode] = useState("system");

  const currentTheme =
    themeMode === "system" ? Colors[systemTheme ?? "light"] : Colors[themeMode];

  const value = {
    theme: currentTheme,
    themeMode,
    systemTheme,
    setThemeMode,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used inside ReactThemeProvider");
  }
  return context;
};
