import { View, Pressable, Text } from "react-native";
import { useTheme } from "@react-navigation/native";
import { getStyles } from "./styles";

const Button = ({ label, onPress = () => {} }) => {
  const { colors } = useTheme();
  const styles = getStyles(colors);
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={styles.button}
        onPress={onPress}
        android_ripple={{ color: colors.border }}
      >
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
};

export default Button;
