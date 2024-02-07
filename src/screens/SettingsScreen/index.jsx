import { View } from "react-native";
import Button from "@app/components/buttons/Button";
import ThemeButton from "./ThemeButton";

const SettingsScreen = () => {
  return (
    <View>
      <ThemeButton />
      <Button
        label='My Ko-Fi'
        onPress={() => alert("Please give me money please")}
      />
    </View>
  );
};

export default SettingsScreen;
