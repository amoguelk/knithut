import { View, Image } from "react-native";
import IconButton from "@app/components/buttons/IconButton";
import { getStyles } from "./styles";
import { useTheme } from "@react-navigation/native";
import Button from "@app/components/buttons/Button";
import NavIcon from "./NavIcon";

const HutLogo = require("@app/assets/img/hut.png");
const PatternsIcon = require("@app/assets/img/patterns.png");
const WipIcon = require("@app/assets/img/WIP.png");
const ShoppingIcon = require("@app/assets/img/shopping.png");
const SettingsIcon = require("@app/assets/img/settings.png");

const MenuScreen = ({ navigation }) => {
  const { colors } = useTheme();
  const styles = getStyles(colors);
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
      <Image source={HutLogo} style={styles.logo} />
      <View style={styles.navContainer}>
        {options.map((option, i) => (
          <NavIcon
            key={option.id}
            icon={option.icon}
            label={option.label}
            onPress={() => navigation.navigate(option.nav_name)}
            style={styles.icon(i)}
          />
        ))}
      </View>
    </View>
  );
};

export default MenuScreen;
