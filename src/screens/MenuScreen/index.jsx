import { View, Image, Text } from "react-native";
import IconButton from "../../components/IconButton";
import { styles } from "./styles";

const ShopImage = require("../../assets/img/shop.png");
const PatternsIcon = require("../../assets/img/patterns.png");
const WipIcon = require("../../assets/img/WIP.png");
const ShoppingIcon = require("../../assets/img/shopping.png");
const SettingsIcon = require("../../assets/img/settings.png");

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
      <Text style={styles.title}>KnitHut</Text>
      <Image source={ShopImage} style={styles.image} />
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
