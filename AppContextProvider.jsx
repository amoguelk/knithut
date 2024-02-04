import React, { useState } from "react";
// Theme
import { useColorScheme } from "react-native";
import { KHDarkTheme, KHLightTheme } from "@app/_constants/theme";

export const AppContext = React.createContext(null);

const AppContextProvider = ({ children }) => {
  const scheme = useColorScheme();
  const [theme, setTheme] = useState(
    scheme === "dark" ? KHDarkTheme : KHLightTheme
  );

  return (
    <AppContext.Provider value={{ theme, setTheme }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
