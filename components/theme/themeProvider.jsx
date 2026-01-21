import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useEffect, useState } from "react";
import { useColorScheme } from "react-native";
import { Colors } from "./Colors";

const ThemeContext = createContext(undefined);

export default function ReactThemeProvider({ children }) {
  const systemTheme = useColorScheme();
  const [themeMode, setThemeModeState] = useState("system");
  const [isLoading, setIsLoading] = useState(true);

  // Charger le thème sauvegardé au démarrage
  useEffect(() => {
    loadTheme();
  }, []);

  const loadTheme = async () => {
    try {
      const savedTheme = await AsyncStorage.getItem("@theme_mode");
      if (savedTheme) {
        setThemeModeState(savedTheme);
      }
    } catch (error) {
      console.error("Error loading theme:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Fonction pour changer et sauvegarder le thème
  const setThemeMode = async (mode) => {
    try {
      await AsyncStorage.setItem("@theme_mode", mode);
      setThemeModeState(mode);
    } catch (error) {
      console.error("Error saving theme:", error);
    }
  };

  const currentTheme =
    themeMode === "system" ? Colors[systemTheme ?? "light"] : Colors[themeMode];

  const value = {
    theme: currentTheme,
    themeMode,
    systemTheme,
    setThemeMode,
    isLoading,
  };

  // Optionnel: afficher un écran de chargement pendant que le thème se charge
  if (isLoading) {
    return null; // ou un splash screen
  }

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export const useMode = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used inside ReactThemeProvider");
  }
  return context;
};
