import React from 'react';
import { View, Pressable, Text, Image } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { getStyles } from './styles';

const NavIcon = ({ icon, label, style = {}, onPress = () => {} }) => {
  const { colors } = useTheme();
  const styles = getStyles(colors);

  return (
    <View style={style}>
      <Pressable style={styles.button} onPress={onPress}>
        <Image source={icon} style={styles.icon} />
        <Text style={styles.label}>{label.replace(' ', '\n')}</Text>
      </Pressable>
    </View>
  );
};

export default NavIcon;
