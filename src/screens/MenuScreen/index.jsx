import { View, Image, Text } from "react-native";
import IconButton from "@app/components/IconButton";
import { styles } from "./styles";

const HutLogo = require("@app/assets/img/hut.png");
const PatternsIcon = require("@app/assets/img/patterns.png");
const WipIcon = require("@app/assets/img/WIP.png");
const ShoppingIcon = require("@app/assets/img/shopping.png");
const SettingsIcon = require("@app/assets/img/settings.png");

const MenuScreen = ({ navigation }) => {
  const options = [
    {
      id: "pattern_icon",
      icon: PatternsIcon,
      label: "Patterns",
      nav_name: "patterns",
    },
    { id: "wip_icon", icon: WipIcon, label: "WIPs", nav_name: "wips" },
    {
      id: "shopping_icon",
      icon: ShoppingIcon,
      label: "Shopping List",
      nav_name: "list",
    },
    {
      id: "settings_icon",
      icon: SettingsIcon,
      label: "Settings",
      nav_name: "settings",
    },
  ];

  return (
    <View style={styles.container}>
      <Image source={HutLogo} style={styles.image} />
      {options.map((option) => (
        <IconButton
          key={option.id}
          icon={option.icon}
          label={option.label}
          onPress={() => navigation.navigate(option.nav_name)}
        />
      ))}
    </View>
  );
};

export default MenuScreen;
