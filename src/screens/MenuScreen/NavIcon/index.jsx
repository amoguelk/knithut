import React from 'react';
// Components
import { View, Pressable, Text, Image } from 'react-native';
// Documentation
import PropTypes from 'prop-types';
// Styling
import { useTheme } from '@react-navigation/native';
import getStyles from './styles';

/**
 * An icon used to navigate from the menu to one of the screens
 */
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

NavIcon.propTypes = {
  /**
   * The image that serves as the navigation icon. Required.
   */
  icon: PropTypes.number.isRequired,
  /**
   * The text of the icon. Required.
   */
  label: PropTypes.string.isRequired,
  /**
   * Additional styles applied to the `View` that contains the icon. Optional.
   */
  style: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  ),
  /**
   * Called when a single tap is detected. Optional.
   */
  onPress: PropTypes.func,
};

NavIcon.defaultProps = {
  style: {},
  onPress: () => {},
};

export default NavIcon;
