import { Pressable } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { styles } from "./styles";

const IconButton = ({
  icon,
  size,
  color,
  customStyle = {},
  rippleColor = null,
  onPress = () => {},
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={{ ...customStyle, ...styles.button }}
      android_ripple={{ color: rippleColor, borderless: true }}
    >
      <FontAwesomeIcon icon={icon} size={size} color={color} />
    </Pressable>
  );
};

export default IconButton;
