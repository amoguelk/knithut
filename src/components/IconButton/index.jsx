import { StyleSheet, View, Pressable, Text, Image } from "react-native";
import { styles } from "./styles";

const IconButton = ({ icon, label }) => {
  return (
    <View>
      <Pressable
        style={styles.button}
        onPress={() => alert("You pressed a button (" + label + ")")}
      >
        <Image source={icon} style={styles.icon} />
        <Text style={styles.label}>{label}</Text>
      </Pressable>
    </View>
  );
};

export default IconButton;
