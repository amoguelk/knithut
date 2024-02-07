import { View, Pressable, Text } from "react-native";
import { useTheme } from "@react-navigation/native";
import { getStyles } from "./styles";

const Button = ({
  label,
  onPress = () => {},
  containerStyle = {},
  disabled = false,
}) => {
  const { colors } = useTheme();
  const styles = getStyles(colors);
  return (
    <View style={containerStyle}>
      <Pressable
        style={[styles.button, disabled ? styles.disabled : styles.enabled]}
        onPress={onPress}
        android_ripple={{ color: colors.border }}
        disabled={disabled}
      >
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
};

export default Button;
