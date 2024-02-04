import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
// Theme
import { useColorScheme } from "react-native";
import { KHDarkTheme, KHLightTheme } from "@app/_constants/theme";

export const AppContext = React.createContext(null);

const AppContextProvider = ({ children }) => {
  const scheme = useColorScheme();
  const [theme, setTheme] = useState(
    scheme === "dark" ? KHDarkTheme : KHLightTheme
  );

  // Load saved scheme from storage
  useEffect(() => {
    const getScheme = async () => {
      try {
        const savedScheme = await AsyncStorage.getItem("scheme");
        if (savedScheme) {
          setTheme(savedScheme === "dark" ? KHDarkTheme : KHLightTheme);
        }
      } catch (error) {
        console.log("🚩 Error loading scheme");
      }
    };
    getScheme();
  }, []);

  return (
    <AppContext.Provider value={{ theme, setTheme }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
