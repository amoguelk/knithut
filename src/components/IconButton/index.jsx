import { View, Pressable, Text, Image } from "react-native";
import { getStyles } from "./styles";
import { useTheme } from "@react-navigation/native";

const IconButton = ({ icon, label, onPress = () => {} }) => {
  const { colors } = useTheme();
  const styles = getStyles(colors);

  return (
    <View>
      <Pressable style={styles.button} onPress={onPress}>
        <Image source={icon} style={styles.icon} />
        <Text style={styles.label}>{label}</Text>
      </Pressable>
    </View>
  );
};

export default IconButton;
