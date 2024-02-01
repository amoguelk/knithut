import { StyleSheet, View, Image, Text } from "react-native";
import IconButton from "./src/components/IconButton";

const ShopImage = require("./src/assets/img/shop.png");
const PatternsIcon = require("./src/assets/img/patterns.png");
const WipIcon = require("./src/assets/img/WIP.png");
const ShoppingIcon = require("./src/assets/img/shopping.png");
const SettingsIcon = require("./src/assets/img/settings.png");

const App = () => {
  const icons = [
    { id: "pattern_icon", src: PatternsIcon, label: "Patterns" },
    { id: "wip_icon", src: WipIcon, label: "WIPs" },
    { id: "shopping_icon", src: ShoppingIcon, label: "Shopping List" },
    { id: "settings_icon", src: SettingsIcon, label: "Settings" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>KnitHut</Text>
      <Image source={ShopImage} style={styles.image} />
      {icons.map((icon) => (
        <IconButton key={icon.id} icon={icon.src} label={icon.label} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#005E71",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    color: "#fff",
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 18,
  },
});

export default App;
