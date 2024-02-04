import { KHDarkTheme, KHLightTheme } from "@app/_constants/theme";
import Button from "@app/components/Button";
import { AppContext } from "AppContextProvider";
import { useContext } from "react";
import { View } from "react-native";

const SettingsScreen = () => {
  const { theme, setTheme } = useContext(AppContext);

  const toggleTheme = () => {
    if (theme.dark) setTheme(KHLightTheme);
    else setTheme(KHDarkTheme);
  };

  return (
    <View>
      <Button
        onPress={toggleTheme}
        label={`Current theme: ${theme.dark ? "Dark" : "Light"}`}
      />
    </View>
  );
};

export default SettingsScreen;
