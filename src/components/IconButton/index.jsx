import { View, Pressable, Text, Image } from "react-native";
import { styles } from "./styles";

const IconButton = ({ icon, label, onPress = () => {} }) => {
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
